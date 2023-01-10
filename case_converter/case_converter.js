// Get all buttons
let buttonToUpperCase = document.getElementById("upper-case");
let buttonToLowerCase = document.getElementById("lower-case");
let buttonToProperCase = document.getElementById("proper-case");
let buttonToSentenceCase = document.getElementById("sentence-case");
let buttonToDownload = document.getElementById("save-text-file");

// Add EventListener to Buttons
buttonToUpperCase.addEventListener("click", function() {
    let textInput = document.querySelector("textarea");
    textInput.value = textInput.value.toUpperCase();
})

buttonToLowerCase.addEventListener("click", function() {
    let textInput = document.querySelector("textarea");
    textInput.value = textInput.value.toLowerCase();
})

buttonToProperCase.addEventListener("click", function() {
    let textInput = document.querySelector("textarea");
    let arr = textInput.value.toLowerCase().split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    textInput.value = arr.join(" ");
})

buttonToSentenceCase.addEventListener("click", function() {
    let textInput = document.querySelector("textarea");
    let arr = textInput.value.toLowerCase().split(". ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    textInput.value = arr.join(". ");
})

buttonToDownload.addEventListener("click", function() {
    let textInput = document.querySelector("textarea");
    download("text.txt", textInput.value);
})

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }