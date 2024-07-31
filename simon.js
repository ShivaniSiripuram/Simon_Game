// let request=9;
// function evenodd(func,n){
//   if(request%2==0){
//     let even=function(n){
//     console.log("even");
//     }
//     return even;
//   }
//   else{
//     let odd=function(n){
//       console.log("odd");
//     }
// //     return odd;
// //   }

// // }
// // let aaa=evenodd(request,1);
// // console.log(request);
// // let sum=(a,b)=>(a+b);
// // let id=setInterval(()=>{
// //     console.log("hello");
// // },2000);
// // setTimeout(()=>{
// //     clearInterval(id);
// //     console.log("stopped"); 
// // },10000);
// let p=document.querySelector("p");
// let btn=document.querySelector("button");
// // p.addEventListener("click",function(e){
// // console.log(e);
// // });
// btn.addEventListener("keyup",function(event){
// console.log(event);
// });
// let form=document.querySelector("form");
// form.addEventListener("submit",function(event){
// event.preventDefault();
// let inp=document.querySelector("input");
// console.log(inp.value);
// })
// let inp=document.querySelector("input");
// let p=document.querySelector("p");
// inp.addEventListener("input",function(){
// p.innerText=this.value;
// })
// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis=document.querySelectorAll("li");
// div.addEventListener("click",function(){
//     div.style.background="black";
//     console.log("div was clicked")
// });
// ul.addEventListener("click",function(){
//     event.stopPropagation();
//     ul.style.background="black";
//     console.log("ul was clicked")
// });
// for(li of lis){
//     li.addEventListener("click",function(){
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// }




//  let inp=document.querySelector("input");
//  let btn=document.querySelector("button");
//  let ul=document.querySelector("ul");
//  btn.addEventListener("click",function(){
//     let item=document.createElement("li");
//      item.innerText=inp.value;
//     let delBtn=document.createElement("button");
//      delBtn.innerText="delete";
//      delBtn.classList.add("delete");
  
//      item.appendChild(delBtn);
//      ul.appendChild(item);
//      inp.value="";
// });

// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par=this.parentElement;
 //       par.remove();
 //    });
 //}
//  ul.addEventListener("click",function(event){
//     if(event.target.nodeName=="BUTTON"){
//        let  listItem=event.target.parentElement;
//         listItem.remove();
//     }
//  })



//simonsays game
let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let btns=["yellow","red","purple","green"];
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
   if(started==false){
      console.log("game is started");
      started=true;
      levelUp();
   }
});

function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
   btn.classList.remove("flash");
},200);
}

function userFlash(btn){
   btn.classList.add("userFlash");
   setTimeout(function(){
      btn.classList.remove("userFlash");
   },250);
   }

function levelUp(){
   userSeq=[];
level++;
h2.innerText=`Level ${level}`;
let randIdx=Math.floor(Math.random() *3);
let randColor=btns[randIdx];
let randBtn=document.querySelector(`.${randColor}`);
gameSeq.push(randColor);
console.log(gameSeq);
gameFlash(randBtn);
}

function checkAns(idx){
   //console.log(level);
   if(userSeq[idx]===gameSeq[idx]){
      if(userSeq.length===gameSeq.length){
         setTimeout(levelUp,1000);
      }
   }else{
      h2.innerHTML=`Game Over! Your score was <b>${level}</b><br>Press any key to start again`;
      document.querySelector("body").style.backgroundColor="red";
      setTimeout(function(){
         document.querySelector("body").style.backgroundColor="white";
      },250);
      reset();
   }
}

function btnPress(){
   let btn=this;
   console.log(this);
   userFlash(btn);
   userColor=btn.getAttribute("id");
   console.log(userColor);
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
btn.addEventListener("click",btnPress);
}
function reset(){
   started=false;
   gameSeq=[];
   userSeq=[];
   level=0;
}