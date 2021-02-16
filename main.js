
(function () {
  // Some amazing code...
  const mainWrapper = document.getElementsByClassName('carousel__photo');
  console.log(mainWrapper);

  // Next and Prev buttons
  const next = document.getElementsByClassName('carousel__button--next')[0];
  const prev = document.getElementsByClassName('carousel__button--prev')[0];

  next.addEventListener('click', function() {
    mainWrapper[0].classList.remove('active');
    mainWrapper[1].classList.add('active');
  })
})();