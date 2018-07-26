"use strict";function preloader(){$("#load").fadeOut();$('#loading').delay().fadeOut('slow');}
function owlcarousel(){$(".owl-carousel").each(function(){var $this=$(this),$items=($this.data('items'))?$this.data('items'):1,$loop=($this.data('loop'))?$this.data('loop'):true,$navdots=($this.data('nav-dots'))?$this.data('nav-dots'):false,$navarrow=($this.data('nav-arrow'))?$this.data('nav-arrow'):false,$autoplay=($this.attr('data-autoplay'))?$this.data('autoplay'):true,$space=($this.attr('data-space'))?$this.data('space'):15;$(this).owlCarousel({loop:$loop,items:$items,responsive:{0:{items:$this.data('xx-items')?$this.data('xx-items'):1},600:{items:$this.data('xs-items')?$this.data('xs-items'):1},767:{items:$this.data('sm-items')?$this.data('sm-items'):2},992:{items:$this.data('md-items')?$this.data('md-items'):2},1190:{items:$this.data('lg-items')?$this.data('lg-items'):3},1200:{items:$items}},dots:$navdots,margin:$space,nav:$navarrow,navText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"],autoplay:$autoplay,autoplayHoverPause:true});});}
function widget(){$('.iq-widget-menu > ul > li > a').on('click',function(){var checkElement=$(this).next();$('.iq-widget-menu li').removeClass('active');$(this).closest('li').addClass('active');if((checkElement.is('ul'))&&(checkElement.is(':visible'))){$(this).closest('li').removeClass('active');checkElement.slideUp('normal');}
if((checkElement.is('ul'))&&(!checkElement.is(':visible'))){$('.iq-widget-menu ul ul:visible').slideUp('normal');checkElement.slideDown('normal');}
if($(this).closest('li').find('ul').children().length===0){return true;}else{return false;}});}
function portfolio(){$(window).on("load resize",function(e){var $container=$('.isotope'),colWidth=function(){var w=$container.width(),columnNum=1,columnWidth=0;return columnWidth;},isotope=function(){$container.isotope({resizable:true,itemSelector:'.grid-item',masonry:{columnWidth:colWidth(),gutterWidth:10}});};isotope();var $isotopefilters=$('.isotope-filters');$isotopefilters.on('click','button',function(){var filterValue=$(this).attr('data-filter');$container.isotope({filter:filterValue});});$isotopefilters.each(function(i,buttonGroup){var $buttonGroup=$(buttonGroup);$buttonGroup.on('click','button',function(){$buttonGroup.find('.active').removeClass('active');$(this).addClass('active');});});});}
function niceScroll(){if($(window).width()<767){$("#boxscroll").getNiceScroll().hide();}else{$("#boxscroll").niceScroll();}}
function progress(){$('.iq-progress-bar > span').each(function(){var $this=$(this);var width=$(this).data('percent');$this.css({'transition':'width 2s'});setTimeout(function(){$this.appear(function(){$this.css('width',width+'%');});},100);});}
function popupgallery(){$('.popup-gallery').magnificPopup({delegate:'a.popup-img',type:'image',tLoading:'Loading image #%curr%...',mainClass:'mfp-img-mobile',gallery:{enabled:true,navigateByImgClick:true,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(item){return item.el.attr('title')+'<small>by Marsel Van Oosten</small>';}}});$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({disableOn:700,type:'iframe',mainClass:'mfp-fade',removalDelay:160,preloader:false,fixedContentPos:false});}
function typer(){var win=$(window),foo=$('#typer');foo.typer(['<h1><span class="iq-font-purple">Web</span> Developer</h1>','<h1>Web <span class="iq-font-purple">Designer</span></h1>','<h1><span class="iq-font-purple">Frontend</span> Developer</h1>']);}
$(document).ready(function(){typer(),portfolio(),owlcarousel(),popupgallery(),niceScroll(),preloader(),widget(),progress();});$(window).on('load',function(){});