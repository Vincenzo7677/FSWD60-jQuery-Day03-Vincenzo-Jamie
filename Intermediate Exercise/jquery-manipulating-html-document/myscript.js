$(document).ready(function() {
	$(".product-image > [src*='notebook']").css("background-color", "red");
	$(".product-image > [src*='phone']").css("background-color", "green");
	$(".product-image > [src*='tablet']").css("background-color", "blue");

	
	var productName = ["notebook","phone","tablet"];

		if ($(".product-image > [src*='notebook']").attr("src").substring(0,productName[0].length) == "notebook") {
			$(".product-image > [src*='notebook']").parents("div").attr("category",productName[0]);

		}
		 if ($(".product-image > [src*='phone']").attr("src").substring(0,productName[1].length) == "phone") {
					 $(".product-image > [src*='phone']").parents("div").attr("category",productName[1]);
		}
		if ($(".product-image > [src*='"+productName[2]+"']").attr("src").substring(0,productName[2].length) == "tablet"){
					 $(".product-image > [src*='tablet']").parents("div").attr("category",productName[2]);
		}

	var a =$(".col-xs-12 .col-md-6 [category='notebook']:eq(0)").clone();
	console.table(a)
	

});