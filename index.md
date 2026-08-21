---
layout: default
title: 七夕专属浪漫 · Love you to the moon and back
---

<!-- Romantic Qixi Hero Section -->
<section class="qixi-hero">
  <!-- Glowing Moon & Celestial Visual -->
  <div class="celestial-wrapper">
    <div class="glowing-moon">
      <div class="moon-crater c1"></div>
      <div class="moon-crater c2"></div>
      <div class="moon-crater c3"></div>
      <div class="moon-glow-ring"></div>
      <div class="orbiting-item o1">✨</div>
      <div class="orbiting-item o2">💖</div>
      <div class="orbiting-item o3">🌟</div>
    </div>
  </div>

  <div class="qixi-hero-content">
    <!-- Date & Festival Ribbon -->
    <div class="qixi-date-badge">
      <span class="badge-icon">🌌</span>
      <span class="badge-date">2026年8月19日 · 农历丙午年七月初七</span>
      <span class="badge-tag">七夕特别浪漫限定 ❤️</span>
    </div>

    <!-- Core Romantic Heading -->
    <div class="romantic-heading-wrap">
      <h1 class="romantic-core-heading">
        <span class="romantic-quote-en">“Love you to the moon and back”</span>
        <span class="romantic-quote-cn">跨越万丈星河 · 许你一世温柔</span>
      </h1>
    </div>

    <p class="romantic-subtitle">
      七夕今宵看碧霄，牵牛织女渡河桥。<br class="desktop-br">
      浩瀚银河与亿万星辰之间，你是降落在我生命中最璀璨的光芒。
    </p>

    <!-- Interactive Action Buttons -->
    <div class="romantic-actions">
      <button class="btn btn-qixi-letter" onclick="openLoveLetter()">
        <span class="btn-icon">💌</span> 打开专属七夕情书
      </button>
      <button class="btn btn-qixi-wish" id="make-wish-btn" onclick="triggerRomanticWish()">
        <span class="btn-icon">✨</span> 点亮漫天星愿 <span id="wish-count-badge" class="wish-counter">❤️ +<span id="wish-count">0</span> <span id="wish-source-badge" class="wish-source-badge">云端</span></span>
      </button>
    </div>

    <!-- Romantic Quote Card -->
    <div class="romantic-quote-card">
      <div class="quote-stars">✦ ✦ ✦</div>
      <p class="quote-text">
        “无论走过多远的路，看过多少繁星落日，<br>
        心中的起点与归途，始终只有你。”
      </p>
      <div class="quote-footer">
        <span class="quote-date">2026.08.19 · Qixi Festival</span>
        <span class="quote-author">Forever & Always ❤️</span>
      </div>
    </div>
  </div>
</section>

<!-- Three Romantic Keepsake Cards -->
<section class="section-block romantic-cards-section">
  <div class="section-header">
    <h2 class="section-title">✨ 银河星语 · 我们的浪漫物语</h2>
  </div>
  <div class="romantic-grid">
    <div class="romantic-card">
      <div class="card-symbol">🌌</div>
      <h3 class="card-title">星河相遇</h3>
      <p class="card-desc">在茫茫人海中与你相遇，是命运最温柔的眷顾。从第一次心动到每一个日常，都是心底最珍贵的微光。</p>
      <div class="card-tag"># 初见倾心</div>
    </div>
    <div class="romantic-card">
      <div class="card-symbol">🌙</div>
      <h3 class="card-title">月色与你</h3>
      <p class="card-desc">月色与雪色之间，你是第三种绝色。日月悠长，星河万丈，有你的陪伴，每一个普通的日子都成了节日。</p>
      <div class="card-tag"># 岁岁常相伴</div>
    </div>
    <div class="romantic-card">
      <div class="card-symbol">💫</div>
      <h3 class="card-title">深情守候</h3>
      <p class="card-desc">Love you to the moon and back — 不只是千百次的告白，更是一生一世的长情守护与风雨同舟。</p>
      <div class="card-tag"># 永恒的约定</div>
    </div>
  </div>
</section>

<!-- Blog Posts Section -->
<section class="section-block blog-archive-section">
  <div class="section-header">
    <h2 class="section-title">📝 学习与探索足迹</h2>
    <a href="{{ '/all-posts/' | relative_url }}" class="section-more">查看全部博客 ({{ site.posts | size }}) →</a>
  </div>
  <div class="post-list-vertical">
    {% for post in site.posts limit:6 %}
      <a href="{{ post.url | relative_url }}" class="post-item-link">
        <div class="post-item">
          <div class="post-item-main">
            <h3 class="post-item-title">{{ post.title }}</h3>
            <p class="post-item-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
            {% if post.tags %}
              <div class="post-item-tags">
                {% for tag in post.tags %}
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
</section>
