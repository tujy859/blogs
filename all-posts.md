---
layout: default
title: "All Posts"
permalink: /all-posts/
---

<div class="page-header">
  <h1 class="page-title">📚 All Blogs</h1>
  <p class="page-subtitle">Total articles: {{ site.posts | size }}</p>
</div>

<div class="post-list-vertical all-posts-list">
  {% for post in site.posts %}
    <a href="{{ post.url | relative_url }}" class="post-item-link">
      <div class="post-item">
        <div class="post-item-main">
          <h3 class="post-item-title">{{ post.title }}</h3>
          <p class="post-item-excerpt">{{ post.excerpt | strip_html | truncate: 140 }}</p>
          {% if post.tags %}
            <div class="post-item-tags">
              {% for tag in post.tags %}
                <span class="tag-badge">#{{ tag }}</span>
              {% endfor %}
            </div>
          {% endif %}
        </div>
        <div class="post-item-meta">
          <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
        </div>
      </div>
    </a>
  {% endfor %}
</div>
