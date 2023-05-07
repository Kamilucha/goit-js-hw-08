import throttle from 'lodash.throttle';

const refs = {
    formEl: document.querySelector('.feedback-form'),
    textareaEl: document.querySelector('textarea'),
    inputEl: document.querySelector('input')
};

// refs.textareaEl.addEventListener('input', (e) => console.log(e))


const throttleMeth = throttle(getValue, 500);
refs.formEl.addEventListener('input', throttleMeth)

function getValue() {
     console.log(refs.inputEl.value, refs.textareaEl.value)

    localStorage.setItem(feedbackKey, JSON.stringify({
        email: refs.inputEl.value,
        message: refs.textareaEl.value
    }))
}
refs.formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {
    e.preventDefault();
    console.log('ляляля тапаля');
    e.currentTarget.reset();

    localStorage.removeItem(feedbackKey);
}

const feedbackKey = "feedback-form-state"

// function loh(value) {
//     localStorage.setItem(feedbackKey, JSON.stringify(value))
// };

function getStorageValue() { 
    const value = localStorage.getItem(feedbackKey);

    if (value) {
        const parse = JSON.parse(value)
        refs.inputEl.value = parse.email;
        refs.textareaEl.value = parse.message;
    }
    console.log(value ,JSON.parse(value))
}

getStorageValue();

