// renderer from markdown to html
function renderMarkdownAsHtml() {
  var text = document.getElementById("new-post-textarea").value,
      target = document.getElementById("rendered-markdown"),
      converter = new showdown.Converter(),
      html = converter.makeHtml(text);

    target.innerHTML = html;
}

document.addEventListener("keyup", renderMarkdownAsHtml);

// markdown and json file creation upon submit
document.addEventListener('DOMContentLoaded', function(event) {
    var createPostButton = document.getElementById("create-post");
    createPostButton.onclick = function(e) {
        var date = new Date();
        var month = date.toLocaleString('default', { month: 'long' });

        var id = date.getTime();
        var createdAt = `${month} ${date.getDate()}, ${date.getFullYear()}`;
        var title = document.getElementById("new-post-title").value;
        var slug = slugifyTitle(title);

        function downloadMetaData() {
            var metaData = {
              "id": id,
              "title": title,
              "created_at": createdAt,
              "slug": slug,
              "tags": []
            };
            var jsonFileContents = JSON.stringify(metaData, null, 2);
            var jsonFilename = `${slug}.json`;

            var pp = document.createElement('a');
            pp.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonFileContents));
            pp.setAttribute('download', jsonFilename);
            pp.click();
        }

        setTimeout(function() {
          downloadMetaData()
        }, 500);

        function downloadHbs() {
            var titleString = `<h1 class="blog-post-title">${title}</h1>`;
            var html = $("#rendered-markdown")[0].innerHTML;
            var postAsHtml = `<article class="blog-post-content">${html}</article>`;
            var distanceOfTimeInWords = dateFns.distanceInWords(new Date(createdAt), { addSuffix: true});
            var createdAtString = `<p class="blog-post-created-at">Published ${distanceOfTimeInWords} on ${createdAt}</p>`;
            var tagsString = "";
            // (tags || []).map((tag) => {
            //     return `<span class="blog-post-tag">${tag}</span>`;
            // }).join("");
            var tagsSection = `<p class="blog-post-tags">${tagsString}</p>`;

            var fileContents = `<div class="blog-post-container">\n\n${titleString}\n\n${postAsHtml}\n\n${tagsSection}\n\n${createdAtString}\n\n{{> blog-post-comment}}\n\n</div>`,
                // formattedFileContents = beautifyHtml(fileContents),
                fullTemplate = `{{#> base}}\n\n${fileContents}\n\n{{/base}}`;

            var hbsFilename = `${slug}.hbs`;
            var pp = document.createElement('a');
            pp.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fullTemplate));
            pp.setAttribute('download', hbsFilename);
            pp.click();
        }

        setTimeout(function() {
            downloadHbs()
        }, 500);
    }
});

var slugifyTitle = function(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaaeeeeiiiioooouuuunc------";

    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}
