function update() {
    var frame = $('#output').get(0);
    var frameDoc = frame.contentDocument || frame.contentWindow.document;
    var w = document.getElementById("code").value;
    document.getElementById('output').contentWindow.document.write(w);
}