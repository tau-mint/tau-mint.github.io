---
layout: page
title: "Events"
bg: mint3   #defined in _config.yml, can use html color like '#010101'
color: black  #text color
style: center
fa-icon: mortar-board
---

<div id="title" class="title section center">

<h1> Conferences and workshops supported by MINT </h1>

</div>

{% for page in site.posts reversed %}
{% if page.categories contains 'events' %}
{% capture id %}{{ page.id | remove:'/' | downcase }}{% endcapture %}
<div class="sectiondivider">
</div>
<div id="{{id}}" class="section p-{{id}}">
<div class="container center event {{ page.style }}">
{{ page.content }}
</div>
</div>
{% endif %}
{% endfor %}

<!-- Local Variables:  -->
<!-- mode: web -->
<!-- End: -->
