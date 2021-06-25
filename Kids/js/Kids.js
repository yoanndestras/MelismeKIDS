
$('.Signin').hide();
$('.NewPassword').hide();
$('.Signup').hide();
$("#links").hide();
$("#hide").hide();


function login()
{
  $(".Signin").fadeIn();
  $("#Connect").fadeIn();

  $("main").addClass("opacity");
  $("#header").addClass("opacity");
  $("footer").addClass("opacity");

  $("main").addClass("noClick");
  $("#header").addClass("noClick");
  $("footer").addClass("noClick");

  $(document).mouseup(function (e) 
  {
    let container = $("#Connect");

    if (!container.is(e.target) && container.has(e.target).length === 0) {

      $("#Connect").fadeOut();
      $(".Signin").fadeOut();
      $(".Signup").fadeOut();
      $(".NewPassword").fadeOut();

      $("main").removeClass("opacity");
      $("footer").removeClass("opacity");
      $("#header").removeClass("opacity");

      $("main").removeClass("noClick");
      $("#header").removeClass("noClick");
      $("footer").removeClass("noClick");

      $(".Signin").unbind('click', clickDocument);
      $(".Signup").unbind('click', clickDocument);
      $(".NewPassword").unbind('click', clickDocument);

    }
  });
}



$(document).ready(function () 
{
  $("#login").click(function () 
  {
    login();
  });

  $("#hamburger_login").click(function () 
  {
    login();
  });

  $(".password_lost").click(function () 
  {
    $(".Signin").hide();
    $(".NewPassword").fadeIn();
    $("#Connect").fadeIn();
  });

  $(".inscription").click(function () 
  {
    $(".Signin").hide();
    $(".Signup").fadeIn();
  });

  $(".chevron").click(function () 
  {
    $(".Signup").hide();
    $(".Signin").fadeIn();
  });

  $(".chevron_mdp").click(function () 
  {
    $(".NewPassword").hide();
    $(".Signin").fadeIn();
  });

  
  function close()
  {
      $("main").removeClass("opacity");
      $("#header").removeClass("opacity");
      $("footer").removeClass("opacity");

      $("main").removeClass("noClick");
      $("#header").removeClass("noClick");
      $("footer").removeClass("noClick");
  }

  $(".closeSignin").click(function () 
  {
    $("#Connect").fadeOut();
    $(".Signin").fadeOut();

    close();
  });

  $(".closeNewPassword").click(function () 
  {
    $("#Connect").fadeOut();
    $(".NewPassword").fadeOut();

    close();
  });


  $(".closeSignup").click(function () 
  {
    $("#Connect").fadeOut();
    $(".Signup").fadeOut();

    close();
  });

  $("#hide").click(function () 
  {
    $("#links").hide();
    $("#hide").hide();
    $("#show").show();
  });

  $("#show").click(function () 
  {
    $("#links").show();
    $("#hide").show();
    $("#show").hide();
  });

  let crocodataArray = new Array();
  let liondataArray = new Array();

  crocodataArray[0] = "../Kids/img/croco_yoann1.png";
  crocodataArray[1] = "../Kids/img/croco_yoann2.png";
  crocodataArray[2] = "../Kids/img/croco_yoann3.png";

  liondataArray[0] = "../Kids/img/lion_yoann1.png";
  liondataArray[1] = "../Kids/img/lion_yoann2.png";

  let thisId = 0;

  window.setInterval(function () 
  {
    $('.croco1').attr('src', crocodataArray[thisId]);
    $('.lion1').attr('src', liondataArray[thisId]);
    $('.singe1').attr('src', liondataArray[thisId]);
    thisId++;
    if (thisId == 3) thisId = 0;
  }, 300);

});



