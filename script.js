//VARIÁVEIS
let nome = prompt("Qual é o seu nome?")
let notaDoprimeiroBimestre = parseFloat(prompt("Qual foi a sua nota no primeiro bimestre?"))
let notaDosegundoBimestre = parseFloat(prompt("Qual foi a sua nota no segundo bimestre?"))
let notaDoterceiroBimestre = parseFloat(prompt("Qual foi a sua nota no terceiro bimestre?"))
let notaDoquartoBimestre = parseFloat(prompt("Qual foi a sua nota no quarto bimestre?"))
let notaFinal = ((notaDoprimeiroBimestre + notaDosegundoBimestre + notaDoterceiroBimestre + notaDoquartoBimestre) / 4)
let notaFixada = notaFinal.toFixed (2)
// MOSTRAR A MÉDIA
alert (nome+", sua média é " + notaFixada);