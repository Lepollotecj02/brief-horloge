// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

function demarrerLaMontre() {
  //Extraire l'heure actuel à l'aide de l'objet Date()
  let now = new Date();
  //Stocker l'heure , minute , seconde  dans des varaiables
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const heure = now.getHours();
  //  Calculer le degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde

  //Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré
  let times = second + minute * 60 + heure * 3600;

  const secDeg = times * 6;
  AIGUILLESEC.style.transform = `rotate(${secDeg}deg)`;

  const minDeg = (times * 6) / 60;
  AIGUILLEMIN.style.transform = `rotate(${minDeg}deg)`;

  const heurDeg = (times * 30) / 3600;
  AIGUILLEHR.style.transform = `rotate(${heurDeg}deg)`;
}

var interval = setInterval(demarrerLaMontre, 1000);