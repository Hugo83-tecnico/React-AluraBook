import axios from 'axios';


async function getFavoritos(){
    const response = await axios.get('http://localhost:8000/favoritos');
    return response.data;
}

async function postFavoritos(id){
    await axios.post(`http://localhost:8000/favoritos/${id}`);


    /* await fetch(`http://localhost:8000/favoritos/${id}`, {
        method:"POST",
        headers: {
          "Content-type": "application/json"
    }});  */

}

async function deleteFavoritos(id){
    //await axios.delete(`http://localhost:8000/favoritos/${id}`)
}


export {
    getFavoritos,
    postFavoritos,
    deleteFavoritos
}