---
layout: home
title: My Blog
---

Welcome to my blog — this site is generated with Jekyll and GitHub Pages.

Below you'll find the latest posts.

<ul>
  {% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> — <small>{{ post.date | date: "%b %-d, %Y" }}</small></li>
  {% endfor %}
</ul>


