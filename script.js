function analyzeSentiment(text) {
  let result = "";
  if(text.includes("happy") || text.includes("good") || text.includes("love")) result = "Positive 😊";
  else if(text.includes("sad") || text.includes("bad") || text.includes("angry")) result = "Negative 😢";
  else result = "Neutral 😐";

  document.getElementById("sentiment-result").innerText = "Sentiment: " + result;
  speakText("Sentiment detected: " + result);
}
