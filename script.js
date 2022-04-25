function displaynum(n1) {
     Calculator.text1.value = Calculator.text1.value + n1;    
}

function calc() {

     let text1 = document.querySelector("input[name='text1']")
     text1.value = eval(text1.value)
     alert(eval(text1.value))
 }



