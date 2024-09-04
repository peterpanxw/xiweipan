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
<title>Thumbnail with Enlarged View and Explanations</title>
<style>
  /* Style for the container */
  .thumbnail-container {
    display: flex;
    align-items: center;
    margin: 20px;
  }

  /* Style for the thumbnail */
  .thumbnail {
    width: 150px;
    cursor: pointer;
    transition: 0.3s;
    margin-right: 20px;
  }

  /* Add a hover effect to the thumbnail */
  .thumbnail:hover {
    opacity: 0.7;
  }

  /* Style for the explanations */
  .explanation {
    max-width: 300px;
  }

  /* Style for the modal */
  .modal {
    display: none;
    position: fixed;
    z-index: 10;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.9);
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
  }

  /* Style for the enlarged image inside the modal */
  .modal-content {
    display: block;
    width: 100%;
    max-width: 700px;
    border-radius: 10px;
    animation: nonlinearZoom 0.6s ease-out;
  }

  @keyframes nonlinearZoom {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  /* Style for the close button */
  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    color: #333;
    font-size: 30px;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;
  }

  .close:hover,
  .close:focus {
    color: #555;
    text-decoration: none;
    cursor: pointer;
  }
</style>
<!-- Container with thumbnail and explanation -->
<div class="thumbnail-container">
    <img src="/figures/BL.png" alt="Thumbnail" class="thumbnail" id="myThumbnail">
    <div class="explanation">
        <h3>Image Explanation</h3>
        <p>
            This is a brief explanation of the image. You can add more details here, describing the content or purpose of the image. Feel free to expand this section with relevant information.
        </p>
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

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking anywhere outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>