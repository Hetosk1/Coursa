const button1 = document.querySelector('.icon-faq1');
const answer1 = document.querySelector('.faq-answer1');

const button2 = document.querySelector('.icon-faq2');
const answer2 = document.querySelector('.faq-answer2');

const button3 = document.querySelector('.icon-faq3');
const answer3 = document.querySelector('.faq-answer3');

button1.addEventListener('click', () => {
    answer1.classList.toggle('hide');
    console.log(answer1.textContent);
});

button2.addEventListener('click', () => {
    answer2.classList.toggle('hide');
    console.log(answer2.textContent);
});

button3.addEventListener('click', () => {
    answer3.classList.toggle('hide');
    console.log(answer3.textContent);
});