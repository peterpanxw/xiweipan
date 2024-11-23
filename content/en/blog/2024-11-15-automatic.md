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
**Gradient descent** is a first-order iterative algorithm widely used for unconstrained mathematical optimization. It plays a key role in training machine learning models and neural networks, highlighting the importance of the "gradient" in these fields. Generally, there are four approaches to compute the *gradient* of a certain function: (a) Manual Differentiation, (b) Symbolic Differentiation, (c) Numerical Differentiation, and (d) Automatic Differentiation. In this blog, we will cover the basics, pros, and cons of these four approaches, with the goal of gaining a deeper and more systematic understanding through this organization.

## Manual Differentiation