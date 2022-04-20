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
const locations = document.querySelectorAll('#allCities .checkbox-input');//selecteur de villes à cocher + case à cocher
const checkbox1 = document.getElementById('checkbox1');//validation conditions d'utilisation
const input = document.getElementsByClassName('text-control');//validation optionelle newsletter
const confirmationBloc = document.getElementsByClassName('confirmation-bloc');// bloc contenant le message de confirmation
const confirmationMsg = document.getElementsByClassName('confirm-message');// message de confirmation
const closeBtnBottom = document.getElementById('close-btn');// bouton de fermeture de formulaire

//erreurs en cas de non-remplissage du formulaire
const formDataFirstName = document.querySelector("#first").parentNode;//renvoi vers le parent de l'id du prénom
const formDataLastName = document.querySelector("#last").parentNode;// renvoi vers le parent de l'id du nom
const formDataEmail = document.querySelector("#email").parentNode; //renvoi vers le parent de l'email 
const formDataBirthdate = document.querySelector("#birthdate").parentNode;// renvoi vers le parent de la date de naissance 
const formDataAmount = document.querySelector("#amount").parentNode;//renvoi vers le parent de la quantité (nombre de tournois)
const formDataLocation = document.querySelector("#location1").parentNode;//renvoi vers le parent des villes à sélectionner 
const formDataGenConditions = document.querySelector("#checkbox1").parentNode; //renvoi vers le parent de la case obligatoire à cocher 

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
  console.log('Enter Validate First Name'); //test de la fonction
  if (firstName.value == "" || firstName.value == null ) { //si le champ n'est pas rempli 
      formDataFirstName.setAttribute(//un message d'erreur sera transmi via data-error
          "data-error", //renvoi vers le HTML
          "Champ incomplet." //champ personnalisé uniquement visible en cas de case vide
      );
      formDataFirstName.setAttribute("data-error-visible", "true");//si le champ rempli n'est pas correct
      return false;//la fonction empêchera l'envoi du formulaire car elle sera bloquée par le DOM.
    
  } else if (firstName.value.length < 2) {// OU ALORS - indique que le nom doit comporter au minimum deux caractères 
    console.log('Value length < 2');//test de la fonction
        formDataFirstName.setAttribute(//si cela ne correspond pas, un message d'erreur sera transmi via data-error
            "data-error", //renvoi vers le HTML 
            "Veuillez entrer 2 caractères minimum" //message qui apparaîtra si l'utilisateur n'indique d'une lettre 
        );
      formDataFirstName.setAttribute("data-error-visible", "true");//si le champ rempli n'est pas correct
      return false;//la fonction empêchera l'envoi du formulaire car elle sera bloquée par le DOM.
  }
  else {
      formDataFirstName.removeAttribute("data-error");//si tout est correct, aucun message d'erreur ne s'affichera
      formDataFirstName.removeAttribute("data-error-visible");//l'attribut data error n'affichera rien
      return true;//la fonction est validée 
  }
}

function validateLastName(lastName) {
  if (lastName.value == "") {
      formDataLastName.setAttribute(
          "data-error",// renvoi vers le HTML
          "Champ incomplet." //champ personnalisé uniquement visible en cas de case vide
      );
      formDataLastName.setAttribute("data-error-visible", "true");//si le champ rempli n'est pas correct
      return false;//la fonction empêchera l'envoi du formulaire car elle sera bloquée par le DOM.
  }
  else if (lastName.value.length < 2) { //indique que le nom doit comporter au minimum deux caractères 
        formDataLastName.setAttribute(//si cela ne correspond pas, un message d'erreur sera transmi via data-error
            "data-error", // renvoi vers le HTML
            "Veuillez entrer 2 caractères minimum" //message indiquant que deux caractères sont nécessaires 
        );
        formDataLastName.setAttribute("data-error-visible", "true"); //si le champ rempli n'est pas correct
        return false;//la fonction empêchera l'envoi du formulaire car elle sera bloquée par le DOM.
  } 
  else {
      formDataLastName.removeAttribute("data-error");//si tout est correct, aucun message d'erreur ne s'affichera
      formDataLastName.removeAttribute("data-error-visible");//l'attribut data error n'affichera rien
      return true;//la fonction est validée 
  }
}
function validateEmail(email) {
    if (email.value == "") { //indique que si le champ est vide 
        formDataEmail.setAttribute( //un message d'erreur sera transmi via data-error
            "data-error", //renvoi vers le HTML
            "Champ incomplet." // message personnalisé si le champ est vide
        );
        formDataEmail.setAttribute("data-error-visible", "true");//si le champ rempli n'est pas correct
        return false;//la fonction empêchera l'envoi du formulaire car elle sera bloquée par le DOM.
    }  
    else if (!/^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)+$/.test(email.value)) { //explication de la regex plus bas
        formDataEmail.setAttribute(//si l'adresse email ne semble pas correcte 
            "data-error",//renvoi vers le HTML
            "Veuillez entrer une adresse email valide."// message d'erreur incitant l'utilisateur à saisir une adresse email valide
        );
        formDataEmail.setAttribute("data-error-visible", "true");//si le champ rempli n'est pas correct
        return false;//la fonction empêchera l'envoi du formulaire car elle sera bloquée par le DOM.
    } 
    else {
        formDataEmail.removeAttribute("data-error");//si tout est correct, aucun message d'erreur ne s'affichera
        formDataEmail.removeAttribute("data-error-visible");//l'attribut data error n'affichera rien
        return true;//la fonction est validée
    }
}
/* La regex est relative à l'email. 
    Tout ce qui se situe entre les "/" est dans la regex. 
    - ^ indique le début de la regex
    (Premier groupe
        [Set de caractères
            - \w indique l'utilisation de n'importe quel mot (alphanumérique et underscore)
            - \d indique l'utilisation de caractères numériques allant de 0 à 9
            - . indique qu'un point peut être utilisé
            - _ indique qu'un un underscore peut être utilisé 
            - \- indique qu'un "-" peut être utilisé 
            - # indique que mot-dièse peut être utilisé 
        ]
    )
    + indique que l'on peut rajouter un ou plusieurs token
    @ indique l'ajout de l'arobase 
    (Deuxième groupe
        [Set de caractères
            - \w indique l'utilisation de n'importe quel mot (alphanumérique et underscore)
            - \d indique l'utilisation de caractères numériques allant de 0 à 9
            - . indique qu'un point peut être utilisé
            - _ indique qu'un un underscore peut être utilisé 
            - \- indique qu'un "-" peut être utilisé 
            - # indique que mot-dièse peut être utilisé 
        ]
        + indique que l'on peut rajouter un ou plusieurs token
        [set de caractères 
            - . indique que des points peuvent être utilisés 
        ]
        [Set de caractères
            - \w indique l'utilisation de n'importe quel mot (alphanumérique et underscore)
            - \d indique l'utilisation de caractères numériques allant de 0 à 9
            - . indique qu'un point peut être utilisé
            - _ indique qu'un un underscore peut être utilisé 
            - \- indique qu'un "-" peut être utilisé 
            - # indique que mot-dièse peut être utilisé 
        ]
        + indique que l'on peut rajouter un ou plusieurs token
    )
    + indique que l'on peut rajouter un ou plusieurs token
    $ indique la fin de la regex 
*/

function validateBirthdate(birthdate) {
    const todayDate = new Date(); //initialisation de la variable au format date
    const birthDateEntry = new Date(birthdate.value);// initialisation de la date de naissance. Elle sera ensuite vérifiée par rapport à l'age minimum requis à l'inscription. 

    if (birthdate.value == "") {//si le champ n'est pas rempli 
        formDataBirthdate.setAttribute(//un message d'erreur sera transmi via data-error
            "data-error", //renvoi vers le HTML
            "Champ incomplet." //champ personnalisé uniquement visible en cas de case vide
        );
        formDataBirthdate.setAttribute("data-error-visible", "true");//si le champ rempli n'est pas correct
        return false;//la fonction empêchera l'envoi du formulaire car elle sera bloquée par le DOM.
    }
    else {//sinon
        formDataBirthdate.removeAttribute("data-error");//si tout est correct, aucun message d'erreur ne s'affichera
        formDataBirthdate.removeAttribute("data-error-visible");//l'attribut data error n'affichera rien
        return true;//la fonction est validée
    }
}
function validateParsedAmount(amount) {
    const parsed = parseInt(amount.value); //parseINT force un type de variable. Le parseInt force une chaine de caractères à devenir des nombres. 
    if (amount.value == "") {//si le champ est vide
        formDataAmount.setAttribute( //erreur
            "data-error", //renvoi vers le HTML
            "Champ incomplet." //champ personnalisé uniquement visible en cas de case vide
        );
        formDataAmount.setAttribute("data-error-visible", "true");//si le champ rempli n'est pas correct
        return false;//la fonction empêchera l'envoi du formulaire car elle sera bloquée par le DOM.
    } 
    else if (amount.value > 99) {//si la valeur indiquée excède 99
        formDataAmount.setAttribute(//erreur
            "data-error",//renvoi vers le HTML
            "Veuillez indiquer une valeur inférieure ou égale à 99."//message d'erreur envoyé 
        );
        formDataAmount.setAttribute("data-error-visible", "true");//si le champ rempli n'est pas correct
        return false;//la fonction empêchera l'envoi du formulaire car elle sera bloquée par le DOM.
    }  
    else {
        formDataAmount.removeAttribute("data-error"); //si tout est correct, aucun message d'erreur ne s'affichera
        formDataAmount.removeAttribute("data-error-visible"); //l'attribut data error n'affichera rien
        return true;//la fonction est validée
    }
}

function validateOptions(locations) {
    let locChecked = 0;//initialement, aucune des villes n'est cochée
    locations.forEach((i) => {
        if (i.checked) {//au clic, l'utilisateur pourra cocher une des locations, seulement une seule.
            locChecked++;
        }
    });
    if (locChecked === 0) { //si l'utilisateur n'a pas coché de ville
        formDataLocation.setAttribute( //un revoi vers data error sera effectué 
            "data-error",
            "Veuillez selectionner une ville." //message incitant à l'utilisateur de sélectionner une ville 
        );
        formDataLocation.setAttribute("data-error-visible", "true");//si le champ selectionné n'est pas correct
        return false;//la fonction empêchera l'envoi du formulaire car elle sera bloquée par le DOM.
    } 
    else {
        formDataLocation.removeAttribute("data-error");//si une case est cochée aucun message d'erreur ne s'affichera
        formDataLocation.removeAttribute("data-error-visible");//l'attribut data error n'affichera rien
        return true;//la fonction est validée 
    }
}

function validateConditions(checkbox1) { 
    if (!checkbox1.checked) {//le fait de cocher la csase de conditions générales est obligatoire 
        formDataGenConditions.setAttribute(//si elle n'est pas cochée
            "data-error", //renvoi vers le HTML
            "Vous devez accepter les conditions d'utilisation."// message incitant l'utilisateur à cocher la case
        );
        formDataGenConditions.setAttribute("data-error-visible", "true");//si le champ selectionné n'est pas correct
        return false;//la fonction empêchera l'envoi du formulaire car elle sera bloquée par le DOM.
    } 
    else {
        formDataGenConditions.removeAttribute("data-error");//si une case est cochée, aucun message d'erreur ne s'affichera
        formDataGenConditions.removeAttribute("data-error-visible");//l'attribut data error n'affichera rien
        return true;//la fonction est validée
    }
}

//validation des champs
function validate() {
    let isFormValid = [];
    console.log('Enter fonction validate');//vérification de la fonction valider 
    isFormValid.push(validateFirstName(firstName)); //si le champ prénom est valide
    isFormValid.push(validateLastName(lastName)); //si le champ nom est valide 
    isFormValid.push(validateEmail(email)); //si le champ email est valide
    isFormValid.push(validateBirthdate(birthdate)); //si la date de naissance est valide
    isFormValid.push(validateParsedAmount(amount)); //si la quantité de tournois est valide
    isFormValid.push(validateOptions(locations)); //si une case pour la selection de villes a été cochée
    isFormValid.push(validateConditions(checkbox1)); //si la case des conditions générales a été cochée
    
    if (!isFormValid.includes(false)) { //si le formulaire a été entièrement validé
        form.style.display = "none"; //le formulaire disparait
        confirmationMsg[0].style.display = "block"; //un message de confirmation apparait après coup
        closeBtnBottom.style.display = "inline-block";//le bouton "fermer" apparait
    } 

    closeBtnBottom.onclick = function() { //cliquer sur le bouton
    modalbg.style.display = "none"; //au clic, le formulaire disparait grâce au display:none
  }
}
