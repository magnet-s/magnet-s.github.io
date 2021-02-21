const keyword = document.querySelector("input[name = 'search']");
const engine = document.querySelector(".SelectSearch");
const button = document.querySelector(".img-button");
const Form = document.querySelector(".search");

function eventAvoider(event){
    event.preventDefault();
    const Engine = engine.value;
    const currentKeyword = keyword.value;
    if(Engine === "google"){
        location.href = "http://www.google.co.kr/search?q=" + currentKeyword;
    } else if(Engine === "naver"){
        location.href = "https://search.naver.com/search.naver?query=" + currentKeyword;
    }
}

function GoToURL(){
    Form.addEventListener("submit", eventAvoider)
}

function loadInput(){
    button.onclick = GoToURL();
}

function init(){
    loadInput();
}

init();
