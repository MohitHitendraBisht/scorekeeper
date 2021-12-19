
var button1=document.querySelector("#ctr1")
var p1s=document.querySelector("#score1")
var score1=0

var button2=document.querySelector("#ctr2")
var p2s=document.querySelector("#score2")
var score2=0

var reset=document.querySelector("#reset")
var winner=document.querySelector("#winner")

button1.addEventListener("click",function(){
	var limit=document.querySelector("#limit").value;
	var deucelimit = limit-1;
	console.log(deucelimit)
	if (winner.textContent == "" || winner.textContent == "Advantage Player 1")  
	{
	  score1++;
	}
	if (score1==deucelimit && score2 == deucelimit && winner.textContent == "")
	{
		winner.textContent = "Deuce";
	}else if (winner.textContent == "Deuce") {
		winner.textContent = "Advantage Player 1";		
	}
	else if (winner.textContent == "Advantage Player 2")
	{
		winner.textContent = "Deuce";
	}
	p1s.textContent=score1
	if (score1==limit||(score1>score2 && score1>limit)){
		p1s.classList.add("lightyellow")
		button1.setAttribute("disabled","true")
		button2.setAttribute("disabled","true")
		
		printWinner()
	}
})

button2.addEventListener("click",function(){
	var limit=document.querySelector("#limit").value;
	var deucelimit=limit-1;
	if(winner.textContent==""||winner.textContent=="Advantage Player 2")
	{
		score2++;
	}
	if(score2==deucelimit&&score1==deucelimit&&winner.textContent=="")
	{
		winner.textContent="Deuce";
	}
	else if(winner.textContent=="Deuce")
	{
		winner.textContent="Advantage Player 2"
	}
	else if(winner.textContent=="Advantage Player 1")
	{
		winner.textContent="Deuce";
	}
	p2s.textContent=score2
	if (score2==limit||(score2>score1 && score2>limit)){
		p2s.classList.add("lightyellow")
		button1.setAttribute("disabled","true")
		button2.setAttribute("disabled","true")

		printWinner()
	}
})

reset.addEventListener("click",function(){
	button1.removeAttribute("disabled")
	button2.removeAttribute("disabled")
	p1s.classList.remove("lightyellow") 
	p2s.classList.remove("lightyellow") 
	score1=0
	score2=0
	p1s.textContent=score1
	p2s.textContent=score2
	// document.querySelector("#limit").value=21
	winner.textContent=""
})
function printWinner(){
	if(score1>score2){
		winner.textContent = "The winner is: Player 1"
	}
	else {
		winner.textContent = "The winner is: Player 2"
	}
}