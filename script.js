$("#about-me").click(function (event) {
    event.preventDefault();
    let userInput = $("#search-input").val();
    document.getElementById("recipeList").style.display = "block";
    document.getElementById("favorite-results").style.display = "none";
    document.getElementById("review-text").style.display = "none";
    document.getElementById("faves").style.display = "inline";
    document.getElementById("add").style.display = "inline";
    document.getElementById("add").style.display = "inline";
  
    ajaxCallSearch(userInput);
  });