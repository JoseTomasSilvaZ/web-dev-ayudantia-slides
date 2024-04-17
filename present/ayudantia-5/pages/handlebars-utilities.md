## Utilidades de handlebars

<div class="flex gap-10">

<div class="w-1/2">

`each` Nos permitirá iterar

```javascript
<ul class="people_list">
  {{#each people}}
    <li>{{this}}</li>
  {{/each}}
</ul>
```

`with` nos permitirá acceder a propiedades del objeto

```javascript
{{#with person}}
{{firstname}} {{lastname}}
{{/with}}

```
</div>

<div class="w-1/2">

`if` Nos permitirá renderizar condicionalmente

```javascript
<div class="entry">
{{#if author}}
<h1>{{firstName}} {{lastName}}</h1>
{{else}}
<h1>Unknown Author</h1>
{{/if}}
</div>
```

`unless` es el inverso al if

```javascript
{{#unless isOver18}}
<h3>WARNING: you must be at least 18 years old to see this content. </h3>
{{/unless}}

```
</div>

<span class="absolute bottom-5 text-xs right-5">

> 💡 Hay muchas utilidades más, para aprender leer más información, clickea [aquí](https://handlebarsjs.com/guide/builtin-helpers.html#each)

</span>
</div>