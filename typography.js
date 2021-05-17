const sentenceTag = document.querySelector(`input[type="text"]`);

// Typesize selectors
const typeSizeTag = document.querySelector(`input[name="typesize"]`);
const typeSizeOutput = document.querySelector(`span.typesize-output`);

// Lineheight selectors
const lineHeightTag = document.querySelector(`input[name="lineheight"]`);
const lineHeightOutput = document.querySelector(`span.leading-output`);

// Italic selectors
const italicTag = document.querySelector(`input[name="italic"]`);

// Color tags
const colorTags = document.querySelectorAll('div.colors div');

// Output tags
const outputTag = document.querySelector('textarea.output');
const originalText = outputTag.value;

// Type changer tags
const typefaceTag = document.querySelector(`select[name="typeface"]`);

// Font weight tags
const fontWeightTag = document.querySelector(`input[name="fontweight"]`);
const fontWeightOutput = document.querySelector(`span.fontweight-output`);

// Sentence and output logic
sentenceTag.addEventListener('keyup', function () {
    if (this.value) {
        outputTag.value = this.value; //   Value is a hidden attribute that contains the content of the input tag
    } else {
        outputTag.value = originalText;
    }
});

// Typing logic
outputTag.addEventListener('keyup', function () {
    sentenceTag.value = this.value;
});

// Typesize logic
typeSizeTag.addEventListener('input', function () {
    outputTag.style.fontSize = `${this.value}px`;
    typeSizeOutput.innerHTML = `${this.value}px`;
});

// Line-height logic
lineHeightTag.addEventListener('input', function () {
    outputTag.style.lineHeight = this.value;
    lineHeightOutput.innerHTML = this.value;
});

// Checkbox logic
italicTag.addEventListener('change', function () {
    if (this.checked) {
        outputTag.style.fontStyle = 'italic';
    } else {
        outputTag.style.fontStyle = 'normal';
    }
});

// Typeface logic
typefaceTag.addEventListener('input', function () {
    outputTag.style.fontFamily = this.value;
});

// Font-weight logic
fontWeightTag.addEventListener('input', function () {
    outputTag.style.fontWeight = this.value;
    fontWeightOutput.innerHTML = this.value;
});

// Color logic
colorTags.forEach((tag) => {
    tag.addEventListener('click', function () {
        outputTag.style.backgroundColor = this.style.backgroundColor;
        outputTag.style.color = this.style.color;

        // Add / remove class list
        colorTags.forEach((tag) => {
            tag.classList.remove('selected');
        });
        this.classList.add('selected');
    });
});
