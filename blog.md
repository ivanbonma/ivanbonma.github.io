---
layout: default
title: Blog
permalink: /blog
---

<div style="max-width: 900px; margin: 0 auto;">
  <h1>📝 Blog</h1>
  <p>Todos mis artículos y posts ordenados por fecha.</p>
  
  <div class="search-container">
    <input type="text" id="search-input" placeholder="🔍 Buscar posts..." autocomplete="off">
    <ul id="results-container" style="list-style: none; padding: 0; margin-top: 10px;">
      <!-- Results will appear here -->
    </ul>
  </div>

  <div id="posts-list">
    {% for post in site.posts %}
      <div class="post-card">
        <h3 class="post-card-title">
          <a href="{{ post.url }}">{{ post.title }}</a>
        </h3>
        <div class="post-card-meta">📅 {{ post.date | date: '%d de %B de %Y' }}</div>
        <p class="post-card-excerpt">{{ post.excerpt | truncate: 200 }}</p>
        <div class="post-card-tags">
          {% for category in post.categories %}
            <span class="badge">{{ category }}</span>
          {% endfor %}
        </div>
        <a href="{{ post.url }}" style="color: #667eea; font-weight: 600; text-decoration: none;">Leer más →</a>
      </div>
    {% endfor %}
  </div>

  {% if site.posts.size == 0 %}
    <p style="text-align: center; color: #999; padding: 40px 0;">Aún no hay posts. ¡Vuelve pronto!</p>
  {% endif %}
</div>

<script src="{{ '/assets/js/simple-jekyll-search.min.js' | relative_url }}"></script>
<script>
  window.simpleJekyllSearch = new SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '{{ "/search.json" | relative_url }}',
    searchResultTemplate: '<li style="padding: 10px; border-bottom: 1px solid #eee;"><a href="{url}" style="color: #667eea; font-weight: 600;">{title}</a></li>',
    noResultsText: 'No se encontraron resultados',
    limit: 10,
    fuzzy: false
  });
</script>