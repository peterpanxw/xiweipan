---
title: "Lagrange Multiplier, Penalty Methods, Ill-conditioning, and Augmented Lagrangian"
date: 2025-04-17T20:43:21+08:00
type : list-single
author: Xiwei Pan
slug: constrained-optimization-methods
draft: false
toc: true
categories:
  - reading
tags:
  - optimization
  - mathematics
---
## Preface
For constrained optimization problems, we typically have two types of approaches: **direct methods** and **transformation methods**. The first approach directly solves the original problem, taking into account the impact of constraints on the searching direction and step size. These include *projected gradient methods*, *feasible direction methods*, and *the complex methods*, etc. The second approach can be further divided into two strategies. One involves incorporating the constraint functions from the original nonlinear programming problem into the objective function in a certain manner, thereby transforming it into an unconstrained optimization problem, with *penalty methods* and *augmented Lagrangian method* being specific examples. The other strategy seeks to convert the original constrained nonlinear programming problem into a series of simpler constrained problems, such as *linear or quadratic programming problems*, for example, through *sequential linear programming methods*.

This blog will focus on one such approach within the second category, namely the transformation to unconstrained optimization problems, discussing Lagrange multipliers, penalty methods, the augmented Lagrangian method, and the issue of ill-conditioning in penalty methods.

## The Method of Lagrange Multipliers
### Equality Constrained Optimization Problem
Let `$f:\mathbb{R}^n\to\mathbb{R}$` be the objective function, while `$\pmb{h}:\mathbb{R}^n\to\mathbb{R}^{m_1}$` and `$\pmb{g}:\mathbb{R}^n\to\mathbb{R}^{m_2}$` represent the inequality and equality constraint functions, respectively. Here, `$f,\pmb{g},\pmb{h}\in\mathcal{C}^1$`, meaning that their first-order derivatives are continuous. Consider a *general type* optimization problem with equality and inequality constraints:
> `\begin{align}
\min\quad &f(\pmb{x}),\quad \pmb{x}=\left\{x_1,x_2,\,\cdots,x_n\right\}^\mathrm{T},\\
\mathrm{s.t.}\quad &\pmb{h}(\pmb{x})\leq\pmb{0};\\
&\pmb{g}(\pmb{x})=\pmb{0}.
\tag{1} \label{eq1}
\end{align}`

Based on the method of Lagrange multipliers (for equalities) and its generalization to inequalities, i.e., [the Kuhn-Tucker conditions](https://xiweipan.com/en/2025/04/09/kuhn-tucker-conditions/#mjx-eqn-eq15), the Lagrangian of Problem `$\eqref{eq1}$` is expressed by
`$$\mathcal{L}(\pmb{x},\pmb{\lambda},\pmb{\mu})=f(\pmb{x})+\pmb{\lambda}\cdot\pmb{h}(\pmb{x})+\pmb{\mu}\cdot\pmb{g}(\pmb{x}), \tag{2} \label{eq2}$$`
where `$\pmb{\lambda}=\left(\lambda_1,\,\cdots,\lambda_{m_1}\right)^\mathrm{T}$` and `$\pmb{\mu}=\left(\mu_1,\,\cdots,\mu_{m_2}\right)^\mathrm{T}$`. Therefore, the original extremum problem is equivalent to finding the *stationary point* of `$\mathcal{L}$`, treated as a function of `$\pmb{x}$`, `$\pmb{\lambda}$` and `$\pmb{\mu}$`, i.e., the optimality conditions to Problem `$\eqref{eq1}$` are
`\begin{align}
&\nabla_\pmb{x}\mathcal{L}=\nabla f+\pmb{\lambda}\cdot\nabla^\mathrm{T}\pmb{h}+\pmb{\mu}\cdot\nabla^\mathrm{T}\pmb{g}=\pmb{0};\\
&\pmb{\lambda}\cdot\pmb{h}=0,\ \pmb{h}\leq\pmb{0},\ \pmb{\lambda}\geq\pmb{0}\quad\text{KT conditions};\\
&\pmb{g}=\pmb{0}\quad\text{Lagrange multiplier},
\tag{3} \label{eq3}
\end{align}`
which, as we can see, is a straightforward outcome of combining the optimality conditions for both equality and inequality constraints.

## Penalty and Barrier Methods
### Penalty Methods
In the penalty methods, we seek to replace the original problem with an unconstrained one by adding *penalties* for the violation of the involved constraints. Unlike the method of Lagrange multiplier, which is theoretically accurate and can provide exact optimality point for simpler problems, the penalty methods discussed here are a type of 'intrinsically approximating' method. For the general type problem `$\eqref{eq1}$`, the penalty methods suggest that the corresponding 'combined objective' function should take the following form:
`\begin{align}
\varphi\left(\pmb{x},r_k,t_k\right)=f(\pmb{x})+\frac{r_k}{2}\sum_{i=1}^{m_1}\max\left(0,h_i(\pmb{x})\right)^2+\frac{t_k}{2}\sum_{j=1}^{m_2}g_j^2(\pmb{x}), \tag{4} \label{eq4}
\end{align}`

The above penalty parameters `$r_k,t_k$` are taken as two *progressively increasing positive sequences* to continuously strengthen the effect of the penalty term, thereby gradually guiding the minimum point of `$\varphi$` to the optimal point `$\pmb{x}^\ast$`. In this way, the unconstrained local/global minimizers are exactly the constrained local, respectively, global minimizers of `$f$` only if `$r_k,t_k\to\infty$`.

### Barrier Methods
A special type of penalty arises when the current minimizer lies within the feasible domain, ensuring that the constraints are not violated **from inside out**. That is, when the design point is about to cross the constraint boundary, the corresponding penalty term blows up to infinity, forming a '*barrier*' to prevent it from moving outside the feasible domain. This 'interior penalty' method, or simply the 'barrier' method can **only** be used in the case of inequality constrained problems (`$h_j(\pmb{x})\leq 0$`, `$j=1,2,\,\cdots,m$`), and the combined objective function is formulated as follows:
`$$\varphi\left(\pmb{x},r_k\right)=f(\pmb{x})+r_kP(\pmb{x}), \tag{5} \label{eq5}$$`
where the continuously differentiable penalty function `$P(\pmb{x})$` can be selected to be
`\begin{align}
P(\pmb{x})&=-\sum_{j=1}^m\frac{1}{h_j(\pmb{x})}\quad\text{Carrol barrier},\ \text{or}\\
P(\pmb{x})&=-\sum_{j=1}^m\ln\left(-h_j(\pmb{x})\right)\quad\text{Logarithmic barrier},
\end{align}`
or some other proper forms. The parameter `$r_k$` is a progressively decreasing positive sequence, it tends to 0 as the iteration number `$k\to\infty$`.

The advantage of the barrier function method lies in the fact that the intermediate design points it provides also satisfy the constraints, meaning that even if the optimal point is not reached, we can still obtain a series of feasible solutions that are an improvement over the initial values.

### Ill-conditioning
Both of the aforementioned methods can provide approximating optimal solutions through the intuitive addition of violation-preventing terms. However, they both **face the inherent contradiction between ensuring the satisfaction of constraints and avoiding ill-conditioning**. We will, in this subsection, try to explain how this issue haunts the application of penalty/barrier methods.

Firstly, we investigate the influence of [condition number](https://en.wikipedia.org/wiki/Condition_number) of the Hessian matrix `$\mathcal{H}$` on a type of unconstrained optimization method that explicitly relies on gradients, e.g., the steepest descent method. The basic gradient descent formulation is given by
`$$\pmb{x}^{(k+1)}=\pmb{x}^{(k)}-\delta\nabla\pmb{F}, \tag{6} \label{eq6}$$`
the step size `$\delta$` can be determined through [line search](https://en.wikipedia.org/wiki/Line_search). The taylor expansion of a multivariate function `$\pmb{F}(\pmb{x})$` at the optimal point `$\pmb{x}^\ast$` is written as
`$$\pmb{F}(\pmb{x})=\pmb{F}(\pmb{x}^\ast)+\frac{1}{2}\tilde{\pmb{x}}^\mathrm{T}\mathcal{H}\tilde{\pmb{x}}+\mathcal{O}\left(\tilde{\pmb{x}}^3\right), \tag{7} \label{eq7}$$`
where `$\tilde{\pmb{x}}=\pmb{x}-\pmb{x}^\ast$`, and `$\nabla\pmb{F}(\pmb{x}^\ast)=\pmb{0}$` is used to yield Equation `$\eqref{eq7}$`.

Assume that, after multiple iterations (`$k\to\infty$`), the current solution is near the optimal point. Therefore, the gradient of `$\pmb{F}$` near the minimum can be approximated by
`$$\nabla\pmb{F}(\pmb{x})=\mathcal{H}\tilde{\pmb{x}}, \tag{8} \label{eq8}$$`
note that the higher-order remainder `$\mathcal{O}(\|\tilde{\pmb{x}}\|^2)$` vanishes as `$\tilde{\pmb{x}}$` approaches zero. Substituting Equation `$\eqref{eq8}$` into Equation `$\eqref{eq6}$` and subtracting `$\pmb{x}^\ast$` from both ends, we have
`$$\tilde{\pmb{x}}^{(k+1)}=\left(\pmb{I}-\delta\mathcal{H}\right)\tilde{\pmb{x}}^{k}, \tag{9} \label{eq9}$$`
which relates the current solution error (step `$k$`) to that of the next interation (step `$(k+1)$`). The [rate of convergence](https://en.wikipedia.org/wiki/Rate_of_convergence) can be expressed by
`$$\lim_{k\to\infty}\frac{\|\pmb{x}^{(k+1)}-\pmb{x}^\ast\|}{\|\pmb{x}^{(k)}-\pmb{x}^\ast\|}=\|\pmb{I}-\delta\mathcal{H}\|, \tag{10} \label{eq10}$$`
here `$\|\bullet\|$` represnts a norm, typically chosen to be the `$L^2$` norm.

<font color=Crimson>For a [normal matrix](https://en.wikipedia.org/wiki/Normal_matrix) `$A$` satisfying `$A^\mathrm{H}A=AA^\mathrm{H}$`, where `$A^\mathrm{H}$` is the Hermitian transpose (or conjugate transpose) of `$A$`, it can be diagonalized using a [unitary matrix](https://en.wikipedia.org/wiki/Unitary_matrix), i.e., `$U^{-1}AU=\Lambda$`.</font> In this case, the condition number of the matrix can be further related to its eigenvalues, i.e.

`$$\kappa(A)=\|A\|\cdot\|A^{-1}\|=\sqrt{\lambda_\mathrm{max}\left(A^\mathrm{T}A\right)}\cdot \sqrt{\lambda_\mathrm{max}\left(A^\mathrm{-T}A^{-1}\right)}=\frac{\lambda_\mathrm{max}}{\lambda_\mathrm{min}}, \tag{11} \label{eq11}$$`
where `$\lambda_\mathrm{max}$` and `$\lambda_\mathrm{min}$` are the maximum and minimum eigenvalues of `$A$`, respectively.

Normal matrices include diagonal matrices, real (anti-)symmetric matrices, (anti-)hermitian matrices, orthogonal matrices, and unitary matrices, etc. Therefore, as a special case, the real symmetric matrix `$\pmb{I}-\delta\mathcal{H}$` can also be diagonalized by a unitary matrix, or more specifically, an orthogonal matrix `$P$`. This gives the relation
`$$P^\mathrm{T}(\pmb{I}-\delta\mathcal{H})P=P^\mathrm{T}\pmb{H}P=\Lambda. \tag{12} \label{eq12}$$`

If we further assume the eigenvalues of the (`$n\times n$` positive-definite) Hessian to be `$0<\lambda_1<\,\cdots<\lambda_n$`, `$\Lambda=[1-\delta\lambda_1,\,\cdots,1-\delta\lambda_n]$`, and Equation `$\eqref{eq10}$` becomes:
`$$\|\pmb{I}-\delta\mathcal{H}\|=\sqrt{\lambda_\mathrm{max}\left(\pmb{H}^\mathrm{T}\pmb{H}\right)}=\max_j |1-\delta\lambda_j|<1, \tag{13} \label{eq13}$$`
the inequality shows the necessary condition for the algorithm to converge. According to Equation `$\eqref{eq13}$`, `$\delta<2/\lambda_n$`, so we could take `$\delta=c/\lambda_n\ (0<c<2)$`. Finally, the rate of convergence is expressed by
`$$\|\pmb{I}-\delta\mathcal{H}\|=\max_j |1-\delta\lambda_j|=|1-c\frac{\lambda_1}{\lambda_n}|, \tag{14} \label{eq14}$$`
note that, the term `$\frac{\lambda_1}{\lambda_n}$` is the reciprocal of `$\kappa(\mathcal{H})$`. <font color=Crimson>Thus, the rate of convergence for the steepest descent method is directly related to the condition number of the Hessian, and, in particular, to the eigenvalues of the Hessian.</font>

## Augmented Lagrangian Method