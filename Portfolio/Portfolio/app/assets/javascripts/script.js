$(document).ready(function() {
  // works with my code on each page to change active tab highlight, even on reload
  switch ($(".whereAmI").text()) {
    case "index":
      $(".index").addClass("active")
      break;
    case "projects":
      $(".projects").addClass("active")
      break;
    case "about":
      $(".about").addClass("active")
      break;
    case "contact":
      $(".contact").addClass("active")
  };
});