const Name = document.getElementById("name");
const ability = document.getElementById("ability");
const weight = document.getElementById("weight");
const PokeImage = document.getElementById("pokeImage");

async function pokemon(){
    const pokemonName = document.getElementById("nameInput").value; 
    let fetchData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    let data = await fetchData.json()
    Name.innerText = data["species"]["name"];
    ability.innerText = data["abilities"]["0"]["ability"]["name"];
    weight.innerText = data["weight"];
    PokeImage.src = data["sprites"]["front_default"];
    const audio = new Audio(`${data["cries"]["latest"]}`)
    audio.play()
}

document.getElementById("icon").addEventListener("click",pokemon);



