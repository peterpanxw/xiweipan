---
title: 'English Projects'
date: ''
type: list-projects
---

<link rel="stylesheet" href="/css/add.css">
<div class="list-page">
  <div class="publications">
    <div class="publis-list">
      <p><font size="6">Preprints</font></p>
      <br>
      <div class="publis-item">
        <div class="item-thumb-list">
          <div class="item-thumb">
            <img src="/figures/projectFigs/Asymptotic_Shell/model.png"
            class="preview z-depth-1 rounded medium-zoom-image">
          </div>
          <div class="item-thumb">
            <img src="/figures/projectFigs/Asymptotic_Shell/piecewise_linear.png"
            class="preview z-depth-1 rounded medium-zoom-image">
          </div>
          <div class="item-thumb">
            <img src="/figures/projectFigs/Asymptotic_Shell/spherical_contour.png"
            class="preview z-depth-1 rounded medium-zoom-image">
          </div>
          <div class="item-thumb">
            <img src="/figures/projectFigs/Asymptotic_Shell/ellipsoidal_contour.png"
            class="preview z-depth-1 rounded medium-zoom-image">
          </div>
        </div>
        <div class="item-content">
              <div class="item-tit">
                  <p>Asymptotic formulation of the role of shear loads on multi-layered thin shells and classification of their deformation modes</p>
              </div>
              <div class="item-desc">
                  <p><em>Xiwei Pan</em>, Yichao Zhu</p>
              </div>
              <div class="item-periodical">
                  <em>arXiv:2407.21021</em>, 2024 
              </div>
              <div class="item-btn">
                  <a class="item-ctrl" href="javascript:;">ABS</a>
                  <a href="https://arxiv.org/abs/2407.21021" role="button" rel="external nofollow noopener" target="_blank">HTML</a>
                  <a href="https://arxiv.org/pdf/2407.21021" class="btn btn-sm z-depth-0" role="button" rel="external nofollow noopener" target="_blank">PDF</a>
              </div>
              <div class="item-abstract">
                  <p>Shell structures are generally modeled based on kinematic hypotheses, where some of the parameters are preferentially evaluated in a phenomenological manner. In this article, asymptotic analysis against the underlying three-dimensional equation system is considered so as to provide a rational framework for modeling and interpreting the deformation behavior of multi-layered thin shells (MTSs). Capable of accurate predictions of not only the overall stiffness of MTSs, but also the detailed stress distribution, the proposed shell theory shows its distinguishing features at least in the following aspects. Firstly, it naturally introduces a rule for classifying the deformation modes of MTSs. One mode resembles a plate, where the transverse load is withstood through bending, while the other is like a supporting structure, where the load gets conducted to adjacent inclined sections. Secondly, in contrast with the existing arguments where an applied shear load on the shell surface necessitates the inclusion of transverse shear stresses for analysis, it is demonstrated that a leading-order multi-layered shell theory derived from asymptotic analysis should suffice to output satisfactory predictions over the shell stiffness, as well as its internal stress distribution. Numerical examples of the deformation and strength analysis for MTSs are also presented to show the reliability of the leading-order model.</p>
              </div>
          </div>
      </div>
      <p><font size="6">Journal Papers</font></p>
      <br>
      <div class="publis-item">
        <div class="item-thumb-list">
          <div class="item-thumb">
            <img src="/figures/projectFigs/Local_BL/boundary_layer.png"
            class="preview z-depth-1 rounded medium-zoom-image">
          </div>
          <div class="item-thumb">
            <img src="/figures/projectFigs/Local_BL/periodic.png"
            class="preview z-depth-1 rounded medium-zoom-image">
          </div>
          <div class="item-thumb">
            <img src="/figures/projectFigs/Local_BL/aperiodic.png"
            class="preview z-depth-1 rounded medium-zoom-image">
          </div>
          <div class="item-thumb">
            <img src="/figures/projectFigs/Local_BL/matching_condition.png"
            class="preview z-depth-1 rounded medium-zoom-image">
          </div>
        </div>
        <div class="item-content">
              <div class="item-tit">
                  <p>Machine-learning-based asymptotic homogenisation and localisation considering boundary layer effects</p>
              </div>
              <div class="item-desc">
                  <p><em>Xiwei Pan</em>, Zhengcheng Zhou, Chuang Ma, Shaoshuai Li, and Yichao Zhu</p>
              </div>
              <div class="item-periodical">
                  <em>International Journal for Numerical Methods in Engineering</em>, 2024 
              </div>
              <div class="item-btn">
                  <a class="item-ctrl" href="javascript:;">ABS</a>
                  <a href="https://onlinelibrary.wiley.com/doi/10.1002/nme.7367" role="button" rel="external nofollow noopener" target="_blank">HTML</a>
                  <a href="/files/Local_BL.pdf" class="btn btn-sm z-depth-0" role="button" rel="external nofollow noopener" target="_blank">PDF</a>
              </div>
              <div class="item-abstract">
                  <p>Asymptotic homogenisation offers a way to efficiently analyse the mechanical behaviour of multiscale configurations. But near a multiscale boundary, the homogenisation strategy should be modified, as the underlying periodicity assumption breaks down there. In this article, we introduce a machine-learning-based asymptotic homogenisation and localisation scheme to formulate such boundary layer effects. To this end, we define a set of boundary layer cells, where external loading conditions are imposed on one side of the cell, and matching conditions with the interior periodic cells are imposed on the opposite side. The formulation is also extended to cover situations where the multi-scale structure is not fully periodic, but spatially varying. Implied from the asymptotic results, neural networks can be trained to memorise the interrelationship between key local quantities, such as the magnitude of the local maximum von Mises stress, and the local mechanical and geometric features. Equipped with the trained neural networks, the online calculation for key (boundary-localised) quantities of interest under arbitrary loading conditions is expected to be accelerated substantially. Numerical examples are further presented to show the reliability of the proposed work for boundary stress prediction.</p>
              </div>
          </div>
      </div>
    </div>
  </div>
  </div>
  <!-- <script type="text/javascript" src="/js/jq.min.js"></script> -->
  <!--<script type="text/javascript" src="/js/medium-zoom.min.js"></script>-->
  <!-- <script>
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
  <script>
    $(document).ready(function () { 
        // medium_zoom = mediumZoom("[data-zoomable]", 
        // { background: 'rgba(1,1,1,0)'})
        $('.item-ctrl').click(function(){
            let absDom = $(this).parents('.item-content').find('.item-abstract');
            if(absDom.hasClass('item-show')){
                absDom.removeClass('item-show')
            }else{
                absDom.addClass('item-show')
            }
        })
        // timeline
        $('.list-item').click(function(){
            if($(this).hasClass('item-hide')){
                $(this).removeClass('item-hide')
            }else{
                $(this).addClass('item-hide')
            }
        })    
      }); 
</script> -->