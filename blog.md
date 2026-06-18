---
layout: default
title: Blog
permalink: /blog
---

# Blog 📝

Todos mis artículos y posts ordenados por fecha.

## Artículos recientes

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <h3>
        <a href="{{ post.url }}">{{ post.title }}</a>
      </h3>
      <p>
        <strong>{{ post.date | date: '%d de %B de %Y' }}</strong>
      </p>
      <p>{{ post.excerpt | truncate: 150 }}</p>
      <a href="{{ post.url }}">Leer más →</a>
    </li>
  {% endfor %}
</ul>

---

## Categorías

{% assign categories = site.posts | map: 'categories' | join: ',' | split: ',' | uniq %}

{% for category in categories %}
  {% if category != "" %}
    ### {{ category }}
    {% for post in site.posts %}
      {% if post.categories contains category %}
        - [{{ post.title }}]({{ post.url }}) - {{ post.date | date: '%d %b %Y' }}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}
