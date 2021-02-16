//helper functions, it turned out chrome doesn't support Math.sgn() 
function signum(x) {
  return (x < 0) ? -1 : 1;
}
function absolute(x) {
  return (x < 0) ? -x : x;
}

function drawPath(svg, path, startX, startY, endX, endY, pathLeft) {
  // get the path's stroke width (if one wanted to be  really precize, one could use half the stroke size)
  var stroke =  parseFloat(path.attr("stroke-width"));
  // check if the svg is big enough to draw the path, if not, set heigh/width
  if (svg.attr("height") <  endY)                 svg.attr("height", endY);
  svg.attr("width", $(window).innerWidth())
  
  var deltaX = (endX - startX) * 0.15;
  var deltaY = (endY - startY) * 0.15;
  // for further calculations which ever is the shortest distance
  // var delta  =  deltaY < absolute(deltaX) ? deltaY : absolute(deltaX);
  var delta = 20;  // ? idk what I want this to be

  let farRight = $(window).innerWidth() - 100;
  let farLeft = 0;

  // ! A rx ry x-axis-rotation large-arc-flag sweep-flag x y
  // ! a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy

  if (pathLeft) {
    // go down, left to far left, down, then right, ending on the center of the left edge of the ending element
    path.attr(
      "d",  "M"  + startX + " " + startY
      + " v" + delta                                                                      // move down
      + " a" + delta + " " +  delta + " 0 0 " + 1 + " " + (-delta) + " " + (delta)        // arc down left
      + " H" + (farLeft + delta)                                                          // move left
      + " a" + delta + " " +  delta + " 0 0 " + 0 + " " + (-delta) + " " + (delta)        // arc down
      + " V" + (endY - delta)                                                             // move down
      + " a" + delta + " " +  delta + " 0 0 " + 0 + " " + delta + " " + delta             // arc right
      + " H" + endX                                                                       // move right to end
    );
  } else {
    // go down, right to right side of screen, down, and left, ending on the center of the right edge of the element
    path.attr(
      "d",  "M"  + startX + " " + startY
      + " v" + delta                                                                      // move down
      + " a" + delta + " " +  delta + " 0 0 " + 0 + " " + (delta) + " " + (delta)        // arc down right
      + " H" + (farRight - delta)                                                         // move right
      + " a" + delta + " " +  delta + " 0 0 " + 1 + " " + (delta) + " " + (delta)        // arc down
      + " V" + (endY - delta)                                                             // move down
      + " a" + delta + " " +  delta + " 0 0 " + 1 + " " + (-delta) + " " + delta             // arc left
      + " H" + endX                                                                       // move left to end
    );
  }
}

function connectElements(svg, path, startElem, endElem) {
  var svgId = svg[0].id.slice(-1)
  var svgContainer= $("#svgContainer");

  // if first element is lower than the second, swap!
  if(startElem.offset().top > endElem.offset().top){
      var temp = startElem;
      startElem = endElem;
      endElem = temp;
  }

  // get (top, left) corner coordinates of the svg container   
  var svgTop  = svgContainer.offset().top;
  var svgLeft = svgContainer.offset().left;

  // get (top, left) coordinates for the two elements
  var startCoord = startElem.offset();
  var endCoord   = endElem.offset();

  // calculate path's start (x,y)  coords
  var startX = startCoord.left + 0.5*startElem.outerWidth() - svgLeft + 200;
  var startY = startCoord.top  + startElem.outerHeight() - svgTop;

      // calculate path's end (x,y) coords  
      // default is middle of right edge
  let endX = endCoord.left + endElem.outerWidth()
  let endY = endCoord.top + 100;
  let pathLeft = (path[0].className.baseVal === "pathLeft")
  
  if (pathLeft) {
    // end at middle of left edge
    endX = endCoord.left - svgLeft - svgTop
    endY = endCoord.top + endElem.outerHeight();
  }

  // call function for drawing the path
  drawPath(svg, path, startX, startY, endX, endY, pathLeft);

}



function connectAll() {
  // connect all the paths you want!
  // connectElements($("#svg1"), $("#path1"), $("#teal"),   $("#orange"));
  // connectElements($("#svg1"), $("#path2"), $("#red"),    $("#orange"));
  // connectElements($("#svg1"), $("#path3"), $("#teal"),   $("#aqua")  );
  // connectElements($("#svg1"), $("#path4"), $("#red"),    $("#aqua")  ); 
  // connectElements($("#svg1"), $("#path5"), $("#purple"), $("#teal")  );
  // connectElements($("#svg1"), $("#path6"), $("#orange"), $("#green") );
  connectElements($("#svg1"), $("#path1"), $("#logo"), $("#projects-header"))
  connectElements($("#svg1"), $("#path2"), $("#logo"), $("#projects-header"))

}

$(document).ready(function() {
  // reset svg each time 
  $("#svg1").attr("height", "0");
  $("#svg1").attr("width", "0");
  connectAll();
});

$(window).resize(function () {
  // reset svg each time 
  $("#svg1").attr("height", "0");
  $("#svg1").attr("width", "0");
  connectAll();
});