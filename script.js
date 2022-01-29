//Functions

function splitSentence(sentence){
    return (sentence.split(' '));
}

function traduceWord(word){
    switch (word) {
        case "zZ":
          return "oui";
          break;
        case "Zz":
          return "non";
          break;
        case "Zz":
          return "non";
          break;
        case "zzz":
            return "bonjour";
            break;
        case "ZZZ":
            return "au revoir";
            break;
        case "ZZ":
            return "s'il te plaît";
            break;
        case "z":
            return "de rien";
            break;
        case "zzzz":
            return "Merci";
            break;
        default:
          return "Sorry, a word of your sentence has no translation in zzz-language for the moment.";
      }      
}

// Other code

document.getElementById("confirm").addEventListener("click", function(){
    document.getElementById("result").innerHTML = traduceWord(document.getElementById("atraduire").value);
});