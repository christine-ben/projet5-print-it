//Il définit un tableau d'objets, chaque objet représentant une image du carrousel.
//  Chaque objet a deux propriétés : `image` (le chemin de l'image)
//et `tagLine` (la légende de l'image avec des balises HTML) 

const slide = [
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
	{
		image: "slide2.jpg",
		tagLine:
		  "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	  },
	  {
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	  },
  ];
 

 
// Déclaration et initialisation de la variable globale qui représente l'indice de l'image actuelle
let numero = 0;


/*ChangeSlide` est une fonction qui prend un paramètre `sens` (1 pour suivant, -1 pour précédent) et met à jour l'affichage en conséquence. - Elle incrémente ou décrémente `numero` en fonction du paramètre `sens`. 
- Elle gère également la boucle du carrousel, en réinitialisant le « numéro » à 0 si le dépassement se produit.*/
 //-------------------------------------function  ChangeSlide(sens)---------------------------------------------
function ChangeSlide(sens) {
	
	/*Lorsque l'utilisateur clique sur la flèche suivante, le paramètre sens est égal à 1 et
la variable numero est incrémentée.
pour calculer le slide sur le quelle on va atirire quand on clique sur suivant et precesent 
Incrémente ou décrémente l'indice de l'image en fonction de la direction*/
	  numero += sens;
	  /*L'instruction conditionnelle if permet de vérifier qu'on ne dépasse pas le nombre d'images du slide.
 Et si on dépasse, on réinitialise la variable numero, ce qui permet de boucler le slider. */

  //si le numero et inferiur a 0 il faut boucler sur le dernier alors numero = slide.length - 1;
   /*slide.lenght :permet de compter le nombre d'images du tableau slide.
     on retire -1 car la première image du slide est slide[0]. */

	 // Vérifie si l'indice dépasse la fin du tableau d'images
	 // Si l'indice est négatif,(<0) boucle jusqu'à la dernière image
	  if (numero < 0)
	 numero = slide.length - 1;

	// Si l'indice dépasse la dernière image(>0), boucle jusqu'à la première image
	  if (numero > slide.length - 1)
	   numero = 0;
	  
	  // Met à jour l'image et la légende de l'image affichée
	  document.getElementById("slide").src = "./assets/images/slideshow/" + slide[numero].image;
	  document.getElementById("tagline").innerHTML = slide[numero].tagLine;
	  
	  updateDots(numero);// Mettez à jour les points indicateurs 
  }
//-------------------------------------fin de la function  ChangeSlide(sens)---------------------------------------------
 

//------------------------------------- function createDots() ---------------------------------------------------
// Sélectionne l'élément du DOM (la classe) représentant les points indicateurs(.dots)
  const dots = document.querySelector('.dots'); 
  
 // Fonction pour créer les points indicateurs associés à chaque image
  function createDots(){
	 // Boucle à travers chaque élément du tableau slide
	  for (let i = 0; i < slide.length; i++) {
		// Pour chaque element dans la boucle je vais créer un dot
        //(Crée un nouvel élément div pour représenter un point indicateur)
		  const dot = document.createElement("div");
		   // Ajoute la classe "dot" à l'élément div créé
		  dot.classList.add("dot");

		  /* Ajoute d'un écouteur de clic qui appelle ChangeSlide avec la différence entre 
		  l'indice actuel et celui du point
		  La méthode addEventlistener() prend trois paramètres:
			element.addEventlistener('evenement', NomDeFonction, Boolean);

			evenement : le nom de l’névenement que vous voulez écouter ( blur, click, … );
			Le code que vous voulez, ça peut être une fonction que vous avez déclarer ou bien une fonction anonyme.
			Un boolean indiquant l’évolution des événements, par défaut cette valeur vaut false.*/
		  dot.addEventListener('click', () => ChangeSlide(i - numero));
		  //rattacher l'element a leur parant avec la balise appendChaild sur le parant
		  dots.appendChild(dot);
	  }
  }
 //-------------------------------------fin de la  function createDots() ---------------------------------------------------
 
 
 //------------------------------------- function updateDots(index) ---------------------------------------------------
 
 // Fonction pour mettre à jour l'apparence des points indicateurs en fonction de l'image actuelle 
 function updateDots(index) {
	// Sélectionne tous les éléments dot
	  const allDots = document.querySelectorAll('.dots .dot');
	  
	   //La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
    //Parcourt chaque point indicateur avec la méthode forEach(Parcourt tous les dots)
	  allDots.forEach((dot, i) => {
		//// Vérifie si l'index du point indicateur correspond à l'index actuel du diaporama
		  if (i === index) {
			// Ajoute la classe 'dot_selected' au dot correspondant à l'image actuelle, sinon la retiré
			  dot.classList.add('dot_selected');
		  } else {
			  dot.classList.remove('dot_selected');
		  }
	  });
  }
  // Appelle la fonction pour créer les points indicateurs
  createDots();
  // Initialise les points indicateurs avec la première image sélectionnée
  updateDots(0);

  //------------------------------------- fin de la function updateDots(index) ---------------------------------------------------