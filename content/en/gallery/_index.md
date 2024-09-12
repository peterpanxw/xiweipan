---
title: 'English Gallery'
date: ''
---
## Moments
<link rel="stylesheet" href="/css/add.css">
<div class="publications">
  <div class="publis-list">
      <div class="publis-item">
          <div class="item-thumb">
              <img src="/figures/moments/2024-09-06-easonconcert1.JPG"
              class="preview z-depth-1 rounded medium-zoom-image" width="100%" height="auto"
              alt="MolSets.webp" data-zoomable="" loading="eager"
              onerror="this.onerror=null; $('.responsive-img-srcset').remove();">
          </div>
          <div class="item-thumb">
              <img src="/figures/moments/2024-09-06-easonconcert2.JPG"
              class="preview z-depth-1 rounded medium-zoom-image" width="100%" height="auto"
              alt="MolSets.webp" data-zoomable="" loading="eager"
              onerror="this.onerror=null; $('.responsive-img-srcset').remove();">
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
      <div class="publis-item">
          <div class="item-thumb">
              <img src="/figures/moments/2024-07-31-dongfangzhimen.JPG"
              class="preview z-depth-1 rounded medium-zoom-image" width="100%" height="auto"
              alt="MolSets.webp" data-zoomable="" loading="eager"
              onerror="this.onerror=null; $('.responsive-img-srcset').remove();">
          </div>
          <div class="item-content">
              <div class="item-tit">
                  <p>Goodbye Suzhou, goodbye my babe~ &#128557;</p>
              </div>
              <div class="item-desc">
                  <p>View from the upper floors of <b>The Gate of the Orient</b></p>
              </div>
              <div class="item-periodical">
                  Jul 31, 2024 
              </div>
          </div>
      </div>
  </div>
</div>
<script type="text/javascript" src="/js/jq.min.js"></script>
<script type="text/javascript" src="/js/medium-zoom.min.js"></script>
<script>
    $(document).ready(function () { 
        medium_zoom = mediumZoom("[data-zoomable]", 
        { background: 'rgba(1,1,1,0)'})         
        $('.item-ctrl').click(function(){
            let absDom = $(this).parents('.item-content').find('.item-abstract');
            if(absDom.hasClass('item-show')){
                absDom.removeClass('item-show')
            }else{
                absDom.addClass('item-show')
            }
        })
      }); 
</script>