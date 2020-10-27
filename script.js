

  function showAboutMe(){
    document.getElementById("about-info").style.display = "block";
    document.getElementById("about-header").style.display="block";
    document.getElementById("description").style.display = "none";
    document.getElementById("name").style.display="none";
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "inline";
    document.getElementById("button3").style.display = "inline";
    document.getElementById("caitlin-photo").style.display="block";
    document.getElementById("portfolio-section").style.display="none";
    document.getElementById("home-button").style.display="block";
    document.getElementById("contact-section").style.display="none";
    document.getElementById("contact-header").style.display="none";
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
    document.getElementById("contact-section").style.display="none";
    document.getElementById("contact-header").style.display="none";
    document.getElementById("about-header").style.display="none";

  }

  function homeButton(){
    document.getElementById("portfolio-section").style.display="none";
    document.getElementById("about-info").style.display="none";
    document.getElementById("caitlin-photo").style.display="none";
    document.getElementById("description").style.display="block";
    document.getElementById("name").style.display="block";
    document.getElementById("home-button").style.display="none";
    document.getElementById("button2").style.display="inline";
    document.getElementById("button1").style.display="inline";
    document.getElementById("button3").style.display = "inline";
    document.getElementById("contact-section").style.display="none";
    document.getElementById("contact-header").style.display="none";
    document.getElementById("about-header").style.display="none";

  }

  function showContact(){
    document.getElementById("portfolio-section").style.display="none";
    document.getElementById("about-info").style.display="none";
    document.getElementById("caitlin-photo").style.display="none";
    document.getElementById("description").style.display="none";
    document.getElementById("name").style.display="none";
    document.getElementById("home-button").style.display="block";
    document.getElementById("button2").style.display="inline";
    document.getElementById("button1").style.display="inline";
    document.getElementById("button3").style.display = "none";
    document.getElementById("contact-section").style.display="inline-flex";
    document.getElementById("contact-header").style.display="block";
    document.getElementById("about-header").style.display="none";
  }