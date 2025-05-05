let isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
let darkModeImg = document.getElementsByClassName("DarkModeInvertImg");
setInterval(()=>{isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;darkModeImg = document.getElementsByClassName("DarkModeInvertImg");for (let i = 0;i<darkModeImg.length;i++){if(isDarkMode){darkModeImg[i].style.filter="invert(1)";}else{darkModeImg[i].style.filter="invert(0)";}},0);
