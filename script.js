// timer to develop
// 1. select all tabs from tab list .
const pomodoroTab=document.getElementById("pomodoro");
const shortBreakTab= document.getElementById("shortBreak");
const longBreakTab= document.getElementById("longBreak");
const pomodoroContent=document.getElementById("pomodoro-content")
const shortBreakContent=document.getElementById("shortBreak-content")
const longBreakContent=document.getElementById("longBreak-content")

// 2. add click event listener to each tab .
pomodoroTab.addEventListener("click",function(){
    shortBreakTab.classList.remove("active");
    longBreakTab.classList.remove("active");
    pomodoroTab.classList.add("active");
    pomodoroContent.classList.add("active")
    shortBreakContent.classList.remove("active")
    longBreakContent.classList.remove("active")
});
shortBreakTab.addEventListener("click",function(){
    shortBreakTab.classList.add("active");
    longBreakTab.classList.remove("active");    
    pomodoroTab.classList.remove("active");
    pomodoroContent.classList.remove("active")
    shortBreakContent.classList.add("active")
    longBreakContent.classList.remove("active")
});
longBreakTab.addEventListener("click",function(){
    shortBreakTab.classList.remove("active");
    longBreakTab.classList.add("active");
    pomodoroTab.classList.remove("active");
    pomodoroContent.classList.remove("active")
    shortBreakContent.classList.remove("active")
    longBreakContent.classList.add("active")
});

// timer to develop
function timer(seconds){
    const now=Date.now();
    const then=now+(seconds*1000);
    const timerInterval=setInterval(function(){
            const secondsLeft=Math.round((then-Date.now())/1000);
            displayTime(secondsLeft,pomodoroTime);
            console.log(secondsLeft);
            if(secondsLeft<=1){
                clearInterval(timerInterval); 
            }
    },1000);
};


function displayTime(seconds,element){
    const minute=Math.floor(seconds/60);
    const second=seconds%60;

    element.innerText=minute+":"+second;
};
const pomodoroTime=document.getElementById("pomodoro-time");
const pomodoroButton=document.getElementById("pomodoroButton");
pomodoroButton.addEventListener("click",function(){
    const pomodoroTotalTime=1500;
    timer(pomodoroTotalTime);
});
