
let listItemArray = document.querySelectorAll('.navigation-menu__link');
listItemArray.forEach(function (myBtn) {

  myBtn.addEventListener('click', function (e) {

    document.getElementById('navi-toggle').checked = false;
  });
});

//smooth scroll jquery
$('.navbar__effect').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800);
  }
});










// forEach() calls a provided callback function once for each element in an array in ascending order.
// arr.forEach(callback(currentValue [, index [, array]])[, thisArg])

/* The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

For example, this can be useful when:

Clicking on a "Submit" button, prevent it from submitting a form
Clicking on a link, prevent the link from following the URL */
