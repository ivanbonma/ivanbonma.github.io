---
layout: default
title: Sobre mí
permalink: /about
---

<div style="max-width: 900px; margin: 0 auto;">
  <h1>👤 Sobre mí</h1>
  
  <div class="author-box" style="border: none; background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);">
    <div class="author-avatar">
      <img src="https://github.com/ivanbonma.png" alt="{{ site.author }}" style="width: 120px; height: 120px; margin: 0;">
    </div>
    <div class="author-info">
      <h2 style="margin-top: 0;">{{ site.author }}</h2>
      <p style="font-size: 1.05em; color: #666;">
        Soy un desarrollador apasionado por crear soluciones innovadoras y limpias. Me encanta aprender nuevas tecnologías y compartir conocimiento con la comunidad.
      </p>
      <div class="author-social">
        <a href="https://github.com/ivanbonma" target="_blank">GitHub</a>
        <a href="https://twitter.com/ivanbonma" target="_blank">Twitter</a>
        <a href="https://linkedin.com/in/ivanbonma" target="_blank">LinkedIn</a>
      </div>
    </div>
  </div>

  <h2>💻 Habilidades</h2>
  
  <h3>Lenguajes de programación</h3>
  <p>
    <span class="badge badge-primary">JavaScript</span>
    <span class="badge badge-primary">Python</span>
    <span class="badge badge-primary">Java</span>
    <span class="badge badge-primary">HTML/CSS</span>
    <span class="badge badge-primary">SQL</span>
  </p>

  <h3>Frameworks y tecnologías</h3>
  <p>
    <span class="badge badge-secondary">React</span>
    <span class="badge badge-secondary">Node.js</span>
    <span class="badge badge-secondary">Django</span>
    <span class="badge badge-secondary">Docker</span>
    <span class="badge badge-secondary">Git</span>
  </p>

  <h2>🎯 Intereses</h2>
  <ul>
    <li><strong>Desarrollo Web:</strong> Frontend moderno y backends escalables</li>
    <li><strong>DevOps:</strong> Automatización, CI/CD y containerización</li>
    <li><strong>Educación:</strong> Enseñar y aprender en comunidad</li>
    <li><strong>Open Source:</strong> Contribuir a proyectos comunitarios</li>
    <li><strong>Emprendimiento:</strong> Crear proyectos y startups</li>
  </ul>

  <h2>📊 Estadísticas</h2>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 30px 0;">
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px; text-align: center;">
      <div style="font-size: 2.5em; font-weight: bold;">{{ site.posts | size }}</div>
      <div>Posts publicados</div>
    </div>
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px; text-align: center;">
      <div style="font-size: 2.5em; font-weight: bold;">{{ site.time | date: '%Y' }}</div>
      <div>Año de inicio</div>
    </div>
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px; text-align: center;">
      <div style="font-size: 2.5em; font-weight: bold;">8+</div>
      <div>Años de experiencia</div>
    </div>
  </div>

  {% include newsletter.html %}
</div>