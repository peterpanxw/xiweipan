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

<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>html图片放大缩小多种案例(附源码) - xcLeigh</title>
	<link href="figures/BL.png" rel="icon">
    <style type="text/css">
        .nav {
            height: 41px;
            border-top: 3px solid #ff8500;
            border-bottom: 1px solid #ff8500;
            background-color: #fff;
            line-height: 41px;
        }
        .link {
            /*   此时的a为行内元素 修改高无效 需要将a转换为行内块元素 它既可以有宽度 又可以有高度*/
            display: inline-block;
            height: 41px;
            padding: 0 10px;
            /* 上下为0  左右为20px */
            font-size: 12px;
            color: orange;
            text-decoration: none;
			float:right;
        }
        .link:hover {
            background-color: #eee;
            color: #E70722;
        }
        .active{
            background-color: #eee;
            color: #E70722;
        }
        .nav span {
            /*   此时的a为行内元素 修改高无效 需要将a转换为行内块元素 它既可以有宽度 又可以有高度*/
            display: inline-block;
            line-height: 30px;
            padding: 0 20px;
            /* 上下为0  左右为20px */
            font-size: 12px;
            color: #4c4ac4;
            text-decoration: none;
			cursor:pointer;
        }
        .nav span:hover {
            background-color: #eee;
            color: #ff8500;
        }
    </style>
</head>
<body style="margin:auto;padding:auto; background-color:rgba(255,133,0,0.03);">
	<div class="dicContent" style="width:100%; height:calc(100% - 46px); z-index:111; position:absolute; margin:0px;padding:0px; margin-top:46px;">
		<iframe  class="dicContent" id="iframeContent" src="resource/简约版本图片预览/index.html" border="0" style="border:0px;width:100%;height:calc(100%); position: absolute; margin:0px;padding:0px;background-color: transparent !important;"></iframe>
	</div>
    <div class="nav">
        <a href="javascript:void(0);" class="link active" onclick="showContent('figures/BL.png',this)">图片预览</a>
    </div>
</body>
<script type="text/javascript">
	function showUrl(url){
        window.open(url,"_blank");
    }
    function showContent(url,obj){
        var arr=document.getElementsByClassName("link");
        for(var i=0;i<arr.length;i++){
            arr[i].classList.remove("active");
        }
        obj.setAttribute("class","link active");
        document.getElementById("iframeContent").src=url;
    }
</script>
</html>

