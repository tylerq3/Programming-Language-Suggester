function hideResults() {
  document.getElementById("dance").setAttribute("class", "hidden");
  document.getElementById("dogs").setAttribute("class", "hidden");
  document.getElementById("season").setAttribute("class", "hidden"); 
  document.getElementById("color").setAttribute("class", "hidden");
  document.getElementById("snake").setAttribute("class", "hidden");
}

function handleRadio(event) {
  event.preventDefault();
  const yes = document.querySelector("yes").value;
  const no = document.querySelector("no").value;
  const blue = document.querySelector("blue").value;
  const red = document.querySelector("red").value;
  const summer = document.querySelector("summer").value;
  const winter = document.querySelector("winter").value;
  const yes1 = document.querySelector("yes1").value;
  const no1 = document.querySelector("no1").value;
  const dogs = document.querySelector("dogs").value;
  const cats = document.querySelector("cats").value;


  let result;
  if (yes, blue, summer, yes1, dogs) {
    document.getElementById("swift").removeAttribute("class");
    result = "swift";
  } else if (no, red, winter, no1, cats) {
    document.getElementById("ruby").removeAttribute("class");
    result = "ruby";
  } else if (yes, red, winter, no1, dogs) {
    document.getElementById("python").removeAttribute("class");
    result = "python";

    document.getElementById("output").innerText = result; 
  }



window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
});
};
