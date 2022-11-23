---
layout: post
title:  "Calculating Permutations with itertools"
date:   2022-07-16 23:12:45 +0100
categories: notes
tags:
- python
show_excerpts: true
published: true
---

I was working on a project that required me to forecast population growth for a given city. The  goal was to simulate different scenarios with different conditions that might influence the growth rate. 

In many possible ways can be combine the scenarios listed below?


```python

scenarios = [['fertility_high', 'fertility_moderate', 'fertility_high'],
             ['survival_low', 'survival_moderate', 'survival_high'],
             ['migration_low', 'migration_moderate', 'migration_high']]

```


```python
permutations = list(itertools.product(*scenarios))
```

The previous operation yields a list containg tuples of all possible combinations:


```python3
[('fertility_high', 'survival_low', 'migration_low')
('fertility_high', 'survival_low', 'migration_moderate')
('fertility_high', 'survival_low', 'migration_high')
('fertility_high', 'survival_moderate', 'migration_low')
('fertility_high', 'survival_moderate', 'migration_moderate')
('fertility_high', 'survival_moderate', 'migration_high')
('fertility_high', 'survival_high', 'migration_low')
('fertility_high', 'survival_high', 'migration_moderate')
('fertility_high', 'survival_high', 'migration_high')
('fertility_moderate', 'survival_low', 'migration_low')
('fertility_moderate', 'survival_low', 'migration_moderate')
('fertility_moderate', 'survival_low', 'migration_high')
('fertility_moderate', 'survival_moderate', 'migration_low')
('fertility_moderate', 'survival_moderate', 'migration_moderate')
('fertility_moderate', 'survival_moderate', 'migration_high')
('fertility_moderate', 'survival_high', 'migration_low')
('fertility_moderate', 'survival_high', 'migration_moderate')
('fertility_moderate', 'survival_high', 'migration_high')
('fertility_high', 'survival_low', 'migration_low')
('fertility_high', 'survival_low', 'migration_moderate')
('fertility_high', 'survival_low', 'migration_high')
('fertility_high', 'survival_moderate', 'migration_low')
('fertility_high', 'survival_moderate', 'migration_moderate')
('fertility_high', 'survival_moderate', 'migration_high')
('fertility_high', 'survival_high', 'migration_low')
('fertility_high', 'survival_high', 'migration_moderate')
('fertility_high', 'survival_high', ‘migration_high’)]
```
('fertility_high', 'survival_high', ‘migration_high’)]
