

var total = {
  transport: document.querySelector('#transport').value,
  cofee: document.querySelector('#cofee').value,
  cloth: document.querySelector('#cloth').value,
  food: document.querySelector('#food').value,
  snack: document.querySelector('#snack').value,
}

function sum( obj ) {
  var sum = 0;
  for( var el in obj ) {
    if( obj.hasOwnProperty( el ) ) {
      sum += parseFloat( obj[el] );
    }
  }
  return sum;
}

var button = document.querySelector('#btn');
var mydiv = document.querySelector('.display');
var text = document.createElement('P')
text.innerHTML = 'You spent today: ' + sum(total)
mydiv.appendChild(text)

button.addEventListener('click', function(evt){
    evt.preventDefault(evt)
    mydiv.style.display = "block";
});