TweenLite.ticker.fps(60);

var $banner = $("#banner"),
    $slide1 = $("#slide1"),
    $create = $("h1"),
    $stunning = $("h2"),
    $animations = $("h3"),
    $for = $("h4"),
    $deviceHead = $("#deviceHead"),
    $tablet = $("#tablet"),
    $desktop = $("#desktop"),
    $laptop = $("#laptop"),
    $mobile = $("#mobile"),  
    $iphone = $("#iphone"),
    $logoman = $("#logoman"),
    $learnMore = $("#learnMore"),
    $replay = $("#replay"),
    timeline;

function initCSS() {
  
}

/*  The following 3 functions are responsible for creating (and returning) timelines for each section of the entire banner. 
    Creating individual timelines for each section allows you to
      * keep your code clean, modular and manageable
      * place the timeline wherever you like in the main timeline and easily move it around whenever you like
      * affect the timeScale() (playback speed) of a particular section without affecting the banner as a whole
      * reuse animations multiple times
*/

function getIntroTextTimeline() {
  
}

function getDevicesTimeline() {
  
}

function getTabletAnimation() {
  
}

/*  This methods glues all 3 section timelines together.
    You can insert each timeline wherever you choose allowing our sub-timelines to overlap or have some "dead time" between them.
    By placing labels in the timeline via add("someLabel", somePosition) it makes it very easy for us to mark the insertion points and navigate to them
*/
    
function createMasterTimeline() {
  
}  

// *** config buttons *** 
$learnMore.mouseenter(function(e){
  TweenMax.fromTo($learnMore, 0.6, {boxShadow:"0px 0px 0px 0px green"}, {boxShadow:"0px 0px 20px 2px #91f600", repeat:-1, yoyo:true});
});

$learnMore.mouseleave(function(e){
  TweenMax.to($learnMore, 0.2, {boxShadow:"0px 0px 0px 0px yellow"});
});

$replay.mouseenter(function(e){
  TweenLite.to($replay, 0.5, {rotation:"+=360", alpha:1});
})
  
$replay.mouseleave(function(e){
  TweenLite.to($replay, 0.5, {alpha:0.6});
})

$replay.click(function(){
  timeline.restart();
});


//get this party started
initCSS();
createMasterTimeline();