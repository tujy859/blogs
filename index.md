---
layout: default
title: 首页 / Home
---

<section class="hero-card">
  <div class="hero-content">
    <div class="hero-badge-wrap">
      <span class="hero-badge">🚀 技术博客 & 知识库</span>
      <a href="{{ '/qixi/' | relative_url }}" class="hero-archive-tag" title="查看 2026 七夕专属浪漫限定纪念">🌌 七夕浪漫限定归档 →</a>
    </div>
    <h1 class="hero-title">👋 欢迎来到 {{ site.title }}</h1>
    <p class="hero-lead">{{ site.description }}</p>
    <p class="hero-intro">
      你好！我是 <strong>涂金鹰 (Jinying Tu)</strong>。这里记录我的深度技术调研、开源项目、智能可穿戴生理计算（Watch-LSM）与 AI 基础模型实战心得。
    </p>
    <div class="hero-actions">
      <a class="btn btn-primary" href="{{ '/all-posts/' | relative_url }}">浏览全部博客 ({{ site.posts | size }}) →</a>
      <a class="btn btn-secondary" href="https://github.com/{{ site.github_username }}" target="_blank" rel="noopener noreferrer">GitHub 主页 ↗</a>
    </div>
  </div>
</section>

<section class="section-block">
  <div class="section-header">
    <h2 class="section-title">🌟 精选与深度研报</h2>
  </div>
  <div class="post-grid">
    {% assign rec_posts = site.posts | where_exp: "post","post.tags contains '推荐' or post.tags contains 'recommended' or post.tags contains '基础模型'" %}
    {% for post in rec_posts limit:4 %}
      <a href="{{ post.url | relative_url }}" class="post-card-link">
        <article class="post-card">
          <div class="post-card-meta">
            <span class="post-date">{{ post.date | date: "%Y年%m月%d日" }}</span>
            <span class="featured-badge">Featured</span>
          </div>
          <h3 class="post-card-title">{{ post.title }}</h3>
          <p class="post-card-excerpt">{{ post.description | default: post.excerpt | strip_html | truncate: 120 }}</p>
          {% if post.tags %}
            <div class="post-card-tags">
              {% for tag in post.tags limit:3 %}
                <span class="tag-pill">#{{ tag }}</span>
              {% endfor %}
            </div>
          {% endif %}
        </article>
      </a>
    {% endfor %}
    {% if rec_posts == empty %}
      <p class="empty-notice">暂无精选推荐文章。</p>
    {% endif %}
  </div>
</section>

<section class="section-block">
  <div class="section-header">
    <h2 class="section-title">📝 最新文章足迹</h2>
    <a href="{{ '/all-posts/' | relative_url }}" class="section-more">查看全部 ({{ site.posts | size }}) →</a>
  </div>
  <div class="post-list-vertical">
    {% for post in site.posts limit:10 %}
      <a href="{{ post.url | relative_url }}" class="post-item-link">
        <div class="post-item">
          <div class="post-item-main">
            <h3 class="post-item-title">{{ post.title }}</h3>
            <p class="post-item-excerpt">{{ post.description | default: post.excerpt | strip_html | truncate: 130 }}</p>
          </div>
          <div class="post-item-meta">
            <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
          </div>
        </div>
      </a>
    {% endfor %}
  </div>
</section>
