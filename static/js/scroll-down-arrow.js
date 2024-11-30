const windowHeight = window.innerHeight;
const navHeadBigBg = document.querySelector('.header-bigbg');
const navHeadBigImg = document.querySelector('.header-bigbg img');
const navHeadArrow = document.querySelector('.header-arrow');
const mainDom = document.querySelector('.wrapper');
navHeadBigBg.style.height = windowHeight+'px';
mainDom.style.top =  windowHeight +'px';
document.addEventListener('DOMContentLoaded', function() {    
  const scrollFun = () => {  
    let scrollPercent = window.scrollY / windowHeight ;
    let scaleNum = 1 + scrollPercent * 2 / 10;
    if(scrollPercent < 1){
      navHeadBigImg.style.transform = 'scale('+scaleNum+')'
      navHeadBigBg.style.top = '-'+scrollPercent*100 + '%';
    }
    if(window.scrollY > windowHeight){
      mainDom.classList.add('scroll-fixed');
      navHeadBigImg.style.transform = 'scale(1.2)';
      navHeadBigBg.style.top = '-100%';
    }else{
      mainDom.classList.remove('scroll-fixed');
    }
  }
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  setTimeout(()=>{
    scrollFun();
    window.addEventListener('scroll', scrollFun);
  },300)
  navHeadArrow.addEventListener('click',function(){

    window.scrollTo({
      top: windowHeight,
      left: 0,
      behavior: 'smooth'
    });
  })
});