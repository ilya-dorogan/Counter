"use strict";

window.addEventListener('DOMContentLoaded', () => {
	const incr = document.querySelector('.btn-success'),
		decr = document.querySelector('.btn-danger'),
		number = document.getElementById("number");
	let counter = 0;

	function changeNumber() {
		number.innerText = counter;
	}

	incr.addEventListener('click', () => {
		++counter;
		changeNumber();
	});

	decr.addEventListener('click', () => {
		--counter;
		changeNumber();
	});

});