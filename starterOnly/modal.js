function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground"); //fond qui sera appliqué au lancement du modal
const modalBtn = document.querySelectorAll(".modal-btn");//bouton inscription
const formData = document.querySelectorAll(".formData");//formulaire - message d'erreurs affichés en cas de problème
const closeBtn = document.querySelector(".close");//bouton fermeture formulaire
const submiBtn = document.querySelector(".btn-submit");//bouton envoi formulaire
const form = document.getElementById('form');//div formulaire

//champs de formulaire
const firstName = document.getElementById('first');//prénom
const lastName = document.getElementById('last');//nom
const email = document.getElementById('email');//email
const amount = document.getElementById('amount');//quantité 
const birthdate = document.getElementById('birthdate');//dâte de naissance
const allCities = document.getElementById('allCities');//toutes les villes selectionables 
const locations = document.querySelectorAll('#allCities .checkbox-input');//selecteur de villes à cocher
const checkbox1 = document.getElementById('checkbox1');//validation conditions d'utilisation
const input = document.getElementsByClassName('text-control');//validation optionelle newsletter

//erreurs en cas de non-remplissage du formulaire
const formDataFirst = document.querySelector("#first").parentNode;//renvoi vers le parent de l'id du prénom
const formDataLast = document.querySelector("#last").parentNode;// renvoi vers le parent de l'id du nom
const formDataEmail = document.querySelector("#email").parentNode; //renvoi vers le parent de l'email 
const formDataBirthdate = document.querySelector("#birthdate").parentNode;// renvoi vers le parent de la date de naissance 
const formDataAmount = document.querySelector("#amount").parentNode;//renvoi vers le parent de la quantité (nombre de tournois)
const formDataLocation = document.querySelector("#location1").parentNode;//renvoi vers le parent des villes à sélectionner 
const formDataGenConditions = document.querySelector("#checkbox1").parentNode; //renvoi vers le parent de la case obligatoire à cocher 
//const numbers= /[0-9]/; // chiffres allant de 0 à 9

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));//bouton s'inscrire fonctionnel 

// launch modal form
function launchModal() { //fonction qui, au clic sur le bouton "s'inscrire", ouvrira le formulaire
  modalbg.style.display = "block";//mode d'affichage du modal
}

// close modal event
closeBtn.onclick = function() { //cliquer sur la croix
  modalbg.style.display = "none"; //au clic, le formulaire disparait grâce au display:none
}

//données du formulaire
function validateFirst(firstName) {
  if (firstName.value == "" || firstName.value.length < 2) { //indique que le nom doit comporter au minimum deux caractères 
      formDataFirst.setAttribute(//si cela ne correspond pas, un message d'erreur sera transmi via data-error
          "data-error", //renvoi vers le HTML
          "Veuillez entrer 2 caractères minimum" //message qui apparaîtra en cas d'erreur
      );
      formDataFirst.setAttribute("data-error-visible", "true");//si le champ rempli n'est pas correct
      return false;//la fonction empêchera l'envoi du formulaire car elle sera bloquée par le DOM.
  } 
  else {
      formDataFirst.removeAttribute("data-error");//si tout est correct, aucun message d'erreur ne s'affichera
      formDataFirst.removeAttribute("data-error-visible");//l'attribut data error n'affichera rien
      return true;//la fonction est validée 
  }
}
function validateLast(lastName) {
  if (lastName.value == "" || lastName.value.length < 2) {//indique que le nom doit comporter au minimum deux caractères 
      formDataLast.setAttribute(//si cela ne correspond pas, un message d'erreur sera transmi via data-error
          "data-error", //renvoi vers le HTML
          "Veuillez entrer 2 caractères minimum" //message qui apparaîtra en cas d'erreur
      );
      formDataLast.setAttribute("data-error-visible", "true");//si le champ rempli n'est pas correct
      return false;//la fonction empêchera l'envoi du formulaire car elle sera bloquée par le DOM.
  } 
  else {
      formDataFirst.removeAttribute("data-error");//si tout est correct, aucun message d'erreur ne s'affichera
      formDataFirst.removeAttribute("data-error-visible");//l'attribut data error n'affichera rien
      return true;//la fonction est validée 
  }
}
