function ajaxAffiche(htmlArticle)
{
    $('#email_verif').html(htmlArticle);

    if(htmlArticle.charAt(0) == 'L')
    {

    }
    else
    {
        $('#prenom').val('');
        $('#nom').val('');
        $('#signup_mail').val('');
        $('#signup_password').val('');
    }
}

$("form#form_inscription").submit(function(e) 
{
    e.preventDefault(); 
    let url = "inscription.php";
    let email = document.querySelector("#signup_mail");
    let password = document.querySelector("#signup_password");
    let data = {'signup_email': email, 'signup_password': password}
    let serializeData = $('#form_inscription').serialize();
    console.log(serializeData);
    $.ajax
    ({
        type: "POST",
        url: url,
        data: serializeData,
        //success: success,
        //dataType: dataType
    }).done(ajaxAffiche);
});




function connexion_Affiche(htmlArticle)
{
    $('#connex_verif').html(htmlArticle);
}

$("form#form_connexion").submit(function(e) 
{
    e.preventDefault(); 
    let url = "connexion.php";
    let email = document.querySelector("#login_mail");
    let password = document.querySelector("#login_password");
    let data = {'login_mail': email, 'login_password': password}
    let serializeData = $('#form_connexion').serialize();
    $.ajax
    ({
        type: "POST",
        url: url,
        data: serializeData,
        //success: success,
        //dataType: dataType
    }).done(connexion_Affiche);
});




function mdp_Affiche(htmlArticle)
{
    $("#loader").removeClass("loader");
    $('#mdp_verif').html(htmlArticle);
}

$("form#form_mdp").submit(function(e) 
{
    e.preventDefault(); 
    $("#loader").addClass("loader");
    let url = "password/mail_sender.php";
    let email = document.querySelector("#email");
    let data = {'email': email}
    let serializeData = $('#form_mdp').serialize();
    $.ajax
    ({
        type: "POST",
        url: url,
        data: serializeData,
        //success: success,
        //dataType: dataType
    }).done(mdp_Affiche);
});
