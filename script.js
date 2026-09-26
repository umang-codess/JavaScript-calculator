let input = document.querySelector(".input");
let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {

  button.addEventListener("click", (e) => {

    let value = e.target.innerText;

    if (value === "C") {

      input.value = "";

    } 
    
    else if (value === "=") {

      try {
        input.value = eval(input.value);
      } catch {
        input.value = "Error";
      }

    } 
    
    else {

      input.value = input.value + value;

    }

  });

});