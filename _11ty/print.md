---
title: "Guide Eleventy Multi-Format"
layout: "layouts/printLayout.njk"
permalink: "print.html"
eleventyExcludeFromCollections: true
---

# {{ title }}

{% for chapitre in collections.chapitresPrint %}
{{ chapitre.content | safe }}
{% if not loop.last %}{% pageBreak %}{% endif %}
{% endfor %}