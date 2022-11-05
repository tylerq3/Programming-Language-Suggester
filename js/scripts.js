function hideResults() {
  document.getElementById("yes").setAttribute("class", "hidden");
  document.getElementById("no").setAttribute("class", "hidden");
  document.getElementById("red").setAttribute("class", "hidden");
  document.getElementById("blue").setAttribute("class", "hidden");
  document.getElementById("winter").setAttribute("class", "hidden");
  document.getElementById("summer").setAttribute("class", "hidden");
  document.getElementById("dog").setAttribute("class", "hidden");
  document.getElementById("cats").setAttribute("class", "hidden");
  document.getElementById("yes1").setAttribute("class", "hidden");
  document.getElementById("no1").setAttribute("class", "hidden");
}

//UI Logic//
function handleRadio(event) {
  event.preventDefault();
  const input1 = document.querySelector("input[name='dancing']").value;
  const input2 = document.querySelector("input[name='animals']").value;
  const input3 = document.querySelector("input[name='color']").value;
  const input4 = document.querySelector("input[name='season']").value;
  const input5 = document.querySelector("input[name='snake']").value;
}
window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
});
  let result;
  if ("yes", "blue" , "winter", "dogs" , "yes1") {
    document.getElementById("ruby").removeAttribute("class");
    result = "ruby";
  } else if ("no" , "red" , "summer", "cats", "no1" ) {
    document.getElementById("swift").removeAttribute("class");
    result = "swift";
  } else if ("yes", "blue" , "summer" , "dogs" , "no1") {
    document.getElementById("python").removeAttribute("class");
    result = "python";
  }



  document.getElementById("output").innerText = result; 


window.addEventListener("load", function() {
  const form = document.getElementById("tests");
  form.addEventListener("submit", handleRadio);
});