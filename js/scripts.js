// Smooth scrolling on the navbar
$(function() {
	$("#pageNav a").click(function(e) {
		e.preventDefault();
		$('html,body').scrollTo(this.hash,this.hash);
	})
});

const callback = function(entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("slideIn");
			}
		});
	};

	const observer = new IntersectionObserver(callback);

	const targets = document.querySelectorAll(".priorityPoint");
	targets.forEach(function(target) {
		observer.observe(target);
	});
	
window.onscroll = function() {stickHeader()};

var header = document.getElementById("pageNav");
var sticky = header.offsetTop;

function stickHeader() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}

var circles = document.querySelectorAll(".circleWrapper");
circles.forEach(function(circle) {
	circle.addEventListener("mouseover", growCircle);
});

function growCircle(event){
	event.target.classList.add("animatedCircle");
}

const triggers = document.getElementsByClassName("projectInstance");
const triggerArray = Array.from(triggers).entries();
const modals = document.getElementsByClassName("modal");
const closeButtons = document.getElementsByClassName("close");

for(let [index,trigger] of triggerArray) {
	const toggleModal = () => {
		modals[index].classList.toggle("show-modal");
	};
	trigger.addEventListener("click", toggleModal);
	closeButtons[index].addEventListener("click", toggleModal);
}

window.onclick = function(event) {
	if(event.target.classList.contains("modal")) {
		event.target.classList.remove("show-modal");
	}
}


var webLinks = document.querySelectorAll(".instaLink");
	if(window.innerWidth < 1000) {
		webLinks.forEach(function(webLink) {
			try {
				webLink.href = 'javascript: void(0)';
			} catch(err) {
			}
		});
	}
