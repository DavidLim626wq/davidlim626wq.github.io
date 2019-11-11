function vigenere(str, key){
	//strip whitespace and punctuation
	var ciphertext = '';
	str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"").toUpperCase();
	for(var i = 0; i < str.length; i++){
	shift = key[i % key.length].charCodeAt(0) - 65;
	c = ((str[i].charCodeAt(0) - 65) + shift) % 26;
	ciphertext += String.fromCharCode(c + 65);
	}
	return(ciphertext)
}

$(function(){
	$('button').click(function(){
		var k = $("#key").val();
		var m = $("#plainText").val();
		ct = vigenere(m, k);
		$("#ciphertext").text(ct);
		});
	});