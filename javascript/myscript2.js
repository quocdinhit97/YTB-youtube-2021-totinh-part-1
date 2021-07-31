var title = document.querySelector('.something');
charming(title);
title.addEventListener('mouseenter', function(){
	anime({
		targets: '.something span',
		translateY: [-3,-2],
		translateX: [-3,-2],
		delay: function(el, i) {
			return i*10;
		},
		color: ["#232323","#ea4335"],
		duration: 200,
	})
});

title.addEventListener('click', function(){
	anime({
		targets: '.something span',
		translateY: [-3,-2],
		translateX: [-3,-2],
		delay: function(el, i) {
			return i*10;
		},
		color: ["#232323","#ea4335"],
		duration: 200,
	})
});

title.addEventListener('mouseleave', function(){
	anime({
		targets: '.something span',
		translateY: [0,-2],
		translateX: [0,-2],
		delay: function(el, i) {
			return i*10;
		},
		color: ["#232323","#ea4335"],
		duration: 200,
		direction: 'reverse'
	})
});

var final = document.querySelector('.layer');
final.insertAdjacentHTML('beforebegin', '<div class="iloveyou"></div>');
var test = document.querySelector('.iloveyou');
test.appendChild(final);
test.insertAdjacentHTML('beforeend', '<div class="mask"></div>')
var mask = document.querySelector('.mask');
var thu = document.querySelector('.thu');
mask.style.transformOrigin = "0% 50%";
mask.style.transform = "scaleX(0)";
thu.style.opacity= "0";

window.onload = function() {
	var okdone = anime({
		delay: 300,
		targets: mask,
		scaleX: 1,
		duration: 500,
		easing: 'easeInOutQuint',
		complete: function() {
			thu.style.opacity= "1";
			mask.style.transformOrigin = "100% 50%";
			var back = anime({
				delay: 200,
				targets: mask,
				scaleX: 0,
				duration: 500,
				easing: 'easeInOutQuint'
			})
		}
	});
};


