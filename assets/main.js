/* Romantic Qixi Interactive Scripts */
document.addEventListener('DOMContentLoaded', function() {
  initStarryCanvas();
  initHeartClicks();
  initReadCount();
  initWishCount();
});

/* Canvas Starry Sky & Meteors */
function initStarryCanvas() {
  const canvas = document.getElementById('starry-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', function() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const stars = [];
  const starCount = Math.floor((width * height) / 4500);

  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.8 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      direction: Math.random() > 0.5 ? 1 : -1
    });
  }

  // Meteors
  const meteors = [];
  function spawnMeteor() {
    meteors.push({
      x: Math.random() * width,
      y: Math.random() * (height * 0.4),
      length: Math.random() * 80 + 50,
      speed: Math.random() * 6 + 4,
      angle: (Math.PI / 4) + (Math.random() * 0.2 - 0.1),
      opacity: 1
    });
  }

  setInterval(function() {
    if (Math.random() > 0.4 && meteors.length < 3) {
      spawnMeteor();
    }
  }, 2200);

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw stars
    for (let i = 0; i < stars.length; i++) {
      const star = stars[i];
      star.alpha += star.twinkleSpeed * star.direction;
      if (star.alpha > 0.95) {
        star.alpha = 0.95;
        star.direction = -1;
      } else if (star.alpha < 0.15) {
        star.alpha = 0.15;
        star.direction = 1;
      }

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(254, 240, 138, ${star.alpha})`;
      ctx.shadowBlur = 4;
      ctx.shadowColor = 'rgba(254, 240, 138, 0.8)';
      ctx.fill();
    }

    // Draw meteors
    for (let j = meteors.length - 1; j >= 0; j--) {
      const m = meteors[j];
      m.x += Math.cos(m.angle) * m.speed;
      m.y += Math.sin(m.angle) * m.speed;
      m.opacity -= 0.015;

      if (m.opacity <= 0 || m.x > width || m.y > height) {
        meteors.splice(j, 1);
        continue;
      }

      const tailX = m.x - Math.cos(m.angle) * m.length;
      const tailY = m.y - Math.sin(m.angle) * m.length;

      const grad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
      grad.addColorStop(0, 'rgba(244, 63, 94, 0)');
      grad.addColorStop(0.7, `rgba(251, 113, 133, ${m.opacity * 0.7})`);
      grad.addColorStop(1, `rgba(255, 255, 255, ${m.opacity})`);

      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(m.x, m.y);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(244, 63, 94, 0.8)';
      ctx.stroke();
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* Floating Hearts on Click */
function initHeartClicks() {
  const heartIcons = ['❤️', '💖', '✨', '🌸', '💕', '🌙', '💫', '🌹'];
  document.addEventListener('click', function(e) {
    // Don't trigger if clicked on close button or make-wish button
    if (e.target.closest('.love-modal-close') || e.target.closest('#make-wish-btn')) return;

    createFloatingParticle(e.clientX, e.clientY, heartIcons[Math.floor(Math.random() * heartIcons.length)]);
  });
}

function createFloatingParticle(x, y, icon) {
  const particle = document.createElement('div');
  particle.className = 'floating-heart-particle';
  particle.innerText = icon;
  particle.style.left = x + 'px';
  particle.style.top = y + 'px';
  particle.style.setProperty('--dx', (Math.random() * 80 - 40) + 'px');
  particle.style.setProperty('--rot', (Math.random() * 60 - 30) + 'deg');

  document.body.appendChild(particle);
  setTimeout(function() {
    particle.remove();
  }, 1600);
}

/* Wish Counter with Cloudflare Workers & LocalStorage Fallback */
const CF_WISH_URL = 'https://counter.tujy859.workers.dev/love';
const CF_VISIT_URL = 'https://counter.tujy859.workers.dev/visit';
const LS_WISH_KEY = 'blog-wishcount:qixi';
const LS_VISIT_KEY = 'blog-visitcount:global';

let wishCount = 0;

function updateWishSourceBadge(isCloud) {
  const badge = document.getElementById('wish-source-badge');
  if (!badge) return;
  if (isCloud) {
    badge.innerText = '云端';
    badge.classList.remove('local');
    badge.classList.add('cloud');
    badge.title = '数据已实时同步至云端计数服务';
  } else {
    badge.innerText = '本地';
    badge.classList.remove('cloud');
    badge.classList.add('local');
    badge.title = '当前为本地离线/容灾缓存计数';
  }
}

function initWishCount() {
  const countEl = document.getElementById('wish-count');
  if (!countEl) return;

  // 1. Load cached value from localStorage for instant render
  try {
    const cached = localStorage.getItem(LS_WISH_KEY);
    if (cached !== null) {
      wishCount = parseInt(cached, 10) || 0;
      countEl.innerText = wishCount;
      updateWishSourceBadge(false);
    }
  } catch (e) {}

  // 2. Fetch remote global count from Cloudflare Worker (GET - strictly read only, no increment)
  fetch(CF_WISH_URL, { method: 'GET' })
    .then(res => {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(data => {
      if (data && typeof data.count !== 'undefined') {
        wishCount = data.count;
        countEl.innerText = wishCount;
        updateWishSourceBadge(true);
        try {
          localStorage.setItem(LS_WISH_KEY, String(wishCount));
        } catch (e) {}
      }
    })
    .catch(err => {
      console.warn('Cloudflare Worker wish fetch failed, using local storage fallback.', err);
      updateWishSourceBadge(false);
    });
}

window.triggerRomanticWish = function() {
  const countEl = document.getElementById('wish-count');
  
  // Optimistic UI update immediately on explicit button click only
  wishCount += 1;
  if (countEl) {
    countEl.innerText = wishCount;
  }
  try {
    localStorage.setItem(LS_WISH_KEY, String(wishCount));
  } catch (e) {}

  // Sync to Cloudflare Worker asynchronously (POST - increment)
  fetch(CF_WISH_URL, { method: 'POST' })
    .then(res => {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(data => {
      if (data && typeof data.count !== 'undefined') {
        wishCount = data.count;
        if (countEl) {
          countEl.innerText = wishCount;
        }
        updateWishSourceBadge(true);
        try {
          localStorage.setItem(LS_WISH_KEY, String(wishCount));
        } catch (e) {}
      }
    })
    .catch(err => {
      console.warn('Cloudflare Worker sync failed, falling back to localStorage.', err);
      updateWishSourceBadge(false);
    });
  
  // Burst particles around button
  const btn = document.getElementById('make-wish-btn');
  if (btn) {
    const rect = btn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const burstIcons = ['💖', '✨', '🌟', '❤️', '🌙'];
    for (let i = 0; i < 6; i++) {
      setTimeout(function() {
        createFloatingParticle(centerX + (Math.random() * 60 - 30), centerY + (Math.random() * 30 - 15), burstIcons[i % burstIcons.length]);
      }, i * 80);
    }
  }
};

window.openLoveLetter = function() {
  const modal = document.getElementById('love-letter-modal');
  if (modal) {
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Particle burst
    const burstIcons = ['💌', '💖', '✨', '🌹'];
    for (let i = 0; i < 8; i++) {
      setTimeout(function() {
        createFloatingParticle(window.innerWidth / 2 + (Math.random() * 120 - 60), window.innerHeight / 2 + (Math.random() * 60 - 30), burstIcons[i % burstIcons.length]);
      }, i * 60);
    }
  }
};

window.closeLoveLetter = function() {
  const modal = document.getElementById('love-letter-modal');
  if (modal) {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
};

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLoveLetter();
  }
});

/* Read / Total Visit Counter */
function initReadCount() {
  const rc = document.getElementById('read-count');
  const footerRc = document.getElementById('site-visit-count');
  if (!rc && !footerRc) return;

  // 1. Instant render from localStorage
  try {
    const cached = localStorage.getItem(LS_VISIT_KEY);
    if (cached !== null) {
      if (rc) rc.innerText = cached;
      if (footerRc) footerRc.innerText = cached;
    }
  } catch(e) {}

  // 2. Fetch and increment global visits from Cloudflare Worker
  fetch(CF_VISIT_URL)
    .then(res => {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(data => {
      if (data && typeof data.count !== 'undefined') {
        if (rc) rc.innerText = data.count;
        if (footerRc) footerRc.innerText = data.count;
        try {
          localStorage.setItem(LS_VISIT_KEY, String(data.count));
        } catch(e) {}
      }
    })
    .catch(err => {
      console.warn('Total visit count sync failed.', err);
    });
}
