#! node

// Scprit qui affiche la différence minimum absolu d'une liste

//Gestion d'erreur
if(process.argv.length < 4) {
  console.log('Veuillez indiquer au minimum deux nombres en argument')
  return
}
process.argv.splice(0, 2)
for (i in process.argv) {
  if (process.argv[i] % 1 != 0) {
    console.log("Veuillez indiquer seulement des nombres en argument")
    return
  }
}

//Parsing
let arg = process.argv
let sol

//Résolution du problème
for (let a = 0; a < arg.length; a++) {
  for (let b = 0; b < arg.length; b++) {
    //Différence entre toutes les valeurs du tableau
    let dif = arg[a] - arg[b]
    //Mise du résultat au positif
    let positif
    if (dif < 0) {
      positif = 0 - dif
    } else if (dif > 0) {
      positif = dif
    }
    //Si diférence plus petite affecter dans solution
    if (positif < sol || sol == undefined) {
      sol = positif
    }
  }
}

//Affichage
console.log(sol)
