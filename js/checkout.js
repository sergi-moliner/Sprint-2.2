// Exercise 6

var error = 0;

var fName = document.getElementById("fName");
var fEmail = document.getElementById("fEmail");
var fAddress = document.getElementById("fAddress");
var fLastN = document.getElementById("fLastN");
var fPassword = document.getElementById("fPassword");
var fPhone = document.getElementById("fPhone");

var errorName = document.getElementById("errorName");
var errorEmail = document.getElementById("errorEmail"); 
var errorAddress = document.getElementById("errorAddress");   
var errorLastN = document.getElementById("errorLastN");  
var errorPassword = document.getElementById("errorPassword");  
var errorPhone = document.getElementById("errorPhone"); 

function showError(field, errorElement){
	field.classList.add('is-invalid');
	errorElement.style.display = 'block';
	error++;
}

function hideError(field, errorElement){
	field.classList.remove('is-invalid');
	errorElement.style.display = 'none';
}

function isValidLength (field){
	return field.length >= 3;
}

function isAlpha(str) {
    return /^[a-zA-Z]+$/.test(str);
}

function validPassword(password) {
    return /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
}

function isNum(nb) {
    return /^\d{9}$/.test(nb);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateField(field, errorElement, ValidationFunction){
	if(!ValidationFunction(field.value) || isValidLength(field)){
		showError(field, errorElement);
	}else{
		hideError(field, errorElement);
	}
}

function validate() {
    error = 0;

	validateField(fAddress, errorAddress, isValidLength);
	validateField(fName, errorName, isAlpha);
	validateField(fLastN, errorLastN, isAlpha);
	validateField(fEmail, errorEmail, isValidEmail);
	validateField(fPassword, errorPassword, validPassword);
	validateField(fPhone, errorPhone, isNum);

	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}
}

document.getElementById("form").addEventListener('submit', function(event) {
	if (error > 0) {
		event.preventDefault();
	}
});