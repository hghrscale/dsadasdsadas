const openBar = document.querySelector('.for-nav');
const items = document.querySelectorAll('.sidebar ul li')
const showItems = document.querySelectorAll('a')
const setOverFlow = document.querySelector('.sidebar ul')
const bar = document.querySelector('.sidebar');
openBar.addEventListener('click', (a) => {
    console.log(a);
    bar.classList.toggle('on-click');
    show(items);
    showItems.forEach(element => element.classList.toggle('show-side-bar'))
    setOverFlow.classList.toggle('on-click');
})
function show(items) {
    items.forEach(element => {
        if (element.style.visibility == 'hidden') { element.style.visibility = 'visible'; }
    })
}
