/* ---------------------------------------------------------------------- 
* Product Name: Color-Switcher-Plugin
* Product URI: http://shariarbd.com/demo/color-switcher-plugin/
* Author: Shariar
* Author URI: http://shariarbd.com/
* Description: Color Switcher plugin is a simple and easy to use plugin used to switch color of a site.
* Version: 1.0.0
* License: The MIT License (MIT)
* Tags: color switcher
* ---------------------------------------------------------------------- */

/* Styles Switcher
------------------------------------------------------------------------ */

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();


jQuery(document).ready(function($) {
	"use strict"
	

	if(window.location.href.indexOf("index") > -1) {
	$("ul.colors .color1" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/blue.css" );
		$("html").attr("class", "template-color-4C92DE");
		return false;
	});

	$("ul.colors .color2" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/cyan.css" );
		$("html").attr("class", "template-color-52E5AB");
		return false;
	});

	$("ul.colors .color3" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/emerald.css" );
		$("html").attr("class", "template-color-42C571");
		return false;
	});

	$("ul.colors .color4" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/green.css" );
		$("html").attr("class", "template-color-8BCF00");
		return false;
	});
	$("ul.colors .color5" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/material.css" );
		$("html").attr("class", "template-color-6675DD");
		return false;
	});
	$("ul.colors .color6" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/orange.css" );
		$("html").attr("class", "template-color-E37949");
		return false;
	});
	$("ul.colors .color7" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/pink.css" );
		$("html").attr("class", "template-color-FF7387");
		return false;
	});
	$("ul.colors .color8" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/red.css" );
		$("html").attr("class", "template-color-EF5952");
		return false;
	});
	$("ul.colors .color9" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/violet.css" );
		$("html").attr("class", "template-color-A26CFA");
		return false;
	});
	$("ul.colors .color10" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/yellow.css" );
		$("html").attr("class", "template-color-E5BE23");
		return false;
	});						
    }else{
	
	$("ul.colors .color1" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/blue.css" );
		$("html").attr("class", "template-color-4C92DE");
		return false;
	});

	$("ul.colors .color2" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/cyan.css" );
		$("html").attr("class", "template-color-52E5AB");
		return false;
	});

	$("ul.colors .color3" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/emerald.css" );
		$("html").attr("class", "template-color-42C571");
		return false;
	});

	$("ul.colors .color4" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/green.css" );
		$("html").attr("class", "template-color-8BCF00");
		return false;
	});
	$("ul.colors .color5" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/material.css" );
		$("html").attr("class", "template-color-6675DD");
		return false;
	});
	$("ul.colors .color6" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/orange.css" );
		$("html").attr("class", "template-color-E37949");
		return false;
	});
	$("ul.colors .color7" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/pink.css" );
		$("html").attr("class", "template-color-FF7387");
		return false;
	});
	$("ul.colors .color8" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/red.css" );
		$("html").attr("class", "template-color-EF5952");
		return false;
	});
	$("ul.colors .color9" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/violet.css" );
		$("html").attr("class", "template-color-A26CFA");
		return false;
	});
	$("ul.colors .color10" ).click(function(){
		$("#colors" ).attr("href", "assets/css/colors/yellow.css" );
		$("html").attr("class", "template-color-E5BE23");
		return false;
	});	

	}


	$("#color-style-switcher .bottom a.settings").click(function(e){
		e.preventDefault();
		var div = $("#color-style-switcher");
		if (div.css("left") === "-189px") {
			$("#color-style-switcher").animate({
				left: "0px"
			}); 
		} else {
			$("#color-style-switcher").animate({
				left: "-189px"
			});
		}
	})

	$("ul.colors li a").click(function(e){
		e.preventDefault();
		$(this).parent().parent().find("a").removeClass("active");
		$(this).addClass("active");
	})

});



//Inject Necessary Styles and HTML
if(window.location.href.indexOf("index") > -1) {
	jQuery('head').append('<link rel="stylesheet" id="colors" href="assets/css/colors/cyan.css" type="text/css" />');
	}else{
jQuery('head').append('<link rel="stylesheet" id="colors" href="assets/css/colors/cyan.css" type="text/css" />');
}
jQuery('head').append('<link rel="stylesheet" href="assets/css/color-switcher.css" type="text/css" />'); 

jQuery('body').append('' + 
	'<div id="color-style-switcher">' +
		'<div>' + 
			'<h3>Color Palette</h3>' +
			'<ul class="colors">' +
				'<li><a class="color1 active" href="#"></a></li>' +
				'<li><a class="color2" href="#"></a></li>' +
				'<li><a class="color3" href="#"></a></li>' +
				'<li><a class="color4" href="#"></a></li>' +
				'<li><a class="color5" href="#"></a></li>' +
				'<li><a class="color6" href="#"></a></li>' +
				'<li><a class="color7" href="#"></a></li>' +
				'<li><a class="color8" href="#"></a></li>' +
				'<li><a class="color9" href="#"></a></li>' +
				'<li><a class="color10" href="#"></a></li>' +
				'</ul>' +
		'</div>' +
		'<div class="bottom"> <a href="#" class="settings"></a> </div>' +
	'</div>' +
'');