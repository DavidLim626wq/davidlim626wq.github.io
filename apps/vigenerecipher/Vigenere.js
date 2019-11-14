function isAlpha(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function vigenere(msg, key){
	//strip whitespace and punctuation
	var ciphertext = '';
	msg = msg.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\1-9s]/g,"").toUpperCase();
	key = key.toUpperCase();
	if (isAlpha(key) == false)
	{
		ciphertext = "Error: Key can only contain letters A-Z";
	}
	else
	{
	for(var i = 0; i < msg.length; i++){
	shift = key[i % key.length].charCodeAt(0) - 65;
	c = ((msg[i].charCodeAt(0) - 65) + shift) % 26;
	ciphertext += String.fromCharCode(c + 65);
	}
	}
	return(ciphertext)
}



$(function(){
	$('button').click(function(){
		var k = $("#key").val();
		var m = $("#plainText").val();
		ct = vigenere(m, k);
		$("#ciphertext").text(ct);
		$("#key").text(k);
		});
	});