---
layout: default
title: Home
---

<section class="hero-card">
  <div class="hero-content">
    <h1 class="hero-title">👋 Welcome to {{ site.title }}</h1>
    <p class="hero-lead">{{ site.description }}</p>
    <p class="hero-intro">Hello! I'm <strong>Jinying Tu</strong>. Here I document my coding notes, projects, and technical insights. Explore my latest and recommended articles below.</p>
    <div class="hero-actions">
      <a class="btn btn-primary" href="{{ '/all-posts/' | relative_url }}">Explore All Blogs →</a>
    </div>
  </div>
</section>

<section class="section-block">
  <div class="section-header">
    <h2 class="section-title">🌟 Recommended</h2>
  </div>
  <div class="post-grid">
    {% assign rec_posts = site.posts | where_exp: "post","post.tags contains 'recommended'" %}
    {% for post in rec_posts limit:4 %}
      <a href="{{ post.url | relative_url }}" class="post-card-link">
        <article class="post-card">
          <div class="post-card-meta">
            <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
            <span class="featured-badge">Featured</span>
          </div>
          <h3 class="post-card-title">{{ post.title }}</h3>
          <p class="post-card-excerpt">{{ post.excerpt | strip_html | truncate: 110 }}</p>
        </article>
      </a>
    {% endfor %}
    {% if rec_posts == empty %}
      <p class="empty-notice">No recommended posts yet.</p>
    {% endif %}
  </div>
</section>

<section class="section-block">
  <div class="section-header">
    <h2 class="section-title">📝 Latest Posts</h2>
    <a href="{{ '/all-posts/' | relative_url }}" class="section-more">View all ({{ site.posts | size }}) →</a>
  </div>
  <div class="post-list-vertical">
    {% for post in site.posts limit:6 %}
      <a href="{{ post.url | relative_url }}" class="post-item-link">
        <div class="post-item">
          <div class="post-item-main">
            <h3 class="post-item-title">{{ post.title }}</h3>
            <p class="post-item-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
          </div>
          <div class="post-item-meta">
            <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
          </div>
        </div>
      </a>
    {% endfor %}
  </div>
</section>
