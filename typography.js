const sentenceTag = document.querySelector(`input[type="text"]`);

// Typesize selectors
const typeSizeTag = document.querySelector(`input[name="typesize"]`);
const typeSizeOutput = document.querySelector(`span.typesize-output`);

// Lineheight selectors
const lineHeightTag = document.querySelector(`input[name="lineheight"]`);
const lineHeightOutput = document.querySelector(`span.leading-output`);

// Italic selectors
const italicTag = document.querySelector(`input[name="italic"]`);

// Output tags
const outputTag = document.querySelector("textarea.output");
const originalText = outputTag.value;

// Type changer tags

const typefaceTag = document.querySelector(`select[name="typeface"]`);

// Sentence and output logic
sentenceTag.addEventListener("keyup", function () {
  if (this.value) {
    outputTag.value = this.value; //   Value is a hidden attribute that contains the content of the input tag
  } else {
    outputTag.value = originalText;
  }
});

// Typing logic
outputTag.addEventListener("keyup", function () {
  sentenceTag.value = this.value;
});

//  Typesize logic
typeSizeTag.addEventListener("input", function () {
  outputTag.style.fontSize = `${this.value}px`;
  typeSizeOutput.innerHTML = `${this.value}px`;
});

// Line height logic
lineHeightTag.addEventListener("input", function () {
  outputTag.style.lineHeight = this.value;
  lineHeightOutput.innerHTML = this.value;
});

// Checkbox logic
italicTag.addEventListener("change", function () {
  if (this.checked) {
    outputTag.style.fontStyle = "italic";
  } else {
    outputTag.style.fontStyle = "normal";
  }
});

// Typeface changer

typefaceTag.addEventListener("input", function () {
  outputTag.style.fontFamily = this.value;
});
