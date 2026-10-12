const textarea = document.querySelector('#textarea1');

function formatText(action) {
    switch (action) {
        case 'bold':
            textarea.style.fontWeight = textarea.style.fontWeight === 'bold' ? 'normal' : 'bold';
            break;
        case 'italic':
            textarea.style.fontStyle = textarea.style.fontStyle === 'italic' ? 'normal' : 'italic';
            break;
        case 'left':
        case 'center':
        case 'right':
            textarea.style.textAlign = action;
            break;
        case 'upper':
            textarea.value = textarea.value.toUpperCase();
            break;
        case 'lower':
            textarea.value = textarea.value.toLowerCase();
            break;
        case 'capitalize':
            textarea.value = textarea.value.replace(/\b\w/g, char =>
                char.toUpperCase()
            );
            break;
        case 'clear':
            cleartextAreaProperty()
    }
}

function cleartextAreaProperty() {
    textarea.style.fontWeight = "normal";
    textarea.style.textAlign = "left";
    textarea.style.fontStyle = 'normal'
    document.querySelector('#textarea1').value = ''
};


// One event listener for all buttons
document.querySelector('.btn__Section').addEventListener('click', (event) => {
    const action = event.target.closest('button')?.dataset.action;
    if (action) {
        formatText(action);
    }
});