$(document).ready(function() {
  var selectors = ['.linesSpread', '.linesMLine', '.linesTotals'];
  //var selectors = ['.linesMLine'];
	
  $(selectors).each(function(i, selector) {
    var arr = [];
    
    // convert values to percentage
    $(selector).each(function(index, value) {
      arr[index] = convert(parseLine($(value).html()));
    });

    // calculate vig, adjust values
    var i = 0, j = arr.length;
    for (i; i < j; i += 2) {
      var a = arr[i];
      var b = arr[i + 1];
      var vig = a + b;
      if (vig > 0) {
        arr[i] = a / vig;
        arr[i + 1] = b / vig;
      }
    }

    /// append values
    $(selector).each(function(index, value) {
      $(value).append(format(arr[index]));
    });
  });
});
