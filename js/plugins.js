// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


// Progress Pie built on D3.js
function ProgessPie(rootElement,percent){
  var width = 960,
    height = 500,
    twoPi = 2 * Math.PI,
    progress = 0,
    total = 1, // must be hard-coded if server doesn't report Content-Length
    formatPercent = d3.format(".0%");

  var arc = d3.svg.arc()
    .startAngle(0)
    .innerRadius(180)
    .outerRadius(240);

  var svg = rootElement.append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var meter = svg.append("g")
    .attr("class", "progress-meter");

  meter.append("path")
    .attr("class", "background")
    .attr("d", arc.endAngle(twoPi));

  var foreground = meter.append("path")
    .attr("class", "foreground");

  var text = meter.append("text")
    .attr("text-anchor", "middle")
    .attr("dy", ".35em");
  foreground.attr("d", arc.endAngle(twoPi * percent));
}
