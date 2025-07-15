---
title: "Functional Analysis Series: Contractions and Fixed-Point Iteration"
date: 2025-07-15T14:03:54+08:00
type : list-single
author: Xiwei Pan
slug: functional-contraction-mapping
draft: false
toc: true
categories:
  - learning
tags:
  - mathematics
  - functional analysis
---
## Preface
In practical problems, obtaining exact or analytical solutions to systems of algebraic, differential, or integral equations is often challenging, especially when nonlinearities are involved. As a result, iterative methods are commonly used to generate approximate solutions. For example, solving the equation `$F(x) = 0$` can be reformulated as solving an equivalent equation of the form:
`$$x=x-\alpha F(x)=f(x). \tag{1} \label{eq1}$$`
The solution `$\tilde{x}$` to Equation `$\eqref{eq1}$` is defined as a [*fixed point*](https://en.wikipedia.org/wiki/Fixed_point_(mathematics)) of `$f$`, indicating that the point is mapped to itself by `$f$`, i.e., `$f(\tilde{x})=\tilde{x}$`. Therefore, solving `$F(x) = 0$` is equivalent to using the *fixed-point iteration* `$x_{k+1}=f(x_k)$` to find a fixed point of a suitably defined `$f$`.

## Contractions and the Contraction Theorem
> **Definition 1 (Contraction).**
> 
> Given a metric space `$\left(X,d\right)$`. Then a mapping `$T: X\mapsto X$` is called a ***contraction*** if `$\exists \alpha\in (0,1)$` such that
> `$$d\left(T(x),T(y)\right)\leq\alpha d\left(x,y\right),\ \forall x,y\in X. \tag{2} \label{eq2}$$`

Geometrically, this means that the images `$T(x)$` and `$T(y)$` are closer under the metric `$d$` together than the points `$x$` and `$y$`.

For any given `$\varepsilon>0$`, there exists `$\delta(\varepsilon)=\varepsilon/\alpha>0$` such that `$\forall x,y\in X$`, if `$d\left(x,y\right)<\delta$`, then `$d\left(T(x),T(y)\right)\leq\alpha d\left(x,y\right)=\frac{\varepsilon}{\delta}d\left(x,y\right)<\varepsilon$`. Since `$\delta=\varepsilon/\alpha$` is independent of `$x$`, the *contraction* is [uniform continuous](https://en.wikipedia.org/wiki/Uniform_continuity).

> **Theorem 1 (Banach Fixed-Point Theorem or Contraction Theorem).**
> 
> Let `$\left(X,d\right)$` be a *complete* metric space with a contraction mapping `$T: X\mapsto X$`. Then `$T$` admits a ***unique*** fixed point `$\tilde{x}\in X$`, and for any `$x\in X$`, the sequence
> `$$x,T(x),T^2(x),\cdots,T^k(x),\cdots$$`
> converges to the fixed point `$\tilde{x}$`; that is,
> `$$\lim_{k\to\infty}T^k(x)=\tilde{x}. \tag{3} \label{eq3}$$`

**Proof.** First, we show the *uniqueness* of the fixed point. Suppose that there exist two distinct fixed points `$x,y\in X$` such that `$x=T(x),\ y=T(y),\ \text{and }x\neq y$`. Then, since `$T$` is a contraction (`$\alpha\in (0,1)$`), we have
`$$d\left(T(x),T(y)\right)\leq\alpha d\left(x,y\right)<d\left(x,y\right). \tag{4} \label{eq4}$$`
However, for these two fixed points, `$d\left(T(x),T(y)\right)=d\left(x,y\right)$`, which contradicts Equation `$\eqref{eq4}$`. Therefore, the fixed point must be unique.

Next, we proceed to prove the *existence* of the unique fixed point. Let `$x_0\in X$` be an arbitrary point, and in general, `$T(x_0)\neq x_0$`. We may consider constructing a sequence of functions `$\{x_k\}\subset X$` recursively by
`$$x_{k+1}=T(x_k)\text{ or }x_{k}=T^k(x_0),\quad\text{for }k=0,1,2,\,\cdots. \tag{5} \label{eq5}$$`
<font color=Crimson>In this way, our goal reduces to showing that `${x_k}$` is a [Cauchy sequence](https://en.wikipedia.org/wiki/Cauchy_sequence) in `$X$`.</font> Suppose `$m_1$` and `$m_2$` are integers with `$m_1<m_2$`, then it follows that
`\begin{align}
d\left(x_{m_1},x_{m_2}\right)&=d\left(T(x_{m_1-1}),T(x_{m_2-1})\right)\\
&\leq\alpha d\left(x_{m_1-1},x_{m_2-1}\right)\\
&=\,\cdots=\alpha^{r-1} d\left(x_{m_1-r},x_{m_2-r}\right)\\
&\leq\alpha^r d\left(x_{m_1-r},x_{m_2-r}\right). \tag{6} \label{eq6}
\end{align}`

Choose `$r=m_1-1$`, Equation `$\eqref{eq6}$` becomes
`\begin{align}
d\left(x_{m_1},x_{m_2}\right)&\leq\alpha^{m_1-1} d\left(x_1,x_{m_2-(m_1-1)}\right)\\
&=\alpha^{m_1-1} d\left(T(x_0),T(x_{m_2-m_1})\right)\\
&\leq\alpha^{m_1} d\left(x_0,x_{m_2-m_1}\right). \tag{7} \label{eq7}
\end{align}`

By repeatedly applying the [triangle inequality](https://en.wikipedia.org/wiki/Triangle_inequality), we get
`\begin{align}
d\left(x_0,x_{m_2-m_1}\right)&\leq d\left(x_0,x_1\right)+d\left(x_1,x_{m_2-m_1}\right)\\
&\leq d\left(x_0,x_1\right)+\cdots+d\left(x_{m_2-m_1-1},x_{m_2-m_1}\right)\\
&\leq d\left(x_0,x_1\right)+\alpha d\left(x_0,x_1\right)+\cdots+\alpha^{m_2-m_1-1}d\left(x_0,x_1\right). \tag{8} \label{eq8}
\end{align}`
Note that, the second inequality is derived based on Equation `$\eqref{eq7}$`. As long as `$0\leq m_1<m_2$`, there is
`\begin{align}
d\left(x_{m_1},x_{m_2}\right)&\leq\alpha^{m_1}\left[d\left(x_0,x_1\right)+\alpha d\left(x_0,x_1\right)+\cdots+\alpha^{m_2-m_1-1}d\left(x_0,x_1\right)\right]\\
&=\alpha^{m_1}d\left(x_0,x_1\right)\frac{1-\alpha^{m_2-m_1}}{1-\alpha}\leq\alpha^{m_1}d\left(x_0,x_1\right)\frac{1-\alpha^{m_2}}{1-\alpha}. \tag{9} \label{eq9}
\end{align}`

Since the sequence `$\{\alpha^k\}$` converges to zero (with `$\alpha\in (0,1)$`), for any `$\varepsilon>0$`, there exists `$N\in\mathbb{N}$` such that for all `$k>N$`, `$\alpha^k<\varepsilon (1-\alpha)/d\left(x_0,x_1\right)$`. Then, for `$m>n>N$`, we have
`$$d\left(x_n,x_m\right)<\frac{\alpha^n}{1-\alpha}d\left(x_0,x_1\right)<\varepsilon. \tag{10} \label{eq10}$$`
Thus, `$\{x_k\}\subset X$` is a Cauchy sequence with a limit `$\tilde{x}\in X$`, by the *completeness* of the metric space `$(X,d)$`. We now recall Equation `$\eqref{eq3}$` to show that this limit `$\tilde{x}$` is indeed the fixed point of the contraction `$T$`. Specifically, the equation
`$$\lim_{k\to\infty}T(x_k)=\lim_{k+1\to\infty}x_{k+1}=\tilde{x}=T(\tilde{x}), \tag{11} \label{eq11}$$`
demonstrates that the limit `$\tilde{x}$` satisfies `$\tilde{x}=T(\tilde{x})$`, and hence is the unique fixed point of the mapping `$T$`. **Done.**

From the above proof, we can further derive the <font color=Crimson><b>error bound</b></font> associated with the iterative process given by the Contraction Theorem. That is,
`$$e_n=\lim_{m\to\infty}d\left(x_n,x_m\right)=d\left(x_n,\tilde{x}\right)\leq\frac{\alpha^n}{1-\alpha}d\left(x_0,T(x_0)\right). \tag{12} \label{eq12}$$`

## Applications of the Contraction Theorem
The abovementioned Banach Fixed-Point Theorem states sufficient conditions for the existence and uniqueness of a fixed point, which constitutes the foundation for justifying the iterative solution of a broad class of equations. Below, we will discuss in detail the specific applications of this theorem in finding the roots of (nonlinear) algebraic and differential equations.

### The Existence and Uniqueness of Nonlinear Algebraic Equations
Let `$f: [a,b]\mapsto [a,b]$` be a mapping, differentiable on the open interval `$(a,b)$`, and suppose that for all `$x\in (a,b)$`, `$|f^\prime(x)|\leq\alpha<1$`. By the [Mean Value Theorem](https://en.wikipedia.org/wiki/Mean_value_theorem), for any `$x,y\in [a,b]$`, there exists some `$\xi$` between `$x$` and `$y$` such that
`$$f(x)-f(y)=f^\prime(\xi)(x-y). \tag{13} \label{eq13}$$`
We equip the real space `$[a,b]$` with a metric `$d\left(x,y\right)=|x-y|$`. Then, the equation
`$$|f(x)-f(y)|=|f^\prime(\xi)||x-y|\leq\alpha d\left(x,y\right) \tag{14} \label{eq14}$$`
shows that `$f$` is a contraction in `$[a,b]$`. Based on the Contraction Theorem (Theorem 1), there exists a unique fixed point `$\tilde{x}\in [a,b]$`, i.e., `$f(\tilde{x})=\tilde{x}$`.

Let `$F: [a,b]\mapsto\mathbb{R}$` be twice continuously differentiable, and suppose `$F(\tilde{x})=0$` for some `$\tilde{x}\in (a,b)$` with `$F^\prime(\tilde{x})\neq 0$`. For a nonlinear equation `$F(x)=0$`, the [*Newton-Raphson method*](https://en.wikipedia.org/wiki/Newton%27s_method) provides a means of linearization to iteratively approximate its roots. The Taylor expansion of `$F(x)$` about a point `$x_0$` is given by
`$$F(x)=F(x_0)+F^\prime(x_0)(x-x_0)+\frac{F^{\prime\prime}}{2!}(x-x_0)^2+\mathcal{O}\left((x-x_0)^3\right). \tag{15} \label{eq15}$$`
Using the first two linear terms as an approximation, we derive the iterative formula of Newton's method, i.e.,
`$$x_{k+1}=x_k-\frac{F(x_k)}{F^\prime(x_k)}:=f(x_k),\quad k=0,1,\cdots. \tag{16} \label{eq16}$$`

To verify the convergence of the Newton–Raphson method, two conditions must be checked: *invariance of interval* and *contraction*. Both necessitate detailed analysis of the function `$f(x)$`, whose derivative is given by
`$$f^\prime(x)=\frac{\mathrm{d}}{\mathrm{d}x}\left(x-\frac{F(x)}{F^\prime(x)}\right)=\frac{F(x)F^{\prime\prime}(x)}{\left[F^\prime(x)\right]^2}. \tag{17} \label{eq17}$$`
In a small neighborhood `$I=[\tilde{x}-\delta,\tilde{x}+\delta]\subset [a,b]$` around the solution `$\tilde{x}$`, we have `$|F^\prime(x)|\geq m>0$` and `$|F^{\prime\prime}\leq M|$`. Again, with the Mean Value Theorem, for any `$x\in I$`, there exists some `$\xi$` such that
`$$|F(x)-F(\tilde{x})|=|F^\prime(\xi)||x-\tilde{x}|\leq L|x-\tilde{x}|\leq L\delta,\quad L=\max_{x\in I}|F^\prime(x)|. tag{18} \label{eq18}$$`
In this way, `$|f^\prime(x)|$` can be bounded:
`$$|f^\prime(x)|\leq\frac{ML\delta}{m^2}, \tag{19} \label{eq19}$$`
for relativelty small `$\delta$`, specifically, `$\delta<m^2/(ML)$`, `$|f^\prime(x)|<1$`. Therefore, `$f$` is a contraction on `$I$`.

We also need `$f$` to map `$I$` to itself. For any `$x\in I\ (|x-\tilde{x}|\leq\delta)$`,
`\begin{align}
|f(x)-\tilde{x}|&=|x-\tilde{x}-\frac{F(x)}{F^\prime(x)}|\\
&=|x-\tilde{x}-\frac{F^\prime(\tilde{x})(x-\tilde{x})+\frac{1}{2}F^{\prime\prime}(\xi)(x-\tilde{x})^2}{F^\prime(x)}|\\
&\leq |x-\tilde{x}|\cdot \left|1-\frac{F^\prime(\tilde{x})}{F^\prime(x)}\right|+\frac{1}{2}\cdot\left|\frac{F^{\prime\prime}(\xi)}{F^\prime(x)}\right|\left(x-\tilde{x}\right)^2\\
&\leq \epsilon\delta+\frac{M\delta^2}{2m}, \tag{20} \label{eq20}
\end{align}`
where `$\epsilon:=\max_{x\in I}\left|1-F^\prime(\tilde{x})/F^\prime(x)\right|$`. If we choose `$\delta\leq 2m(1-\epsilon)/M$`, then
`$$|f(x)-\tilde{x}|\leq\delta\longrightarrow f(I)\subset I, \tag{21} \label{eq21}$$`
meaning that `$f$` satisfies the *invariance of interval* condition on `$I=[\tilde{x}-\delta,\tilde{x}+\delta]$`.

It is worth noting that our previous proof of the convergence of the Newton method was established within a small neighborhood `$[\tilde{x}-\delta,\tilde{x}+\delta]$` around the fixed point, rather than over the entire space. This highlights the *local* nature of the Newton-Raphson method: the initial point `$x_0$` must be sufficiently close to the solution `$\tilde{x}$`, otherwise the iteration may diverge.

### The Existence and Uniqueness of ODE
Consider a nonlinear ordinary differential equation (ODE) of the form
`$$\frac{\mathrm{d}q(t)}{\mathrm{d}t}=F\left[t,q(t)\right],\quad 0<t\leq T, \tag{} \label{}$$`
where `$q(t)\in\mathcal{C}^1\left[0,T\right]$` and `$q(0)=q_0$`.