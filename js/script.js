// carousel
let a = document.querySelectorAll('.circle-nav span');
if (document.body.clientWidth>481){
	a[0].onclick = function() {
		if(a[0].classList.contains('active')) {

		}
		else {
			a[0].classList.add('active');
			a[1].classList.remove('active');
			a[2].classList.remove('active');
			document.querySelector('.thumb-wrap .inner-wrap').style.left='0';
		}
	}
	a[1].onclick = function() {
		if(a[1].classList.contains('active')) {

		}
		else {
			a[1].classList.add('active');
			a[0].classList.remove('active');
			a[2].classList.remove('active');
			document.querySelector('.thumb-wrap .inner-wrap').style.left='-100%';
		}
	}
	a[2].onclick = function() {
		if(a[2].classList.contains('active')) {

		}
		else {
			a[2].classList.add('active');
			a[1].classList.remove('active');
			a[0].classList.remove('active');
			document.querySelector('.thumb-wrap .inner-wrap').style.left='-201%';
		}
	}
} else {
	a[0].onclick = function() {
		if(a[0].classList.contains('active')) {

		}
		else {
			a[0].classList.add('active');
			a[1].classList.remove('active');
			a[2].classList.remove('active');
			document.querySelector('.thumb-wrap .inner-wrap').style.top='0';
		}
	}
	a[1].onclick = function() {
		if(a[1].classList.contains('active')) {

		}
		else {
			a[1].classList.add('active');
			a[0].classList.remove('active');
			a[2].classList.remove('active');
			document.querySelector('.thumb-wrap .inner-wrap').style.top='-100%';
		}
	}
	a[2].onclick = function() {
		if(a[2].classList.contains('active')) {

		}
		else {
			a[2].classList.add('active');
			a[1].classList.remove('active');
			a[0].classList.remove('active');
			document.querySelector('.thumb-wrap .inner-wrap').style.top='-201%';
		}
	}
}
let carouselBg = document.querySelector('.history .carousel-bg').style.height=parseInt(window.getComputedStyle(document.querySelector('.history .carousel'), null).height) + 15 + 'px';
		// tabs
		let b = document.querySelectorAll('.tabs .tab');
		if (document.body.clientWidth>481){
			b[0].onclick = function() {
				if(b[0].classList.contains('active')) {

				}
				else {
					b[0].classList.add('active');
					b[1].classList.remove('active');
					document.querySelector('.tab-wrap .tab-1').style.left='0';
					document.querySelector('.tab-wrap .tab-2').style.left='-100vw';
				}
			}
			b[1].onclick = function() {
				if(b[1].classList.contains('active')) {

				}
				else {
					b[1].classList.add('active');
					b[0].classList.remove('active');
					document.querySelector('.tab-wrap .tab-2').style.left='0';
					document.querySelector('.tab-wrap .tab-1').style.left='-100vw';
				}
			}
		} else {
			b[0].onclick = function() {
				if(b[0].classList.contains('active')) {

				}
				else {
					b[0].classList.add('active');
					document.querySelector('.tabs-response .tab').classList.remove('active');
					document.querySelector('.tab-wrap').style.minHeight='545px';
					document.querySelector('.tab-wrap.tab-response').style.minHeight='0px';
				}
			}
			document.querySelector('.tabs-response').onclick = function() {
				if(document.querySelector('.tabs-response').classList.contains('active')) {

				}
				else {
					document.querySelector('.tabs-response .tab').classList.add('active');
					b[0].classList.remove('active');
					document.querySelector('.tab-wrap.tab-response').style.minHeight='545px';
					document.querySelector('.tab-wrap').style.minHeight='0';
				}
			}
		}
		// scroll
		let menu = parseInt(window.getComputedStyle(document.querySelector('.sticky-nav'), null).height);
		let hero = parseInt(window.getComputedStyle(document.querySelector('.hero'), null).height);
		document.querySelector('.separator').style.height=menu+'px';
		let scrollTop = document.body.scrollTop;
		window.addEventListener('scroll', function() {
			let scroll = window.pageYOffset || document.documentElement.scrollTop;
			fixed = scroll > hero ? document.querySelector('.sticky-nav').classList.add('nav-fixed') : document.querySelector('.sticky-nav').classList.remove('nav-fixed');
		});
		// anchors
		function anchorScroller(el, duration) {
			if (this.criticalSection) {
				return false;
			}

			if ((typeof el != 'object') || (typeof el.href != 'string'))
				return true;

			var address = el.href.split('#');
			if (address.length < 2)
				return true;

			address = address[address.length-1];
			el = 0;

			for (var i=0; i<document.anchors.length; i++) {
				if (document.anchors[i].name == address) {
					el = document.anchors[i];
					break;
				}
			}
			if (el === 0)
				return true;

			this.stopX = 0;
			this.stopY = 0;
			do {
				this.stopX += el.offsetLeft;
				this.stopY += el.offsetTop;
			} while (el = el.offsetParent);

			this.startX = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
			this.startY = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

			this. stopX = this.stopX - this.startX;
			this.stopY = this.stopY - this.startY - menu;

			if ( (this.stopX == 0) && (this.stopY == 0) )
				return false;

			this.criticalSection = true;
			if (typeof duration == 'undefined')
				this.duration = 500;
			else
				this.duration = duration;

			var date = new Date();
			this.start = date.getTime();
			this.timer = setInterval(function () {
				var date = new Date();
				var X = (date.getTime() - this.start) / this.duration;
				if (X > 1)
					X = 1;
				var Y = ((-Math.cos(X*Math.PI)/2) + 0.5);

				cX = Math.round(this.startX + this.stopX*Y);
				cY = Math.round(this.startY + this.stopY*Y);

				document.documentElement.scrollLeft = cX;
				document.documentElement.scrollTop = cY;
				document.body.scrollLeft = cX;
				document.body.scrollTop = cY;

				if (X == 1) {
					clearInterval( this.timer);
					this.criticalSection = false;
				}
			}, 10);
			return false;
		}