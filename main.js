document.addEventListener("DOMContentLoaded", () => {
    let menuIcon = document.getElementById("menuIcon");
    let closeIcon = document.getElementById("closeIcon");
    let navMenu = document.getElementById("navMenu");

    menuIcon.addEventListener("click", () => {
        navMenu.style.right = "0";
    });


    closeIcon.addEventListener("click", () => {
        navMenu.style.right ="-300px";
    });

});



let test = document.querySelectorAll(".testCon .list .test");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnail = document.querySelectorAll(".thumbnail .test");


let countTest = test.length;
let testActive = 0;

next.onclick = function(){
    testActive = testActive + 1;
    if(testActive >= countTest){
        testActive = 0;
    }
    showTestCon();
}
prev.onclick = function(){
    testActive = testActive - 1;
    if(testActive < 0){
        testActive = countTest - 1;
    }
    showTestCon();
}

function showTestCon(){
    let testActiveOld = document.querySelector(".testCon .list .test.active");
    let thumbnailActiveOld = document.querySelector(".thumbnail .test.active");
    testActiveOld.classList.remove("active");
    thumbnailActiveOld.classList.remove("active");

    test[testActive].classList.add("active");
    thumbnail[testActive].classList.add("active");

}