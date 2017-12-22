var bourbonPath = require("bourbon").includePaths[0];

exports.config = {
  files: {
    javascripts: {
      joinTo: "js/app.js"
    },
    stylesheets: {
      joinTo: "css/app.css"
    },
    templates: {
      joinTo: "js/app.js"
    }
  },

  conventions: {
    assets: /^(lib\/constable_web\/static\/assets)/
  },

  paths: {
    watched: [
      "lib/constable_web/static",
      "test/static"
    ],

    public: "priv/static"
  },

  plugins: {
    babel: {
      ignore: [/lib\/constable_web\/static\/vendor/],
      presets: ["es2015"]
    },
    postcss: {
      processors: [
        require("autoprefixer")
      ],
    },
    sass: {
      options: {
        includePaths: [
          bourbonPath,
          "./node_modules/bourbon-neat/app/assets/stylesheets",
          "./node_modules/jquery-textcomplete/dist/",
        ],
      }
    }
  },

  modules: {
    autoRequire: {
      "js/app.js": ["lib/constable_web/static/js/app"]
    }
  },

  npm: {
    enabled: true,
    styles: {
      "normalize.css": ['normalize.css']
    },
    globals: {
      $: 'jquery',
      jQuery: 'jquery'
    },
    whitelist: [
      "highlight.js",
      "jquery",
      "jquery-textcomplete",
      "marked",
      "mousetrap",
      "normalize.css",
      "phoenix",
      "selectize",
      "textarea-autogrow",
      "turbolinks",
    ]
  }
};
