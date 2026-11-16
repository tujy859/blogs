---
layout: default
title: "全部文章"
permalink: /all-posts/
---

<div class="page-header">
  <h1 class="page-title">全部文章</h1>
  <p class="page-subtitle">共 {{ site.posts | size }} 篇</p>
</div>

<div class="post-list-vertical all-posts-list">
  {% for post in site.posts %}
    <a href="{{ post.url | relative_url }}" class="post-item-link">
      <div class="post-item">
        <div class="post-item-main">
          <h3 class="post-item-title">{{ post.title }}</h3>
          <p class="post-item-excerpt">{{ post.description | default: post.excerpt | strip_html | strip_newlines | truncate: 120 }}</p>
          {% if post.tags %}
            <div class="post-item-tags">
              {% for tag in post.tags limit:3 %}
                <span class="tag-badge">#{{ tag }}</span>
              {% endfor %}
            </div>
          {% endif %}
        </div>
        <div class="post-item-meta">
          <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
        </div>
      </div>
    </a>
  {% endfor %}
</div>