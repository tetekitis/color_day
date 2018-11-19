let color = ['BLUE', 'GREEN', 'RED', 'ORANGE', 'VIOLET', 'INDIGO', 'YELLOW'];
let o = ['th', 'st','nd','rd'];

let colorAdd = [];
	for (i = 0; i < color.length; i++) {
		if(i<3){
			document.getElementById("h1Id").innerHTML +=  ` 
		 ${i+1}${o[i+1]}  choice  is  ${color[i]} <br>`;
		}else{
			document.getElementById("h1Id").innerHTML +=  ` 
		 ${i+1}${o[0]} 	 choice  is  ${color[i]} <br>`;
		}
		
	}