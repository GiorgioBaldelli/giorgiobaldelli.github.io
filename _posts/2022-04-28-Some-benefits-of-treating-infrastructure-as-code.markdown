---
layout: post
title:  The benefits of treating infrastructure as code"
date:   2022-02-16 23:12:45 +0100
categories: jekyll update
tags:
- DevOps
show_excerpts: true
published: true
---

When we treat our infrastructure as code, we write code to manage each resource of our cloud infrastructure. The code acts both as living documentation and as a declarative set of instructions that manages our cloud resources.

Treating infrastructure as code contrasts with manually setting up each piece of infrastructure using the web interface provided by our chosen cloud provider. 

The previous comparison hints already at some benefits of treating infrastructure as code. From my experience with using Terraform, the leading tool when it comes to enabling users to treat their infrastructure as code, these are the main benefits:

1. Documentation.  By treating our infrastructure as code and storing our configuration files in a version-controlled repository, we have evolving documentation that keeps track of changes over time. 

2. Automation. Writing code to set up infrastructure automates countless actions that one would have to do manually lacking alternatives. Imagine having to manually manage a PostgresSQL instance and manually create schemas, users, and permissions? That's work for robots—not humans in my opinion.

3. Disaster Recovery. If we treat our infrastructure as code, we can more quickly spin up copies. Being able to quickly act is invaluable when we need to recover from a disaster. 

These three benefits outweigh the illusory flexibility of manually managing cloud infrastructure. I'd like to stress the word illusory. Doing manual changes gives a sense of being productive. However, it also introduces unpredictability and errors—things that we should avoid at all costs when building critical infrastructure.
