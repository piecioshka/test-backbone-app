# Prosta aplikacja z użyciem Backbone

Przykładowa aplikacja w stylu: Single Page Application.
Demonstracja jak łatwo można stworzyć pełno prawną aplikację.

## Budowa aplikacji

<pre>
├── README.md
├── index.html
├── scripts
│   ├── app.js
│   ├── main.js
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
│       ├── View.js
│       └── pages
│           ├── AboutView.js
│           ├── ContactView.js
│           └── HomeView.js
└── templates
    ├── aboutTemplate.html
    ├── contactTemplate.html
    └── homeTemplate.html

9 directories, 17 files
</pre>

## Biblioteki

* [Backbone.js][1]
* [jQuery.js][2]
* [Require.js][3]
* [Underscore.js][4]

## Możliwości & Plany

Do aktualnej aplikacji warto dorzucić Backbone [Marionette][5],
aby nasza aplikacja nabrała więcej możliwości, do czego jesteśmy
przyzwyczajeni, tworząc aplikacje w JavaScript.


[1]: http://backbonejs.org/
[2]: http://jquery.com/
[3]: http://requirejs.org/
[4]: http://underscorejs.org/
[5]: http://marionettejs.com/