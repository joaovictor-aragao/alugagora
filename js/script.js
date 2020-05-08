// aumentar e diminuir a quantidade de hóspedes
var $plus = document.querySelector('.plus');
var $minus = document.querySelector('.minus');
var $cont = document.querySelector('.guests');

$plus.addEventListener('click', function(){
    $cont.value = parseInt($cont.value) + 1;
}, false);

$minus.addEventListener('click', function(){
    $cont.value = parseInt($cont.value) - 1;
}, false);

// ler os dados da API
window.addEventListener('load', ()=>{
    fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72').then((r) => {
        r.json().then((places) => {
            let output = '';
            for (let i in places) {
                // console.log(places[i].name);
                output += `<div class="card border-0 mx-2 my-2" style="width: 18rem;">
                        <img class="card-img-top" src="${places[i].photo}" alt="Card image cap" id="img-place">
                        <div class="card-body pl-0">
                            <h5 class="card-title">${places[i].name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${places[i].property_type}</h6>
                            <p class="card-text">A partir de R$ <span>${places[i].price}</span></p>
                        </div>
                    </div>`;
            }

            document.getElementById('results').innerHTML = output;
        });
    });
});

// criando função buscar
// function search() {
//     var word = document.getElementById('going').value;
//     console.log(word);
// }

// document.getElementById("search").onclick = function () {
    
//     // location.href = '';
//     window.location("pesquisa.html");
// };
