document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-randomizer');
    console.log(form)

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault() // This prevents the form from reloading the page

            let numeroMaximo = document.getElementById('numero-maximo').value; //  .value will retrieve the input field's value
            numeroMaximo = parseInt(numeroMaximo);

            let randomNumber = Math.random() * numeroMaximo;

            function hided() {
                let hide = document.getElementById('result')
                if (hide.style.display === 'none' || hide.style.display === '' ){
                    hide.style.display = 'block'
                }  
            }

            let roundNumber = Math.round(randomNumber)
            if (roundNumber == 0) {
                roundNumber += 1
                document.getElementById('result-value').innerText = roundNumber;
                console.log('Sucess! ' + roundNumber)
                hided()
            }
            else {
                document.getElementById('result-value').innerText = roundNumber;
                console.log('Sucess! ' + roundNumber)
                hided()
            }

           
            
        })
    }
    else {
        alert('NaN')
    }
})
   /*  document.getElementById('form-randomizer').addEventListener('submit', function(){

        let numeroMaximo = document.getElementByid('numero-maximo').value;
        
        numeroMaximo = parseInt(numeroMaximo); // Convert the number to an int

        let randomNumber = Math.random() * numeroMaximo
        alert(randomNumber);
    })
}) */