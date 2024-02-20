var allbox=document.querySelectorAll(".box");
var turn=true;

const winner=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
allbox.forEach ((box)=>{
console.log(box);

    box.addEventListener("click",()=>{
if (turn==true) {
    box.innerHTML='O'
    turn=!turn;
}
else{
    box.innerHTML='X'
    turn=!turn;
}
box.disabled=true;
checkwimmer();
})

})
var desableallbox = ()=>{
    allbox.forEach((box)=>{
        box.disabled=true;
    })
}
const checkwimmer=()=>{
    for(pattern of winner){
       if (allbox[pattern[0]].innerHTML!="" &&  allbox[pattern[1]].innerHTML!=""  && allbox[pattern[2]].innerHTML!="" ) {
        
    
        if (allbox[pattern[0]].innerHTML==allbox[pattern[1]].innerHTML && allbox[pattern[1]].innerHTML==allbox[pattern[2]].innerHTML) {
            document.querySelector('.winner').style.display='flex';
            if (turn==true) {
                document.querySelector('.ano').innerHTML="The Winner is Player 2"

            }
            else{
                document.querySelector('.ano').innerHTML="The Winner is Player 1"
            }


            desableallbox();
        }
    }
    }
}
var newgame=()=>{
    document.querySelector('.winner').style.display='none   ';

    allbox.forEach((box)=>{
        box.innerHTML="";
        box.disabled=false;
        turn=true;
    })
}
document.querySelector('.winner').style.display='none';
