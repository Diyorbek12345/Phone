function translate() {
  const inputText = document.getElementById("input").value;
  const targetLanguage = document.getElementById("targetLanguage").value;
  
  const url = `https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY&q=${encodeURIComponent(inputText)}&target=${targetLanguage}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const translatedText = data.data.translations[0].translatedText;
      document.getElementById("output").textContent = translatedText;
    })
    .catch(error => console.log(error));
}