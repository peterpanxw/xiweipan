---
title: 'English Gallery'
date: ''
---
## Moments
<link rel="stylesheet" href="/css/add.css">
<main class="content">
  <div class="list-page">
    <h2 id="moments">Moments</h2>
    <link rel="stylesheet" href="./css/add.css">
    <p>
      <font size="6">September 2024</font>
    </p>
    <br>
    <div class="publications">
      <div class="publis-list">
        <div class="publis-item">
          <div class="item-thumb-list">
            <div class="item-thumb">
              <img src="/figures/moments/2024-09/2024-09-06-easonconcert1.JPG"
              class="preview z-depth-1 rounded medium-zoom-image">
            </div>
            <div class="item-thumb">
              <img src="/figures/moments/2024-09/2024-09-06-easonconcert2.JPG"
              class="preview z-depth-1 rounded medium-zoom-image">
            </div>
            <div class="item-thumb">
              <img src="/figures/moments/2024-09/2024-09-06-easonconcert3.JPG"
              class="preview z-depth-1 rounded medium-zoom-image">
            </div>
            <div class="item-thumb">
              <img src="/figures/moments/2024-09/2024-09-06-easonconcert4.JPG"
              class="preview z-depth-1 rounded medium-zoom-image">
            </div>
          </div>
          <div class="item-content">
            <div class="item-tit">
              <p>Freeze a moment &#128518;</p>
            </div>
            <div class="item-desc">
              <p>"Fear and Dreams" concert of Eason Chan at Dalian</p>
            </div>
            <div class="item-periodical">
              Sep 06, 2024
            </div>
          </div>
        </div>
        <p>
          <font size="6">July 2024</font>
        </p>
        <br>
        <div class="publis-item">
          <div class="item-thumb-list">
            <div class="item-thumb">
              <img src="/figures/moments/2024-07/2024-07-31-dongfangzhimen1.JPG"
              class="preview z-depth-1 rounded medium-zoom-image">
            </div>
            <div class="item-thumb">
              <img src="/figures/moments/2024-07/2024-07-31-dongfangzhimen2.JPG"
              class="preview z-depth-1 rounded medium-zoom-image">
            </div>
          </div>
          <div class="item-content">
            <div class="item-tit">
              <p>Goodbye Suzhou &#128557;</p>
            </div>
            <div class="item-desc">
              <p>View from the upper floors of <b>The Gate of the Orient</b> before leaving Suzhou
              </p>
            </div>
            <div class="item-periodical">
              Jul 31, 2024
            </div>
          </div>
        </div>
      </div>
    </div>
    <script type="text/javascript" src="./js/jq.min.js"></script>
    <!-- <script type="text/javascript" src="./js/medium-zoom.min.js"></script> -->
    <script>
      $(document).ready(function () {
        let popImg = false;
        $('.item-thumb').click(function(e){
          if(popImg){
            return false
          }
          popImg = true;
          $(this).find('img').addClass('pop-img-click')
          $('.pop-img img').attr('src',$(this).find('img').attr('src'))
          $('.pop-hide').css({top:e.clientY,left:e.clientX})

          setTimeout(function(){
            $('.pop-img').removeClass('pop-hide')
            $('.pop-img').addClass('pop-show')
          },200)
        })
        $('.pop-img').click(function(){

          if(popImg){
            clearPop()
          }else{
            return false
          }
        })

        function clearPop(){
          $('.pop-img').addClass('pop-hide');
          $('.pop-img').removeClass('pop-show')
          setTimeout(function(){
            $('.pop-img img').attr('src','')
            $('.medium-zoom-image').removeClass('pop-img-click')
            popImg = false
          },300)
        }

        window.onscroll = function(){

          if(popImg){
            clearPop()
          }else{
            return false
          }
        }
      }); 
    </script>
    <ul>
    </ul>
    </div>
    </main>