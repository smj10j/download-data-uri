// Helper for downloading files with a specified filename
// https://github.com/smj10j/download-data-uri

function appendStringAsNodes(element, html) {
    var frag = document.createDocumentFragment(),
        tmp = document.createElement('body'), child;
    tmp.innerHTML = html;
    // Append elements in a loop to a DocumentFragment, so that the browser does
    // not re-render the document for each node
    while (child = tmp.firstChild) {
        frag.appendChild(child);
    }
    element.appendChild(frag); // Now, append all elements at once
    frag = tmp = null;
}

var downloadDataURI = function(options) {
    if(!options) {
        return;
    }
    var callback = options.onComplete || false;
    var isWebkit = 'WebkitAppearance' in document.documentElement.style
    if(!isWebkit) {
        location.href = options.data;
    }
    options.filename || (options.filename = "download." + options.data.split(",")[0].split(";")[0].substring(5).split("/")[1]);
    options.url || (options.url = "http://download-data-uri.appspot.com/");
    var form = document.createElement("form");
    form.method = 'post';
    form.style = 'display:none';
    form.action = options.url;
    appendStringAsNodes(
        form,
       '<input type="hidden" name="filename" value="'+options.filename+'"/><input type="hidden" name="data" value="'+options.data+'"/>'
    );
    form.submit();
    if(typeof callback === "function") {
        setTimeout(function() {
            callback(options.filename)
        }, 1);
    }
    form.remove();
}
