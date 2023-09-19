// const res = document.getElementById("result");
// const toast = document.getElementById("toast");

// function calculate(value) {
//     var operand1="";
//     var i=0;
//     let len=value.length;
//     while(value[i]!='+' || value[i]!='-'|| value[i]!='x'||value[i]!='/'){
//         operand1+=value[i];
//         i++;
//     }
//     var operand2="";
//     // i=0;
//     while(i<len){
//         operand2+=value[i];
//         i++;
//     }
//     operand1=Number(operand1);
//     operand2=Number(operand2);
//     console.log(operand1);
// //   const calculatedValue = eval(value || null);
// var calculatedValue=operand1+operand2;
// console.log(calculatedValue);
//   if (isNaN(calculatedValue)) {
//     res.value = "Can't divide 0 with 0";
//     setTimeout(() => {
//       res.value = "";
//     }, 1300);
//   } else {
//     res.value = calculatedValue;
//   }
// }

// // // Swaps the stylesheet to achieve dark mode.
// // function changeTheme() {
// //   const theme = document.getElementById("theme");
// //   setTimeout(() => {
// //     toast.innerHTML = "Calculator";
// //   }, 1500);
// //   if (theme.getAttribute("href") === lightTheme) {
// //     theme.setAttribute("href", darkTheme);
// //     themeIcon.setAttribute("src", sunIcon);
// //     toast.innerHTML = "Dark Mode 🌙";
// //   } else {
// //     theme.setAttribute("href", lightTheme);
// //     themeIcon.setAttribute("src", moonIcon);
// //     toast.innerHTML = "Light Mode ☀️";
// //   }
// // }

// // Displays entered value on screen.
// function liveScreen(enteredValue) {
//   if (!res.value) {
//     res.value = "";
//   }
//   res.value += enteredValue;
// }

// //adding event handler on the document to handle keyboard inputs
// document.addEventListener("keydown", keyboardInputHandler);

// //function to handle keyboard inputs
// function keyboardInputHandler(e) {
//   // to fix the default behavior of browser,
//   // enter and backspace were causing undesired behavior when some key was already in focus.
//   e.preventDefault();
//   //grabbing the liveScreen

//   //numbers
//   if (e.key === "0") {
//     res.value += "0";
//   } else if (e.key === "1") {
//     res.value += "1";
//   } else if (e.key === "2") {
//     res.value += "2";
//   } else if (e.key === "3") {
//     res.value += "3";
//   } else if (e.key === "4") {
//     res.value += "4";
//   } else if (e.key === "5") {
//     res.value += "5";
//   } else if (e.key === "6") {
//     res.value += "6";
//   } else if (e.key === "7") {
//     res.value += "7";
//   } else if (e.key === "7") {
//     res.value += "7";
//   } else if (e.key === "8") {
//     res.value += "8";
//   } else if (e.key === "9") {
//     res.value += "9";
//   }

//   //operators
//   if (e.key === "+") {
//     res.value += "+";
//   } else if (e.key === "-") {
//     res.value += "-";
//   } else if (e.key === "*") {
//     res.value += "*";
//   } else if (e.key === "/") {
//     res.value += "/";
//   }

//   //decimal key
//   if (e.key === ".") {
//     res.value += ".";
//   }

//   //press enter to see result
//   if (e.key === "Enter") {
//     calculate(result.value);
//   }

//   //backspace for removing the last input
//   if (e.key === "Backspace") {
//     const resultInput = res.value;
//     //remove the last element in the string
//     res.value = resultInput.substring(0, res.value.length - 1);
//   }
// }


function getoperand1(){
	return document.getElementById("operand1-value").innerText;
}
function printoperand1(num){
	document.getElementById("operand1-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printoperand1("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var operand1=getoperand1();
			if(output==""&&operand1!=""){
				if(isNaN(operand1[operand1.length-1])){
					operand1= operand1.substr(0,operand1.length-1);
				}
			}
			if(output!="" || operand1!=""){
				output= output==""?output:reverseNumberFormat(output);
				operand1=operand1+output;
				if(this.id=="="){
					var result=eval(operand1);
					printOutput(result);
					printoperand1("");
				}
				else{
					operand1=operand1+this.id;
					printoperand1(operand1);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}