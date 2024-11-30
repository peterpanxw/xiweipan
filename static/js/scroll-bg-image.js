const windowHeight = window.innerHeight;
const navHeadBigImg = document.querySelector('.header-bigbg');
const mainDom = document.querySelector('.wrapper');
navHeadBigImg.style.height = windowHeight+'px';
mainDom.style.top =  windowHeight +'px';
document.addEventListener('DOMContentLoaded', function() {        
    const scrollFun = () => {
        if(window.scrollY > windowHeight){
            mainDom.classList.add('scroll-fixed');
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
        window.addEventListener('scroll', scrollFun);
    },300)
});