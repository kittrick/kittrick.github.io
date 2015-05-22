// Update Output
function updateOutput(){
	// Get Values
	
	inputs = {
		rent : $('#rent')[0].value,
		utilities : $('#utilities')[0].value,
		food : $('#food')[0].value,
		gas : $('#gas')[0].value,
		other : $('#other')[0].value,
		income : $('#income')[0].value	
	};
	
	// Make sure they are good
	if( valueCheck(inputs) ) {
		output = 'Numbers only please.';
	} else {
		expenses = Number(inputs.rent)
				 + Number(inputs.utilities)
				 + Number(inputs.food)
				 + Number(inputs.gas)
				 + Number(inputs.other);
		income = Number(inputs.income);
		output = (income - expenses)/30;
		output = output.toFixed(2);
		if(isNaN(output)){
			output = 'Please doublecheck your entry.';
		} else {
			output = '$' + output + ' per day.';
		}
	}
	
	// Put output into HTML
	$('#output p').html(output);
}

// Value Check
function valueCheck(inputs){
	x = 0;
	for(i in inputs){
		if(isNaN(inputs[i]) || inputs[i] == ''){
			x++;
		}
	}
	if(x == 5) {
		return true;
	} else {
		return false;
	}
}

// Act on input update
$(function(){
	$('#expenses').keyup(function(){
		updateOutput();
	});
	$('#income').keyup(function(){
		updateOutput();
	});
});