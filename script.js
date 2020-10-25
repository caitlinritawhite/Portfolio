// $("#about-me").click(function (event) {
//     event.preventDefault();
  
//     document.getElementById("about-info").style.display = "block";
//     document.getElementById("description").style.display = "none";
//     document.getElementById("buttons").style.display = "none";
//   });

  function showAboutMe(){
    document.getElementById("about-info").style.display = "block";
    document.getElementById("description").style.display = "none";
    document.getElementById("name").style.display="none";
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "inline";
    document.getElementById("button3").style.display = "inline";
    document.getElementById("caitlin-photo").style.display="block";
    document.getElementById("portfolio-section").style.display="none";
    document.getElementById("home-button").style.display="block";
    }

  function showPortfolio(){
    document.getElementById("portfolio-section").style.display="block";
    document.getElementById("about-info").style.display="none";
    document.getElementById("caitlin-photo").style.display="none";
    document.getElementById("description").style.display = "none";
    document.getElementById("name").style.display="none";
    document.getElementById("button2").style.display="none";
    document.getElementById("button1").style.display="inline";
    document.getElementById("button3").style.display = "inline";
    document.getElementById("home-button").style.display="block";

  }

  function homeButton(){
    document.getElementById("portfolio-secion").style.display="none";
    document.getElementById("about-info").style.display="none";
    document.getElementById("caitlin-photo").style.display="none";
    document.getElementById("description").style.display="block";
    document.getElementById("name").style.display="block";
    document.getElementById("home-button").style.display="none";
    document.getElementById("button2").style.display="inline";
    document.getElementById("button1").style.display="inline";
    document.getElementById("button3").style.display = "inline";

  }