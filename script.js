// your code here
const form = document.querySelector("form");
const h3 = document.querySelector("#url");
form.addEventListener("submit",(e)=>{
	e.preventDefault();
	h3.innerText='https://localhost:8080/?name=John&year=2022';
})