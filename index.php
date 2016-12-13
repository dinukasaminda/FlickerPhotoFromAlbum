<?php
$api_key = "bf0992f4ea6723a421b25d6f5f2407fd";
$secret = "809167b2c04458b9";

function getResource($url){
 $chandle = curl_init();
 curl_setopt($chandle, CURLOPT_URL, $url);
 curl_setopt($chandle, CURLOPT_RETURNTRANSFER, 1);
 $result = curl_exec($chandle);
 curl_close($chandle);

 return $result;
}

function getResource2($url){
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true );
// This is what solved the issue (Accepting gzip encoding)
curl_setopt($ch, CURLOPT_ENCODING, "gzip,deflate");     
$response = curl_exec($ch);
curl_close($ch);

 return $response;
}

$result1= getResource2('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=702cacc84df753eb10a772986b9e4772&photoset_id=72157673832688214&format=json&auth_token=72157673835946384-ccd4e4c153a3b23c&api_sig=146cb7bb8bac59f3abf4cb76732c74b9');

$pos = strrpos($result1, "[");
$pos2 = strrpos($result1, "]");
$str222 = substr($result1,$pos+1,$pos2-$pos-1);

echo "[".$str222."]";
?>