var b = document.getElementById("bol");
var i = document.getElementById("ita");
var t = document.getElementById("textare");

b. onclick = function(){
if(t.style.fontWeight == 400){
    t. style.fontWeight = 700;
    }else{
        t. style.fontWeight = 400;
    }
}

i. onclick = function(){
if(t.style.fontStyle == "normal"){
    t. style.fontStyle = "italic";
    }else{
        t. style.fontStyle = "normal";
    }
}
    

$(".menu").click(function (){
    $(".navbar").toggle(1000);
    
})
$(".bck").click(function (){
    $(".navbar").toggle(1000);
    
})


function ui(){

var op =document.getElementById("chat");
var opo =document.getElementById("opo");

var crEle= document.createElement("li");

crEle.innerHTML=op.value+"</br>";
crEle.classList.add("bo");
opo.appendChild(crEle);

var d = new Date();
var h = d.getHours();

var crEe= document.createElement("li");
crEe.classList.add("poo");
opo.appendChild(crEe);
    
function gr(){

    if(op.value==""){
     responsiveVoice.speak("Please enter something");
    crEle.innerHTML+= "Please enter something";
    return false;
    }
   else if(op.value == "Good morning" ||op.value == "good morning" || op.value ==  " Good morning" || op.value == "Good Morning" || op.value == "Good morning " ){
    
    
    
     if(h >=12 && h <= 15){
     
     responsiveVoice.speak("Its not morning its afternoon");
        crEe.innerHTML += "Its not morning its afternoon"+"</br>";
        return false;
    }else if(h >= 16 && h <= 20){
        responsiveVoice.speak("Its not morning its evening");
        crEe.innerHTML += "Its not morning its evening"+"</br>";
        return false;
    }else if(h >= 21 && h <= 23){
 responsiveVoice.speak("Its not morning its night");
        crEe.innerHTML += "Its not morning  its night"+"</br>";
        return false;
    }else if(h >= 00 && h <= 3){
    
    
responsiveVoice.speak("Its not morning its night");
crEe.innerHTML += "Its not morning  its night";

        
        return false;
    }
    else{
responsiveVoice.speak("very good morning");
        crEe.innerHTML += "Very Good morning"+"</br>";
        return false
    }
    
    
    }
    
    
   else if(op.value == "Good afternoon" ||op.value == "good afternoon" || op.value == " Good afternoon" || op.value == "Good Afternoon" || op.value == "Good afternoon " ){
    
    if(h >=3 && h <= 11){
responsiveVoice.speak("Its not afternoon its morning");
        crEe.innerHTML += "Its not afternoon its morning"+"</br>";
        return false;
    }else if(h >= 16 && h <= 20){
responsiveVoice.speak("Its not afternoon its evening");
        crEe.innerHTML += "Its not afternoon its evening"+"</br>";
        return false;
    }else if(h >= 21 && h <= 23){
responsiveVoice.speak("Its not afternoon its night");
        crEe.innerHTML += "Its not afternoon  its night"+"</br>";
        return false;
    }else if(h >= 00 && h <= 3){
responsiveVoice.speak("Its not afternoon its night");
        crEe.innerHTML += "Its not afternoon its night"+"</br>";
        return false;
    }
    else{
responsiveVoice.speak("Very Good afternoon");
        crEe.innerHTML += "Very Good afternoon"+"</br>";
    }
    
    }
    
    
   else if(op.value == "Good evening" ||op.value == "good evening" ||  op.value == " Good evening" || op.value == "Good Evening" || op.value == "Good evening " ){
    
    if(h >=3 && h <= 11){
responsiveVoice.speak("Its not evening its morning");
        crEe.innerHTML += "Its not evening its morning"+"</br>";
        return false;
    }else if(h >= 12 && h <= 15){
responsiveVoice.speak("Its not evening its afternoon");
        crEe.innerHTML += "Its not evening its afternoon"+"</br>";
        return false;
    }else if(h >= 21 && h <= 23){
responsiveVoice.speak("Its not evening its night");
        crEe.innerHTML += "Its not evening  its night"+"</br>";
        return false;
    }else if(h >= 00 && h <= 3){
responsiveVoice.speak("Its not evening its night");
        crEe.innerHTML += "Its not evening its night"+"</br>";
        return false;
    }
    else{

responsiveVoice.speak("Very Good evening");
        crEe.innerHTML += "Very Good evening"+"</br>";
    }
    
    }
    
    
   else if(op.value == "Good night" ||op.value == "good night" ||  op.value == " Good night" || op.value == "Good Night" || op.value == "Good night " ){
    
    if(h >=3 && h <= 11){
responsiveVoice.speak("Its not night its morning");
        crEe.innerHTML += "Its not night its morning"+"</br>";
        return false;
    }else if(h >= 12 && h <= 15){
responsiveVoice.speak("Its not night its afternoon");
        crEe.innerHTML += "Its not night its afternoon"+"</br>";
        return false;
    }else if(h >= 16 && h <= 20){
responsiveVoice.speak("Its not night its evening");
        crEe.innerHTML += "Its not night its evening"+"</br>";
        return false;
    }
    else{
responsiveVoice.speak("Good night sweet dreams");
        crEe.innerHTML += "Good night sweet dreams"+"</br>";
    }
    
    }
    else if(op.value == "Hello" ||op.value == "Hi" ||op.value == "hi" ||  op.value == "hello" || op.value == "Hello " || op.value == "hello " ){
    responsiveVoice.speak("Hello");
           crEe.innerHTML += "Hello"+"</br>";
    }else if(op.value == "who are you" ||op.value == "Who are you " ||  op.value == "what is your name " || op.value == "what can you do " || op.value == "what can you do" ){
    responsiveVoice.speak("Myself jack i am a bot, I can do few things to know more about me more press ?");
           crEe.innerHTML += "Myself jack i am a bot, I can do few things to know more about me more press ?"+"</br>";
    
    }
    else{
responsiveVoice.speak("Sorry cant understand???");
        crEe.innerHTML += "Sorry cant understand???"+"</br>";
    }
    
}
setTimeout(gr,2000);
    
}

$(".help").click(function (){
 $(".bot").toggle(1000);
 
})

function Ale(){
swal("JaCk HeLp", "*I can Greet You morning afternoon evening as well as night....*I can say 'who I am','Hi' that's it this is a limited edition so please dont expect more things from me", "success")
}