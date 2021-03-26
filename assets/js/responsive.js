//add function to showMore btn

if (window.matchMedia("(max-width: 500px)").matches) {

	$(".show-link").click(function() {


//	$(".project-2").css("margin-left", "0px");

	for(var i = 3; i < 7; i++) {

		if(document.querySelector(".project-" + i).style.display === "none") {

			document.querySelector(".project-" + i).style.display = "block";

			// document.querySelector(".project-2").style.marginRight = "0px";

			$(".more").addClass("toggle");

			$(".less").removeClass("toggle");


		} else {

			document.querySelector(".project-" + i).style.display = "none";
//			document.querySelector(".project-2").style.marginRight = "90px";


			$(".more").removeClass("toggle");
			$(".less").addClass("toggle");


		}

}
	});

	} else {

		$(".show-link").click(function() {


	for(var i = 3; i < 7; i++) {

		if(document.querySelector(".project-" + i).style.display === "none") {

			document.querySelector(".project-" + i).style.display = "block";

			document.querySelector(".project-2").style.marginLeft = "0px";

			$(".more").addClass("toggle");

			$(".less").removeClass("toggle");


		} else {

			document.querySelector(".project-" + i).style.display = "none";

						// document.querySelector(".project-2").style.marginLeft = "90px";

			$(".more").removeClass("toggle");
			$(".less").addClass("toggle");

		}




	}
});

}