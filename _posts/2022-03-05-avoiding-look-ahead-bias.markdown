---
layout: post
title:  "Avoiding Survivorship Bias in Time Series Analysis"
date:   2022-02-16 23:12:45 +0100
categories: jekyll update
tags:
- data
show_excerpts: true
published: true
---

I’ve had this experience many times: during a presentation, charts are presented with a temporal dimension on the x-axis to portray the evolution of specific features over time. However, when looking deeper at how the analysis is produced, survivorship bias is unfortunately not an uncommon occurrence.

# What's survivorship bias? 

Survivorship bias occurs when you focus purely on data observations that survive specific selection criteria and ignore observations that do not survive. If it all sounds too abstract, let me give you an example from the business world:

Let’s say you have a company with a team of Customer Success Managers. Their role is to help customers be successful and to provide support. Each Customer Success Manager uses the internal CRM platform to keep track of the Accounts & Contacts that they own.

At the end of each quarter, as a Team Lead or Manager, you may be interested in figuring out if the team was successful by looking at data. You build a report that looks at all Accounts currently owned by Customer Success Managers and you try to draw conclusions.

The risk here is that you may ignore the fact that Customer Success Managers may have dropped some Accounts during the quarter by simply unticking a checkbox in the CRMs system. If you ignore this possibility, as a manager, you will simply focus on Accounts that are currently under Active Coverage and your analysis will ignore those that were dropped. You’ll most likely gain a very rosy picture of how your strategy has been doing.

To avoid the trap of survivorship bias, it’s essential to use robust time-series data. In this specific example, it would help to have timestamps that log when an Account/Contact is picked up or dropped by a Customer Success Manager. By incorporating this data, we’ll be able to include both Accounts that have survived and died along the way.

In many projects that I’ve worked on, the first step towards solving survivorship bias is enabling field tracking history in the specific CRM platform that is being used by the company. This will ensure that records are created when a specific value in a specific field is changed: 

| Account_Id | Created_date  | Old_value | New_value |
|---|---|---|---|---|---|
| a12389653  |  2020-01-05 | Claudia  |   |
| a12389653  |  2020-06-03 | Mark  | Claudia |
| a12389653  |  2020-01-01 |   | Mark |

With this data, we’re able to track exactly when a given Account/Contact was covered and by which Customer Success Manager.  We will be able to produce historical analyses based on more robust assumptions and we'll thereby minimize the risk of survivorship bias.
