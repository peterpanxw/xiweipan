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

<div>
	<div style="float: left">
		<img src="/figures/BL.png" alt="Boundary Layer in Asymptotic Homogenization" width="350"/>
	</div>
	<div style="font-size: 16px">
		<b>Machine-learning-based asymptotic homogenisation and localisation considering boundary layer effects</b>
    </div>
    <div style="font-size: 14px">
		Xiwei, Pan, Zhengcheng Zhou, Chuang Ma, Shaoshuai Li, and Yichao Zhu
    </div>
    <div style="font-size: 14px">
		International Journal for Numerical Methods in Engineering, 2024
	</div>
</div>
<br>
<div>
	<div style="float: left">
		<img src="/figures/Shell.png" alt="Representation of Multi-layered Thin Shell" width="350"/>
	</div>
	<div style="font-size: 16px">
		<b>Isogeometric-based Asymptotic Analysis on Multi-layered Thin Shells.</b>
    </div>
    <div style="font-size: 14px">
		Xiwei, Pan and Yichao Zhu
    </div>
    <div style="font-size: 14px">
		arXiv e-prints, page <a href="https://arxiv.org/abs/2407.21021v1">arXiv:2407.21021</a>, July 2024.
	</div>
</div>
<br>
<body>
<div>
	<img onclick="imgClick(event)" src="/figures/BL.png" alt="Boundary Layer in Asymptotic Homogenization" width="150" height="150" style="object-fit: cover;">
</div>
</body>
<script>
  function imgClick(e) {
    showImagePreview(e.target.src)
  }
  // 遮罩层对象
  let div = null
  // 图片对象
  let img = null
  // 缩放倍数
  let scale = 1
  // 记录初始点击时间
  let startTime = 0
  // 区分是否为点击
  let isClick = true
  // 图片放大函数
  function showImagePreview(url) {
    // 创建遮罩
    div = document.createElement("div")
    div.style.position = "fixed";
    div.style.top = "0";
    div.style.bottom = "0";
    div.style.left = "0";
    div.style.right = "0";
    div.style.backgroundColor = "rgba(0,0,0,0.8)";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.zIndex = "1000";
    // 遮罩层鼠标滚轮事件
    div.onwheel = (e) => zoom(e)
    // 记录点击初始时间
    div.onmousedown = (e) => startTime = e.timeStamp
    // 遮罩层鼠标抬起，主要记录时间差是否大于200ms
    div.onmouseup = (e) => divMouseUp(e)
    // click最后触发，根据时间差的结果判断是否要触发
    div.onclick = () => {
      if (isClick) {
        document.body.removeChild(div)
      }
    };
    // 创建图片
    img = document.createElement("img")
    img.src = url
    img.style.position = "relative"
    img.style.transform = `scale(${scale})`
    // 图片移动操作
    img.onmousedown = (e) => imgMouseDown(e)
    img.onmouseup = (e) => imgMouseUP(e)
    // div.addEventListener("wheel", (e) => zoom(e), { passive: false })
    div.appendChild(img)
    document.body.appendChild(div)
  }
  // 图片缩放操作函数
  function zoom(wheelEvent) {
    wheelEvent.preventDefault()
    if (wheelEvent.deltaY > 0) {
      scale = scale * 0.9
    } else {
      scale = scale * 1.1
    }
    img.style.transform = `scale(${scale})`
  }
  
  function imgMouseDown(downEvent) {
    downEvent.preventDefault()
    const rect = window.getComputedStyle(img, null)
    let leftNum = parseInt(rect.getPropertyValue("left"))
    let topNum = parseInt(rect.top)
    div.onmousemove = (moveEvent) => {
      img.style.top = moveEvent.clientY - downEvent.clientY + topNum + "px";
      img.style.left = moveEvent.clientX - downEvent.clientX + leftNum + "px";
    }
  }
  // 便于理解单独抽离
  function imgMouseUP(e) {
    div.onmousemove = null
  }

  function divMouseUp(e) {
    if (e.timeStamp - startTime > 200) {
      isClick = false
    } else {
      isClick = true
    }
  }
</script>
