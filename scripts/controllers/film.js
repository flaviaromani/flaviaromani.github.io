'use strict';

/**
 * @ngdoc function
 * @name frbApp.controller:FilmCtrl
 * @description
 * # FilmCtrl
 * Controller of the frbApp
 */
angular.module('frbApp')
  .controller('FilmCtrl', function ($scope) {

	$('.just-detention').on('hidden.bs.modal', function (e) {
		var video = $("#video-just-detention").attr("src");
		$("#video-just-detention").attr("src","");
		$("#video-just-detention").attr("src",video);
	})
	$('.canvas').on('hidden.bs.modal', function (e) {
		var video = $("#video-canvas").attr("src");
		$("#video-canvas").attr("src","");
		$("#video-canvas").attr("src",video);
	})
	$('.dreamtown').on('hidden.bs.modal', function (e) {
		var video = $("#video-dreamtown").attr("src");
		$("#video-dreamtown").attr("src","");
		$("#video-dreamtown").attr("src",video);
	})
	$('.reflections').on('hidden.bs.modal', function (e) {
		var video = $("#video-reflections").attr("src");
		$("#video-reflections").attr("src","");
		$("#video-reflections").attr("src",video);
	})	

  });
