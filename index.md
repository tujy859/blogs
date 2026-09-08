---
layout: default
title: Home
---

<div class="content-panel-header">
  <h1 class="content-panel-title">📝 Recent Posts / 博客随笔</h1>
  <p class="content-panel-desc">记录技术调研、可穿戴健康算法、AI 基础模型与工程探索</p>
</div>

<div class="posts-list-stream">
  {% for post in site.posts %}
    <article class="stream-post-item">
      <div class="post-item-heading">
        <h2 class="stream-post-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>
        {% if post.tags contains '推荐' or post.tags contains 'recommended' or post.tags contains '基础模型' %}
          <span class="stream-badge-featured">⭐ 置顶推荐</span>
        {% endif %}
      </div>

      <div class="stream-post-meta">
        <span class="meta-date">📅 {{ post.date | date: "%Y-%m-%d" }}</span>
        {% if post.tags %}
          <span class="meta-sep">·</span>
          <span class="meta-tags">
            {% for tag in post.tags limit:4 %}
              <span class="tag-pill">#{{ tag }}</span>
            {% endfor %}
          </span>
        {% endif %}
      </div>

      <div class="stream-post-excerpt">
        <p>{{ post.description | default: post.excerpt | strip_html | truncate: 160 }}</p>
      </div>

      <div class="stream-post-footer">
        <a href="{{ post.url | relative_url }}" class="read-more-link">阅读全文 (Read More) →</a>
      </div>
    </article>
  {% endfor %}
</div>
