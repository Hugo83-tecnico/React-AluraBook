import axios from 'axios';

const baseUrlLivros = 'http://localhost:8000/livros';


async function getLivros(){
   const response = await axios.get(baseUrlLivros);
   return response.data;
}


export {
    getLivros
   
}