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

I've recently run into a Terraform problem caused by a connection timeout. When attempting to create a read replica of a database instance filled with pre-existing data, the cloud provider needed more than 30 minutes to create the resource.
    
As a result, the resource creation process timed out: the connection was killed by the cloud provider. When trying to run `make plan`again, Terraform complained about the resource being `tainted`.
    
In such a situation, we won’t be able to run any `make apply` again unless the resource is destroyed and recreated. However, destroying and creating the resource does not solve the problem in this case, as we will experience another timeout given the time-intensive nature of creating the read replica.
    
We’re stuck in a chicken-and-egg situatIon. In my particular case, I carried out the following steps to fix the issue:

1. I checked that the resource was created successfully in the cloud platform which indeed was the case.
2. I instructed Terraform to untaint the resource by confiriming that it was indeed created despite the timeout.
3. To accomplish this, I used the the untaint [command](https://www.terraform.io/cli/commands/untaint).
4. After untainting the resource, I was then able to run `make plan` and `make apply`as usual
