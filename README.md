# Prosta aplikacja z użyciem Backbone

Przykładowa aplikacja w stylu: Single Page Application.
Demonstracja jak łatwo można stworzyć w pełni działającą aplikację SPA.

## Budowa aplikacji

<pre>
├── README.md
├── index.html
├── scripts
│   ├── app.js
│   ├── collections
│   │   ├── AbstractCollection.js
│   │   └── MenuCollection.js
│   ├── main.js
│   ├── models
│   │   └── MenuItem.js
│   ├── router.js
│   ├── vendor
│   │   ├── backbone
│   │   │   └── backbone.js
│   │   ├── jquery
│   │   │   └── jquery.js
│   │   ├── require
│   │   │   ├── require.js
│   │   │   └── text.js
│   │   └── underscore
│   │       └── underscore.js
│   └── views
│       ├── AbstractView.js
│       ├── PageView.js
│       ├── common
│       │   └── MenuView.js
│       └── pages
│           ├── AboutView.js
│           ├── ContactView.js
│           └── HomeView.js
└── templates
    ├── common
    │   └── menuTemplate.html
    └── pages
        ├── aboutTemplate.html
        ├── contactTemplate.html
        └── homeTemplate.html

14 directories, 23 files
</pre>

## Biblioteki

* [Backbone.js][1]
* [jQuery.js][2]
* [Require.js][3]
* [Underscore.js][4]

[1]: http://backbonejs.org/
[2]: http://jquery.com/
[3]: http://requirejs.org/
[4]: http://underscorejs.org/
