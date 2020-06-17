const sentenceTag = document.querySelector(`input[type="text"]`);
const outputTag = document.querySelector("section.output");

sentenceTag.addEventListener("keyup", function () {
  outputTag.innerHTML = this.value;
});
