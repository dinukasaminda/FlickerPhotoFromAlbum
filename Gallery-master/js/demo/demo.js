/*
 * blueimp Gallery Demo JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global blueimp, $ */
function logp(varp){
  window.console&&console.log(varp);
}
$(function () {
  'use strict'

  // Load demo images from flickr:
  $.ajax({
    // Flickr API is SSL only:
    // https://code.flickr.net/2014/04/30/flickr-api-going-ssl-only-on-june-27th-2014/
    url: 'http://localhost/test5/'
  }).done(function (result1) {
    
    var carouselLinks = [];
    var linksContainer = $('#links');
    var baseUrl;
    var jsonObj = $.parseJSON(result1);
    logp(jsonObj.length);
    //var result =JSON.parse(result1);
    // Add the demo images as links with thumbnails to the page:
   
    for(var i=0;i<jsonObj.length;i++){
       baseUrl = 'https://farm' + jsonObj[i].farm + '.static.flickr.com/' +
      jsonObj[i].server + '/' + jsonObj[i].id + '_' + jsonObj[i].secret
      $('<a/>')
        .append($('<img>').prop('src', baseUrl + '_s.jpg'))
        .prop('href', baseUrl + '_b.jpg')
        .prop('title', jsonObj[i].title)
        .attr('data-gallery', '')
        .appendTo(linksContainer)
    } 

   //$.each(jsonObj.photos, function (index, photo) {
     
     
     
    //})
    // Initialize the Gallery as image carousel:
    blueimp.Gallery(carouselLinks, {
      container: '#blueimp-image-carousel',
      carousel: true
    })
  })

  // Initialize the Gallery as video carousel:
  blueimp.Gallery([
    {
      title: 'Sintel',
      href: 'https://archive.org/download/Sintel/sintel-2048-surround_512kb.mp4',
      type: 'video/mp4',
      poster: 'https://i.imgur.com/MUSw4Zu.jpg'
    },
    {
      title: 'Big Buck Bunny',
      href: 'https://upload.wikimedia.org/wikipedia/commons/7/75/' +
        'Big_Buck_Bunny_Trailer_400p.ogg',
      type: 'video/ogg',
      poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/' +
        'Big.Buck.Bunny.-.Opening.Screen.png/' +
        '800px-Big.Buck.Bunny.-.Opening.Screen.png'
    },
    {
      title: 'Elephants Dream',
      href: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/8/83/' +
        'Elephants_Dream_%28high_quality%29.ogv/' +
        'Elephants_Dream_%28high_quality%29.ogv.360p.webm',
      type: 'video/webm',
      poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/' +
        'Elephants_Dream_s1_proog.jpg/800px-Elephants_Dream_s1_proog.jpg'
    },
    {
      title: 'LES TWINS - An Industry Ahead',
      type: 'text/html',
      youtube: 'zi4CIXpx7Bg'
    },
    {
      title: 'KN1GHT - Last Moon',
      type: 'text/html',
      vimeo: '73686146',
      poster: 'https://secure-a.vimeocdn.com/ts/448/835/448835699_960.jpg'
    }
  ], {
    container: '#blueimp-video-carousel',
    carousel: true
  })
})
