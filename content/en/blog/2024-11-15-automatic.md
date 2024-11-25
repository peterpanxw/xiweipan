---
title: "Automatic Differentiation"
date: 2024-11-15T20:19:22+08:00
type: list-single
author: Xiwei Pan
slug: automatic-differentiation
draft: false
toc: true
categories:
  - learning
tags:
  - knowledge acquisition
  - machine learning
---
## Preface
**Gradient descent** is a first-order iterative algorithm widely used for unconstrained mathematical optimization. It plays a key role in training machine learning models and neural networks, highlighting the importance of the "gradient" in these fields. Generally, there are four approaches to compute the *gradient* of a certain function: <u>(a) Manual Differentiation, (b) Numerical Differentiation, (c) Symbolic Differentiation, and (d) Automatic Differentiation.</u> In this blog, we will cover the basics, pros, and cons of these four approaches, with the goal of gaining a deeper and more systematic understanding through this organization.

## Manual Differentiation
For a given **differentiable** function, manual differentiation involves applying basic rules of differentiation (such as *power rule, constant rule, sum rule, product rule, quotient rule, and chain rule*) to find the rate of change of a function with respect to one of its variables.

When functions become more complicated, manual differentiation is time consuming and prone to error.

## Numerical Differentiation
Numerical differentiation is the process of approximating derivatives using **finite differences**, based on the values of the original function evaluated at specific sample points. According to the limit definition of a derivative, the gradient of a multivariate function `$f: \mathbb{R}^n\to\mathbb{R}$` can be approximated by
`$$\frac{\partial f(\pmb{x})}{\partial x_i}\approx\frac{f(\pmb{x}+h\pmb{e}_i)-f(\pmb{x})}{h}, \tag{1} \label{eq1}$$`
where `$h$` denotes the step size and `$\pmb{e}_i$` is the `$i$`-th unit vector corresponding to variable `$x_i$`. Equation `$\eqref{eq1}$` is also known as the *forward difference approximation*. It is not difficult to implement, but the drawback lies in the `$\mathcal{O}(n)$` [time complexity](https://en.wikipedia.org/wiki/Time_complexity) associated with evaluating `$\nabla f$` in `$n$` dimensional space, as well as the careful selection of step size `$h$`.

<blockquoteqq><h3>Numerical approximations of derivatives are inherently ill-conditioned and unstable,with the exception of complex variable methods that are applicable to a limited set of holomorphic functions. --- Bengt Fornberg</h3></blockquoteqq>

