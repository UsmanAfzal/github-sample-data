var
  //githubraw = 'https://raw.github.com/repos/UsmanAfzal/content-test/contents/src/original/dissolution.md',
  //github = 'https://api.github.com/repos/UsmanAfzal/content-test/contents/src/original/dissolution.md',
  rawgit = 'https://cdn.rawgit.com/UsmanAfzal/content-test/12d3033f82/src/original/dissolution.md',
  contentArea = document.getElementById('data'),
  openingSection = '<section',
  closingSection = '</section>',
  openingSectionPos,
  closingSectionPos,
  request,
  data;

// XMLHttpRequest
function XMLHttp(url) {
  request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = function() {
    var data = request.responseText;
    renderHTML(data);
  };
  request.send();
}

// XMLHttpRequest for partial content
function XMLHttpPartial(url) {
  request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = function() {
    data = request.responseText;
    renderHTMLSliced(data);
  };
  request.send();
}

// Rendering HTML using data
function renderHTML(data) {
  contentArea.insertAdjacentHTML('beforeend', data);
}

function renderHTMLSliced(data) {
  openingSectionPos = data.search(openingSection);
  closingSectionPos = data.search(closingSection);
  renderHTML(data.slice(openingSectionPos, closingSectionPos));
}

//XMLHttpPartial(rawgit);
XMLHttp(rawgit);
