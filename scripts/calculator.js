function input(element){
	/*keypad 버튼을 눌렀을 때 
	0. 처음의 0은 사라진다.-->조금 어려워서 아무 문자열도 입력되지 않은 상태일 때를 먼저 구현함.
	
	1. 버튼이 눌렸을 때 버튼 내용을 인식한다.
	2-1. 숫자, 소수점, 괄호라면 input/text에 해당 내용이 입력된다.
	2-2. 연산자라면 -> 제한조건을 판단 후, 입력한다.-->제한조건 판단 아직 구현 못함.
	2-2. CE라면 input/text내용을 ""으로 만든다.
	2-3. =이 눌리면 현재까지의 내용을 연산한다.
	2-3-1. 결과값 내용을 연산값으로 바꾼다.
	*/

	let value = element.value;
	let resultElement = document.getElementById("result");
	/*if(resultElement.value == "0" ){
		resultElement.value = "";
	}*/
	if (value=="CE"){
		/*resultElement.value = "0";*/
		resultElement.value = "";
	} else if(value=="="){
		resultElement.value = eval(resultElement.value);
	} else {
		resultElement.value += value;
	}



}