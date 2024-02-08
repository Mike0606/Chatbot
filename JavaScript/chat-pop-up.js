var chatform = document.getElementById("popupForm");
var chBtn = document.getElementById("chatBtn");
var crossBtn = document.getElementById("closeBtn");


chBtn.addEventListener("click", ()=>{
    chatform.style.display="block";
})

crossBtn.addEventListener("click", ()=>{
    chatform.style.display="none";
})






    












// function openChat(){
//     document.getElementById("chat-popup").style.display="block";
// }

// function closeChat(){
//     document.getElementById("chat-popup").style.display="none";
// }
















// document.querySelector("#show-chat").addEventListener("click", function(){
//     document.querySelector("#chat-popup").classList.add("active");
// });

// document.querySelector("#chat-popup #close-btn").addEventListener("click", function(){
//     document.querySelector("#chat-popup").classList.remove("active");
// });




// function start(){
//     let res_msg=document.createElement('div');
//     res_msg.innerHTML="Hello myself Cera, How can i help you?";
//     res_msg.setAttribute("class","left");
// }
//     document.getElementById('send').addEventListener("click", async(e) =>
//     {
//         e.preventDefault();
//         var req= document.getElementById('text').value;

//         if(req==undefined || req==""){

//         }

//         else{
//             let res ="";
//             await axios.get('https://api.monkdev.com/fun/chat?msg=${req}');
//         }
//     }
//     )
