const init = () => {

    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const id = event.target.id.value;

        fetch(` http://localhost:3000/movies/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                const movieTitle = document.querySelector('#title');
                movieTitle.textContent = response.title;
                const movieSummary = document.querySelector('#summary');
                movieSummary.textContent = response.summary;
            })
        
    })
  
}

document.addEventListener('DOMContentLoaded', init);