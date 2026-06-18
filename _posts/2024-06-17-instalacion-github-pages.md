---
layout: post
title: Cómo crear tu blog con GitHub Pages
date: 2024-06-17
categories: [tutorial, github]
---

# Cómo crear tu blog con GitHub Pages 🚀

GitHub Pages es una forma excelente y gratuita de crear tu blog personal. En este post te mostraré cómo hacerlo.

## ¿Qué es GitHub Pages?

GitHub Pages es un servicio de alojamiento estático que te permite publicar sitios web directamente desde un repositorio de GitHub. Es perfecto para blogs, portafolios y documentación.

## Requisitos

- Una cuenta en [GitHub](https://github.com)
- Conocimientos básicos de Git
- Un editor de texto (VSCode, Sublime, etc.)

## Paso 1: Crear el repositorio

Crea un nuevo repositorio con el nombre `tu-usuario.github.io`. Por ejemplo:

```
ivanbonma.github.io
```

**Importante:** El nombre debe ser exactamente en este formato para un sitio personal.

## Paso 2: Configurar Jekyll

GitHub Pages usa Jekyll automáticamente. Crea un archivo `_config.yml`:

```yaml
title: Mi Blog
author: Tu Nombre
description: Descripción de tu blog
theme: minima
```

## Paso 3: Crear posts

Crea una carpeta `_posts` y añade posts en formato Markdown:

```
_posts/2024-06-18-mi-primer-post.md
```

Cada post debe tener:

```markdown
---
layout: post
title: Título del post
date: 2024-06-18
categories: [tech]
---

Tu contenido aquí...
```

## Paso 4: Publicar

Haz push a tu repositorio y GitHub Pages se encargará del resto. Tu blog estará disponible en:

```
https://tu-usuario.github.io
```

## Personalizaciones

Puedes:

- Usar temas diferentes
- Crear páginas estáticas
- Añadir dominios personalizados
- Configurar plugins de Jekyll

## Conclusión

¡Y listo! Ya tienes tu blog funcionando. Ahora solo necesitas escribir contenido de calidad.

¿Tienes preguntas? Déjame un comentario.
