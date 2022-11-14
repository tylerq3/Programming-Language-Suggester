
function hideResults() {
  document.getElementById("error").setAttribute("class" , "hidden");
  document.getElementById("python").setAttribute("class" , "hidden");
  document.getElementById("swift").setAttribute("class" , "hidden");
  document.getElementById("ruby").setAttribute("class" , "hidden");
  document.getElementById("radio-form").removeAttribute("class", "hidden");
  document.getElementById("reset").setAttribute("class" , "hidden");
  document.getElementById("results").setAttribute("class", "hidden");
}

//UI Logic//
function handleRadio(event) {
  event.preventDefault();
  const run = document.querySelector("input[name='run']:checked").value;
  const pets = document.querySelector("input[name='pets']:checked").value;
  const color = document.querySelector("input[name='color']:checked").value;
  const season = document.querySelector("input[name='season']:checked").value;
  const snake = document.querySelector("input[name='snake']:checked").value;
  document.getElementById("radio-form").setAttribute("class" , "hidden");
  document.getElementById("reset").removeAttribute("class", "hidden");
  document.getElementById("results").removeAttribute("class", "hidden");

  let result;
  if (run === "yes" && pets === "dogs" && color === "blue" && season === "summer" && snake === "no1")  {
    document.getElementById("python").removeAttribute("class"); 
    result = "python"
  } else if (run === "no" && pets === "cats" && season === "winter" && color === "red" &&snake === "no1") {
    document.getElementById("ruby").removeAttribute("class");
    result = "ruby";
  } else if (run === "yes" && pets === "cats" && season === "summer" && color === "red" &&snake === "no1") {
    document.getElementById("swift").removeAttribute("class");
    result = "swift";
  } else {
    document.getElementById("error").removeAttribute("class");
  }
 
}

window.addEventListener("load", function() {
  const form = document.getElementById("radio-form");
  form.addEventListener("submit", handleRadio);
  const reset = document.getElementById("reset")
  reset.addEventListener("click", hideResults);
 

  document.getElementById("reset").value = "";
  



});





