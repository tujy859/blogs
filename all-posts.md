---
layout: default
title: "All posts"
---

<h1>All posts</h1>

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <small> — {{ post.date | date: "%b %-d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>
