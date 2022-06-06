const weatherForm = document.getElementById('searchForm');
let search = document.getElementById('searchText');
let messageOne = document.getElementById('message-1');
let messageTwo = document.getElementById('message-2');

weatherForm.addEventListener('submit', (e) => {
    let searchText = search.value;
    e.preventDefault();

    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    fetch('/weather?address=' + searchText).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }

            search.value = '';
        })
    })
})