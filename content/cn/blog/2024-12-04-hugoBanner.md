---
title: "如何为Hugo主题页面添加Banner？"
date: '2024-12-04T14:48:32+08:00'
author: 潘玺玮
slug: add-banner-hugo
draft: false
toc: false
categories:
  - HTML related
tags:
  - 个人网站
  - Hugo
---
我之前根据 [这个文档](https://hongtaoh.com/cn/2021/03/02/personal-website-tutorial/)初步构建了自己的个人网站，网站结构是 [Hugo](https://github.com/hongtaoh/hugo-ht)，主题默认为 [Hugo-ht](https://github.com/hongtaoh/hugo-ht)。为了让个人网站更具个人风格，我随后又在这个基础上做了一些修改，这篇博客我想介绍一下如何在当前这个主题下添加Banner来进一步美化网站页面（效果如图1所示）。
{{<figure src="/figures/blogFigs/chinese_blog/2024-12-04-banner.png" title="图1：Banner样式效果" width="900">}}

我希望达成的修改效果是只在每个顶部导航栏链接到的页面（除首页外）添加对应主题的Banner，其位置应该在顶部导航栏和正文之间，具体来说，Banner格式最终位于网页源码的`<header class="header">...</header>`和`<main class="content">...</main>`之间。因为希望只在特定的页面修改主题，所以我们不能在`/layouts/partials/header.html`文件中的`</header>`之后做修改，这样会影响到每一个页面。另外，由于样式文件`style.css`规定了页面内容`class="content"`部分的最大宽度`max-width: 750px;`，所以也不能单纯地修改这些页面的内容文件（例如`/content/cn/blog/_index.md`），那样的修改最终会让Banner部分的格式代码包含于`class="content"`中，导致Banner最大宽度受限。

根据 [Hugo中文文档](https://hugo.opendocs.io/templates/lists/),由于部分列表和分类列表（不包括分类术语列表）在模板上都是*列表*,它们在查找顺序中都有相同的默认值`/layouts/_default/list.html`或`themes/hugo-ht/layouts/_default/list.html`。由于在Hugo-ht主题中这些列表页面的内容文件`_index.md`一开始并未指定该页面的type，于是均为默认的`list.html`。因此一个自然的想法是为每一个希望修改主题的页面创建一个对应的格式文件`list.html`，并基于默认格式进行调整。下面是具体的解决方法：
1. 在`/layouts/`下创建一个文件夹，自定义一个命名，例如：list-blogcn；
2. 在`/layouts/list-blogcn/`下创建`list.html`，具体的 `$\texttt{HTML}$` 代码参考文末；
3. 在希望修改页面的内容文件（例如`/content/cn/blog/_index.md`）中添加`type: list-blogcn`即可。

```html
  {{ partial "header.html" . }}

  {{ $name := .Data.Plural -}}
  {{ if eq $name "tags" -}}
  <h1>#{{ .Title | markdownify }}</h1>
  {{ end }}

  <div class="page-header-bigbg">
    <div class="header-info">
      <h3>我的博客</h3>  <!-- 自定义标题名 -->
    </div>
    <img src="/figures/blogs.jpg" alt="Page Header">  <!-- 修改图片文件路径 -->
    <style>
      .wrapper .page-header-bigbg {
        position:relative;
        height:300px;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        overflow: hidden;
      }
      .wrapper .page-header-bigbg:after  {
        content:'';
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:gray;
        opacity:.4;
      }
      .wrapper .page-header-bigbg img {
        position:relative;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        vertical-align: top;
        width: 100%;
        min-height: 100%;
      }
      .wrapper .page-header-bigbg .header-info {
        position: absolute;
        top: 55%;
        left: 15%;
        transform: translate(0, -50%);
        color: #fff;
        z-index: 2;
        text-align: left;
        width: 70%;
        font-size: 24px;
      }
      .wrapper .page-header-bigbg .header-info h3 {
        text-align:center;
        font-size: 80px;
        margin-top: 0;
      }
    </style>
  </div>

  <main class = "content">
  <div class="list-page">
  {{ .Content }}

  {{if not .IsHome}}
  <ul>
    {{ range .Pages.GroupByDate "2006" }}
    <h2 style="text-align: left;">{{ .Key }}</h2>
    {{ range .Pages.GroupByDate "2006-01-02" }}
    {{ range .Pages }}
    <p>
      <span class="date">
      {{ .Date.Format "2006-01-02" }}
      </span>
      <a href="{{ .RelPermalink }}">
      {{ .Title }}
      </a>
    </p>
    {{ end }}
    {{ end }}
    {{ end }}
  </ul>
  {{ end }}
  </div>
  </main>

  {{ partial "footer.html" . }} 
```