---
layout: post
title:  "Terraform: untainting a tainted resource"
date:   2022-05-24 12:35:00 +0100
categories: notes
tags:
- devops
show_excerpts: true
published: true
---

I've recently run into a Terraform problem caused by a connection timeout. When attempting to create read replica of a database instance filled with pre-existing data, the cloud provider need more than 30 minutes to create the resource.
    
Eventually, the resource creation process times out: the connection is killed by the cloud provider. When trying to run `make plan`again, Terraform will complain that the resource is `tainted`.
    
In such a situation, we won’t be able to run any `make apply` again unless the resource is destroyed and recreated. However, destroying and creating the resource does not solve the problem  in our case, as we will experience another timeout given the time-intensive nature of creating the read replica.
    
We’re stuck in a chicken-and-egg situation unless we try to fix the situation. In my particular case, I carried out the following steps:

1. I checked that the resource was created successfully in the cloud platform which indeed was the case
2.  I told Terraform that the resource is not tainted and that it was indeed created despite the timeout
3.  To accomplish this, I used the the untaint [command](https://www.terraform.io/cli/commands/untaint)
4.  After untainting the resource, we’re able to run `make plan` and `make apply`as usual
