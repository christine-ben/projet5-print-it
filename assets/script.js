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
 
  const slide =   ["slide1.jpg", "slide2.jpg", "slide3.jpg", "slide4.png"];
  const tagline = ["Impressions tous formats <span>en boutique et en ligne</span>", 
  				   "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  				   "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  				   "Autocollants <span>avec découpe laser sur mesure</span>",];
let numero = 0;
/*Grâce aux évènements onclick sur les flèches latérales, le code JavaScript lance la fonction ChangeSlide() 
en passant le paramètre -1 pour la flèche gauche et 1 pour la flèche droite.*/

/**/

function ChangeSlide(sens) {
/*Lorsque l'utilisateur clique sur la flèche suivante, le paramètre sens est égal à 1 et 
la variable numero est incrémentée. 
pour calculer le slide sur le quelle on va atirire quand on clique sur suivant et precesent */
    numero = numero + sens;
/*L'instruction conditionnelle if permet de vérifier qu'on ne dépasse pas le nombre d'images du slide.
 Et si on dépasse, on réinitialise la variable numero, ce qui permet de boucler le slider. */
    if (numero < 0) 
	//si le numero et inferiur a 0 il faut boucler sur le dernier
        numero = slide.length - 1;
	/*slide.lenght :permet de compter le nombre d'images du tableau slide.
	 on retire -1 car la première image du slide est slide[0]. */
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

//function updateDots(index) qui nous permet de styliser le point de la nouvelle position.
const dots = document.querySelectorAll('.dot'); // Sélectionnez tous les points
function updateDots(index) {
	//dot + et la position
	//La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); // Ajoutez la classe pour le point actuel
        } else {
            dot.classList.remove('dot_selected'); // Supprimez la classe pour les autres points
        }
    });
}
