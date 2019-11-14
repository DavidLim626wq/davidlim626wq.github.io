function isNumeric(str) {
  return /^\d+$/.test(str);
}


function luhnten(n){
	//Return true if it is a valid number
	var sum = 0;
	n = n.split("").reverse();
	for(var i = 0; i < n.length; i++){
		if (i % 2 == 1){;
			var x = parseInt(n[i])*2;
			x > 9 ? x -= 9 : x;
 			sum += x;
		}
		else{
			sum += parseInt(n[i]);
		}
	}
	return(sum % 10 == 0);
}



$(function(){
	$('button').click(function(){
		var t = luhnten($("#number").val()) ? "Valid Card" : "Invalid Card";
		$("#valid").text(t);
		});
	});