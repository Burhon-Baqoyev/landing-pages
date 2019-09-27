let change = document.querySelectorAll('input');
let value = '';
change.forEach(item => {
    item.addEventListener('focus', () => {
        item.previousElementSibling.className = 'lbltop';
        item.placeholder= ''
    })

    item.addEventListener('blur', () => {
        item.previousElementSibling.className = '';
        item.placeholder = item.previousElementSibling.textContent;
    })
})
