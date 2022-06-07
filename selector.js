const selectors = document.querySelectorAll('.selector');



selectors.forEach(select => {
    let currentFocusOption = -1;
    const options = select.querySelectorAll('.option');
    
    const Controler = {
        setFocusOption: (index) => {
            currentFocusOption = index;
            if (index < 0) currentFocusOption = options.length - 1;
            if (index > options.length - 1) currentFocusOption = 0;
            options[currentFocusOption].focus();
        }
    }
    const selectMenu = select.querySelector('.select-menu');
    selectMenu.addEventListener('click', () => {
        selectMenu.focus();
        select.classList.toggle('open');
    });
    selectMenu.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            select.classList.add('open');
        }
        if (e.key === 'Escape') {
            select.classList.remove('open');
        }
    })
    selectMenu.dataset.customElement = 'true';
    options.forEach((option) => {
        option.addEventListener('click', () => {
            option.parentElement.classList.remove('open');
            option.parentElement.querySelector('.text').innerText = option.innerText;
        });
        option.dataset.customElement = 'true';
        option.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                option.parentElement.querySelector('.text').innerText = option.innerText;
                option.parentElement.classList.remove('open');
            }
        })
    })

    select.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowDown') {
            Controler.setFocusOption(currentFocusOption + 1);
        }
        if (e.key === 'ArrowUp') {
            Controler.setFocusOption(currentFocusOption - 1);
        }
    })
})

const customElements = document.querySelectorAll('[data-custom-element]');
customElements.forEach((element, index) => {
    element.tabIndex = index;
});



