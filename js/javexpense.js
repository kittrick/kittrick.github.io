// Update Output
function updateOutput(){
	// Get Values
	
	inputs = {
		rent : $('#rent')[0].value,
		utilities : $('#utilities')[0].value,
		food : $('#food')[0].value,
		gas : $('#gas')[0].value,
		other : $('#other')[0].value,
		income : $('#income')[0].value,
		savings : $('#savings')[0].value,
		duration : $('#duration')[0].value
	};
	
	// Make sure they are good
	if( valueCheck(inputs) ) {
		text = 'Numbers only please.';
	} else {
		expenses = Number(inputs.rent)
				 + Number(inputs.utilities)
				 + Number(inputs.food)
				 + Number(inputs.gas)
				 + Number(inputs.other);
		income = Number(inputs.income);
		savings = Number(inputs.savings);
		duration = Number(inputs.duration);
		
		output = (income - expenses) / 30;
		output = output.toFixed(2);
		if(isNaN(output)){
			text = 'Please doublecheck your entry.';
		} else {
			save = savings / duration / 30;
			text = 'You should save $' + save.toFixed(2);
			text += ' of $' + output + ' per day.';
		}
	}
	
	// Put output into HTML
	$('#output p').html(text);
}

// Value Check
function valueCheck(inputs){
	x = 0;
	for(i in inputs){
		if(isNaN(inputs[i]) || inputs[i] == ''){
			x++;
		}
	}
	if(x == 8) {
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