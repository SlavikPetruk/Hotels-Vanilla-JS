document.querySelector('.menu-icon-wrapper').onclick =  () => {

    document.querySelector('.menu-icon').classList.toggle('menu-icon-active')
    document.querySelector('aside').classList.toggle('sidebar--mobile-active')
}

document.querySelector('.btn__more')
            .addEventListener('click',  () => {
                document.querySelectorAll('.card-link--hidden')
                            .forEach(card => card.classList.remove('card-link--hidden'))
              
            })

/* Показати/приховати контент усередині віджетів */
document.querySelectorAll('.widget').forEach(widget => {
    widget.addEventListener('click', (e) => {
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active')
            e.target.nextElementSibling.classList.toggle('widget__body--hidden')
        }
    })
})

/* Віджет "1" - кнопка any */
const checkBoxAny = document.querySelector('#location-05')
const locationCheck = document.querySelectorAll('[data-location]')

checkBoxAny.addEventListener('change', () => {
    if (checkBoxAny.checked) {
        locationCheck.forEach(item => item.checked = false)
        checkBoxAny.checked = true
    }
})

// Відключаємо кнопку "any", при виборі інших параметрів
locationCheck.forEach(item => item.addEventListener('change', () => checkBoxAny.checked = false))


/* Показати додаткові опції з чекбоксами у фільтрі */
const showMoreOption = document.querySelector('.widget__btn-show-hidden')
const hiddenCheckBoxes = document.querySelectorAll('.checkbox--hidden')

showMoreOption.onclick = e => {
    e.preventDefault()

    if (showMoreOption.dataset.options == 'hidden') { 
        hiddenCheckBoxes.forEach(item => item.style.display = 'block')
        showMoreOption.innerHTML = 'Hidden'
        showMoreOption.dataset.options = 'visible'

    } 
    else if (showMoreOption.dataset.options == 'visible') {
        hiddenCheckBoxes.forEach(item => item.style.display = 'none')
        showMoreOption.innerHTML = 'Show more'
        showMoreOption.dataset.options = 'hidden'
    }
}