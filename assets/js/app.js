
const region= document.getElementById('region')

function onFood(eve){
    let value = eve.target.value;
    let allDivs=[...document.querySelectorAll('.food')];

    allDivs.forEach(d=>{
        d.classList.add('d-none');

    });
    let selectedDiv =[...document.querySelectorAll('.'+value)];
    selectedDiv.forEach(d=>{
        d.classList.remove('d-none')
    });
}

region.addEventListener('change',onFood)