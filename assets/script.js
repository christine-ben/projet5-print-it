/*const slide = [
	{
		image: "slide1.jpg" ,
		tagLine:
		"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  image: "slide2.jpg",
	  tagLine:
		"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
	  image: "slide3.jpg",
	  tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
	  image: "slide4.png",
	  tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
  ];*/
 
  const slide = ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.png"];
  const tagline = ["Impressions tous formats <span>en boutique et en ligne</span>", 
  					"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  						"Grand choix de couleurs <span>de CMJN aux pantones</span>",
  						"Autocollants <span>avec découpe laser sur mesure</span>",];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
		updateDots(numero) // Mettez à jour les points indicateurs
    document.getElementById("slide").src ="./assets/images/slideshow/" +slide[numero];

	const p = document.getElementById("tagline");
	p.innerHTML=tagline[numero] ;
	if (numero < 0)
        numero = tagline.length - 1;
    if (numero > tagline.length - 1)
        numero = 0;
		updateDots(numero) // Mettez à jour les points indicateurs
    document.getElementById("tagline")=tagline[numero];
}

const dots = document.querySelectorAll('.dot'); // Sélectionnez tous les points
function updateDots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); // Ajoutez la classe pour le point actuel
        } else {
            dot.classList.remove('dot_selected'); // Supprimez la classe pour les autres points
        }
    });
}
