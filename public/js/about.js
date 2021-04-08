function showShannonAbout() {
    $("#ShannonAbout").removeClass("hide");
    $("#Kyle").addClass("hide");
    $("#Morg").addClass("hide");
    $("#ShannonPic").removeClass("col s4");
    $("#ShannonPic").addClass("col s12");
    $("button").removeClass("hide");
    $("h2").addClass("hide");
    $("#ShannonGithub").removeClass("hide")
  }
  
  function showKyleAbout() {
    $("#KyleAbout").removeClass("hide");
    $("#Shan").addClass("hide");
    $("#Morg").addClass("hide");
    $("#KylePic").removeClass("col s4");
    $("#KylePic").addClass("col s12");
    $("button").removeClass("hide");
    $("h2").addClass("hide");
    $("#KyleGithub").removeClass("hide")
  }
  
  function showMorganAbout() {
    $("#MorganAbout").removeClass("hide");
    $("#Shan").addClass("hide");
    $("#Kyle").addClass("hide");
    $("#MorganPic").removeClass("col s4");
    $("#MorganPic").addClass("col s12");
    $("button").removeClass("hide");
    $("h2").addClass("hide");
    $("#MorganGithub").removeClass("hide")
  }
  
  function GangsAllHere() {
    $("#Shan").removeClass("hide");
    $("#Kyle").removeClass("hide");
    $("#Morg").removeClass("hide");
  
    $("#ShannonPic").removeClass();
    $("#ShannonPic").addClass("col s4");
    $("#KylePic").removeClass();
    $("#KylePic").addClass("col s4");
    $("#MorganPic").removeClass();
    $("#MorganPic").addClass("col s4");
  
    $("#ShannonAbout").addClass("hide");
    $("#KyleAbout").addClass("hide");
    $("#MorganAbout").addClass("hide");

    $("#ShannonGithub").addClass("hide")
    $("#KyleGithub").addClass("hide")
    $("#MorganGithub").addClass("hide")

  
    $("button").addClass("hide");
  
    $("h2").removeClass("hide");
  }
  
  $("#Shan").click(function () {
    showShannonAbout();
  });
  $("#Kyle").click(function () {
    showKyleAbout();
  });
  $("#Morg").click(function () {
    showMorganAbout();
  });
  $("button").click(function () {
    GangsAllHere();
  });