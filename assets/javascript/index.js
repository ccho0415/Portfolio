$("#about-side-nav-bar").on("click", function(){
	$("body").removeClass();
	$("body").addClass("aboutMe");
});

$("#project-side-nav-bar").on("click", function(){
	$("body").removeClass();
	$("body").addClass("projects");
});
$("#contact-side-nav-bar").on("click", function(){
	$("body").removeClass();
	$("body").addClass("contactMe");
})