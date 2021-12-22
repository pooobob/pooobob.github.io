// WHERE THE SUSSY AMONG US MAGIC HAAPENS :DDD

!(() => {
	let a = 0
	let ss = sessionStorage

	if (!ss.getItem("GAME")) ss.setItem("GAME", "fun fact: monkey")
	if (ss.getItem("GAME") != "fun fact: monkey" && !JSON.parse(ss.getItem("GAME"))) {
		ss.removeItem("GAME")
		document.title = "AAAAAAAAAA"
		alert("YOU!")
		alert("YOU WERE THE LITTLE SCUM THAT DIDNT WANT TO PLAY MY GAME!")
		alert("HOW DARE YOU NOT WANT TO PLAY")
		alert("YOU MAKE ME SAD :(")
	}

	function loserXD() {
		alert("YOU LOSE")
		alert("-10000 SOCIAL CREDIT")
		alert("I BET YOU ARE A SCR*TCHER LMFAO")
		alert(":rofl:")
		alert("PLEASE LEAVE NOW")
		
		for (let i = 0; i < 2; i++) history.back()
	}


	document.getElementById("WHATINTHEAMONGUS").onclick = () => {
		if (ss.getItem("GAME") != null && ss.getItem("GAME") != "fun fact: monkey" && !JSON.parse(ss.getItem("GAME"))) {
			let c = confirm("SO DO YOU WANT TO PLAY WITH ME NOW??")

			if (!c) {
				ss.removeItem("GAME")
				alert("NEVER EVEN MIND.")
				alert("YOU CAN KINDLY SCREW OFF!111")
				
				for (let i = 0; i < 5; i++) alert("...")

				alert("ok im sorry")
				alert("forgive me")
				alert("ok thank you :D")
			} else {
				alert("epic")
				ss.removeItem("GAME")
				document.getElementById("WHATINTHEAMONGUS").click()
			}
		} else {
			location.hash = "AMONG_US_IS_THE_BEST"
			alert("HI BESTIE!!!!11 :D")
			location.hash = ""
			let lose = 0
			let gamerMoment = confirm("WOULD YOU LIKE TO PLAY A GAME WITH ME??")

			if (gamerMoment) {
				if (ss.getItem("GAME") != "fun fact: monkey" && !JSON.parse(ss.getItem("GAME"))) ss.removeItem("GAME")
				alert("YAY!111")
				alert("OK F IRST QUIESTN??")
				let youbetterknowbud = prompt("WHAT IS 9 + 10??????")

				if (youbetterknowbud == "21") {
					alert("YAY YOU GOT TIT RIGHT!111")
					alert("OK OK OK YOU WILL DEFINETELY GET THIS WONG WRONG!!11")
					alert("MWAHAHAAHAHAHAHAHAHAHAHAHAH")

					let sneknotsnake = prompt("IS SNEK REAL").toLowerCase().trim()

					if (sneknotsnake == "yes" || sneknotsnake == "y") {
						alert("BRUH MOMENT")
						alert("OR SHOULD I SAY...")
						alert("Activating comedian protocol...")
						alert("SNEK MOMENT???")
						alert(":rofl:")
						alert("ANYWAYS LETS CONTINUE")
						alert("OK OK LAST QUESTION FO THE DYA")

						alert("FROM 1 TO 10")
						let zamnlastquestionihopeigetthisrightxd = Number(prompt("HOW MANY STARS WOULD YOU GIVE THIS WEBSITE??????????????????"))
					
						if (isNaN(zamnlastquestionihopeigetthisrightxd)) {
							lose = 1

							alert("THATS NOT EVEN A NUMBER LMFAO")
						} else if (zamnlastquestionihopeigetthisrightxd > 10 || zamnlastquestionihopeigetthisrightxd < 1) {
							lose = 1

							alert("bruh moment")
						} else {
							alert("OK COOL THANK YOU VERY MUCH OK GOODBYE NOW")
							alert("YOU ARE VERY HOT AND HANDSOM AND I LVOE YOU")
							alert("THANK THIS GIFT OF APPERATICATION FOR YOU")

							location.href = "./amongus.jpg"
						}
					} else {
						lose = 1

						alert("I KNEW YOU WOULD GET THAT WRONG XD")
						alert("PREPARE TO DIE")
						window.close()
					}
				} else {
					lose = 1
				}

				if (lose) loserXD()
			} else {
				ss.setItem("GAME", false)
				alert("COME ON PAL I KNOW YOU WANT TO PLAY WITH ME")
				alert("SO PLAY WITH ME ALREADY")
				alert("DAMN YOU")
				alert("JUST CLICK THE BUTTON AGAIN FOR ME WOULD YOU?")
				//document.getElementById("WHATINTHEAMONGUS").click()
			}
		}
	}
})()
