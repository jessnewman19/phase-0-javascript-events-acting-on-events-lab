// Grabbing dodger and saving a reference to it
const dodger = document.getElementById("dodger"); 
dodger.style.backgroundColor = "FF69B4"

//First attempt
// document.addEventListener("keydown", (event) => 
//   if (event.key === "ArrowLeft") { //Does the key property of the event object (keydown) have the value "ArrowLeft"?
//     const leftNumbers = dodger.style.left.replace("px", ""); 
//     const left = parseInt(leftNumbers, 10)

//     dodger.style.left = `${left-1}px` //Everytime left is clicked, decrease the px by 1px.
//   }
// })

//Second attempt
const moveDodgerLeft = () => { 
  const leftNumbers = dodger.style.left.replace("px", ""); 
  const left = parseInt(leftNumbers, 10); 
  if (left > 0 ) { //Move Dodger left until px on the left = 0
    dodger.style.left = `${left-1}px`
  }
}

document.addEventListener("keydown", (e) => { 
  if (e.key === "ArrowLeft") { //If the keydown object key = "ArrowLeft"
    moveDodgerLeft()
  }
})