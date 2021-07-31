var getclickf = document.querySelector('.firstclk');
getclickf.style.opacity = "0";

var setPack = function(getText) {
	charming(getText);
	var createDiv = document.createElement('div');
	createDiv.className = "box";
	getText.parentNode.insertBefore(createDiv, getText);
	createDiv.appendChild(getText);
	var clickDiv2 = document.createElement('div');
	clickDiv2.className = "child";
	clickDiv2.style.transformOrigin = "0% 50%";
	clickDiv2.style.transform = "scaleX(0)";
	createDiv.appendChild(clickDiv2);
	var cd = anime({
		targets: clickDiv2,
		scaleX: 1,
		easing: 'easeInOutQuint',
		duration: 300,
		complete: function() {
			clickDiv2.style.transformOrigin = "100% 50%";
			getText.style.opacity= "1";
			var short = anime({
				targets: clickDiv2,
				easing: 'easeInOutQuint',
				delay: 100,
				duration: 300,
				scaleX: 0
			});
		}
	})
} /* Đây là gói đóng gói tạo block pink */

// Xử lý vẽ tim
var getHeartBeat = document.querySelectorAll('.container .heart polyline');
var getHeart = document.querySelectorAll('.container .heart path');
var get = document.querySelector('.container .heart');
var timmau = document.querySelector('.container .heart .timmau');


timmau.style.opacity= "0";
var theTime = anime.timeline();
theTime.add({
	targets: getHeartBeat,
	delay: 100,
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'easeInOutSine',
	duration: 2000,
	update: function(percent) {
		var thePercent = Math.round(percent.progress);
		document.querySelector('.container .sup').innerHTML= "Nhịp tim của anh " + (thePercent+899);
	}
});
theTime.add({
	targets: getHeart,
	offset: 1000,
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'easeInOutSine',
	duration: 600,
	complete: function() {
		var makeColor = anime({
			targets: timmau,
			opacity: [0,1],
			easing: 'easeInOutQuint',
			duration: 1300,
			loop:true,
			complete: function(){
				var nhiptim = anime({
					targets: timmau,
					opacity: [1,0],
					easing: 'easeOutSine',
					duration: 1300,
				});
			}
		});
		var hideHeartLine = anime({
			targets: '.container .heart path .cls-2',
			opacity: [1,0],
			duration:1000,
			complete: function(){
				setPack(document.querySelector('.firstclk'));
			}
		})
	}
});

// Click Here Text Xulytion
getclickf.addEventListener('mouseenter', function() {
	anime.remove();
	var charmingedText = anime({
		targets: '.box span',
		translateY: [-2,0],
		translateX: [-2,0],
		rotate: [6,0],
		color: ['#6d3842','#ea4335'],
		delay: function(el, i) { return i*20},
		duration: 500
	})
});
getclickf.addEventListener('mouseleave', function() {
	anime.remove();
	var charmingedText = anime({
		targets: '.box span',	
		translateY: [-0.5,0],
		translateX: [-0.5,0],
		rotate: [-1,0],
		color: ['#6d3842','#ea4335'],
		delay: function(el, i) { return i*20},
		duration: 400,
		direction: 'reverse'
	})
});

// Tạo div layer 2
var divLayer = document.querySelector('.layerMask');
divLayer.style.transformOrigin = "50% 0%";
divLayer.style.transform = "scaleY(0)";


getclickf.addEventListener('click', function(){
	anime({
		targets: divLayer,
		easing: 'easeOutSine',
		scaleY: 1,
		duration: 500
	});
	var heyCrush = document.querySelectorAll('.crush path');
	var finalText = document.querySelector('.parse');
	var theLetter = document.querySelector('.lathu');
	theLetter.addEventListener('mouseenter', function() {
		anime({
			targets: theLetter,
			rotate: [0,356],
			duration: 1000
		})
	});
	theLetter.addEventListener('click', function(){
		anime({
			targets: divLayer2,
			easing: 'easeInOutQuint',
			scaleX: 1,
			duration: 300
		});
	});

	theLetter.style.opacity = "0";
	theLetter.style.transform = "translateY(-4)"
	charming(finalText);
	charming(finalText);
	theTime2= anime.timeline();
	theTime2.add({
		targets: heyCrush,
		strokeDashoffset: [anime.setDashoffset,0],
		easing: 'easeOutSine',
		delay: function(el, i) {
			return i*100;
		},
		duration: 3000,
	})
	theTime2.add({
		targets: '.parse span',
		translateY: [-3,0],
		delay: function(el, i) {
			return i*10;
		},
		duration: 250,
		color: ['#232323','#e22748'],
		offset: 3000,
	});
	theTime2.add({
		targets: theLetter,
		opacity: [0,1],
		easing: 'easeInOutQuint',
		offset: "-=400ms",
		duration: 200,
		complete: function() {
			var drag = anime({
				targets: theLetter,
				translateY: [-4,4],
				direction: 'alternate',
				duration: 600,
				loop: true
			})
		}
	});
});

var cantho =document.querySelector('.main');
cantho.insertAdjacentHTML('afterend', '<div class="author mt-5"><div class="row"><div class="col-12"><div class="me text-danger text-right"></div></div></div></div>');

document.querySelector('.Description .modal-title').innerHTML = '<i class="far fa-comment-alt"></i>&nbsp;Nhịp tim như vậy là vì';
document.querySelector('.Description .modal-body').innerHTML = 'Anh thích em <i class="fas fa-heart"></i> ';
var author = document.querySelector('.author .me');author.style.opacity = "0.5";
author.innerHTML = "Bản quyền thuộc về<a href='https://anonyviet.com'>Lmint<a>";
author.style.opacity = "0";