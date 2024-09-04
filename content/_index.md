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
<title>Thumbnail with Enlarge Animation</title>
<style>
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
  }

  .thumbnail-container {
    position: relative;
    display: inline-block;
  }

  .thumbnail {
    width: 200px;
    height: 150px;
    cursor: pointer;
    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
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
    height: auto;
    border: 5px solid #fff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0% { transform: translate(-50%, -50%) translateY(0); }
    50% { transform: translate(-50%, -50%) translateY(-20px); }
    100% { transform: translate(-50%, -50%) translateY(0); }
  }

  .enlarged-image.show {
    display: block;
  }

  .overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 999;
  }

  .overlay.show {
    display: block;
  }
</style>
<div class="thumbnail-container">
  <img src="/figures/BL.png" alt="Thumbnail" class="thumbnail" id="thumbnail">
  <div class="overlay" id="overlay"></div>
  <img src="/figures/Shell.png" alt="Enlarged View" class="enlarged-image" id="enlargedImage">
</div>
<script>
  const thumbnail = document.getElementById('thumbnail');
  const enlargedImage = document.getElementById('enlargedImage');
  const overlay = document.getElementById('overlay');

  thumbnail.addEventListener('click', () => {
    enlargedImage.classList.add('show');
    overlay.classList.add('show');
  });

  overlay.addEventListener('click', () => {
    enlargedImage.classList.remove('show');
    overlay.classList.remove('show');
  });
</script>