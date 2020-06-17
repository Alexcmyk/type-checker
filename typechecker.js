const sentenceTag = document.querySelector(`input[type="text"]`);
const outputTag = document.querySelector("section.output p");

sentenceTag.addEventListener("keyup", function () {
  outputTag.innerHTML = this.value;
});
