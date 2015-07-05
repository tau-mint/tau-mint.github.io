---
layout: page
title: "Lectures"
bg: mint2   #defined in _config.yml, can use html color like '#010101'
color: black  #text color
style: center
fa-icon: mortar-board
---

<div id="title" class="title section center">

  <h1> MINT Distinguished Lectures </h1>

</div>

{% for page in site.posts %}
{% if page.categories contains 'lectures' %}
{% capture id %}{{ page.id | remove:'/' | downcase }}{% endcapture %}
<div class="sectiondivider">
</div>
<div id="{{id}}" class="section lecture p-{{id}}">
  <input type="checkbox" id="toggle-{{id}}" class="toggle">
    <div id="excerpt-{{id}}" class="container excerpt">
      {{ page.excerpt }}
      </div>
  <label for="toggle-{{id}}" onclick>
  <div id="button-{{id}}" class="container center">Display Abstracts</div>
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
