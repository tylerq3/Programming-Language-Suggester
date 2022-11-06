
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
  const yes = document.querySelector("input[run='yes'");
  const no = document.querySelector("input[run='no']");
  const dog = document.querySelector("input[pets='dog']");
  const cat = document.querySelector("input[pets='cat']");
  const blue = document.querySelector("input[color='blue']");
  const red = document.querySelector("input[color='red']");
  const summer = document.querySelector("input[season='summer']");
  const winter = document.querySelector("input[season='winter']");
  const YES = document.querySelector("input[snake='yes1']");
  const NO = document.querySelector("input[snake='no1']");
  
  let result;
  if (yes && dog && blue && summer && YES)  {
    document.getElementById("python").removeAttribute("class"); 
    result = "python"
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