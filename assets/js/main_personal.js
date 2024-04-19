const image = document.getElementById('myImage');
const filterSelect = document.getElementById('filterSelect');
// console.log(image)
// console.log(filterSelect)
filterSelect.addEventListener('change', function() {
    const selectedFilter = this.value;
    image.style.filter = selectedFilter;
    // console.log(image)
});
const fontSelect = document.getElementById('fontSelect');
const body = document.querySelector('main');

fontSelect.addEventListener('change', function() {
    const selectedFont = this.value;
    body.style.fontFamily = selectedFont;
});
