---
layout: post
title:  "Calculating Permutations with Python"
date:   2022-02-16 23:12:45 +0100
categories: jekyll update
tags:
- python
show_excerpts: true
published: false
---

I'm working on a demography related project that requires me to simulate population growth using various combinations of conditions:

- low fertility, moderate fertility, high fertility
- low life-expectancy, moderate life-expectancy, high-life expectancy
- low migration, moderate migration, high migration


In how many way can you combine the previous variables? 

It's easy to calculate all possible outcomes using the python library itertools. We have 27 permutations that we'll need to prepare simulations:

If you're bumbing into a more complex permuatation problem, check the library out. It can come in handy.