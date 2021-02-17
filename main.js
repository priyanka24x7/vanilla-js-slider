
(function () {
  // Some amazing code...
  activeIndex = 0;
  const mainWrapper = document.getElementsByClassName('carousel__photo');
  console.log(mainWrapper.length);

  // Next and Prev buttons
  const next = document.getElementsByClassName('carousel__button--next')[0];
  const prev = document.getElementsByClassName('carousel__button--prev')[0];

  next.addEventListener('click', function() {
    mainWrapper[activeIndex].classList.remove('active');
    activeIndex++;
      if(mainWrapper.length > activeIndex ){
        mainWrapper[activeIndex].classList.add('active');
      }else{
        activeIndex = 0;
        mainWrapper[activeIndex].classList.add('active'); 
      }
  })
  
  prev.addEventListener('click', function() {
    // activeIndex--;
    // if(mainWrapper.length < activeIndex ){
    //     mainWrapper[activeIndex].classList.add('active');
    // }    
  })
})();