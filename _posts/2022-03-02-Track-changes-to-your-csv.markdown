---
layout: post
title:  "Easy Way to Track Changes to your CSV data"
date:   2022-03-02 23:12:45 +0100
categories: jekyll update
tags:
- python
show_excerpts: true
published: true
---

Track changes over time to your raw data

I'm a big fan of the python library csv-diff. I've used it in some custom projects that required me to compare raw datasets over time. With a few python commands, you can output JSON that contains all changes between an old and a new dataset:

```json
{
    "added": [
        {
            "id": "3",
            "name": "Bailey",
            "age": "1"
        }
    ],
    "removed": [
        {
            "id": "2",
            "name": "Pancakes",
            "age": "2"
        }
    ],
    "changed": [
        {
            "key": "1",
            "changes": {
                "age": [
                    "4",
                    "5"
                ]
            }
        }
    ],
    "columns_added": [],
    "columns_removed": []
}
```

The keys `added`, `removed`, `changed` are pretty self-explanatory. Having such data can be useful to:
- spot trends over time
- timestamp changes in a dedicated table using a microservice
- setting up custom alerts that notify us when a specific value is introduced, modified, or removed

I'm a fan of this library and keep returning to it whenever I have a problem that requires a comparison of CSV datasets.