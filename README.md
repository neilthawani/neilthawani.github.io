## Neil Thawani's Website

Make sure node is installed. You can get it [here](https://nodejs.org/en/download/).

To run [the local web server](https://github.com/tapio/live-server), run `npm install` and then run:

```
npm start
```

[`nodemon`](https://github.com/remy/nodemon), `watch-views` and `watch-css` scripts run in parallel when you launch the web server.

#### Building:

In `package.json` there is the following block run when you do `npm start`:

```
scripts: {
  ...
  "watch": "concurrently -k -n views,css \"npm run watch-views\" \"npm run watch-css\"",
  "dev-build-and-watch": "npm run build-views && npm run build-css && npm run watch",
  "build-views": "node build/build.js -d cwd -p \"src/views/partials/**/*.hbs\" -l \"src/views/layouts/**/*.hbs\" -t \"src/views/templates/**/*.hbs\" -v",
  "watch-views": "nodemon --watch src/views --ext hbs --exec \"npm run build-views\"",
  "watch-css": "nodemon --watch src/static/styles --ext scss --exec \"npm run build-css\""
}
```

This compiles `.hbs` files from the `/templates` folder to `.html` files and outputs them to the `cwd`, mapping subfolders within `/templates`.

#### NOTE

If CSS doesn't automatically build, this can fail if you have typos in your SASS.

Run `npm run build-css` to test and the console will show an error if this is the case.


### Handlebars Build Tool

#### Sample folder structure:

```
cwd/src/views
|_layouts
|__base.hbs
|_partials
|__blog
|___post.hbs
|_templates
|__index.hbs
```

**Notes:**

- `cwd` is the base project path.
- `/templates` should always contain an `index.hbs` file.

#### Layouts:

```
<!-- cwd/src/views/layouts/base -->
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" prefix="og: http://ogp.me/ns#">
  <head>
    <title>Title</title>
    <link type="text/css" href="/styles/main.css" rel="stylesheet">
  </head>

  <body>
  {{> @partial-block }}
  </body>
</html>
```

#### Templates:

```
<!-- cwd/src/views/templates/index.hbs -->
{{#> base}}
  {{> blog/post}}
{{/base}}
```

### Sass Build Tool

The `watch-css` script outputs a compiled `.css` file to `/styles/main.css`. This stylesheet is imported into the `base` layout above.
