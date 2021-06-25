$("input[type=password]").keyup(function()
{
	
	if($("#password1").val().length >= 5)
	{
		$("#8char").removeClass("glyphicon-remove");
		$("#8char").addClass("glyphicon-ok");
		$("#8char").css("color","#00A41E");
	}
	else
	{
		$("#8char").removeClass("glyphicon-ok");
		$("#8char").addClass("glyphicon-remove");
		$("#8char").css("color","#FF0004");
	}
	
	if($("#password1").val() == $("#password2").val())
	{
		$("#pwmatch").removeClass("glyphicon-remove");
		$("#pwmatch").addClass("glyphicon-ok");
		$("#pwmatch").css("color","#00A41E");
	}
	else
	{
		$("#pwmatch").removeClass("glyphicon-ok");
		$("#pwmatch").addClass("glyphicon-remove");
		$("#pwmatch").css("color","#FF0004");
	}
});

function ajaxAffiche(htmlArticle)
{
	if($("#password1").val() == $("#password2").val())
	{
		$("#mdp_verification").removeClass("mdp_verification_red");
		$("#mdp_verification").addClass("mdp_verification_green");

		$("#melisme_form").addClass("block");

		let elem = document.querySelector('#changemdp_button');
		elem.style.setProperty('display', 'none', 'important');
		
	}
	else
	{
		$("#mdp_verification").addClass("mdp_verification_red");
	}
	
    $('#mdp_verification').html(htmlArticle);
}

$("form#passwordForm").submit(function(e) 
{
	e.preventDefault(); 
	let url = "valid_new_password.php";
	let password1 = document.querySelector("#password1");
	let password2 = document.querySelector("#password2");
	let data = {'password1': password1, 'password2': password2}
	let serializeData = $('#passwordForm').serialize();
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