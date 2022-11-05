
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
  const yes = document.querySelector("input[name='yes']");
  const no = document.querySelector("input[name='no']");
  const dog = document.querySelector("input[name='dog']");
  const cat = document.querySelector("input[name='cat']");
  const blue = document.querySelector("input[name='blue']");
  const red = document.querySelector("input[name='red']");
  const summer = document.querySelector("input[name='summer']");
  const winter = document.querySelector("input[name='winter']");
  const YES = document.querySelector("input[name='yes1']");
  const NO = document.querySelector("input[name='no1']");
  
  let result;
  if ("snake"===yes && "season"===summer && "color"===blue && "pets"===dog && "run"===yes) {
    document.getElementById("python").removeAttribute("class");
    result = "python"; 
  } else if (no && cat && winter && red && NO) {
    document.getElementById("ruby").removeAttribute("class");
    result = "ruby";
  } else if (yes && cat && summer && red && NO) {
    document.getElementById("swift").removeAttribute("class");
    result = "swift";
  }



  document.getElementById("output").innerText = result; 
}

window.addEventListener("load", function() {
  const form = document.getElementById("radio-form");
  form.addEventListener("submit", handleRadio);
});