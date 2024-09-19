---
title: 'English Gallery'
date: ''
---
## Moments
<link rel="stylesheet" href="/css/add.css">
<div class="list-page">
  <div class="publications">
    <div class="publis-list">
      <p><font size="6">September 2024</font></p>
      <br>
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
            <p>Freeze a moment &#128518;&#127880;</p>
          </div>
          <div class="item-desc">
            <p>"Fear and Dreams" concert of Eason Chan at Dalian</p>
          </div>
          <div class="item-periodical">
            Sep 06, 2024
          </div>
        </div>
      </div>
      <p><font size="6">August 2024</font></p>
      <br>
      <div class="publis-item">
        <div class="item-thumb-list">
          <div class="item-thumb">
            <img src="/figures/moments/2024-08/2024-08-22-zaochayz1.jpg"
            class="preview z-depth-1 rounded medium-zoom-image">
          </div>
          <div class="item-thumb">
            <img src="/figures/moments/2024-08/2024-08-22-zaochayz2.jpg"
            class="preview z-depth-1 rounded medium-zoom-image">
          </div>
          <div class="item-thumb">
            <img src="/figures/moments/2024-08/2024-08-22-zaochayz3.jpg"
            class="preview z-depth-1 rounded medium-zoom-image">
          </div>
          <div class="item-thumb">
            <img src="/figures/moments/2024-08/2024-08-22-zaochayz4.jpg"
            class="preview z-depth-1 rounded medium-zoom-image">
          </div>
          <div class="item-thumb">
            <img src="/figures/moments/2024-08/2024-08-22-zaochayz5.jpg"
            class="preview z-depth-1 rounded medium-zoom-image">
          </div>
        </div>
        <div class="item-content">
          <div class="item-tit">
            <p>Yummy dim sum &#127774;&#127861;&#128523;</p>
          </div>
          <div class="item-desc">
            <p>Morning Tea Culture in Yangzhou, <a href="https://www.instagram.com/explore/locations/328974301193704/qu-yuan-teahouse/"><i>Quyuan Teahouse</i></a>. Although I’m a local from Yangzhou, this is my first time officially having morning tea (it’s too hard for those who don’t wake up early).
            </p>
          </div>
          <div class="item-periodical">
            Aug 22, 2024
          </div>
        </div>
      </div>
      <p><font size="6">July 2024</font></p>
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
      <div class="publis-item">
        <div class="item-thumb-list">
          <div class="item-thumb">
            <img src="/figures/moments/2024-07/2024-07-20-portrait1.jpg"
            class="preview z-depth-1 rounded medium-zoom-image">
          </div>
          <div class="item-thumb">
            <img src="/figures/moments/2024-07/2024-07-20-portrait2.jpg"
            class="preview z-depth-1 rounded medium-zoom-image">
          </div>
          <div class="item-thumb">
            <img src="/figures/moments/2024-07/2024-07-20-portrait3.jpg"
            class="preview z-depth-1 rounded medium-zoom-image">
          </div>
          <div class="item-thumb">
            <img src="/figures/moments/2024-07/2024-07-20-portrait4.jpg"
            class="preview z-depth-1 rounded medium-zoom-image">
          </div>
        </div>
        <div class="item-content">
          <div class="item-tit">
            <p>An unforgettable experience!</p>
          </div>
          <div class="item-desc">
            <p>Presentation on the 16th World Congress on Computational Mechanics (WCCM 2024). Me and my senior at <i>Stanley Park</i>, Vancouver, Canada
            </p>
          </div>
          <div class="item-periodical">
            Jul 20-27, 2024
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <script type="text/javascript" src="/js/jq.min.js"></script>
  <!--<script type="text/javascript" src="/js/medium-zoom.min.js"></script>-->
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

  <div class="pop-img pop-hide">
    <img src="" alt="">
  </div>
  <div style="text-align: center; color: gray; margin-top: -20px; font-size: 19px;margin-bottom: 10px">
  </div>

