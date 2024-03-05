// DOM
// Event
// Is 'button' variable me maine sabhi boxes ko select karke store kar diya hai
const button = document.querySelectorAll('.box');
// Mujhe body chahiye kyunki mujhe puri body ka hi color change karna hai
const body = document.querySelector("body");

// Ab main all boxes, yaani ki .box par jisme 5 boxes hain, uspar for loop lagana hai
button.forEach(function(box) {
    // Ab mujhe isme event lagana hai jisse jab main box par click karu to kuch action ho

    // forEach ek call back function leta hai
    box.addEventListener('click', function(color) {
        if (color.target.id === 'box1') {
          body.style.backgroundColor = 'red'
        }
        if (color.target.id === 'box2') {
            body.style.backgroundColor = 'green'
          }
          if (color.target.id === 'box3') {
            body.style.backgroundColor = 'blue'
          }
          if (color.target.id === 'box4') {
            body.style.backgroundColor = 'yellow'
          }
          if (color.target.id === 'box5') {
            body.style.backgroundColor = 'violet'
          }
    });
});

