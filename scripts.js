// ..................SKILLS SECTION ........................

var skillProgress = document.querySelectorAll(".skill-progress > div");

function initialiseProgress(i) {
	i.setAttribute("data-visited", false);
	i.style.width = 0 + '%';
}
for(var i of skillProgress){
	initialiseProgress(i);
}


function fillSkillProgress(i) {
	var currentWidth = 0;
	var targetWidth = i.getAttribute("data-bar-width");
	var interval = setInterval(function() {
		if(currentWidth >= targetWidth){
			clearInterval(interval);
			return;
		}
		currentWidth++;
		i.style.width = currentWidth + "%";
	}, 5);
}


function checkScroll() {
	for(let i of skillProgress) {
		let skillCoordinate = i.getBoundingClientRect();
		if((i.getAttribute("data-visited") == "false") && 
			(skillCoordinate.top <= (window.innerHeight - skillCoordinate.height))){
			i.setAttribute("data-visited", "true");
			fillSkillProgress(i);
		}
		else if(skillCoordinate.top > window.innerHeight){
			i.setAttribute("data-visited", false);
            initialiseProgress(i);
		}
	}
}

window.addEventListener("scroll", checkScroll);



// ............ NAV MENU: Smooth Scroll ......................

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;


for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        console.log(this.textContent);
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        //    interval = setInterval(scrollVertically, 20, targetSection);

        interval = setInterval(function () {
            scrollVertically(targetSection);
        }, 20);
    });
}


function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    // console.log(targetSection.id);
   	if(targetSection.id == "contact"){
    	if (targetSectionCoordinates.top <= 175) {
	        clearInterval(interval);
	        return;
	    }
    }
    else{
	    if (targetSectionCoordinates.top <= 0) {
	        clearInterval(interval);
	        return;
	    }
	}
    window.scrollBy(0, 50);
}


// var nav-menu-list = document.querySelectorAll('.nav-menu a');
// for(var i=0; i<nav-menu-list.length; i++)
// {
// 	nav-menu-list[i].addEventListener('click', function(event){
// 		event.preventDefault();
// 		var targetSectionId = this.textContent.trim().toLowerCase();
// 		var targetSection = documentgetElementById(targetSectionId);
// 		console.log(targetSection);

// 		var interval = setInterval(function(){
// 			var targetSectionCoordinate = targetSection.getBoundingClientRect();
// 			if(targetSectionCoordinate.top <= 0){
// 				clearInterval(interval);
// 				return;
// 			}
// 			window.scrollBy(0, 50);
// 		}, 20);
// 	});
// }
