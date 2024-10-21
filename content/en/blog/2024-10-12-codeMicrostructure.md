---
title: "An Interesting Way to Generate Spatially Varying Microstructures"
date: 2024-10-12T19:25:41+08:00
type : list-single
author: Xiwei Pan
slug: generating-microstructure
draft: false
toc: true
categories:
  - learning
tags:
  - microstructures
  - mapping
  - MATLAB
---
## Preface
Configurations infilled with microstructures (architected materials) achieve an excellent balance between the desired property/response and the issue of lightweight. In 1978, Bensoussan et al.[^1] first introduced asymptotic expansion to study the macroscopic behavior of periodic structures whose microstructure period is small compared to the spatial extent of the whole structure. With asymptotic analysis, two length scales can be separated in the case of linear elasticity, and the effective micro-to-macro properties are mathematically derived for the micro unit cell, thus *homogenizing* microstructures to an equivalent solid.

However, such periodic structures are less preferred when one needs to accommodate advanced or tailored engineering use. Therefore, *heterogeneity* has always been a theme pursued by researchers and scientists both in design community and in practical application. In contrast to periodic structures, spatially varying ones are just able to provide such heterogeneity due to aperiodic or irregular arrangement of constituent cells, which is the main reason they are currently attracting so much attention and popularity.

Our focus here revolves around ***how* can a spatially varying microstructure be represented in a computer?** We will try to answer this question in the following sections.

## Generation of Periodic Structures
As is indicated by the name, the key to generate a periodic structure lies in the description of a (micro) representative cell. So, we first talk about the generation of a unit cell.
### Topology Description Function (TDF)
A TDF refers to an *implicit* way to describe the configuration geometry. Positions occupied by (one) solid material are assigned with positive TDF values; while in regions occupied by air or the other kind of material, TDF gets negative.
`\phi(\pmb{x})\left\{\begin{align}
\geq 0,\quad \pmb{x}\in\mathrm{\Omega}^\mathrm{s};\\
<0,\quad \pmb{x}\in\mathrm{\Omega}\backslash\mathrm{\Omega}^\mathrm{s},
\end{align}`
where the superscript "s" is used to denote the "solid" part of the configuration. Fig. 1 shows the plot of microscopic unit cells with three different geometries generated based on TDF.
{{<figure src="/figures/blogFigs/codeMicrostructure/Cell_OX.png" caption="Figure 1: Plot of three different microscopic unit cells. The third cell is obtained by performing an intersection operation on the negation of the first two." width="800">}}

The corresponding MATLAB code for generating the above cells is presented here.
```Matlab
% Define the plot definition and the corresponding step
M1 = 256; dx = 1/M1;
M2 = 256; dy = 1/M2;

%% Generation of the matrix cell
% Representative cell of O-shape
R = 0.3;  % circle radius
x0 = -1/2:dx:1/2;
y0 = -1/2:dy:1/2;
[X0,Y0] = meshgrid(x0,y0);
Z_O = X0.^2+Y0.^2 - R^2;
figure(1)
contourf(X0,Y0,Z_O,[0,0]);
axis equal;
axis off;

% Representative cell of X-shape
h = 0.2;  % bar width
Z1 = h-abs(Y0-X0);
Z2 = h-abs(X0+Y0);
Z_X = max(Z1,Z2);
figure(2)
contourf(X0,Y0,Z_X,[0,0]);
axis equal;
axis off;

% Cell generated through Boolean operation
figure(3)
contourf(X0,Y0,max(-Z_O,-Z_X),[0,0]);
axis equal;
axis off;
```


[^1]: Bensoussan A, Lions JL, Papanicolau G. Asymptotic Analysis for Periodic Structures. Elsevier; 1978.