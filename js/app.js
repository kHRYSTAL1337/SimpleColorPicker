/*

*/
const pickColorButton = document.querySelector('.randomColor');
const codeColor = document.querySelector('.codeColor');


/*

*/
let randomColor = () => {
    return Math.floor(Math.random() * (256));
};

/*

*/
pickColorButton.addEventListener('click', () => {
    event.preventDefault();

    let r = randomColor();
    let g = randomColor();
    let b = randomColor();

    let color = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
    document.body.style.backgroundColor = color;
    codeColor.textContent = color;

});