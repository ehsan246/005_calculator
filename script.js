function getNumber(num) {
	var ihistory = document.getElementById('input');
	switch(num){
		case 1:
			ihistory.value += '1';
			break;
		case 2:
			ihistory.value += '2';
			break;
		case 3:
			ihistory.value += '3';
			break;
		case 4:
			ihistory.value += '4';
			break;
		case 5:
			ihistory.value += '5';
			break;
		case 6:
			ihistory.value += '6';
			break;
		case 7:
			ihistory.value += '7';
			break;
		case 8:
			ihistory.value += '8';
			break;
		case 9:
			ihistory.value += '9';
			break;
		case 0:
			ihistory.value += '0';
			break;
	}
}


function clearSrc() {
	document.getElementById('input').value = "";
}

function getOperand(operand) {
	var ihistory = document.getElementById('input');
	switch(operand) {
			case '+':
				total()
				ihistory.value += '+';
				break;
			case '-':
				total()
				ihistory.value += '-';
				break;
			case '*':
				total()
				ihistory.value += '*';
				break;
			case '/':
				total()
				ihistory.value += '/';
				break;
	}
}



function bracket(operand) {
	var ihistory = document.getElementById('input');
	switch(operand) {
			case ')':
				ihistory.value += ')';
				break;
			case '(':
				ihistory.value += '(';
				break;
	}
}


function total() {
	var ihistory = document.getElementById('input');
	ans = Math.floor(eval(ihistory.value));
	document.getElementById('input').value = ans;
}


function backSpace1() {
	var	ihistory = document.getElementById('input');
	var	x = ihistory.value;

	if (x.length > 0) {
		// x = x.slice(0, -1);
		x = x.substring(0, x.length-1);
		// alert(x);
		ihistory.value = x;
	}
}


