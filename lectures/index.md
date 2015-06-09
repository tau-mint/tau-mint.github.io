---
layout: page
title: "Lectures"
bg: mint2   #defined in _config.yml, can use html color like '#010101'
color: black  #text color
style: center
fa-icon: mortar-board
---

# MINT Distinguished Lectures

{% for page in site.posts %}
{% if page.categories contains 'lectures' %}
{% capture id %}{{ page.id | remove:'/' | downcase }}{% endcapture %}
<div id="{{id}}" class="section p-{{id}}">
  {% if page.icon %}
  <div class="subtlecircle sectiondivider imaged">
    <img src="{{page.icon}}" alt="section icon" />
    <h5 class="icon-title">{{ page.title }}</h5>
  </div>
  {% elsif page.fa-icon %}
  <div class="subtlecircle sectiondivider faicon">
    <span class="fa-stack">
      <i class="fa fa-circle fa-stack-2x"></i>
      <i class="fa fa-{{ page.fa-icon }} fa-stack-1x"></i>
    </span>
    <h5 class="icon-title">{{ page.title }}</h5>
  </div>
  {% endif %}
  <input type="checkbox" id="toggle-{{id}}" class="toggle">
  <label for="toggle-{{id}}" onclick>
  <div id="excerpt-{{id}}" class="container excerpt">
    {{ page.excerpt }}
  </div>
  </label>
  <div id="content-{{id}}" class="container {{ page.style }} content">
    {{ page.content }}
  </div>
</div>
{% endif %}
{% endfor %}

<!-- Local Variables:  -->
<!-- mode: web -->
<!-- End: -->

