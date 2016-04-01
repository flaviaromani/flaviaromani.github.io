'use strict';

/**
 * @ngdoc function
 * @name frbApp.controller:BrandingCtrl
 * @description
 * # BrandingCtrl
 * Controller of the frbApp
 */
angular.module('frbApp')
  .controller('BrandingCtrl', function ($scope) {
	$('.video_1').on('hidden.bs.modal', function (e) {
		var video = $("#video-1").attr("src");
		$("#video-1").attr("src","");
		$("#video-1").attr("src",video);
	})
	$('.video_2').on('hidden.bs.modal', function (e) {
		var video = $("#video-2").attr("src");
		$("#video-2").attr("src","");
		$("#video-2").attr("src",video);
	})
	$('.video_3').on('hidden.bs.modal', function (e) {
		var video = $("#video-3").attr("src");
		$("#video-3").attr("src","");
		$("#video-3").attr("src",video);
	})
	$('.video_4').on('hidden.bs.modal', function (e) {
		var video = $("#video-4").attr("src");
		$("#video-4").attr("src","");
		$("#video-4").attr("src",video);
	})
	$('.video_5').on('hidden.bs.modal', function (e) {
		var video = $("#video-5").attr("src");
		$("#video-5").attr("src","");
		$("#video-5").attr("src",video);
	})
	$('.video_6').on('hidden.bs.modal', function (e) {
		var video = $("#video-6").attr("src");
		$("#video-6").attr("src","");
		$("#video-6").attr("src",video);
	})
	$('.sv_video_1').on('hidden.bs.modal', function (e) {
		var video = $("#sv-video-1").attr("src");
		$("#sv-video-1").attr("src","");
		$("#sv-video-1").attr("src",video);
	})
	$('.sv_video_2').on('hidden.bs.modal', function (e) {
		var video = $("#sv-video-2").attr("src");
		$("#sv-video-2").attr("src","");
		$("#sv-video-2").attr("src",video);
	})
	$('.lc_video_1').on('hidden.bs.modal', function (e) {
		var video = $("#lc-video-1").attr("src");
		$("#lc-video-1").attr("src","");
		$("#lc-video-1").attr("src",video);
	})
	$('.lc_video_2').on('hidden.bs.modal', function (e) {
		var video = $("#lc-video-2").attr("src");
		$("#lc-video-2").attr("src","");
		$("#lc-video-2").attr("src",video);
	})
	$('.lc_video_3').on('hidden.bs.modal', function (e) {
		var video = $("#lc-video-3").attr("src");
		$("#lc-video-3").attr("src","");
		$("#lc-video-3").attr("src",video);
	})
  });
