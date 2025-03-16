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

The most probable hypothesis further states that, *when a system reaches thermodynamic equilibrium, the distribution of its microstates will be the most probable, i.e., it corresponds to the distribution with the highest probability*. Since the equiprobability principle ensures that all microstates are equally likely, the equilibrium state corresponds to the distribution that **maximizes** the number of microstates `$W$`. Therefore, our focus shifts to determining the most likely number of particles at each energy level, i.e., the most probable distribution `$\left\{a_l\right\}$`.

The distribution of particles across different energy levels is clearly a combinatorial problem, where we need to distribute `$N$` particles according to the numbers `$a_1,a_2,\cdots$`. Moreover, considering the degeneracy of the energy levels, a single particle at energy level `$\varepsilon_l$` can actually occupy `$g_l$` different quantum states. Thus, all the particles at this energy level can be arranged in `$g_l^{a_l}$` ways, which further increases the value of `$W$`. In this way, **the total number of possible microstates of the system** can be expressed as
`$$W=C_N^{a_1}C_{N-a_1}^{a_2}\cdots\prod_l g_l^{a_l}=\frac{N!}{\prod_l a_l!}\prod_l g_l^{a_l}. \tag{2} \label{eq2}$$`


## Derivation of the Boltzmann Distribution

## (Boltzmann) Statistical Entropy