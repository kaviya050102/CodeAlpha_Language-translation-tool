async function translateText() {


    let text = document.getElementById("inputText").value;

    let source = document.getElementById("sourceLanguage").value;

    let target = document.getElementById("targetLanguage").value;



    if(text.trim() === "") {

        alert("Please enter text");

        return;

    }



    let url =
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${source}|${target}`;



    try {


        let response = await fetch(url);

        let data = await response.json();


        document.getElementById("outputText").value =
        data.responseData.translatedText;


    }


    catch(error) {


        alert("Translation failed");

        console.log(error);

    }


}




function copyText() {


    let text =
    document.getElementById("outputText").value;


    navigator.clipboard.writeText(text);


    alert("Copied successfully");


}





function speakText() {


    let text =
    document.getElementById("outputText").value;


    if(text === "") {

        alert("No text available");

        return;

    }


    let speech =
    new SpeechSynthesisUtterance(text);


    window.speechSynthesis.speak(speech);


}