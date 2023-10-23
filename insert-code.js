const fs = require('fs');
const minify = require('html-minifier').minify;

// Read the index.html file
const filePath = './build/index.html';
let html = fs.readFileSync(filePath, 'utf8');

// Code to insert between <html lang="en"> and <head>
const codeToInsert = `
<!-- Start Single Page Apps for GitHub Pages -->
<script type="text/javascript">
  // Single Page Apps for GitHub Pages
  // MIT License
  // https://github.com/rafgraph/spa-github-pages
  // This script checks to see if a redirect is present in the query string,
  // converts it back into the correct url and adds it to the
  // browser's history using window.history.replaceState(...),
  // which won't cause the browser to attempt to load the new url.
  // When the single page app is loaded further down in this file,
  // the correct url will be waiting in the browser's history for
  // the single page app to route accordingly.
  (function(l) {
    if (l.search[1] === '/' ) {
      var decoded = l.search.slice(1).split('&').map(function(s) { 
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  }(window.location))
</script>
<!-- End Single Page Apps for GitHub Pages -->
`;

// Find the position to insert the code
const startIndex = html.indexOf('<html lang="en">') + '<html lang="en">'.length;
const endIndex = html.indexOf('<head>');

if (startIndex === -1 || endIndex === -1) {
  console.error('Error: Could not find the insertion points in index.html');
  process.exit(1);
}

// Insert the code
const modifiedHtml = html.slice(0, startIndex) + codeToInsert + html.slice(startIndex, endIndex) + html.slice(endIndex);

// Minify the modified HTML
const minifiedHtml = minify(modifiedHtml, {
  collapseWhitespace: true,
  removeComments: true,
});

// Write the modified HTML back to the file
fs.writeFileSync(filePath, minifiedHtml);

console.log('Code inserted into index.html');
