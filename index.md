---
layout: default
title: Home
---

<section class="featured-section">
  <h2 class="section-heading">代表作</h2>
  <div class="featured-grid">
    <a class="featured-card featured-project" href="https://tujy859.github.io/Wearable-Physiological-Foundation-Models/" target="_blank" rel="noopener noreferrer">
      <span class="featured-kicker">开源项目 ↗</span>
      <h3>可穿戴与生理基础模型 · 研究索引</h3>
      <p>检索可穿戴与生理时序基础模型、评测基准和数据集，查阅论文、代码、权重与专题文章。</p>
    </a>
    {% assign featured_posts = site.posts | where: "featured", true %}
    {% for post in featured_posts %}
    <a class="featured-card" href="{{ post.url | relative_url }}">
      <span class="featured-kicker">{{ post.date | date: "%Y-%m-%d" }} · 长文</span>
      <h3>{{ post.title | split: "：" | first }}</h3>
      <p>{{ post.description | default: post.excerpt | strip_html | strip_newlines | truncate: 70 }}</p>
    </a>
    {% endfor %}
  </div>
</section>

<section class="posts-section">
  <h2 class="section-heading">最新文章</h2>
  <div class="posts-list-stream">
    {% for post in site.posts %}
    <a class="stream-post-item" href="{{ post.url | relative_url }}">
      <h3 class="stream-post-title">{{ post.title }}</h3>
      <div class="stream-post-meta">
        <span class="meta-date">{{ post.date | date: "%Y-%m-%d" }}</span>
        {% if post.tags %}
        <span class="meta-sep">·</span>
        <span class="meta-tags">
          {% for tag in post.tags limit:3 %}<span class="tag-pill">#{{ tag }}</span>{% endfor %}
        </span>
        {% endif %}
      </div>
      <p class="stream-post-excerpt">{{ post.description | default: post.excerpt | strip_html | strip_newlines | truncate: 100 }}</p>
    </a>
    {% endfor %}
  </div>
</section>