let player="player1";

function affiche(id){
	$classe = document.getElementById(event.target.id);
	if(player=="player1" && $classe.classList!="player1" && $classe.classList!="player2"){	
		$classe.classList.toggle("player1");
		gagner();
		if(win){
			alert("Le joueur 1 a gagner");
			refresh.click();
		}
		player="player2";

	}else if(player=="player2" && $classe.classList!="player1" && $classe.classList!="player2"){
		$classe.classList.toggle("player2");
		gagner();
		if(win){
			alert("Le joueur 2 a gagner");
			refresh.click();
		}
		player="player1";
	};
}

var win = false;

function gagner(){
	x1y1=document.getElementById('x1y1');
	x2y1=document.getElementById('x2y1');
	x3y1=document.getElementById('x3y1');
	x1y2=document.getElementById('x1y2');
	x2y2=document.getElementById('x2y2');
	x3y2=document.getElementById('x3y2');
	x1y3=document.getElementById('x1y3');
	x2y3=document.getElementById('x2y3');
	x3y3=document.getElementById('x3y3');

	if((x1y1.classList.contains("player1") && x2y1.classList.contains("player1") && x3y1.classList.contains("player1")) 
		|| (x1y2.classList.contains("player1") && x2y2.classList.contains("player1") && x3y2.classList.contains("player1")) 
		  || (x1y3.classList.contains("player1") && x2y3.classList.contains("player1") && x3y3.classList.contains("player1"))
			 ||

	   (x1y1.classList.contains("player1") && x1y2.classList.contains("player1") && x1y3.classList.contains("player1")) ||
	   (x2y1.classList.contains("player1") && x2y2.classList.contains("player1") && x2y3.classList.contains("player1")) ||
	   (x3y1.classList.contains("player1") && x3y2.classList.contains("player1") && x3y3.classList.contains("player1")) ||

	   (x1y1.classList.contains("player1") && x2y2.classList.contains("player1") && x3y3.classList.contains("player1")) ||
	   (x1y3.classList.contains("player1") && x2y2.classList.contains("player1") && x3y1.classList.contains("player1")))
		{
			return win=true;	   
	 		

	   }else if((x1y1.classList.contains("player2") && x2y1.classList.contains("player2") && x3y1.classList.contains("player2")) ||
	   (x1y2.classList.contains("player2") && x2y2.classList.contains("player2") && x3y2.classList.contains("player2")) ||
	   (x1y3.classList.contains("player2") && x2y3.classList.contains("player2") && x3y3.classList.contains("player2")) ||

	   (x1y1.classList.contains("player2") && x1y2.classList.contains("player2") && x1y3.classList.contains("player2")) ||
	   (x2y1.classList.contains("player2") && x2y2.classList.contains("player2") && x2y3.classList.contains("player2")) ||
	   (x3y1.classList.contains("player2") && x3y2.classList.contains("player2") && x3y3.classList.contains("player2")) ||

	   (x1y1.classList.contains("player2") && x2y2.classList.contains("player2") && x3y3.classList.contains("player2")) ||
	   (x1y3.classList.contains("player2") && x2y2.classList.contains("player2") && x3y1.classList.contains("player2")))
	   {	   
	   		return win=true;
	   		
	    };	   
}