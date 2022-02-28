---
layout: post
title:  "Pros & Cons of Static Website Generators "
date:   2022-02-16 23:12:45 +0100
categories: jekyll update
tags:
- webdev
show_excerpts: true
published: true
---

I've built this website using a static site generator. Setting it up was a fast and hassle-free process.

# What's a static site generator?

A static site generator parses markdown files and generates static HTML output ready to be rendered by any browser. Tools like Jekyll make this process simple and automatic.

# The three benefits of using a static site generator

- It's cheap to host a static site.
- Maintenance of a static site is easy.
- You're not bound to a specific tech stack.

Some design work is required to prepare templates in which the content will be injected of course. However, I find the process quite simple and satisfying. Jekyll uses the template rendering engine Liquid to simplify this work. The syntax is very similar to Jinja. Both of these engines allow you to easily add custom rendering logic to your templates and do cool things like these:

```html
{% raw %}<div class="post-content">
    {%- if site.show_excerpts -%}
        {{ post.excerpt | strip_html | truncate: 300}}
    {%- endif -%}
</div>{% endraw %}
```

The code above generates the excerpts on the homepage. It checks whether the variable `site.show_excerpts == true`. If the value is true, it then strips away HTML tags, truncates the excerpt to a maximum of 300 characters, and lastly displays the content. In short, Liquid allows you to supercharge your rendering logic.

# Additionals comments on the benefits of static sites

- I've mentioned this before: it's incredibly cheap to host this website. The only cost that I'm incurring is the custom domain name. All files are stored in this public repository.
- I can easily clone the whole repository and download all content stored in the posts directory if I decide to migrate one day. Markdown is a popular markup language. This makes it easy to convert files to other standards if necessary.
- Keep it simple, stupid! There is no server-side code running to generate any of the content. This drastically reduces maintenance time. I can just focus on the actual content.

The second point that I've made is at the same time the main disadvantage. Given that we're limited to static content, server-side interactions with the database are not possible. For example, if wanted to allow visitors of this website to add comments to each post or register a profile, I'd have to integrate third-party tools.

Despite this limitation, static websites are a great solution if your website serves as a portfolio, blog, or digital notebook. I'm a fan of Jekyll and love focusing on creating content rather than maintaining this website.