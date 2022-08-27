var textInput=document.querySelector("textarea")
var clickTranslate=document.querySelector("#translate")
var output=document.querySelector("#output");
//input
var url= "https://api.funtranslations.com/translate/klingon.json";
function inputValue(text){
   return url + "?" + "text" + "=" + text
}

function error(error) {
  return output.innerText="Limit exceed! you can only send request 5 time in an hour"
}

//processing
function textTranslate() {
   var inputtext=textInput.value;
     fetch(inputValue(inputtext))
    .then(response=>response.json())
    .then(json=>{
      output.innerText=json.contents.translated; //output
      console.log(json)})
   .catch(error)
     
    }

clickTranslate.addEventListener("click",textTranslate);
