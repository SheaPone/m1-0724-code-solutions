interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Pokemon {
  name: string;
  height: number;
  weight: number;
}

async function fetchUser(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const user = (await response.json()) as User;
    console.log(user);
  } catch (error) {
    console.log('Error:', error);
  }
}

fetchUser();

async function fetchPokemon(): Promise<void> {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const pokemon = (await response.json()) as Pokemon;
    console.log(pokemon);
  } catch (error) {
    console.log('Error:', error);
  }
}

fetchPokemon();
