---
title: Home
---

{{<figure src="/figures/Xiwei_Portrait.JPG" title="Me at Jinji Lake in Suzhou, Summer 2023 (Credit goes to Jiayi)" width="500">}}

Hello, welcome to my homepage! My name is **Xiwei (Peter) Pan**, a native of the beautiful city of [Yangzhou](https://en.wikipedia.org/wiki/Yangzhou), China. I'm currently a master's student at [Dalian University of Technology (DUT)](https://www.dlut.edu.cn/) working with Prof. [Yichao Zhu](http://faculty.dlut.edu.cn/zhuyc/zh_CN/index/968943/list/index.htm). I am very interested in multiscale modeling of complex systems, with a focus on spatially varying multiscale configurations and plate/shell structures.

Before starting my master's program, I also earned a bachelor's degree in Engineering Mechanics (Qian Lingxi Excellence in Education Program) from DUT. There, I gained a strong foundation in fundamental yet crucial courses in mathematics, mechanics, and computer science.

My [Curriculum Vitae (CV)](/files/Xiwei_CV.pdf).

## News

<p><b>Sep 16, 2023</b>&nbsp;&nbsp;&nbsp;&nbsp;My first <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/nme.7367">research paper</a> was accepted by the <a href="https://onlinelibrary.wiley.com/journal/10970207"><em>International Journal for Numerical Methods in Engineering</em></a>!</p>

<p><b>Jun 16, 2022</b>&nbsp;&nbsp;&nbsp;&nbsp;Graduated with the honor of <em>Outstanding Graduates of DUT, Class of 2022</em></p>

<p><b>Sep 28, 2021</b>&nbsp;&nbsp;&nbsp;&nbsp;Pre-admitted to Dalian University of Technology for master's study</p>

<p><b>Jul 20, 2019</b>&nbsp;&nbsp;&nbsp;&nbsp;Attended the ACE Sustainable Civil Engineering Summer School at Cardiff University, UK</p>

<p><b>Sep 01, 2018</b>&nbsp;&nbsp;&nbsp;&nbsp;Admitted to Dalian University of Technology for undergraduate study</p>

## [Selected Publications](https://xiweipan.vercel.app/en/projects/)

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Elegant Thumbnail with Enlarged View</title>
<style>
  /* Container for the thumbnail and explanation */
  .container {
    display: flex;
    align-items: center;
    margin: 20px;
  }

  /* Style for the thumbnail */
  .thumbnail {
    width: 120px; /* Smaller thumbnail size */
    height: 90px; /* Maintain aspect ratio */
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
    border-radius: 8px;
    border: 2px solid #ddd; /* Subtle border */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  }

  /* Add a hover effect to the thumbnail */
  .thumbnail:hover {
    transform: scale(1.05); /* Slight zoom effect */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Enhanced shadow on hover */
  }

  /* Style for the explanation text */
  .explanation {
    margin-left: 15px;
    font-size: 14px;
    line-height: 1.6;
    color: #333;
  }

  /* Style for the modal */
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.8);
    animation: floatIn 0.5s ease-out;
  }

  /* Style for the enlarged image inside the modal */
  .modal-content {
    margin: auto;
    display: block;
    max-width: 90%;
    max-height: 80%;
    border-radius: 8px;
    animation: zoomIn 0.5s cubic-bezier(0.42, 0, 0.58, 1) forwards;
  }

  @keyframes zoomIn {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes floatIn {
    0% {
      opacity: 0;
      transform: translateY(-30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Style for the close button */
  .close {
    position: absolute;
    top: 20px;
    right: 30px;
    color: #fff;
    font-size: 36px;
    font-weight: bold;
    transition: color 0.3s;
    cursor: pointer;
  }

  .close:hover,
  .close:focus {
    color: #bbb;
  }
</style>

<!-- Container for the thumbnail and explanation -->
<div class="container">
    <!-- Thumbnail image -->
    <img src="/figures/BL.png" alt="Thumbnail" class="thumbnail" id="myThumbnail">
    <!-- Explanation text -->
    <div class="explanation">
        <h4>Image Title</h4>
        <p>This is a brief explanation of the image. Add details about the content or context here to provide additional information.</p>
    </div>
</div>

<!-- The Modal -->
<div id="myModal" class="modal">
    <span class="close">&times;</span>
    <img class="modal-content" id="img01">
</div>

<script>
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var img = document.getElementById("myThumbnail");
var modalImg = document.getElementById("img01");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>