//inspiration for the text rotator came from: http://www.codingforums.com/javascript-programming/211050-div-content-change-after-10-seconds.html

var content=["student",
             "designer",
             "Seattlite",
             "coffee addict"]
var index = 0;

setTimeout(rotateText, 0);


function rotateText() {

  var word = content[index];
  document.getElementById('change').classList.add("fadeIn");
  document.getElementById('change').innerHTML = word;
  index++;
  if (index == content.length) {
    index=0
  }
  setTimeout(fadeOutText, 5000);
}

function fadeOutText(){
  document.getElementById('change').classList.remove("fadeIn");
  setTimeout(rotateText, 1000);
}


//collapsible-header

window.addEventListener('scroll', function(e) {
  var scroll = e.target.scrollingElement.scrollTop;
  if(scroll > 0){
    document.getElementsByTagName('header')[0].classList.add("collapsed");
  } else {
    document.getElementsByTagName('header')[0].classList.remove("collapsed");
  }
});


//fade in and out on pink box text
window.addEventListener('scroll', function(e) {
  var text_scroll = e.target.scrollingElement.scrollTop;
  if(text_scroll >= 1000){
    document.getElementById('favorites').classList.add("fade_in");
  } else {
    document.getElementById('favorites').classList.remove("fade_in");
  }
  if(text_scroll >= 1600){
    document.getElementById('favorites').classList.add("fade_out");
  } else {
    document.getElementById('favorites').classList.remove("fade_out");
  }
  if(text_scroll > 0){
    document.getElementById('quote_container').classList.add("fade_in");
  } else {
    document.getElementById('quote_container').classList.remove("fade_in");
  }
  if(text_scroll >= 350){
    document.getElementById('quote_container').classList.add("fade_out");
  } else {
    document.getElementById('quote_container').classList.remove("fade_out");
  }
});


//fly in picures
window.addEventListener('scroll', function(e) {
  var text_scroll = e.target.scrollingElement.scrollTop + document.documentElement.clientHeight;
  if(text_scroll >= 1000){
    document.getElementsByClassName('picsOfMe')[0].classList.add("fly_in");
    document.getElementsByClassName('picsOfMe')[1].classList.add("fly_in");
    document.getElementsByClassName('picsOfMe')[2].classList.add("fly_in");
    document.getElementsByClassName('picsOfMe')[3].classList.add("fly_in");
  }
  if(text_scroll >=2600){
    document.getElementById("line").classList.add("fly_in");
  }
});

function timelineExpand(){
  document.getElementById("timeline_pic").innerHTML = "<img src='img/baby_louise.png' alt='Timeline2'/>";
  document.getElementById("date").innerHTML = "February 6, 1993"
  document.getElementById("timeline_text").innerHTML = "I was born in Edinburgh, Scotland to Chris and Katherine Whitaker and my journey began"
}
function timelineExpand2(){
  document.getElementById("timeline_pic").innerHTML = "<img src='img/baby_matt.png' alt='Timeline2'/>";
  document.getElementById("date").innerHTML = "March 29, 1995"
  document.getElementById("timeline_text").innerHTML = "I became a big sister to my little brother, Matthew"
}
function timelineExpand3(){
  document.getElementById("timeline_pic").innerHTML = "<img src='img/seattle.png' alt='Timeline2'/>";
  document.getElementById("date").innerHTML = "February 1999"
  document.getElementById("timeline_text").innerHTML = "I moved to Seattle because my dad got a job. Seattle is where I developed a passion for technolgy because I was surrounded by so many great companies"
}
function timelineExpand4(){
  document.getElementById("timeline_pic").innerHTML = "<img src='img/um.png' alt='Timeline2'/>";
  document.getElementById("date").innerHTML = "August 2011"
  document.getElementById("timeline_text").innerHTML = "I started school at the University of Miami. When I came I was a criminolgy major, then a public relations major, then a poltical scicence major, and then a computer science major. "
}
function timelineExpand5(){
  document.getElementById("timeline_pic").innerHTML = "<img src='img/first_website.png' alt='Timeline2'/>";
  document.getElementById("date").innerHTML = "January 2013"
  document.getElementById("timeline_text").innerHTML = "I took web design and realized that while I wasn't ever going to be a computer scientist, I did love coding and building websites. I changed my major for the final time to visual journalism."
}
function timelineExpand6(){
  document.getElementById("timeline_pic").innerHTML = "<img src='img/ux.png' alt='Timeline2'/>";
  document.getElementById("date").innerHTML = "January 2015"
  document.getElementById("timeline_text").innerHTML = "I took UX design and decided to apply to the Interactive Media program at UM to get my Masters."
}
function timelineExpand7(){
  document.getElementById("timeline_pic").innerHTML = "<img src='img/graduate.png' alt='Timeline2'/>";
  document.getElementById("date").innerHTML = "May 2015"
  document.getElementById("timeline_text").innerHTML = "I graduated with my Bachelor of Science in Communications."
}
function timelineExpand8(){
  document.getElementById("timeline_pic").innerHTML = "<img src='img/miami.png' alt='Timeline2'/>";
  document.getElementById("date").innerHTML = "August 2015"
  document.getElementById("timeline_text").innerHTML = "I started my Masters in Fine Arts in the Interactive Media program, so my journey in Miami is not over yet!"
}
