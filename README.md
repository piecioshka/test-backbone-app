# Przykładowa aplikacja z użyciem Backbone

:ledger: Przykładowa aplikacja w stylu: Single Page Application.

Demonstracja jak łatwo można stworzyć w pełni działającą aplikację SPA.

## Budowa aplikacji

```
.
├── README.md
├── app
│   ├── index.html
│   ├── scripts
│   │   ├── app.js
│   │   ├── core
│   │   │   ├── collections
│   │   │   │   ├── AbstractCollection.js
│   │   │   │   └── MenuCollection.js
│   │   │   ├── models
│   │   │   │   └── MenuItem.js
│   │   │   └── views
│   │   │       ├── AbstractView.js
│   │   │       ├── PageView.js
│   │   │       ├── common
│   │   │       │   └── MenuView.js
│   │   │       └── pages
│   │   │           ├── AboutView.js
│   │   │           ├── ContactView.js
│   │   │           └── HomeView.js
│   │   ├── main.js
│   │   ├── router.js
│   │   └── vendor
│   │       ├── backbone
│   │       │   └── backbone.js
│   │       ├── jquery
│   │       │   └── jquery.js
│   │       ├── require
│   │       │   ├── require.js
│   │       │   └── text.js
│   │       └── underscore
│   │           └── underscore.js
│   └── templates
│       ├── common
│       │   └── menuTemplate.html
│       └── pages
│           ├── aboutTemplate.html
│           ├── contactTemplate.html
│           └── homeTemplate.html
└── package.json

16 directories, 24 files
```

## Biblioteki

* [Backbone.js](http://backbonejs.org/)
* [jQuery.js](http://jquery.com/)
* [Require.js](http://requirejs.org/)
* [Underscore.js](http://underscorejs.org/)
