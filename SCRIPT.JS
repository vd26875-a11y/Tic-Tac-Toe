let btn = document.querySelectorAll(".bt");
let resetBtn = document.querySelector("#reset-btn");
let h1=document.querySelector("#Winner");
// let newButton=document.querySelector("#newButton");
let Winner = "";
let count=0;
let musicPlay=true;
let turn0 = true; //player 1 , player2
let audio=new Audio("music1.mp3");
let music=document.querySelector(".icon");
let musicIcon=document.querySelector("#music");
music.addEventListener("click",()=>{
     if(musicPlay){
      musicIcon.classList.remove("ph-speaker-slash");
      musicIcon.classList.add("play");
      audio.play();
      musicPlay=false;
     }else{
      music.classList.remove("ph-speaker-high");
      music.classList.add("ph-speaker-slash");
      audio.pause();
      musicPlay=true;
     }
     
});

const reset=()=>{
  turn0=true;
  resetBtn.addEventListener("click",()=>{
    enable();
    h1.innerText="";
  
  });
}
const newBtn=()=>{
  turn0=true;
  newButton.addEventListener("click",()=>{
    enable();
    h1.innerText="";
  });
}

   
let wintPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
btn.forEach((btn) => {
  btn.addEventListener("click", () => {
   
    if (turn0 === true) {
      turn0 = false;
      btn.innerText = "X";
      btn.style.color = "black";
    } else {
      turn0 = true;
      btn.innerText = "O";
      btn.style.color = "red";
    }
    count++;
    console.log(count);
    
    btn.disabled = true;
    

    checkWinner();
  });
});

checkWinner = () => {
  let draw=false;
  wintPatterns.forEach(() => {
    for (let Patterns of wintPatterns) {
      let posVal1 = btn[Patterns[0]].innerText;
      let posVal2 = btn[Patterns[1]].innerText;
      let posVal3 = btn[Patterns[2]].innerText;

      if (posVal1 !== "" && posVal2 != "" && posVal3 != "") {
        if (posVal1 === posVal2 && posVal2 === posVal3 && posVal3 === posVal1) {
         
          Winner=posVal1;
          h1.innerText="Congratulations, Winner is " + Winner;
          disable();
          draw=true;
          break;

          
          
        }else if (!draw && count===9){
          h1.innerText="This Match is Draw";
          h1.style.color="red"; 

      }
    }}
});
}
const disable=()=>{
  for(bt of btn){
    bt.disabled=true;
  }
}
const enable=()=>{
  for(bt of btn){
    bt.disabled=false;
    bt.enabled=true;
    bt.innerText="";
    
  }

}
reset();
// newBtn();
