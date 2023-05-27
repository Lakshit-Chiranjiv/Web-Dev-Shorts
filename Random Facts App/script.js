const facth3 = document.querySelector("#fact");
const btnGen = document.querySelector("#btn-gen");
const error = document.querySelector("#error");

const key = [apiKey]

const url = 'https://api.api-ninjas.com/v1/facts'

const getFact = async () => {
    error.classList.add('hidden');
    facth3.innerHTML = 'Loading...'
    try{
        const res = await fetch(url, {
            "method": "GET",
            "headers": {
                'X-Api-Key': key
            }
        })
        const data = await res.json()
        facth3.innerHTML = data[0].fact
    }
    catch(err){
        error.innerHTML = 'Something went wrong!'
        error.classList.remove('hidden');
    }
}

window.onload = () => getFact();

btnGen.addEventListener('click', getFact);