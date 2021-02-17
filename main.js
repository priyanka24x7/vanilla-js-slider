
(function () {
  // Some amazing code...
  activeIndex = 0;
  const mainWrapper = document.getElementsByClassName('carousel__photo');
  // Next and Prev buttons
  const next = document.getElementsByClassName('carousel__button--next')[0];
  const prev = document.getElementsByClassName('carousel__button--prev')[0];
  next.addEventListener('click', function() {
    mainWrapper[activeIndex].classList.remove('active');
    thumbnailWrapper.children[activeIndex].classList.remove('thumb-active'); 
    activeIndex++;
      if(mainWrapper.length > activeIndex ){
        mainWrapper[activeIndex].classList.add('active');
        thumbnailWrapper.children[activeIndex].classList.add('thumb-active');
      }else{
        activeIndex = 0;
        mainWrapper[activeIndex].classList.add('active');
      }
  })
  
  prev.addEventListener('click', function() {
    mainWrapper[activeIndex].classList.remove('active');
    if(activeIndex === 0 ){
        activeIndex = mainWrapper.length-1;
        mainWrapper[activeIndex].classList.add('active');
    } else {
        activeIndex--;
        mainWrapper[activeIndex].classList.add('active');
    }    
  })
  //Add thumbnails
  var carouselWrapper = document.getElementsByClassName('carousel')[0];
  const thumbnailWrapper = document.createElement('div');
  thumbnailWrapper.classList.add('thumbs');
  Array.prototype.forEach.call(mainWrapper, (item, index) => {
    const _img = document.createElement('img');
    _img.src= item.src;
    _img.addEventListener('click', () => {
        mainWrapper[activeIndex].classList.remove('active');
        thumbnailWrapper.children[activeIndex].classList.remove('thumb-active');
        activeIndex = index;
        mainWrapper[activeIndex].classList.add('active');
        thumbnailWrapper.children[activeIndex].classList.add('thumb-active');
    })
    thumbnailWrapper.appendChild(_img);
  });
  carouselWrapper.appendChild(thumbnailWrapper);
})()