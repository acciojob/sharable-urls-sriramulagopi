// your code here
const form = document.querySelector("form");
const h3 = document.querySelector("#url");
form.addEventListener("submit",(e)=>{
	e.preventDefault();
	h3.innerText=window.location.href;
})