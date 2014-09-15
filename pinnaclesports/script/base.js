var parseLine = function (line) {
    var arr = line.split('&nbsp;');
    var value = (arr.length > 1) ? arr[arr.length-1] : line;
    return parseFloat(value);
};

// format percent, green or red
var format = function(x) {
    if (x == 0 || isNaN(x)) return "";
    var css = (x >= 0.5) ? 'green' : '#FF4136';
    return " (<span style='color:" + css + "'>" + (x * 100).toFixed(2) + "%</span>)";
};

// convert odd to percentage
var convert = function(x) {
    if (x < -100) {
        x = Math.abs(x);
        return x / (100 + x);
    } else if (x >= 100) {
        x = Math.abs(x);
        return 100 / (100 + x);
    } else {
        return "0.00";
    }
};