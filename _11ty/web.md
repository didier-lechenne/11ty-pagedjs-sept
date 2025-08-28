---
title: "Guide Eleventy Multi-Format"
layout: "layouts/screenLayout.njk"
permalink: "index.html"
eleventyExcludeFromCollections: true
---

# {{ title }}

{% for section in collections.sectionsWeb %}
## {{ section.data.title }}

{{ section.content | safe }}

{% endfor %}