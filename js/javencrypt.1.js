// Act on form submission
$('#encrypt').submit(function(){
	input = $('#encrypttext')[0].value;
	key = $('#encryptkey')[0].value;
	encrypt(input, key);
	return false;
});

$('#decrypt').submit(function(){
	input = $('#decrypttext')[0].value;
	key = $('#decryptkey')[0].value;
	decrypt(input, key);
	return false;
});

// Encrypt
function encrypt(input, key){
	// Empty Fields
	$('#encrypttext')[0].value = "";
	$('#encryptkey')[0].value = "";
	
	// Switch Key to other Box
	$('#decryptkey')[0].value = key;
	
	// Make key length same as input lenght
	if(key.length < input.length){
		var looper = Math.floor(input.length / key.length) + 1;
		longKey = "";
		for( var k = 0; k < looper; k++ ){
			longKey += key;
		}
		key = longKey;
	}
	
	// Encrypt
	var output = [];
	
	for(var i = 0; i < input.length; i ++){
		output[i] = String.fromCharCode(input.charCodeAt(i) + key.charCodeAt(i));
	}
	
	// Place output in other box
	$('#decrypttext')[0].value = output.join("");
}

// Decrypt
function decrypt(input, key){
	// Empty Fields
	$('#decrypttext')[0].value = "";
	$('#decryptkey')[0].value = "";
	
	// Switch Key to other Box
	$('#encryptkey')[0].value = key;
	
	// Make key length same as input lenght
	if(key.length < input.length){
		var looper = Math.floor(input.length / key.length) + 1;
		longKey = "";
		for( var k = 0; k < looper; k++ ){
			longKey += key;
		}
		key = longKey;
	}
	
	// Encrypt
	var output = [];
	
	for(var i = 0; i < input.length; i ++){
		output[i] = String.fromCharCode(input.charCodeAt(i) - key.charCodeAt(i));
	}
	
	// Place output in other box
	$('#encrypttext')[0].value = output.join("");
}