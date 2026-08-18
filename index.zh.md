---
name: Home
layout: home
---

<section class="hero">
  <div class="hero-inner">
    <h1>{{ site.title }}</h1>
    <p class="lead">欢迎 — {{ site.description }}</p>
    <p class="welcome-sentence">你好！我在这里记录学习笔记和项目摘要。下面是最新与推荐文章。</p>
    <p><a class="btn" href="{{ '/all-posts/' | relative_url }}">查看全部博客</a></p>
  </div>
</section>

<section class="recommended">
  <h2>推荐</h2>
  <ul class="post-list">
    {% assign rec_posts = site.posts | where_exp: "post","post.tags contains 'recommended'" %}
    {% for post in rec_posts limit:5 %}
      <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> — <small>{{ post.date | date: "%b %-d, %Y" }}</small></li>
    {% endfor %}
    {% if rec_posts == empty %}
      <li>还没有推荐文章。</li>
    {% endif %}
  </ul>
</section>
