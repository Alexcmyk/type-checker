const sentenceTag = document.querySelector(`input[type="text"]`);
const typeSizeTag = document.querySelector(`input[name="typesize"]`);
const typeSizeOutput = document.querySelector(`.typesize-output`);
const outputTag = document.querySelector("textarea.output");
const originalText = outputTag.value;

// Sentence and output logic

sentenceTag.addEventListener("keyup", function () {
  if (this.value) {
    outputTag.value = this.value; //   Value is a hidden attribute that contains the content of the input tag
  } else {
    outputTag.value = originalText;
  }
});

// Output tag logic

outputTag.addEventListener("keyup", function () {
  sentenceTag.value = this.value;
});

//  Type size logic
typeSizeTag.addEventListener("input", function () {
  outputTag.style.fontSize = `${this.value}px`;
  typeSizeOutput.innerHTML = `${this.value}px`;
});
