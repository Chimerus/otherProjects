$(document).ready(function(){
  var canvas = new fabric.Canvas('c');
  canvas.setHeight(500);
  canvas.setWidth(500);

  // Click handlers
  // text
  $("#sendtxt").click(function(){
    var msg = document.getElementById("text").value;
    var text = new fabric.Text(msg, { left: 100, top: 100 });
    // Clear the box
    document.getElementById("text").value = "";
    canvas.add(text);
  })
  // pic link
  $("#sendimg").click(function(){
    var pic = document.getElementById("img").value;
    fabric.Image.fromURL(pic, function(oImg) {
    oImg.scale(0.2);
    // Clear the box
    document.getElementById("img").value = "";
    canvas.add(oImg);
  });
  })


});