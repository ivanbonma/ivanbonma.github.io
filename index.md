---
layout: default
title: Ivan Bonma
---

# Bienvenido a mi blog 🚀

Hola, soy Ivan Bonma. Este es mi espacio personal donde comparto mis pensamientos sobre desarrollo, tecnología y proyectos interesantes.

## Últimas publicaciones

{% for post in site.posts limit: 5 %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: '%d %b %Y' }}
{% endfor %}

---

## Sobre mí

Soy un desarrollador apasionado por crear soluciones innovadoras y aprender nuevas tecnologías. En este blog compartiremos conocimiento, tutoriales y experiencias.

### Temas que me interesan:
- 💻 Desarrollo Web
- 🔧 Backend & DevOps
- 🎓 Programación
- 🚀 Startups y emprendimiento

¿Alguna pregunta? Contáctame en [Twitter](https://twitter.com) o [LinkedIn](https://linkedin.com).
