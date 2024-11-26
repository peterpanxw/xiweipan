---
title: "Automatic Differentiation"
date: 2024-11-24T20:19:22+08:00
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

For detailed information, one can refer to the paper [Automatic differentiation in machine learning: a survey](https://dl.acm.org/doi/pdf/10.5555/3122009.3242010).

## Manual Differentiation
For a given **differentiable** function, manual differentiation involves applying basic rules of differentiation (such as *power rule, constant rule, sum rule, product rule, quotient rule, and chain rule*) to find the rate of change of a function with respect to one of its variables.

When functions become more complicated, manual differentiation is time consuming and prone to error.

## Numerical Differentiation
Numerical differentiation is the process of approximating derivatives using **finite differences**, based on the values of the original function evaluated at specific sample points. According to the limit definition of a derivative, the gradient of a multivariate function `$f: \mathbb{R}^n\to\mathbb{R}$` can be approximated by
`$$\frac{\partial f(\pmb{x})}{\partial x_i}\approx\frac{f(\pmb{x}+h\pmb{e}_i)-f(\pmb{x})}{h}, \tag{1} \label{eq1}$$`
where `$h$` denotes the step size and `$\pmb{e}_i$` is the `$i$`-th unit vector corresponding to variable `$x_i$`. Equation `$\eqref{eq1}$` is also known as the *forward difference approximation*.

> Numerical approximations of derivatives are inherently *ill-conditioned and unstable*,with the exception of complex variable methods that are applicable to a limited set of holomorphic functions. --- Bengt Fornberg

Here, the term *ill-conditioned and unstable* refers to two cardinal sins in numerical analysis: "thou shalt not add small numbers to big numbers", and "thou shalt not subtract numbers which are approximately equal". The **truncation and round-off errors** should be responsible for the drawbacks of numerical approximation. Truncation error approaches zero as `$h\to 0$`. However, as `$h$` decreases, round-off error increases and eventually becomes the dominant factor.

The *center difference approximation* is employed to partially mitigate the aforementioned errors:
`$$\frac{\partial f(\pmb{x})}{\partial x_i}=\frac{f(\pmb{x}+h\pmb{e}_i)-f(\pmb{x}-h\pmb{e}_i)}{2h}+O(h^2), \tag{2} \label{eq2}$$`
this method provides an approximation with `$O(h^2)$` accuracy, which is one order higher than Equation `$\eqref{eq1}$`. However, it does not avoid either of the cardinal sins and remains highly inaccurate due to truncation.

<font color=Crimson>Numerical differentiation is not difficult to implement, but the main obstacle to its application lies in the `$\mathcal{O}(n)$` [time complexity](https://en.wikipedia.org/wiki/Time_complexity) associated with evaluating `$\nabla f$` in `$n$` dimensional space.</font> In the field of ML, `$n$` can reach millions or even billions in the state-of-the-art deep learning models, making it increasingly challenging for practical use. In contrast, approximation errors are generally tolerated in a deep learning setting due to the well-documented error resiliency of neural network architectures.

## Symbolic Differentiation
Symbolic differentiation is the automatic manipulation of mathematical expressions to obtain derivative expressions. It involves systematically applying the rules of differentiation (like the power rule, product rule, chain rule, etc.) to generate a new **symbolic expression** that represents the derivative of the original function.

The investigated function is decomposed into a sequence of elementary arithmetic operations (addition, multiplication, etc.) and elementary functions. With basic rules of differentiation (like chain rule, etc.), partial derivatives of each elementary part with respect to a specific variable can be symbolically represented, as shown in Figure 1.
{{<figure src="/figures/blogFigs/autodiff/symbolic_diff.png" caption="Figure 1: The process of symbolic differentiation of function f(x,y)=xy+6, this figure shows the partial derivative with respect to variable x." width="700">}}

- **Pros**: In optimization, symbolic derivatives offer valuable insights into the *structure* of the problem domain. In certain cases, they can yield analytical solutions for extrema (e.g., like solving `$f^\prime (x)=0$`), eliminating the need for numerical derivative calculations entirely.
- **Cons**: It faces the difficulty of translating a computer program into *a single mathematical expression*, often resulting in inefficient code. Symbolic derivatives can grow <u>exponentially</u> in size compared to the original expression they represent, leading to increased complexity (known as ***expression swell***).

## Automatic Differentiation (Autodiff)
Both classical methods --- whether numerical or symbolic --- face challenges when computing *higher derivatives*, as complexity and errors increase. And they tend to be *slow* when computing partial derivatives w.r.t. multiple inputs, which is essential for gradient-based optimization algorithms. **Autodiff solves all of these problems.**

> <h3>All numerical computations are ultimately compositions of a finite set of elementary operations for which derivatives are known. Autodiff refers to a specific family of techniques that compute derivatives through *accumulation of (intermediate) values* during code execution to generate numerical derivative evaluations rather than derivative expressions. This allows <font color=Crimson>accurate evaluation of derivatives at machine precision with only a small constant factor of overhead and ideal asymptotic efficiency</font>. --- By [this paper](https://dl.acm.org/doi/pdf/10.5555/3122009.3242010)</h3>

There are two primary ways that autodiff is typically implemented: **forward mode** and **reverse mode**.

### Forward Mode
In forward-mode autodiff, the process begins by fixing the independent variable w.r.t. which differentiation is performed, and then recursively computing the derivatives of each sub-expression.