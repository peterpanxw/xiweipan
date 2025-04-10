---
title: "Kuhn-Tucker Conditions and Contact Formulation"
date: 2025-04-09T21:34:23+08:00
type : list-single
author: Xiwei Pan
slug: kuhn-tucker-conditions
draft: false
toc: true
categories:
  - learning
tags:
  - optimization
---
## Preface
The general formulation of contact problems aligns closely with the structure of the [Kuhn-Tucker (KT) conditions](https://en.wikipedia.org/wiki/Karush%E2%80%93Kuhn%E2%80%93Tucker_conditions). So, I take this opportunity to revisit the derivation of the KT conditions in order to deepen my understanding of both topics.

## Kuhn-Tucker Conditions
In this section, we will provide a detailed trace of deriving the well-known Kuhn-Tucker conditions.
### Unconstrained Optimization of Univariate Functions
`$$\min\ f(x),\quad -\infty\leq x\leq\infty$$`

The *necessary condition* for a global minimum is given by:
`$$\left.\frac{\mathrm{d}f(x)}{\mathrm{d}x}\right|_{x=x^\ast}=0, \tag{1}$$`
and the sufficient condition is
`$$\left.\frac{\mathrm{d}^2f(x)}{\mathrm{d}x^2}\right|_{x=x^\ast}>0, \tag{2}$$`
which indicates the function considered is *convex*.

### Unconstrained Optimization of Multivariate Functions
`$$\min\ f(\pmb{x}),\quad \pmb{x}=\left\{x_1,x_2,\,\cdots,x_n\right\}^\mathrm{T},\ -\infty\leq x_i\leq\infty$$`

The directional derivative of `$f(\pmb{x})$` is defined as `$\nabla_{\pmb{v}}f=\nabla f\cdot\pmb{v}$`, where
`$$\nabla f=\left\{\frac{\partial f}{\partial x_1},\frac{\partial f}{\partial x_2},\,\cdots,\frac{\partial f}{\partial x_n}\right\}^\mathrm{T} \tag{3}$$`
is called the *gradient* of function `$f(\pmb{x})$`.

The *necessary condition* for a global minimum in this case is given by
`$$\nabla f(\pmb{x}^\ast)=\boldsymbol{0}, \tag{4}$$`
while the *sufficient condition* is stated as the Hessian Matrix `$H$` should be [positive definite](https://en.wikipedia.org/wiki/Definite_matrix), i.e., we have `$\pmb{y}^\mathrm{T}H\pmb{y}>0$` for all `$\pmb{y}\neq\pmb{0}$`. Here the Hessian Matrix takes the form:
`$$H=\nabla^2 f=\left[\frac{\partial^2 f}{\partial x_i}{\partial x_j}\right].$$`

### Optimization of Multivariate Functions with Equality Constraints
`\begin{align}
\min\quad &f(\pmb{x}),\quad \pmb{x}=\left\{x_1,x_2,\,\cdots,x_n\right\}^\mathrm{T},\\
\mathrm{s.t.}\quad &h_j(\pmb{x})=0,\quad j=1,2,\,\cdots,m.
\end{align}`

For this kind of optimization problem, we use the Lagrange Multiplier method to incorporate the original constraint terms into the objective function, thus yielding an unconstrained extremum problem. The Lagrangian reads:
`$$\mathcal{L}=f(\pmb{x})+\sum_{j=1}^m\lambda_j h_j(\pmb{x}). \tag{5}$$`

The *necessary conditions* for an extremum should satisfy:
`\begin{align}
&\frac{\partial\mathcal{L}}{\partial x_i}=\frac{\partial f}{\partial x_i}+\sum_{j=1}^m\lambda_j\frac{\partial h_j}{\partial x_i}=0 \rightarrow \nabla_{\pmb{x}}\mathcal{L}=\nabla f+\pmb{\lambda}\cdot\nabla^\mathrm{T}\pmb{h}=\boldsymbol{0}; \tag{6} \label{eq6}\\
&\frac{\partial\mathcal{L}}{\lambda_j}=h_j(\pmb{x})=0 \rightarrow \pmb{h}=\boldsymbol{0}, \tag{7} \label{eq7}
\end{align}`
where `$\nabla^\mathrm{T}\pmb{h}=\left[\nabla h_1,\,\cdots,\nabla h_m\right]$`. Note that, the Einstein summation rule is not adopted here. Equations `$\eqref{eq6}$` and `$\eqref{eq7}$` actually states that <font color=Crimson>`$-\partial f/\partial x_i$` should be the linear combination of the constraint gradient vectors `$\partial h_j/\partial x_i\ (j=1,2,\,\cdots,m)$`.</font>

### Optimization of Functions in Closed Intervals
Consider a univariate function `$f(x)$`, which is differentiable on the interval `$[a,b]$`, and let the minimum be denoted by `$x^\ast$`. We have the following three situations in all:
- If `$a<x^\ast<b$`, then `$\frac{\mathrm{d}f(x^\ast)}{\mathrm{d}x}=0$` (convex);
- If `$x^\ast=a$`, then `$\frac{\mathrm{d}f(x^\ast)}{\mathrm{d}x}\geq0$` (increasing);
- If `$x^\ast=b$`, then `$\frac{\mathrm{d}f(x^\ast)}{\mathrm{d}x}\leq0$` (decreasing).

Furthermore, if we introduce `$h_1=a-x\leq0,\ h_2=x-b\leq0$`, the above necessary conditions can then be expressed in a unified form:
`\begin{align}
\left\{
	\begin{aligned}
	&\frac{\mathrm{d}f}{\mathrm{d}x}+\lambda_1\frac{\mathrm{d}h_1}{\mathrm{d}x}+\lambda_2\frac{\mathrm{d}h_2}{\mathrm{d}x}=0;\\
	&\lambda_1h_1=\lambda_2h_2=0;\\
	&\lambda_1\geq0,\ \lambda_2\geq0;\\
	&h_1\leq0,\ h_2\leq0.
	\end{aligned}
\right. \tag{8} \label{eq8}
\end{align}`

For a multivariate function `$f(\pmb{x})$` (differentiable in `$D=\left\{\pmb{x}\,|\,a_i\leq x_i\leq b_i\right\},\ i=1,\,\cdots,n$`), we similarly introduce `$h_{1i}=a_i-x_i\leq0,\ h_{2i}=x_i-b_i\leq0$`. Equation `$\eqref{eq8}$` turns into:
`\begin{align}
\left\{
	\begin{aligned}
	&\frac{\mathrm{d}f}{\mathrm{d}x_i}+\lambda_{1i}\frac{\mathrm{d}h_{1i}}{\mathrm{d}x_i}+\lambda_{2i}\frac{\mathrm{d}h_{2i}}{\mathrm{d}x_i}=0 \rightarrow \frac{\mathrm{d}f}{\mathrm{d}x_i}=\lambda_{1i}-\lambda_{2i};\\
	&\lambda_{1i}h_{1i}=\lambda_{2i}h_{2i}=0;\\
	&\lambda_{1i}\geq0,\ \lambda_{2i}\geq0;\\
	&h_{1i}\leq0,\ h_{2i}\leq0.
    \end{aligned}
\right. \tag{9} \label{eq9}
\end{align}`

When there is only a lower bound, e.g., `$x_i\geq a_i$`, the conditions can be further simplified. Since `$\lambda_{1i}h_{1i}=0$`, we can arrive at the conclusion that `$\lambda_{1i}\geq0$` for `$h_{1i}=0\,(x_i=a_i)$`; `$\lambda_{1i}=0$` for `$h_{1i}<0\,(x_i>a_i)$`. Thus,
`\begin{align}
\left\{
	\begin{aligned}
	&\frac{\partial f}{\partial x_i}\geq 0,\quad x_i=a_i;\\
	&\frac{\partial f}{\partial x_i}=0,\quad x_i>a_i.
	\end{aligned}
\right. \tag{10} \label{eq10}
\end{align}`

### Optimization of Multivariate Functions with Inequality Constraints
`\begin{align}
&\min\quad f(\pmb{x}),\quad \pmb{x}=\left\{x_1,x_2,\,\cdots,x_n\right\}^\mathrm{T},\\
&\mathrm{s.t.}\quad h_j(\pmb{x})\leq0,\quad j=1,2,\,\cdots,m.
\end{align}`

We now introduce a set of relaxation variables `$s_j$`, which satisfy the conditions `$h_j+s_j=0$` and `$s_j\geq0$`. The Lagrangian is written as `$\mathcal{L}\left(\pmb{x},\pmb{\lambda},\pmb{s}\right)=f(\pmb{x})+\sum\lambda_j(h_j+s_j)$`. Therefore, the original optimization problem with inequality constraints is converted into an unconstrained one, i.e.,
`\begin{align}
&\frac{\partial\mathcal{L}}{\partial x_i}=\frac{\partial f}{\partial x_i}+\sum\lambda_j\frac{\partial h_j}{\partial x_i},\ i=1,2,\,\cdots,n; \tag{11} \label{eq11}\\
&\frac{\partial\mathcal{L}}{\partial\lambda_j}=h_j+s_j=0; \tag{12} \label{eq12}\\
&\frac{\partial\mathcal{L}}{\partial s_j}=\lambda_j\ \text{where, }s_j\geq0, \tag{13} \label{eq13}
\end{align}`
note that, Equation `$\eqref{eq13}$` constitutes an extremum problem with a lower bound `$0$`. And from Equation `$\eqref{eq10}$`, we can find that, `$\partial\mathcal{L}/\partial s_j=\lambda_j=0$`, if `$s_j>0$`; `$\partial\mathcal{L}/\partial s_j=\lambda_j\geq0$`, if `$s_j=0$`. This means,
`$$\lambda_j s_j=0,\ \lambda_j\geq0,\ s_j\geq0. \tag{14} \label{eq14}$$`

Combine Equations `$\eqref{eq12}$` and `$\eqref{eq14}$`, the introduced relaxation variables `$s_j$` can be eliminated:
`\begin{align}
&\text{If} h_j<0,\ \text{then }s_j>0,\ \lambda_j=0;\\
&\text{If} h_j=0,\ \text{then }s_j=0,\ \lambda_j\geq0,
\end{align}`
this, together with Equation `$\eqref{eq11}$`, finally lead to the <mark>KT conditions</mark>:
`\begin{align}
\left\{
	\begin{aligned}
	&\frac{\partial\mathcal{L}}{\partial x_i}=\frac{\partial f}{\partial x_i}+\sum_{j=1}^m\lambda_j\frac{\partial h_j}{\partial x_i}=0,\quad i=1,2,\,\cdots,n;\\
	&\lambda_j h_j=0,\quad j=1,2,\,\cdots,m;\\
	&h_j\leq0;\\
	&\lambda_j\geq0.
	\end{aligned}
\right. \tag{15} \label{eq15}
\end{align}`

Some remarks regarding Equation `$\eqref{eq15}$` should be made here. For the optimal point `$x^\ast$`, if
- `$h_j(x^\ast)<0$`, then `$\lambda_j=0$`, the constraint gradient terms `$\partial h_j/\partial x_i$` are deactivated (passive constraints);
- `$h_j(x^\ast)=0$`, then `$\lambda_j\geq0$`, the terms `$\partial h_j/\partial x_i$` are active (active constraints).
Based on Equation `$\eqref{eq15}$`, the physical interpretation of the KT conditions is that <font color=Crimson>the negative gradient of the objective function at the optimal point should be a linear combination of all gradients of active constraints with non-negative coefficients.</font>

## Contact Formulation