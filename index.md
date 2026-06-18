---
layout: default
---

<div style="max-width: 900px; margin: 0 auto;">
  <div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); padding: 40px; border-radius: 10px; margin-bottom: 40px; border-left: 4px solid #667eea;">
    <h2 style="margin-top: 0; color: #333;">¡Bienvenido a mi blog! 🚀</h2>
    <p style="font-size: 1.1em; margin-bottom: 0;">
      Soy {{ site.author }}, desarrollador apasionado por la tecnología. Aquí comparto mis conocimientos sobre desarrollo web, DevOps y más.
    </p>
  </div>

  <h2 style="margin-top: 40px;">📚 Últimos posts</h2>
  
  <div style="display: grid; gap: 20px;">
    {% for post in site.posts limit: 5 %}
      <div class="post-card">
        <h3 class="post-card-title">
          <a href="{{ post.url }}">{{ post.title }}</a>
        </h3>
        <div class="post-card-meta">
          📅 {{ post.date | date: '%d de %B de %Y' }}
        </div>
        <p class="post-card-excerpt">{{ post.excerpt | truncate: 180 }}</p>
        <div class="post-card-tags">
          {% for category in post.categories %}
            <span class="badge">{{ category }}</span>
          {% endfor %}
        </div>
        <a href="{{ post.url }}" style="margin-top: 10px; display: inline-block; color: #667eea; font-weight: 600;">Leer más →</a>
      </div>
    {% endfor %}
  </div>

  <div style="text-align: center; margin-top: 40px;">
    <a href="/blog" class="btn">Ver todos los posts →</a>
  </div>

  {% include newsletter.html %}
</div>