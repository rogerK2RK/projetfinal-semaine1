// Email

const emailUser = document.getElementById("adresse-mail");

// Verifie l'email passé dans le formulaire
function checkEmail(){
  let emailMessage = document.getElementById("adresse-mail-validation");
  if(/^(([0-9a-z]{2,}))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailUser.value)){
    emailMessage.innerText = "";
  }else{
    emailMessage.innerText = "Veuiller saisir un mail "+'"'+" exemple : nom.prenom@gmail.com "+'" !';
    return false;
  }
}

// quand l'utilisateur écris son email
emailUser.addEventListener("input", function(e){
  checkEmail();
});


// Telephone

const telUser = document.getElementById("telephone");

// Verifie le tel passé dans le formulaire
function checkTel(){
  let telMessage = document.getElementById("telephone-validation");
  if(/^(0|\+33|0033)[1-9]([-. ]?[0-9]{2}){4}$/.test(telUser.value)){
    telMessage.innerText = "";
  }else{
    telMessage.innerText = "Veuiller saisir un numéro valid "+'"'+" exemple : +33 1 23 45 67 89 ou 01 23 45 67 89 "+'" !';
    return false;
  }
}

// quand l'utilisateur écris son numéro de tel
telUser.addEventListener("input", function(e){
    checkTel();
});



//  Sujet
const sujetUser  = document.getElementById("sujet");

// Verifie le sujet passé dans le formulaire
function checkSujet(){
    let sujetMessage = document.getElementById("sujet-validation");
    if(/^([\w\s]{6,})$/.test(sujetUser.value)){
        sujetMessage.innerText = "";
    }else{
        sujetMessage.innerText = "Veuillez entrer 6 caractères ou plus pour le champ du sujet.";
        return false;
    }
}

// quand l'utilisateur écrit son sujet
sujetUser.addEventListener("input", function(e){
    checkSujet();
});

//  Message
const messagetUser  = document.getElementById("message");

// Verifie le sujet passé dans le formulaire
function checkMessage(){
    let messageMessage = document.getElementById("message-validation");
    if(/^([\w\s]{30,})$/.test(messagetUser.value)){
        messageMessage.innerText = "";
    }else{
        messageMessage.innerText = "Veuillez entrer 30 caractères ou plus dans le champ message.";
        return false;
    }
}

// quand l'utilisateur écrit son sujet
messagetUser.addEventListener("input", function(e){
    checkMessage();
});


// DOM Elements
const buttonValide = document.getElementById("submit");

const affichageValider = document.getElementById("valide");
const affichageNonValider = document.getElementById("erreur");


// Quand l'utilisateur submit le formulaire
function validate(){

    //declaration d'un booleen pour le test final
    let isValid = true;
  
    // check du email
    let testEmail = checkEmail();
    if(testEmail == false){
        isValid = false;
    }

    // check du Tel
    let testTel = checkTel();
    if(testTel == false){
        isValid = false;
    }

    // check du Sujet
    let testSujet = checkSujet();
    if(testSujet == false){
        isValid = false;
    }

    // check du Message
    let testMessage = checkMessage();
    if(testMessage == false){
        isValid = false;
    }

    // si mon formulaire est valide ...
    if(isValid){
        affichageValider.style.display = "block";
        affichageNonValider.style.display = "none";
    }else{
        affichageValider.style.display = "none";
        affichageNonValider.style.display = "block";
    }

}

// quand l'utilisateur click sur submit
buttonValide.addEventListener("click", function(e){
    // console.log("hello");
    validate();
});