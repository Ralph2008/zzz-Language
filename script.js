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
        case "zzzz":
           return "merci";
           break;
        case "z":
           return "je";
           break;
        case "zZz":
           return "an";
           break;
        case "ZZz":
           return "aime(r)";
           break;
        case "Z":
           return "abeille(s)";
           break;
        case "zzzzz":
           return "s'appele(r)";
           break;
	case "zzZzz":
	   return "shogi";
	   break;
        default:
          return "Sorry, a word of your sentence has no translation in zzz-language for the moment.";
      }      
}

// Other code

document.getElementById("confirm").addEventListener("click", function(){
    let Array = splitSentence(document.getElementById("atraduire").value);
    let final = [];
    for (let i = 0; i < Array.length; i++) {
        final.push(traduceWord(Array[i]));
      }
    final = final.join(" ");
    final = final[0].toUpperCase() + final.slice(1); 
    document.getElementById("result").innerHTML = final + ".";
});