$(function(){

	$.get("http://51.144.236.83:8080/pokemons?id=1",function(data) {
		$("#code").text(data.num);
		$("#sprite").attr("src",data.images[0].front);
		$("#shiny").attr("src",data.images[1].back);
		$("#name").text(data.name);
		$("#type")


	},"json");
});