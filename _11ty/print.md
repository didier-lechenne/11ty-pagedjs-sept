---
title: "Guide Eleventy Multi-Format"
layout: "printLayout.njk"
permalink: "print.html"
eleventyExcludeFromCollections: true
---

# {{ title }}

{% for section in collections.sectionsPrint %}
{{ section.content | safe }}
{% endfor %}