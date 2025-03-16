---
title: "Boltzmann Distribution and Statistical Entropy"
date: 2025-03-16T09:30:04+08:00
type : list-single
author: Xiwei Pan
slug: boltzmann-distribution
draft: false
toc: true
categories:
  - learning
tags:
  - thermodynamics
  - statistical mechanics
---
## Preface
In the blog post "Langevin Dynamics", we mentioned the concept of the "[Boltzmann Distribution](https://xiweipan.com/en/2024/10/15/langevin-dynamics/#boltzmann-distribution)", which plays an important role in *Energy-Based Models*. At that time, since our focus was on langevin dynamics and its application in the machine learning community, we only presented the distribution expression (Equation (6) in [this blog](https://xiweipan.com/en/2024/10/15/langevin-dynamics/)) without a detailed derivation or explanation. Fortunately, I have been studying thermodynamics recently and am currently working with my advisor on writing a handbook that explores solid mechanics from a thermodynamic perspective. Through this process, I have gained a better understanding of the Boltzmann distribution and, more importantly, how the expression for entropy in statistical mechanics is derived. I figured this would be a great opportunity to fill in the gaps in my previous understanding of the related concepts.

## Motivation Behind the Statistical Entropy
Rudolf Clausius (1822-1888) introduced the concept of **[entropy](https://en.wikipedia.org/wiki/Entropy)** in 1865, which is *macroscopically* defined to measure the degree of disorder or randomness in a thermodynamic system. Many irreversible processes observed in nature are accompanied by an increase in the system's entropy, i.e., `$\mathrm{d}_\mathrm{i}S$`. However, from a *microscopic* perspective, these irreversible processes are essentially the result of atomic and molecular motion governed by fundamental physics, such as classical mechanics and quantum mechanics, which themselves are time-symmetric and do not exhibit irreversibility. This raises a series of intriguing questions: 
- <font color=Crimson>How can irreversible macroscopic processes emerge from the reversible motion of atoms and molecules?</font>
- And what is the relation between a system's entropy and its microscopic constituent particles?

Statistical Mechanics was then developed by Ludwig Boltzmann (1844-1906) to answer these queations.

## The Number of Microstates
The possible energy distribution of microscopic particles in a system is known as **[energy levels](https://en.wikipedia.org/wiki/Energy_level)**, which are discrete rather than continuous. Let us now define the basic parameters of the isolated system under investigation: the system contains a fixed number of particles `$N$`, with a volume `$V$` and a total energy `$U$`. The energy of each energy level is denoted as `$\varepsilon_1,\varepsilon_2,\cdots,\varepsilon_l,\cdots$`, represented as `$\left\{\varepsilon_l\right\},\ l=1,2,\cdots$`. The [degeneracy](https://en.wikipedia.org/wiki/Degenerate_energy_levels) of each energy level (i.e., the number of measurable quantum states corresponding to each energy level) is `$g_1,g_2,\cdots,g_l,\cdots$`, represented as `$\left\{g_l\right\}$`. The number of particles occupying each energy level is `$a_1,a_2,\cdots,a_l,\cdots$`, denoted as `$\left\{a_l\right\}$`.

In a system composed of particles that are nearly independent, the interaction between microscopic particles is weak and can be neglected. Therefore, the internal energy of the system is simply the sum of the individual particle energies `$\varepsilon_l$`. Based on the constraints imposed by the particle number and system energy, we have
`$$N=\sum_la_l;\quad U=\sum_la_l\varepsilon_l. \tag{1} \label{eq1}$$`

Boltzmann proposed two important hypotheses for the equilibrium state of a system: **the equiprobability principle** and **the most probable hypothesis**.

The equiprobability principle states that, *in thermodynamic equilibrium, all possible microscopic states of an isolated system within the same energy range are equally probable*. Therefore, the probability that the particles of a system are in a particular distribution `$\left\{a_l\right\}$` is actually proportional to the number of microstates satisfying that distribution. That is, `$P\left(\left\{a_l\right\}\right)\propto W\left(\left\{a_l\right\}\right)$`, where `$W$` represents the number of possible microstates that correspond to distribution `$\left\{a_l\right\}$`.

The most probable hypothesis further states that, *when a system reaches thermodynamic equilibrium, the distribution of its microstates will be the most probable, i.e., it corresponds to the distribution with the highest probability*. Since the equiprobability principle ensures that all microstates are equally likely, the equilibrium state corresponds to the distribution that **maximizes** the number of microstates `$W$`. Therefore, our focus shifts to determining the most likely number of particles at each energy level, i.e., the most probable distribution (MPD) `$\left\{a_l\right\}$`.

The distribution of particles across different energy levels is clearly a combinatorial problem, where we need to distribute `$N$` particles according to the numbers `$a_1,a_2,\cdots$`. Moreover, considering the degeneracy of the energy levels, a single particle at energy level `$\varepsilon_l$` can actually occupy `$g_l$` different quantum states. Thus, all the particles at this energy level can be arranged in `$g_l^{a_l}$` ways, which further increases the value of `$W$`. In this way, **the total number of possible microstates of the system** can be expressed as
`$$W=C_N^{a_1}C_{N-a_1}^{a_2}\cdots\prod_l g_l^{a_l}=\frac{N!}{\prod_l a_l!}\prod_l g_l^{a_l}. \tag{2} \label{eq2}$$`

Now, I want to discuss Equation `$\eqref{eq1}$` and the underlying concept with a simple example. Consider a box that is evenly divided into two sections, filled with gas. The left half contains `$M$` gas molecules, while the right half contains `$N$` gas molecules. Each molecule can be in either the left or the right part of the box. Here, we ignore the effect of degeneracy, i.e., `$g_l=1,\text{ for }l=1,2,\cdots$`, meaning the number of microstates `$W$` is simply the number of ways to distribute `$M+N$` gas molecules between the left and right halves of the box, as shown in Fig. 1, where we have `$M$` molecules on the left and `$N$` on the right
`$$W=C_{M+N}^M=\frac{(M+N)!}{M!N!}, \tag{3} \label{eq3}$$`

{{<figure src="/figures/blogFigs/boltzmannDistribution/combinatorial_problem.png" caption="Figure 1: A combinatorial problem defined by distributing M+N gas molecules between the two halves of the box, with M molecules on the left and N on the right." width="400">}}

As mentioned earlier, the equilibrium state maximizes `$W$`. In this case, Equation `$\eqref{eq3}$` reaches its maximum when `$M=N$`. This conclusion is intuitive: during the process of reaching equilibrium, the gas molecules gradually diffuse and spread uniformly to fill the entire space. When the system is in equilibrium, the left and right halves of the box must contain an equal number of gas molecules.

## Derivation of the Boltzmann Distribution
Referring back to the expression for the microstates number given by Equation `$\eqref{eq2}$`, we aim to determine the MPD of particles. At the thermodynamic equilibrium, `$W$` is maximum, but the corresponding distribution `$\left\{a_l\right\}$` should still satisfy Equation `$\eqref{eq1}$`. This forms a constrained optimization problem
`\begin{align}
\min_{\left\{a_l\right\}}\quad &-\ln W\left(\left\{a_l\right\}\right)\\
\mathrm{s.t.}\quad &\sum_l a_l-N=0\\
&\sum_l a_l\varepsilon_l-U=0, \tag{4} \label{eq4}
\end{align}` 
where, for simplicity, we reformulate the problem of maximizing `$W$` as an equivalent problem of minimizing its negative logarithm. Note that, the number of particles `$N$` contained in real systems is sufficiently large, allowing us to further simplify the complex factorial operations using **Stirling's approximation**:
`$$\ln n!\approx n\left(\ln n-1\right),\quad n\gg 1, \tag{5} \label{eq5}$$`
then, taking the logarithm of Equation `$\eqref{eq2}$` and applying Stirling's approximation, we obtain
`$$\ln W\approx N\ln N-N-\sum_l\left(a_l\ln a_l-a_l\right)+\sum_la_l\ln g_l. \tag{6} \label{eq6}$$`

For the constrained optimization problem given by the equality in Equation `$\eqref{eq4}$`, we first construct the Lagrangian function `$\mathcal{L}$`
`$$\mathcal{L}=-\ln W\left(\left\{a_l\right\}\right)+\alpha\left(\sum_la_l-N\right)+\beta\left(\sum_la_l\varepsilon_l-U\right), \tag{7} \label{eq7}$$`
here, the undetermined parameters `$\alpha$` and `$\beta$` are the Lagrange multipliers. According to [the method of Lagrange multipliers](https://en.wikipedia.org/wiki/Lagrange_multiplier), for all energy levels `$l$`, we have `$\partial\mathcal{L}/\partial a_l=0$`. This leads to the following result
`$$a_l=g_l\cdot e^{-\alpha-\beta\varepsilon_l},\quad l=1,2,\cdots, \tag{8} \label{eq8}$$`
this is called the **Maxwell-Boltzmann distribution**, which represents the most probable number of particles at energy level `$l$`, that is, the MPD of particles.

Based on the conservation of particle number in an isolated system, `$\alpha$` can be further expressed in terms of `$\beta$`, allowing Equation `$\eqref{eq8}$` to be rewritten as
`$$a_l=N\frac{g_l\cdot e^{-\beta\varepsilon_l}}{Z},\quad Z=\sum_kg_k\cdot e^{-\beta\varepsilon_k}, \tag{9} \label{eq9}$$`
where, `$Z$` is called the **[partition function](https://en.wikipedia.org/wiki/Partition_function_(statistical_mechanics))**, and `$\alpha=\ln(Z/N)$`. Dividing both sides of the above equation by `$N$`, we obtain the Boltzmann distribution we want
`$$p_l=\frac{1}{Z}g_l\cdot e^{-\beta\varepsilon_l}. \tag{10} \label{eq10}$$`

We have arrived at the very original form of the Boltzmann distribution, but still with a multiplier `$\beta$` to be determined. Next, we will further derive the expression for statistical entropy and determine the specific value of `$\beta$` in the process.

## (Boltzmann) Statistical Entropy
From the conservation of system energy, the internal energy `$U$` can be related to the partition function `$Z$` through
`$$U=e^{-\alpha}\sum_lg_l\varepsilon_l\cdot e^{-\beta\varepsilon_l}=-\frac{N}{Z}\frac{\partial Z}{\partial\beta}=-N\frac{\partial\ln Z}{\partial\beta}, \tag{11} \label{eq11}$$`
which is generally known as the statistical form of system's internal energy.

Earlier, we derived the Maxwell-Boltzmann distribution for a system of distinguishable particles assuming it was isolated (Equation `$\eqref{eq8}$`). However, for a thermodynamic system that is not isolated, we need to take into account the effect of external parameters `$y$` (which remain unchanged by the system's internal state and are determined by external conditions). When these external parameters change, the surroundings do work on the system, increasing its internal energy.