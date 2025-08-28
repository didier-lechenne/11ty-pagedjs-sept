---
title: "Guide Eleventy Multi-Format"
layout: "layouts/screenLayout.njk"
permalink: "index.html"
eleventyExcludeFromCollections: true
---

# {{ title }}

{% for chapitre in collections.chapitresWeb %}
## {{ chapitre.data.title }}

{{ chapitre.content | safe }}

{% endfor %}