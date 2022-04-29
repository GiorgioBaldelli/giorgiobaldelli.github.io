---
layout: post
title:  Monitoring your data with watchdog
date:   2022-04-12 12:30:30 +0100
categories:
tags:
- data
show_excerpts: true
published: true
---

As a Data Engineer, chances are that you‘ll be developing custom solutions to move data from one platform to the other, let’s say from an sftp server to an s3 bucket.

A simple, albeit wasteful solution in terms of the storage space, is to create hourly snapshots of the directories on the sftp server that you’re interested in and then upload these timestamped snapshots to the s3 bucket.
 
For such an approach, if you’re using Python, [Paramiko](https://docs.paramiko.org/) is well suited. One thing to note here is that it’s crucial to recursively look for all files that you’d like to snapshot and not to stop at the top-level directory.

A second approach,  my preferred one if storage space is a concern, is to deploy a filesystem [watchdog](https://pypi.org/project/watchdog/) on the sftp host. In short, the watchdog application will run in the background and fire events whenever actions occur that affect the file system.

This second approach is powerful as you can trigger an action right when a file reaches the sftp server. You could for example hit an API endpoint to trigger an Airflow DAG that pulls the data from the sftp server, transforms it, and loads it somewhere else.
