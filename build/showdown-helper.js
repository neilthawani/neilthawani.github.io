// var showdown  = require('showdown'),
//     converter = new showdown.Converter(),
//     text      = '# hello, markdown!',
//     html      = converter.makeHtml(text);
let fs = require("fs");
let glob = require("glob");
// let Handlebars = require("handlebars");
let mkdirp = require("mkdirp");
let path = require("path");

function compileMarkdownFiles (pattern, folderPath) {
    var files = glob.sync(pattern);

    if (!files.length) {
        throw new Error(`No template files found for pattern ${pattern}`);
    }

    if (process.env.debug) {
        console.log("Templates", files);
    }

    files.forEach(file => {
        var source = fs.readFileSync(file).toString(),
            // template = Handlebars.compile(source),
            distDirectory = path.dirname(file).replace(folderPath, "");//,
            // distPath;

        // if (distDirectory === folderPath.slice(0, folderPath.length - 1)) {
        //     distPath = outputFolder + path.basename(file, ".md") + ".hbs";
        // } else {
        //     distPath = outputFolder + distDirectory + path.sep + path.basename(file, ".md") + ".hbs";
        // }

        mkdirp.sync(distDirectory);
        fs.writeFileSync(distPath, source);

        if (process.env.debug) {
            console.log("Template written to", distPath);
        }
    });
}

const api = {
    compileMarkdownFiles
};

module.exports = api;
