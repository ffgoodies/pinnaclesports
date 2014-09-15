var parseBlock = function (block) {
    var lines = block.split('<br>');
    var offset = (lines.length === 3) ? 1 : 0;
    
    // convert values to percentage
    var a = convert(parseLine(lines[offset]));
    var b = convert(parseLine(lines[offset + 1]));

    // calculate vig, adjust values
    var vig = a + b;
    a = a / vig;
    b = b / vig;

    // append values
    var s = (offset === 1) ? lines[0] + "<br />" : "";
    return s + lines[offset] + format(a) + "<br />" + lines[offset + 1] + format(b);
};

$(document).ready(function() {
    $('.linesTotals').each(function(index, value) {
        // Total points
        var elm = $(value);
        elm.html(parseBlock(elm.html()));

        // Team 1
        var elm = $(value).next();
        elm.html(parseBlock(elm.html()));

        // Team 2
        var elm = elm.next();
        elm.html(parseBlock(elm.html()));
    });
});