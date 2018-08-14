var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(var i=1;i<6;i++){
	console.log(1111);
  var newImage = document.createElement('img');
  newImage.setAttribute('src', './images/pic'+i+'.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e){
  	console.log(2111);
  	var imgSrc = e.target.getAttribute('src'); 
  	displayedImage(imgSrc);
  }
}
function displayImage(imgSrc){
	displayedImage.setAttribute('src',imgSrc);	
}

btn.click = function(){
	var btnClass = btn.getAttribute('class');
	if(btnClass === 'dark'){
		btn.setAttribute('class','light');
		btn.textContent = 'Lighten';
		overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
	}else{
		btn.setAttribute('class','dark');
		btn.textContent = 'Darken';
		overlay.style.backgroundColor = 'rgba(0,0,0,0)';
	}
}


/* Wiring up the Darken/Lighten button */

