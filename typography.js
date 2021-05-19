// Sentence input selector
const sentenceTag = document.querySelector(`input[type="text"]`);

// Type changer tags
const typefaceTag = document.querySelector(`select[name="typeface"]`); // Dropdown

// Typesize selectors
const typeSizeTag = document.querySelector(`input[name="typesize"]`); // Range input
const typeSizeOutput = document.querySelector(`span.typesize-output`); // Span that shows the selection

// Letter-spacing selectors
const letterSpacingTag = document.querySelector('input[name=letter-spacing]'); // Range input
const letterSpacingOutput = document.querySelector('span.letter-spacing-output'); // Span

// Lineheight selectors
const lineHeightTag = document.querySelector(`input[name="lineheight"]`); // Range input
const lineHeightOutput = document.querySelector(`span.leading-output`); // Span

// Italic selector
const italicTag = document.querySelector(`input[name="italic"]`); // Checkbox

// Flip selector
const flipTag = document.querySelector(`input[name="flip"]`); // Checkbox

// Color tags
const colorTags = document.querySelectorAll('div.colors div'); // Colors div

// Output tags
const outputTag = document.querySelector('textarea.output'); // Textarea
const originalText = outputTag.value; // Textarea value

// Font weight tags
const fontWeightTag = document.querySelector(`input[name="fontweight"]`); // Range input
const fontWeightOutput = document.querySelector(`span.fontweight-output`); // Span

// Sentence typing logic
sentenceTag.addEventListener('keyup', function () {
  if (this.value) {
    outputTag.value = this.value; // Value is a hidden attribute that contains the content of the input tag
  } else {
    outputTag.value = originalText;
  }
});

// Typeface logic
typefaceTag.addEventListener('input', function () {
  outputTag.style.fontFamily = this.value;
});

// Typesize logic
typeSizeTag.addEventListener('input', function () {
  outputTag.style.fontSize = `${this.value}px`;
  typeSizeOutput.textContent = `${this.value}px`;
});

// Letter-spacing logic
letterSpacingTag.addEventListener('input', function () {
  outputTag.style.letterSpacing = `${this.value}px`;
  letterSpacingOutput.textContent = `${this.value}px`;
});

// Font-weight logic
fontWeightTag.addEventListener('input', function () {
  outputTag.style.fontWeight = this.value;
  fontWeightOutput.innerHTML = this.value;
});

// Line-height logic
lineHeightTag.addEventListener('input', function () {
  outputTag.style.lineHeight = this.value;
  lineHeightOutput.textContent = this.value;
});

// Italic logic
italicTag.addEventListener('change', function () {
  if (this.checked) {
    outputTag.style.fontStyle = 'italic';
  } else {
    outputTag.style.fontStyle = 'normal';
  }
});

// Italic logic
flipTag.addEventListener('change', function () {
  if (this.checked) {
    outputTag.style.transform = 'rotateY(.5turn)';
  } else {
    outputTag.style.transform = 'rotateY(0)';
  }
});

// Color logic
colorTags.forEach((tag) => {
  tag.addEventListener('click', function () {
    outputTag.style.backgroundColor = this.style.backgroundColor;
    outputTag.style.color = this.style.color;

    // Add / remove class list
    // colorTags.forEach((tag) => {
    //   tag.classList.remove('selected');
    // });
    // this.classList.add('selected');

    // If statement version
    colorTags.forEach((tag) => {
      if (tag.classList.contains('selected')) {
        tag.classList.remove('selected');
        this.classList.add('selected');
      }
    });
  });
});

// Output Typing logic
outputTag.addEventListener('keyup', function () {
  sentenceTag.value = this.value;
});
