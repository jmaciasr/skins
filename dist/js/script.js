"use strict";$(".faq-open").click(function(){var e=$(this).parents(".faq"),t=e.find(".faq-answer"),a=e.find(".plus-minus-toggle");console.log(a),t.slideToggle(200),e.hasClass("expanded")?(e.removeClass("expanded"),a.toggleClass("collapsed")):(e.addClass("expanded"),a.toggleClass("collapsed"))});var menuIcon=document.getElementById("menuIcon"),navItems=document.getElementById("navItems"),navigation=document.getElementById("navigation"),menuOpen=1,showMenu=function(){1==menuOpen?(navItems.classList.toggle("nav-display"),menuIcon.classList.toggle("menu-icon-x"),menuOpen++):(navItems.classList.toggle("nav-display"),menuIcon.classList.toggle("menu-icon-x"),menuOpen=1)};menuIcon.addEventListener("click",showMenu),$(document).ready(function(){if(fetch("https://api.stattleship.com/basketball/nba/games?on=today",{headers:{Accept:"application/vnd.stattleship.com; version=1",Authorization:"Token token=ab97a593039f0e54e901e60b493307ad","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){for(var t=0;t<6;t+=1)document.getElementById("sidebarParent").innerHTML+='<div class="sidebar__item sidebar-next-maches"><div class="sidebar__item-content flex-row flex-row--between"><div style="display:  inherit;"><p class="next-maches__team">'+e.games[t].name+'</p><p class="next-maches__score">'+e.games[t].score+"</p></div></div></div>"}),fetch("https://newsapi.org/v2/top-headlines?sources=espn&apiKey=c3d8ad8085124333ba61a0a80593b94d",{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){return e.json()}).then(function(e){for(var t=0;t<3;t+=1){var a=e.articles[t].description;a=a.substring(0,50),document.getElementById("newsParent").innerHTML+='<a target="_blank" href="'+e.articles[t].url+'"><div class="sidebar__item"><div class="sidebar__item-content flex-row flex-row--between"><div class="popular-news__img"><img src="'+e.articles[t].urlToImage+'" alt="'+e.articles[t].title+'"></div><div class="popular-news__texts"><h5 class="popular-news__texts-title">'+e.articles[t].title+'</h5><p class="popular-news__texts-descr">'+a+" ...</p></div></div></div></a>"}}),$("#mainSlider").owlCarousel({loop:!1,margin:10,nav:!1,responsive:{0:{items:1},600:{items:1},1000:{items:1}}}),$("body").is(".main-page")){$(function(){$.ajax({url:"https://www.googleapis.com/youtube/v3/playlistItems?part=id%2C+snippet%2C+contentDetails&playlistId=PLn3nHXu50t5wMebpNXA7aFpKMzu8grU0a&key=AIzaSyC9ExM9-0pl15YPiw0BG3gPF5DJdia7EeU&callback=showVideos",dataType:"jsonp",crossDomain:!0}),window.showVideos=function(e){if(e.items&&e.items.length>0)for(var t=0;t<2;t+=1)document.getElementById("videos").innerHTML+='<iframe class ="news-videos__last" src="http://www.youtube.com/embed/'+e.items[t].contentDetails.videoId+'"></iframe>'}});var e=$("#owl-carousel-espn").owlCarousel({loop:!1,autoplay:!1,mouseDrag:!1,nav:!1,responsive:{0:{items:1},600:{items:2},1000:{items:4}}});$.ajax({type:"GET",url:"https://newsapi.org/v2/top-headlines?sources=espn&apiKey=c3d8ad8085124333ba61a0a80593b94d",headers:{"Content-Type":"application/x-www-form-urlencoded"},contentType:"application/json; charset=utf-8",async:!0,dataType:"json",success:function(t){$.each(t,function(t,a){for(var s=2;s<a.length;s+=1)e.trigger("add.owl.carousel",[$('<a target="_blank" href="'+a[s].url+'" class="news-article"><img class="news-article__img" src="'+a[s].urlToImage+'" alt="'+a[s].title+'"><img class="news-article__icon-filter" src="img/logo-filter-espn.jpg" alt=""><p class="group news-article__date">'+a[s].publishedAt+'</p><p class="group news-article__text">'+a[s].title+"</p></a>")])}),e.trigger("refresh.owl.carousel")}});var t=$("#owl-carousel-bbc").owlCarousel({loop:!1,autoplay:!1,mouseDrag:!1,nav:!1,responsive:{0:{items:1},600:{items:2},1000:{items:4}}});$.ajax({type:"GET",url:"https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=c3d8ad8085124333ba61a0a80593b94d",headers:{"Content-Type":"application/x-www-form-urlencoded"},contentType:"application/json; charset=utf-8",async:!0,dataType:"json",success:function(e){$.each(e,function(e,a){for(var s=2;s<a.length;s+=1)t.trigger("add.owl.carousel",[$('<a target="_blank" href="'+a[s].url+'" class="news-article"><img class="news-article__img" src="'+a[s].urlToImage+'" alt="'+a[s].title+'"><img class="news-article__icon-filter" src="img/logo-filter-bbc.jpg" alt=""><p class="group news-article__date">'+a[s].publishedAt+'</p><p class="group news-article__text">'+a[s].title+"</p></a>")])}),t.trigger("refresh.owl.carousel")}});var a=$("#owl-carousel-fox").owlCarousel({loop:!1,autoplay:!1,mouseDrag:!1,nav:!1,responsive:{0:{items:1},600:{items:2},1000:{items:4}}});$.ajax({type:"GET",url:"https://newsapi.org/v2/top-headlines?sources=fox-sports&apiKey=c3d8ad8085124333ba61a0a80593b94d",headers:{"Content-Type":"application/x-www-form-urlencoded"},contentType:"application/json; charset=utf-8",async:!0,dataType:"json",success:function(e){$.each(e,function(e,t){for(var s=2;s<t.length;s+=1)null==t[s].description?console.log("is not a str"):a.trigger("add.owl.carousel",[$('<a target="_blank" href="'+t[s].url+'" class="news-article"><img class="news-article__img" src="'+t[s].urlToImage+'" alt="'+t[s].title+'"><img class="news-article__icon-filter" src="img/logo-filter-fox.jpg" alt=""><p class="group news-article__date">'+t[s].publishedAt+'</p><p class="group news-article__text">'+t[s].title+"</p></a>")])}),a.trigger("refresh.owl.carousel")}});var s=$("#owl-carousel-bible").owlCarousel({loop:!1,autoplay:!1,mouseDrag:!1,nav:!1,responsive:{0:{items:1},600:{items:2},1000:{items:4}}});$.ajax({type:"GET",url:"https://newsapi.org/v2/top-headlines?sources=the-sport-bible&apiKey=c3d8ad8085124333ba61a0a80593b94d",headers:{"Content-Type":"application/x-www-form-urlencoded"},contentType:"application/json; charset=utf-8",async:!0,dataType:"json",success:function(e){$.each(e,function(e,t){for(var a=2;a<t.length;a+=1)s.trigger("add.owl.carousel",[$('<a target="_blank" href="'+t[a].url+'" class="news-article"><img class="news-article__img" src="'+t[a].urlToImage+'" alt="'+t[a].title+'"><img class="news-article__icon-filter" src="img/logo-filter-bible.jpg" alt=""><p class="group news-article__date">'+t[a].publishedAt+'</p><p class="group news-article__text">'+t[a].title+"</p></a>")])}),s.trigger("refresh.owl.carousel")}})}var n;$("body").is(".next-matches")&&(fetch("https://api.stattleship.com/basketball/nba/games?on=today",{headers:{Accept:"application/vnd.stattleship.com; version=1",Authorization:"Token token=ab97a593039f0e54e901e60b493307ad","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){for(var t=0;t<e.games.length;t+=1)document.getElementById("nextMatchesNba").innerHTML+="<tr><td>"+e.games[t].label+"</td><td>"+e.games[t].on+"</td><td>"+e.games[t].score+"</td><td>"+e.games[t].broadcast+"</td></tr>"}),fetch("https://api.stattleship.com/football/nfl/games?status=upcoming",{headers:{Accept:"application/vnd.stattleship.com; version=1",Authorization:"Token token=ab97a593039f0e54e901e60b493307ad","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){if(console.log(e),e<=1)for(var t=0;t<e.games.length;t+=1)document.getElementById("nextMatchesNfl").innerHTML+="<tr><td>"+e.games[t].label+"</td><td>"+e.games[t].on+"</td><td>"+e.games[t].score+"</td><td>"+e.games[t].broadcast+"</td></tr>";else document.getElementById("nextMatchesNfl").innerHTML+="<tr><td>Not data available</td><td>Not data available</td><td>Not data available</td><td>Not data available</td></tr>"}),fetch("https://api.stattleship.com/baseball/mlb/games?status=upcoming",{headers:{Accept:"application/vnd.stattleship.com; version=1",Authorization:"Token token=ab97a593039f0e54e901e60b493307ad","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){for(var t=0;t<e.games.length;t+=1)document.getElementById("nextMatchesMlb").innerHTML+="<tr><td>"+e.games[t].label+"</td><td>"+e.games[t].on+"</td><td>"+e.games[t].score+"</td><td>"+e.games[t].broadcast+"</td></tr>"}),fetch("https://api.stattleship.com/hockey/nhl/games?on=today",{headers:{Accept:"application/vnd.stattleship.com; version=1",Authorization:"Token token=ab97a593039f0e54e901e60b493307ad","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){for(var t=0;t<e.games.length;t+=1)document.getElementById("nextMatchesNhl").innerHTML+="<tr><td>"+e.games[t].label+"</td><td>"+e.games[t].on+"</td><td>"+e.games[t].score+"</td><td>"+e.games[t].broadcast+"</td></tr>"})),(n=jQuery)(".filter .filter__items").addClass("active").find("> p:eq(0)").addClass("current"),n(".filter .filter__items p a").click(function(e){var t=n(this).closest(".filter"),a=n(this).closest("p").index();t.find(".filter__items > p").removeClass("current"),n(this).closest("p").addClass("current"),t.find(".filter__results").find(".tabs_item").not(".tabs_item:eq("+a+")").slideUp(),t.find(".filter__results").find(".tabs_item:eq("+a+")").slideDown(),e.preventDefault()})});