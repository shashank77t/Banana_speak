var textinput=document.querySelector("#text-input");
var button=document.querySelector("#translate-btn");
var textopt=document.querySelector("#output");
var serverAPI = "https://api.funtranslations.com/translate/minion.json";
function replaceSpacesManually(inputString) {
   
    let result = '';
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === ' ') {
            result += '%20';
        } else {
            result += inputString[i];
        }
    }
   
    return result;
}
function geturl(input) {
  return serverAPI + "?" + "text=" + replaceSpacesManually(input);
}
function errorhandle(error) {
  console.log(error);
  alert("Something  went wrong with server. Please try again");
}
function clickHandle() {
  var inputvalue = textinput.value;
  fetch(geturl(inputvalue))
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      textopt.innerText = result.contents.translated;
    })
    .catch(errorhandle);
}

button.addEventListener("click", clickHandle);