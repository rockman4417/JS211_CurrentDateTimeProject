// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)




const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element-date").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const convertToString = () => {
  let num = document.getElementById("display-element-to-string").value
  let string = num.toString()
  document.getElementById("string-display").innerHTML = string;
}


// Write a JavaScript program to convert a string to the number.
const convertToNumber = () => {
  let string = document.getElementById("display-element-to-number").value
  let num = parseInt(string)
  document.getElementById("number-display").innerHTML = num;
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
const showTypeOf = () => {
  let input = document.getElementById("type-of-input").value.toLowerCase();
  let type = typeof(input)
  if (input == "false" || input == "true") {
    type = "boolean"
  }

  else if (input === "") {
    type = "Undefined"
  }

  else if (isNaN(input) === false) {
    type = "Number"
  }




  document.getElementById("type-of-display").innerHTML = type;
}
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  

  
// Write a JavaScript program that adds 2 numbers together.

const addTwo = () => {
  let input1 = parseInt(document.getElementById("addTwo-input1").value)
  let input2 = parseInt(document.getElementById("addTwo-input2").value)
  let sum = input1 + input2;
  document.getElementById("addTwo-display").innerHTML = sum;

}

const isChecked = () => {
  // Get the checkbox
  const checkBox1 = document.getElementById("myCheck1");
  // Get the output text
  const text1 = document.getElementById("text1");
  const checkBox2 = document.getElementById("myCheck2");
  const text2 = document.getElementById("text2");

  const text3 = document.getElementById("check-booleans-display")

  // If the checkbox is checked, display the output text
  if (checkBox1.checked == true){
    text1.style.display = "block";
    text1.innerHTML = "first thing TRUE";
  } else {
    text1.innerHTML = "first thing FALSE";
  }

  // If the checkbox is checked, display the output text
  if (checkBox2.checked == true){
    text2.style.display = "block";
    text2.innerHTML = "second thing TRUE";
  } else {
    text2.innerHTML = "second thing FALSE";
  }

  if (checkBox1.checked && checkBox2.checked) {
    text3.innerHTML = "Both Things Are TRUE!"
  }
  else if (checkBox1.checked) {
    text3.innerHTML = "First Thing is TRUE!"
  }
  else if (checkBox2.checked) {
    text3.innerHTML = "Second Thing is TRUE!"
  }
  else {
    text3.innerHTML = "Both Things are FALSE!"
  }

}



// Write a JavaScript program that runs only when 2 things are true.



// Write a JavaScript program that runs when 1 of 2 things are true.



// Write a JavaScript program that runs when both things are not true.  

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
