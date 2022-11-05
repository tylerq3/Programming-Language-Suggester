function hideResultsAndError() {
  document.getElementById("dancing").setAttribute("class", "hidden");
  document.getElementById("animals").setAttribute("class", "hidden");
  document.getElementById("color").setAttribute("class", "hidden");
  document.getElementById("season").setAttribute("class", "hidden");
  document.getElementById("snake").setAttribute("class", "hidden");
}

window.onload = function() {
  hideResultsAndError();

  document.querySelector("test").onsubmit = function(event) {
    event.preventDefault();
    hideResultsAndError();
function handleRadio(event) {
  event.preventDefault();
  const yes = document.querySelector("input[name='dancing']").value;
  const no = document.querySelector("input[name='dancing']").value;
  const blue = document.querySelector("input[name='color']").value;
  const red = document.querySelector("input[name='color']").value;
  const gold = document.querySelector("input[name='color']").value;
  const dogs = document.querySelector("input[name='animals']").value;
  const cats = document.querySelector("input[name='animals']").value;
  const summer = document.querySelector("input[name='season']").value;
  const winter = document.querySelector("input[name='season']").value;
  const yes1 = document.querySelector("input[name='snake']").value;
  const no1 = document.querySelector("input[name='snake']").value;

  let result;
  if (yes && no && blue && red && gold && dogs && cats && summer && winter && yes1 && no1) {
    if (yes , blue , dogs , summer , yes1) {
      document.getElementById("dancing" ,"animals" , "color" , "snake" , "season" ).removeAttribute("class");
      result = "python";
    } else if (no, blue, cats, winter, no1) {
      document.getElementById("ruby").removeAttribute("class");
      result = "ruby"
    } else if (yes, red, dogs, summer, no1) {
      document.getElementById("swift").removeAttribute("class");
      result = "swift"
    }; 

    document.getElementById("output").innerText = result; 


    window.addEventListener("load", function() {
    const form = document.getElementById("test");
    form.addEventListener("submit", handleRadio);
    });
  };
}; 
};
};