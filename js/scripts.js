function hideResultsAndError() {
  document.getElementById("dancing").setAttribute("class", "hidden");
  document.getElementById("animals").setAttribute("class", "hidden");
  document.getElementById("color").setAttribute("class", "hidden");
  document.getElementById("season").setAttribute("class", "hidden");
  document.getElementById("snake").setAttribute("class", "hidden");
}

window.onload = function() {
  hideResultsAndError();

  window.addEventListener("load", function() {
    document.getElementById("radio-form").addEventListener("submit", handleRadio);
  });
  


function handleRadio(event) {
  event.preventDefault();
  const yes = document.querySelector("input[value='dancing']").value;
  const no = document.querySelector("input[name='dancing']").value;
  const blue = document.querySelector("input[name='color']").value;
  const red = document.querySelector("input[name='color']").value;
  const gold = document.querySelector("input[name='color']").value;
  const dogs = document.querySelector("input[value='animals']").value;
  const cats = document.querySelector("input[name='animals']").value;
  const summer = document.querySelector("input[name='season']").value;
  const winter = document.querySelector("input[name='season']").value;
  const yes1 = document.querySelector("input[name='snake']").value;
  const no1 = document.querySelector("input[name='snake']").value;

  let result;
  if (age && height) {
    if () {
      document.getElementById("python").removeAttribute("class");
      result = "python";
    } else if () {
      document.getElementById("ruby").removeAttribute("class");
      result = "ruby"
    } else if () {
      document.getElementById("swift").removeAttribute("class");
      result = "swift"
    }; 
