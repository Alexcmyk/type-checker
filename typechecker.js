const sentenceTag = document.querySelector(`input[type="text"]`);

const typefaceTag = document.querySelector(`select[name="typeface"]`);

const typesizeTag = document.querySelector(`input[name="typesize"]`);
const typesizeOutput = document.querySelector(`span.typesize-output`);

const fontweightTag = document.querySelector(`input[name="fontweight"]`);
const fontweightOutput = document.querySelector(`span.fontweight-output`);

const spacingTag = document.querySelector(`input[name="spacing"]`);
const spacingOutput = document.querySelector(`span.spacing-output`);

const leadingTag = document.querySelector('input[name="leading"]');
const leadingOutput = document.querySelector('span.leading-output');

const italicTag = document.querySelector(`input[name="italic"]`)

const colorTag = document.querySelectorAll(`div.colors div`)

const outputTag = document.querySelector("textarea.output");
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

typefaceTag.addEventListener(`input`, function () {
  outputTag.style.fontFamily = this.value;
})

// typesize

typesizeTag.addEventListener('input', function () {
  outputTag.style.fontSize = `${this.value}px`;
  typesizeOutput.innerHTML = `${this.value}px`;
})

// fontweight

fontweightTag.addEventListener('input', function () {
  outputTag.style.fontWeight = this.value;
  fontweightOutput.innerHTML = this.value;
})

// leading

leadingTag.addEventListener('input', function () {
  outputTag.style.lineHeight = `${this.value}`;
  leadingOutput.innerHTML = `${this.value}`;
})

// letter spacing

spacingTag.addEventListener(`input`, function () {
  outputTag.style.letterSpacing = `${this.value}px`;
  spacingOutput.innerHTML = `${this.value}px`;
})

// italic

italicTag.addEventListener('change', function () {
  if (this.checked) {
    outputTag.style.fontStyle = "italic";
  } else {
    outputTag.style.fontStyle = "normal";
  }
})

// color

colorTag.forEach(tag => {
  tag.addEventListener('click', function () {
    outputTag.style.backgroundColor = this.style.backgroundColor;
    outputTag.style.color = this.style.color;

    //reset the classes
    colorTag.forEach(tag => {
      tag.classList.remove('selected');
    })

    this.classList.add('selected');
  })
})