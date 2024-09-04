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
<title>Thumbnail with Enlarged View and Explanation</title>
<style>
  /* Style for the thumbnail */
  .thumbnail {
    width: 150px;
    cursor: pointer;
    transition: 0.3s;
  }

  /* Add a hover effect to the thumbnail */
  .thumbnail:hover {
    opacity: 0.7;
  }

  /* Style for the modal */
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.9);
    color: white;
  }

  /* Style for the content inside the modal */
  .modal-content {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 900px;
    animation: zoom 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  @keyframes zoom {
    from {transform: scale(0.5);}
    to {transform: scale(1);}
  }

  /* Style for the image */
  .modal-image {
    width: 60%;
    max-width: 600px;
  }

  /* Style for the explanation */
  .modal-explanation {
    width: 40%;
    padding-left: 20px;
    font-size: 16px;
  }

  /* Style for the close button */
  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;
  }

  .close:hover,
  .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
</style>

<!-- Thumbnail image -->
<img src="/figures/BL.png" alt="Thumbnail" class="thumbnail" id="myThumbnail">

<!-- The Modal -->
<div id="myModal" class="modal">
    <span class="close">&times;</span>
    <div class="modal-content">
        <img class="modal-image" id="img01">
        <div class="modal-explanation" id="imgExplanation">
            <!-- Your explanation goes here -->
            <p>This is a detailed explanation of the image. You can add text here to describe what the image represents, provide context, or offer additional information.</p>
        </div>
    </div>
</div>

<script>
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var img = document.getElementById("myThumbnail");
var modalImg = document.getElementById("img01");
var modalExplanation = document.getElementById("imgExplanation");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    // Update the explanation if needed
    modalExplanation.innerHTML = "<p>This is the updated explanation for the image.</p>";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
</script>