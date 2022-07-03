const firstPokeName = document.getElementById('firstPoke');
const secondPokeName = document.getElementById('secondPoke');
const thirdPokeName = document.getElementById('thirdPoke');
const fourthPokeName = document.getElementById('fourthPoke');
const fiftyPokeName = document.getElementById('fiftyPoke');
const sixtyPokeName = document.getElementById('sixtyPoke');
 const firstPokeCard = document.getElementsByClassName('firstPokeCard');
    const secondPokeCard = document.getElementById('secondPokeCard');
    const thirdPokeCard = document.getElementById('thirdPokeCard');
    const fourthPokeCard = document.getElementById('fourthPokeCard');
    const fiftyPokeCard = document.getElementById('fiftyPokeCard');
    const sixtyPokeCard = document.getElementById('sixtyPokeCard');



function firstPoke() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * (500 - 1 + 1) + 1)}`, {

  })
  .then(res => res.json())
  .then((poke) => {
    console.log(poke);


    
    if (poke.types[0].type.name ==='water') {

        const firstPokeCard = document.getElementById('firstPokeCard');

        firstPokeCard.classList.add('typeWater')
        
        

    }


    if (poke.types[0].type.name ==='grass') {

        const firstPokeCard = document.getElementById('firstPokeCard');

        firstPokeCard.classList.add('typeGrass')
        
        

    }

    if (poke.types[0].type.name ==='fire') {

        const firstPokeCard = document.getElementById('firstPokeCard');

        firstPokeCard.classList.add('typeFire')
        
        

    }

    if (poke.types[0].type.name ==='ice') {

        const firstPokeCard = document.getElementById('firstPokeCard');

        firstPokeCard.classList.add('typeIce')
        
        

    }

    if (poke.types[0].type.name ==='poison') {

        const firstPokeCard = document.getElementById('firstPokeCard');

        firstPokeCard.classList.add('typePoison')
        
        

    }

    if (poke.types[0].type.name ==='ground') {

        const firstPokeCard = document.getElementById('firstPokeCard');

        firstPokeCard.classList.add('typeGround')
        
        

    }

    if (poke.types[0].type.name ==='psychic') {

        const firstPokeCard = document.getElementById('firstPokeCard');

        firstPokeCard.classList.add('typePsychic')
        
        

    }
    
    if (poke.types[0].type.name ==='steel') {

        const firstPokeCard = document.getElementById('firstPokeCard');

        firstPokeCard.classList.add('typeSteel')
        
        

    }

    if (poke.types[0].type.name ==='bug') {

        const firstPokeCard = document.getElementById('firstPokeCard');

        firstPokeCard.classList.add('typeBug')
        
        

    }

    if (poke.types[0].type.name ==='normal') {

        const firstPokeCard = document.getElementById('firstPokeCard');

        firstPokeCard.classList.add('typeNormal')
        
        

    }

    if (poke.types[0].type.name ==='dark') {

        const firstPokeCard = document.getElementById('firstPokeCard');

        firstPokeCard.classList.add('typeDark')
        
        

    }

    if (poke.types[0].type.name ==='electric') {

        const firstPokeCard = document.getElementById('firstPokeCard');

        firstPokeCard.classList.add('typeElectric')
        
        

    }

    if (poke.types[0].type.name ==='rock') {

        const firstPokeCard = document.getElementById('firstPokeCard');

        firstPokeCard.classList.add('typeRock')
        
        

    }
    
    if (poke.types[0].type.name ==='ghost') {

        const firstPokeCard = document.getElementById('firstPokeCard');

        firstPokeCard.classList.add('typeGhost')
        
        

    }

    if (poke.types[0].type.name ==='dragon') {

        const firstPokeCard = document.getElementById('firstPokeCard');

        firstPokeCard.classList.add('typeDragon')
        
        

    }

    if (poke.types[0].type.name ==='fighting') {

        const firstPokeCard = document.getElementById('firstPokeCard');

        firstPokeCard.classList.add('typeFighting')
        
        

    }

    if (poke.types[0].type.name ==='fairy') {

        const firstPokeCard = document.getElementById('firstPokeCard');

        firstPokeCard.classList.add('typeFairy')
        
        

    }







    //INICIO DA DEFINIÇÃO DA IMAGEM

    let firstImg = document.getElementById('firstPokeImg');
    firstImg.setAttribute('src', `${poke.sprites.front_default}`)

    //FINAL DA DEFINIÇÃO DA IMAGEM




    //INICIO DA DEFINIÇÃO DO NOME

    firstPokeName.textContent = `${poke.name}`


    //FINAL DA DEFINIÇÃO DO NOME




    //INICIO DA DEFINIÇÃO DE HABILIDADES

    let firstAbilitie = document.getElementById('firstPokeHability1');
    let secondAbilitie = document.getElementById('firstPokeHability2');

    firstAbilitie.textContent = `${poke.abilities[0].ability.name}`
    secondAbilitie.textContent = `${poke.abilities[1].ability.name}`

    //FINAL DA DEFINIÇÃO DE HABILIDADES



    let firstType = document.getElementById('firstPokeType1');
    let secondType = document.getElementById('firstPokeType2');
   

    firstType.textContent = `${poke.types[0].type.name}`
    secondType.textContent = `,${poke.types[1].type.name}`





    let firstHP = document.getElementById('firstPokeHp').innerText = `${poke.stats[0].base_stat}`;
    let firstAttack = document.getElementById('firstPokeAttack').innerText = `${poke.stats[1].base_stat}`;
    let firstDefense = document.getElementById('firstPokeDefense').innerText = `${poke.stats[2].base_stat}`;
    let firstSPAttack = document.getElementById('firstPokeSPAttack').innerText = `${poke.stats[3].base_stat}`;
    let firstSPDefense = document.getElementById('firstPokeSPDefense').innerText = `${poke.stats[4].base_stat}`;
    let firstSpeed = document.getElementById('firstPokeSpeed').innerText = `${poke.stats[5].base_stat}`;

    


   





  })
}

firstPoke();





function secondPoke() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * (500 - 1 + 1) + 1)}`, {

  })
  .then(res => res.json())
  .then((poke) => {
    console.log(poke);


    
    if (poke.types[0].type.name ==='water') {

        const secondPokeCard = document.getElementById('secondPokeCard');

        secondPokeCard.classList.add('typeWater')
        
        

    }


    if (poke.types[0].type.name ==='grass') {

        const secondPokeCard = document.getElementById('secondPokeCard');

        secondPokeCard.classList.add('typeGrass')
        
        

    }

    if (poke.types[0].type.name ==='fire') {

        const secondPokeCard = document.getElementById('secondPokeCard');

        secondPokeCard.classList.add('typeFire')
        
        

    }

    if (poke.types[0].type.name ==='ice') {

        const secondPokeCard = document.getElementById('secondPokeCard');

        secondPokeCard.classList.add('typeIce')
        
        

    }

    if (poke.types[0].type.name ==='poison') {

        const secondPokeCard = document.getElementById('secondPokeCard');

        secondPokeCard.classList.add('typePoison')
        
        

    }

    if (poke.types[0].type.name ==='ground') {

        const secondPokeCard = document.getElementById('secondPokeCard');

        secondPokeCard.classList.add('typeGround')
        
        

    }

    if (poke.types[0].type.name ==='psychic') {

        const secondPokeCard = document.getElementById('secondPokeCard');

        secondPokeCard.classList.add('typePsychic')
        
        

    }
    
    if (poke.types[0].type.name ==='steel') {

        const secondPokeCard = document.getElementById('secondPokeCard');

        secondPokeCard.classList.add('typeSteel')
        
        

    }

    if (poke.types[0].type.name ==='bug') {

        const secondPokeCard = document.getElementById('secondPokeCard');

        secondPokeCard.classList.add('typeBug')
        
        

    }

    if (poke.types[0].type.name ==='normal') {

        const secondPokeCard = document.getElementById('secondPokeCard');

        secondPokeCard.classList.add('typeNormal')
        
        

    }

    if (poke.types[0].type.name ==='dark') {

        const secondPokeCard = document.getElementById('secondPokeCard');

        secondPokeCard.classList.add('typeDark')
        
        

    }

    if (poke.types[0].type.name ==='electric') {

        const secondPokeCard = document.getElementById('secondPokeCard');

        secondPokeCard.classList.add('typeElectric')
        
        

    }

    if (poke.types[0].type.name ==='rock') {

        const secondPokeCard = document.getElementById('secondPokeCard');

        secondPokeCard.classList.add('typeRock')
        
        

    }
    
    if (poke.types[0].type.name ==='ghost') {

        const secondPokeCard = document.getElementById('secondPokeCard');

        secondPokeCard.classList.add('typeGhost')
        
        

    }

    if (poke.types[0].type.name ==='dragon') {

        const secondPokeCard = document.getElementById('secondPokeCard');

        secondPokeCard.classList.add('typeDragon')
        
        

    }

    if (poke.types[0].type.name ==='fighting') {

        const secondPokeCard = document.getElementById('secondPokeCard');

        secondPokeCard.classList.add('typeFighting')
        
        

    }

    if (poke.types[0].type.name ==='fairy') {

        const firstPokeCard = document.getElementById('firstPokeCard');

        firstPokeCard.classList.add('typeFairy')
        
        

    }








    //INICIO DA DEFINIÇÃO DA IMAGEM

    let secondImg = document.getElementById('secondPokeImg');
    secondImg.setAttribute('src', `${poke.sprites.front_default}`)

    //FINAL DA DEFINIÇÃO DA IMAGEM




    //INICIO DA DEFINIÇÃO DO NOME

    secondPokeName.textContent = `${poke.name}`


    //FINAL DA DEFINIÇÃO DO NOME




    //INICIO DA DEFINIÇÃO DE HABILIDADES

    let firstAbilitie = document.getElementById('secondPokeHability1');
    let secondAbilitie = document.getElementById('secondPokeHability2');

    firstAbilitie.textContent = `${poke.abilities[0].ability.name}`
    secondAbilitie.textContent = `${poke.abilities[1].ability.name}`

    //FINAL DA DEFINIÇÃO DE HABILIDADES



    let firstType = document.getElementById('secondPokeType1');
    let secondType = document.getElementById('secondPokeType2');
   

    firstType.textContent = `${poke.types[0].type.name}`
    secondType.textContent = `,${poke.types[1].type.name}`






    let firstHP = document.getElementById('secondPokeHp').innerText = `${poke.stats[0].base_stat}`;
    let firstAttack = document.getElementById('secondPokeAttack').innerText = `${poke.stats[1].base_stat}`;
    let firstDefense = document.getElementById('secondPokeDefense').innerText = `${poke.stats[2].base_stat}`;
    let firstSPAttack = document.getElementById('secondPokeSPAttack').innerText = `${poke.stats[3].base_stat}`;
    let firstSPDefense = document.getElementById('secondPokeSPDefense').innerText = `${poke.stats[4].base_stat}`;
    let firstSpeed = document.getElementById('secondPokeSpeed').innerText = `${poke.stats[5].base_stat}`;




  })
}

secondPoke();






    



function thirdPoke() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * (500 - 1 + 1) + 1)}`, {

  })
  .then(res => res.json())
  .then((poke) => {
    console.log(poke);


    
    if (poke.types[0].type.name ==='water') {

        const thirdPokeCard = document.getElementById('thirdPokeCard');

        thirdPokeCard.classList.add('typeWater')
        
        

    }


    if (poke.types[0].type.name ==='grass') {

        const thirdPokeCard = document.getElementById('thirdPokeCard');

        thirdPokeCard.classList.add('typeGrass')
        
        

    }

    if (poke.types[0].type.name ==='fire') {

        const thirdPokeCard = document.getElementById('thirdPokeCard');

        thirdPokeCard.classList.add('typeFire')
        
        

    }

    if (poke.types[0].type.name ==='ice') {

        const thirdPokeCard = document.getElementById('thirdPokeCard');

        thirdPokeCard.classList.add('typeIce')
        
        

    }

    if (poke.types[0].type.name ==='poison') {

        const thirdPokeCard = document.getElementById('thirdPokeCard');

        thirdPokeCard.classList.add('typePoison')
        
        

    }

    if (poke.types[0].type.name ==='ground') {

        const thirdPokeCard = document.getElementById('thirdPokeCard');

        thirdPokeCard.classList.add('typeGround')
        
        

    }

    if (poke.types[0].type.name ==='psychic') {

        const thirdPokeCard = document.getElementById('thirdPokeCard');

        thirdPokeCard.classList.add('typePsychic')
        
        

    }
    
    if (poke.types[0].type.name ==='steel') {

        const thirdPokeCard = document.getElementById('thirdPokeCard');

        thirdPokeCard.classList.add('typeSteel')
        
        

    }

    if (poke.types[0].type.name ==='bug') {

        const thirdPokeCard = document.getElementById('thirdPokeCard');

        thirdPokeCard.classList.add('typeBug')
        
        

    }

    if (poke.types[0].type.name ==='normal') {

        const thirdPokeCard = document.getElementById('thirdPokeCard');

        thirdPokeCard.classList.add('typeNormal')
        
        

    }

    if (poke.types[0].type.name ==='dark') {

        const thirdPokeCard = document.getElementById('thirdPokeCard');

        thirdPokeCard.classList.add('typeDark')
        
        

    }

    if (poke.types[0].type.name ==='electric') {

        const thirdPokeCard = document.getElementById('thirdPokeCard');

        thirdPokeCard.classList.add('typeElectric')
        
        

    }

    if (poke.types[0].type.name ==='rock') {

        const thirdPokeCard = document.getElementById('thirdPokeCard');

        thirdPokeCard.classList.add('typeRock')
        
        

    }
    
    if (poke.types[0].type.name ==='ghost') {

        const thirdPokeCard = document.getElementById('thirdPokeCard');

        thirdPokeCard.classList.add('typeGhost')
        
        

    }

    if (poke.types[0].type.name ==='dragon') {

        const thirdPokeCard = document.getElementById('thirdPokeCard');

        thirdPokeCard.classList.add('typeDragon')
        
        

    }

    if (poke.types[0].type.name ==='fighting') {

        const thirdPokeCard = document.getElementById('thirdPokeCard');

        thirdPokeCard.classList.add('typeFighting')
        
        

    }

    if (poke.types[0].type.name ==='fairy') {

        const firstPokeCard = document.getElementById('firstPokeCard');

        firstPokeCard.classList.add('typeFairy')
        
        

    }








    //INICIO DA DEFINIÇÃO DA IMAGEM

    let thirdImg = document.getElementById('thirdPokeImg');
    thirdImg.setAttribute('src', `${poke.sprites.front_default}`)

    //FINAL DA DEFINIÇÃO DA IMAGEM




    //INICIO DA DEFINIÇÃO DO NOME

    thirdPokeName.textContent = `${poke.name}`







    //INICIO DA DEFINIÇÃO DE HABILIDADES

    let firstAbilitie = document.getElementById('thirdPokeHability1');
    let secondAbilitie = document.getElementById('thirdPokeHability2');

    firstAbilitie.textContent = `${poke.abilities[0].ability.name}`
    secondAbilitie.textContent = `${poke.abilities[1].ability.name}`





    // DEFINIÇÃO DO TIPO 
    let firstType = document.getElementById('thirdPokeType1');
    let secondType = document.getElementById('thirdPokeType2');
   


        firstType.textContent = `${poke.types[0].type.name}`
        secondType.textContent = `,${poke.types[1].type.name}`

   
    

        let firstHP = document.getElementById('thirdPokeHp').innerText = `${poke.stats[0].base_stat}`;
        let firstAttack = document.getElementById('thirdPokeAttack').innerText = `${poke.stats[1].base_stat}`;
        let firstDefense = document.getElementById('thirdPokeDefense').innerText = `${poke.stats[2].base_stat}`;
        let firstSPAttack = document.getElementById('thirdPokeSPAttack').innerText = `${poke.stats[3].base_stat}`;
        let firstSPDefense = document.getElementById('thirdPokeSPDefense').innerText = `${poke.stats[4].base_stat}`;
        let firstSpeed = document.getElementById('thirdPokeSpeed').innerText = `${poke.stats[5].base_stat}`;





  })
}

thirdPoke();



const btnRefresh = document.getElementById('refresh');

btnRefresh.addEventListener('click', () => {
    window.location.reload()
})
