fetchData()
async function fetchData() {    
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

        if (!response.ok){
            throw new Error("could not fetch resources");
        }
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}
