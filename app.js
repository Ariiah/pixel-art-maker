document.addEventListener('DOMContentLoaded', function() {

////// loops through pixel to make grid of desired size //////

  var canvas = document.getElementById('canvas'); // shorthand to call the canvas id in DOM
  for (let i = 0; i < 1681; i++) { // loops through the new div
    let pixel = document.createElement('div'); // creates new div for pixels
    pixel.classList.add('pixels'); // adds pixel class the the list of classes
    canvas.appendChild(pixel); // actually attaches the pixel div to the canvas, then loops
  }                            // through the continually add pixels

////// changes color of pixel to color listed //////

  let menuColors = document.getElementById("menu")
  function colorSwitch(event) {
    if (event.target.className.match(/blue/)){
      event.target.classList.remove('blue')
      event.target.classList.add('white')
      console.log('erase')
    } else {
      event.target.classList.remove('white')
      event.target.classList.add('blue')
      console.log('blue')
    }
  }
  canvas.addEventListener('click', colorSwitch)

  ///// test function /////
let currentColor;
menuColors.addEventListener('click', function(event){
  currentColor = event.target.classList[0]
  console.log(currentColor)
})

//////  //////
  // let menuColors = document.getElementsByClassName('colors')
  // function colorChoose(event) {
  //   if (event.target.className.match(/colors/)){
  //     event.target.idName.
  //     console.log('color change?')
  //   }
  //   return event.target
  // }
  // menuColors.addEventListener('click', colorChoose)


  // when color is clicked, read event.target
  // set current color to class to the reader can find it
  // call from event to grid so it shows up












////// for looping through colors //////

  // var menu = document.getElementById('menu')
  // for (var i = 0; i < 2; i++) {
  //   let color = document.createElement('div');
  //   color.classList.add('hues');
  //   menu.appendChild(color);
  //
  // }

////// creating new div element for palette //////

  // let menu = document.getElementById('menu')
  // let colorPicker = document.createElement('div')
  // colorPicker.classList.add('palette')
  // menu.appendChild(colorPicker)
  //
  //   }
  // }

//// toggle flashlight example //////


//
// document.getElementById('blue').addEventListener('click')
//
// document.addEventListener('click', function() {
//
//
// })


});
