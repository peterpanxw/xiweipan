---
title: "From Lagrangian to Hamiltonian"
date: 2026-08-10T16:30:20-05:00
type : list-single
author: Xiwei Pan
slug: hamiltonian-mechanics
draft: false
toc: true
categories:
  - learning
tags:
  - mechanics
---
## Lagrangian Mechanics
Newtonian mechanics describes motions through forces,
`$$m\ddot{\mathbf{x}}=\mathbf{F}.$$`

This works well for Cartesian coordinates, but becomes less convenient and effective when a system has constraints (in each constraint equation, one coordinate is redundant because it can be determined from the remaining coordinates) or when more natural (intrinsic) coordinates exist. [Lagrangian mechanics](https://en.wikipedia.org/wiki/Lagrangian_mechanics) provides a more general formulation using **generalized coordinates** `$\mathbf{q} = (q_1,q_2,\,\cdots,q_n)$`, which can be any coordinates that uniquely describe the configuration of the system. The position vector can then be expressed as a function of the generalized coordinates and time,
`$$\mathbf{r} = \mathbf{r}(\mathbf{q},t).$$`

The corresponding velocity vector is given by
`$$\dot{\mathbf{r}} = \sum_{i=1}^n\frac{\partial\mathbf{r}}{\partial q_i}\dot{q}_i+\frac{\partial\mathbf{r}}{\partial t},$$`
where `$\dot{q}_i$` is the `$i$`-th component of generalized velocity. Therefore, the basic state variables for Lagrangian mechanics are `$(\mathbf{q},\dot{\mathbf{q}})$`.

Lagrangian mechanics reformulates Newtonian mechanics in terms of energy rather than forces. Following the standard formulation, a mechanical system can be described by a pair `$(M,\mathcal{L})$`, where `$M$` is the [configuration space](https://en.wikipedia.org/wiki/Configuration_space_(physics)) and `$\mathcal{L}$` is a smooth function defined within that space, called the **Lagrangian**. The Lagrangian has units of energy, but there is no universal expression that applies to every physical system. In general, any function that produces the correct equations of motion and is consistent with the underlying physical laws may serve as a Lagrangian. Nevertheless, general forms can be constructed for broad classes of systems. For a non-relativistic system of particles in the absence of electromagnetic fields, the Lagrangian is given by
`$$\mathcal{L} = T-U,$$`
where `$T$` and `$U$` are the kinetic energy and potential energy, respectively.

Instead of directly applying Newton's second law, Lagrangian mechanics is based on the [*principle of stationary action*](https://en.wikipedia.org/wiki/Action_principles). For a trajectory `$\mathbf{q}(t)$`, define the action
`$$S[\mathbf{q}] = \int_{t_1}^{t_2}\mathcal{L}\left(\mathbf{q}(t),\dot{\mathbf{q}}(t),t\right)\,\mathrm{d}t.$$`

The physical trajectory is the one for which the action is stationary under small variations of the path `$\delta\mathbf{q}$`. Therefore, we have
`\begin{align}
\delta S &= \int_{t_1}^{t_2}\delta\mathcal{L}\left(\mathbf{q},\dot{\mathbf{q}},t\right)\,\mathrm{d}t\\
&= \int_{t_1}^{t_2}\left[\frac{\partial\mathcal{L}}{\partial q_i}\delta q_i+\frac{\partial\mathcal{L}}{\partial\dot{q}_i}\delta\dot{q}_i\right]\,\mathrm{d}t\\
&= \int_{t_1}^{t_2}\frac{\partial\mathcal{L}}{\partial q_i}\delta q_i\,\mathrm{d}t+\left(\frac{\partial\mathcal{L}}{\partial\dot{q}_i}\delta q_i\right)_{t_1}^{t_2}-\int_{t_1}^{t_2}\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{\partial\mathcal{L}}{\partial\dot{q}_i}\right)\delta q_i\,\mathrm{d}t. \tag{1} \label{eq1}
\end{align}`
Since the variation at the endpoints are zero, i.e., `$\delta q_i(t_1) = \delta q_i(t_2) = 0$`, Equation `$\eqref{eq1}$` becomes
`$$\delta S = -\int_{t_1}^{t_2}\left[\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{\partial\mathcal{L}}{\partial\dot{q}_i}\right)-\frac{\partial\mathcal{L}}{\partial q_i}\right]\delta q_i\,\mathrm{d}t = 0,$$`
which must hold for any variation `$\delta q_i$`, representing an arbitrary perturbation of the original actual trajectory `$q_i(t)$`.

In this way, we obtain the well-known [Euler-Lagrange equation](https://en.wikipedia.org/wiki/Euler%E2%80%93Lagrange_equation)
`$$\frac{\partial\mathcal{L}}{\partial q_i} - \frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{\partial\mathcal{L}}{\partial\dot{q}_i}\right) = 0,\quad i = 1,2,\,\cdots,n.$$`

## From Lagrangian to Hamiltonian
[Hamiltonian mechanics](https://en.wikipedia.org/wiki/Hamiltonian_mechanics) replaces the generalized velocities `$\dot{q}_i$` used in Lagrangian mechanics with generalized momenta `$p_i$`, thereby describing all the motions and system evolutions in the *phase space* `$(\mathbf{q},\mathbf{p})$`. We define the canonical (or conjugate) momentum as
`$$p_i = \frac{\partial\mathcal{L}}{\partial\dot{q}_i}. \tag{2} \label{eq2}$$`
The motivation for this definition will become clear when we later introduce the [Legendre transformation](https://en.wikipedia.org/wiki/Legendre_transformation). Moreover, the canonical momentum defined by Equation `$\eqref{eq2}$` does not necessarily equal to `$mv$`. For a particle described by a Cartesian coordinate `$x$`, we have
`$$\mathcal{L} = \frac{1}{2}m\dot{x}^2-U(x),\quad p = \frac{\partial\mathcal{L}}{\partial\dot{x}} = m\dot{x} = mv.$$`
However, for a generalized coordinate, the corresponding canonical momentum can take a different form. For example, for a simple pendulum described by the angular coordinate `$\theta$`,
`$$\mathcal{L} = \frac{1}{2}ml^2\dot{\theta}^2-U(\theta),\quad p = \frac{\partial\mathcal{L}}{\partial\dor{\theta}} = ml^2\dot{\theta}\neq mv.$$`

Now, let us turn to the Legendre transformation. For a differentiable convex (ensures one-to-one mapping and invertibility) function `$f(x)$`, the Legendre transformation replaces the original variable `$x$` with the slope
`$$u = f^\prime(x), \tag{3} \label{eq3}$$`
and defines a new function `$f^\ast(u)$` in terms of this new variable. The transform is given by
`$$f^\ast(u) = u\cdot x(u)-f\left(x(u)\right). \tag{4} \label{eq4}$$`

This construction ensures that the derivatives of `$f$` and `$f^\ast$` are inverse functions of each other, i.e.,
`$$f^{\ast\prime}(u) = x,\quad f^\prime(x) = u.$$`

If we replace `$(u,x)$` with `$(p,\dot{q})$`, then Equation `$\eqref{eq3}$` exactly reflects the aforementioned definition of canonical momentum (Equation `$\eqref{eq2}$`). Therefore, Hamiltonian mechanics is derived from Lagrangian mechanics through a Legendre transformation. Similar to Equation `$\eqref{eq4}$`, we define the Hamiltonian from Lagrangian,
`$$\mathcal{H}\left(\mathbf{q},\mathbf{p},t\right) = \sum_{i=1}^np_i\dot{q}_i-\mathcal{L}\left(\mathbf{q},\dot{\mathbf{q}},t\right).$$`

For classical particle systems,
`$$\mathcal{L} = T-U = \frac{1}{2}\sum_i m_i\dot{q}_i^2-U(\mathbf{q}),\quad p_i = \frac{\partial\mathcal{L}}{\partial\dot{q}_i} = m_i\dot{q}_i,$$`
hence the Hamiltonian becomes
`$$\mathcal{H} = \sum_i m_i\dot{q}_i^2-\frac{1}{2}\sum_i m_i\dot{q}_i^2+U(\mathbf{q}) = \frac{1}{2}\sum_i m_i\dot{q}_i^2+U(\mathbf{q}) = T+U,$$`
which represents the total mechanical energy of the system. However, the Hamiltonian should *not* in general be identified automatically with the total energy. The equality `$\mathcal{H}=T+U$` holds for standard mechanical systems with a time-independent potential and a kinetic energy that is quadratic in the generalized velocities. For more general Lagrangians, particularly those involving velocity-dependent interactions or explicit time dependence, the relation between the Hamiltonian and the physical energy requires additional care.

We consider the total differentiation of the Hamiltonian `$\mathcal{H}$`,
`\begin{align}
\mathrm{d}\mathcal{H} &= \sum_i p_i\mathrm{d}\dot{q}_i+\sum_i\dot{q}_i\mathrm{d}p_i-\sum_i\frac{\partial\mathcal{L}}{\partial q_i}\mathrm{d}q_i-\sum_i\frac{\partial\mathcal{L}}{\partial\dot{q}_i}\mathrm{d}\dot{q}_i-\frac{\partial\mathcal{L}}{\partial t}\mathrm{d}t\\
&= \sum_i\dot{q}_i\mathrm{d}p_i-\sum_i\frac{\partial\mathcal{L}}{\partial q_i}\mathrm{d}q_i-\frac{\partial\mathcal{L}}{\partial t}\mathrm{d}t. \tag{5} \label{eq5}
\end{align}`

From the Euler-Lagrange equation, we have
`$$\frac{\partial\mathcal{L}}{\partial q_i} - \frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{\partial\mathcal{L}}{\partial\dot{q}_i}\right) = 0\quad\Rightarrow\quad\frac{\partial\mathcal{L}}{\partial q_i} = \frac{\mathrm{d}p_i}{\mathrm{d}t}.$$`
Then, Equation `$\eqref{eq5}$` can be simplified to
`$$\mathrm{d}\mathcal{H} = \sum_i\dot{q}_i\mathrm{d}p_i-\sum_i\dot{p}_i\mathrm{d}q_i-\frac{\partial\mathcal{L}}{\partial t}\mathrm{d}t$$`

Compared with the total differentiation of the Hamiltonian,
`$$\mathrm{d}\mathcal{H} = \sum_i\frac{\partial\mathcal{H}}{\partial q_i}\mathrm{d}q_i+\sum_i\frac{\partial\mathcal{H}}{\partial p_i}\mathrm{d}p_i+\frac{\partial\mathcal{H}}{\partial t}\mathrm{d}t,$$`
we obtain the Hamiltonian equation
`$$\dot{q}_i = \frac{\partial\mathcal{H}}{\partial p_i},\quad \dot{p}_i = -\frac{\partial\mathcal{H}}{\partial q_i},\quad \frac{\partial\mathcal{H}}{\partial t} = -\frac{\partial\mathcal{L}}{\partial t}.$$`

The Hamiltonian formulation does not introduce new physics; rather, it reorganizes the same dynamics into a form that makes the structure of the system, conservation laws, and phase-space evolution more transparent. Although it does not usually make the equations of motion easier to solve explicitly, it provides a powerful framework for deriving important theoretical results, partly because the generalized coordinates and momenta are treated as independent variables with nearly symmetric roles. This formulation also serves as a natural foundation for statistical mechanics and quantum mechanics.