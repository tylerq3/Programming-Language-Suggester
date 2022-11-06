
function hideResults() {
  document.getElementById("run").setAttribute("class" , "hidden");
  document.getElementById("pets").setAttribute("class" , "hidden");
  document.getElementById("color").setAttribute("class" , "hidden");
  document.getElementById("season").setAttribute("class" , "hidden");
  document.getElementById("snake").setAttribute("class" , "hidden");
}

//UI Logic//
function handleRadio(event) {
  event.preventDefault();
  const run = document.querySelector("input[name='run']:checked").value;
  console.log(run)
  const pets = document.querySelector("input[name='pets']:checked").value;
  const color = document.querySelector("input[name='color']:checked").value;
  const season = document.querySelector("input[name='season']:checked").value;
  const snake = document.querySelector("input[name='snake']:checked").value;


  
  
  let result;
  if (run === "yes" && pets === "dogs" && color === "blue" && season === "summer" && snake === "no1")  {
    document.getElementById("python").removeAttribute("class"); 
    result = "python"
  } else if (run === "no" && pets === "cats" && season === "winter" && color === "red" &&snake === "no1") {
    document.getElementById("ruby").removeAttribute("class");
    result = "ruby";
  } else if (run === "yes" &&pets === "cat" &&season === "summer" &&color === "red" &&snake === "no1") {
    document.getElementById("swift").removeAttribute("class");
    result = "swift";
  }



  document.getElementById("output").innerText = result; 
}

window.addEventListener("load", function() {
  const form = document.getElementById("radio-form");
  form.addEventListener("submit", handleRadio);
});