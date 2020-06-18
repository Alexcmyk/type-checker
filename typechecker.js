const sentenceTag = document.querySelector(`input[type="text"]`);
const outputTag = document.querySelector("textarea.output");

const typesizeTag = document.querySelector(`input[name="typesize"]`);
const typesizeOutput = document.querySelector(`span.typesize-output`);

const fontWeightTag = document.querySelector(`input[name="fontWeight"]`)
const fontweightOutput = document.querySelector(`span.fontWeight-output`)

const leadingTag = document.querySelector('input[name="leading"]');
const leadingOutput = document.querySelector('span.leading-output');

const originalText = outputTag.value;


sentenceTag.addEventListener("keyup", function () {
  if (this.value) {
    outputTag.value = this.value;
  } else {
    outputTag.value = originalText;
  }
});

outputTag.addEventListener('keyup', function () {
  if (this.value) {
    sentenceTag.value = this.value;
  } else {
    sentenceTag.value = "";
  }
})

// typeface

// typesize

typesizeTag.addEventListener('input', function () {
  outputTag.style.fontSize = `${this.value}px`;
  typesizeOutput.innerHTML = `${this.value}px`;
})

// fontweight

fontWeightTag.addEventListener('input', function () {
  outputTag.style.fontWeight = `${this.value}`;
  fontweightOutput.innerHTML = `${this.value}`;
})

// leading

leadingTag.addEventListener('input', function () {
  outputTag.style.lineHeight = `${this.value}`;
  leadingOutput.innerHTML = `${this.value}`;
})

// add italic

// color
