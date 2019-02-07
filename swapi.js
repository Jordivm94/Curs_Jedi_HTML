$(function(){
	$("#swpeople").text("hola");
	$.get("https://swapi.co/api/people/2/?format=json",function(data) {
		$("#swpeople").text(data.name);},"json");
});