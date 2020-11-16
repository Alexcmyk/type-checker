const sentenceTag = document.querySelector(`input[type="text"]`);
const outputTag = document.querySelector("textarea.output");
const originalText = outputTag.value;

// Sentence and output logic

sentenceTag.addEventListener("keyup", function () {
  if (this.value) {
    outputTag.value = this.value;
    //   Value is a hidden attribute that contains the content of the input tag
  } else {
    outputTag.value = originalText;
  }
});

// Output tag logic

outputTag.addEventListener("keyup", function () {
  sentenceTag.value = this.value;
});
