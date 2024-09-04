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
<title>Thumbnail with Enlarge Effect</title>
<style>
  body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
  }

  .thumbnail-container {
    position: relative;
    display: inline-block;
  }

  .thumbnail {
    width: 200px;
    height: 200px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }

  .thumbnail:hover {
    transform: scale(1.05);
  }

  .enlarged-image {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80vw;
    height: 80vh;
    object-fit: contain;
    border: 2px solid #ddd;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    z-index: 1000;
    transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  .enlarged-image.show {
    display: block;
    transform: translate(-50%, -50%) scale(1);
  }
</style>
<div class="thumbnail-container">
  <img src="/figures/BL.png" alt="Thumbnail" class="thumbnail" id="thumbnail">
  <img src="/figures/BL.png" alt="Enlarged Image" class="enlarged-image" id="enlargedImage">
</div>
<script>
  const thumbnail = document.getElementById('thumbnail');
  const enlargedImage = document.getElementById('enlargedImage');

  thumbnail.addEventListener('click', () => {
    enlargedImage.classList.toggle('show');
  });

  enlargedImage.addEventListener('click', () => {
    enlargedImage.classList.remove('show');
  });
</script>
