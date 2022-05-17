---
layout: post
title:  "Essential Tool: direnv "
date:   2022-05-13 18:30:45 +0100
categories: notes
tags:
- devops
show_excerpts: true
published: true
---

When doing local development work and handling environment variables, direnv is a tool that simplifies life. Let's say you have a myriad of environment variables. You need to export the variables each time you run an application that depends on them. With direnv installed, you can create a .envrc file in your working directory. Example .envrc:

```
export DEV_DB_DATABASE="hello"
export DEV_DB_USER="world"
```

With a few simple steps, we can make sure that the environment variables are automatically loaded each time we're in our working directory

```console
foo@bar % cd ~/working-directory
foo@bar working-directory % direnv allow
```


Voilà—the environment variables are ready to be used.
