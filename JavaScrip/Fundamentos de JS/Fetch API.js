
// Fetch API

const url = 'https://jsonplaceholder.typicode.com/comments'

const consultApi = () => { 

    fetch(url)
        .then(resp => resp.json())
        .then(result => {
            result.forEach(comentarios => {
                console.log(comentarios)
            });
        } )
}

consultApi()


