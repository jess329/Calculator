// Zahlen und Operatoren mit querySelector zusammenfassen 
const numbers = document.querySelectorAll(".button")
const operators = document.querySelectorAll(".operator")

// aus NodeList operators einen Array machen 
let operators_arr = []
for (let i = 0; i < operators.length; i++) {
  operators_arr.push(operators[i].innerText)
}

console.log(operators_arr)
console.log(numbers)
console.log(operators)

// wenn eine Zahl gedrückt wird sie oben anzeigen lassen
numbers.forEach(number => {
  number.onclick = () => {
    console.log(number.innerText)
    let num = number.innerText
    write(num)
  }
})

let numberInput = document.getElementById("numberInput")
// Funktion um Zahl oder Operator oben in die Zeile hinzuzufügen
function write(num) {
  let rechenzeile = numberInput.innerText

  // das letzte eingegebene Element ist ein Operator und es wurde noch ein Operator gedrückt
  if ((operators_arr.includes(num)) && (operators_arr.includes(rechenzeile[rechenzeile.length - 1]))) {
    alert("Du kannst nicht zwei Operatoren hintereinander eingeben.")
    // Das eingebene Element ist ein Operator und davor ist eine Zahl
  } else if (operators_arr.includes(num)) {
    numberInput.innerText += ` ${num} `
    // Das letzte eingebene Element ist ein Operator und es wurde eine Zahl gedrückt
  } else if (operators_arr.includes(rechenzeile[rechenzeile.length - 1])) {
    numberInput.innerText += ` ${num} `
  }
  // Das letzte eingebene Element ist eine Zahl und es wurde eine Zahl gedrückt
  else {
    numberInput.innerText += num
  }
}
const clearInput = document.getElementById("clear")
// Funktion um die Zeile oben zu leeren
function clear() {
  numberInput.innerText = " "
  solution.innerText = "0"
}
clearInput.onclick = () => clear()

// wenn ein Operator gedrückt wird ihn oben anzeigen lassen
operators.forEach(operator => {
  operator.onclick = () => {
    operat = operator.innerText
    console.log(operat)
    write(operat)
  }
})

const istGleich = document.getElementById("equals")
const solution = document.getElementById("solution")
istGleich.onclick = () => calculate()

// rechnet die Operation aus der oberen Zeile zusammen und schreibt das Ergebnis in die Zeile darunter
function calculate() {
  let rechenzeile = numberInput.innerText
  let ergebnis = eval(rechenzeile).toFixed(2)
  solution.innerText = ergebnis
}

// let zeile = "123 + 31 - 100 * 20 / 45"
// let ergebnis = eval(zeile)
// console.log(ergebnis)
// num_arr = zeile.split(" ")
// console.log(num_arr)

