img_src = "url('https://source.unsplash.com/random/1920x1080')"
const x = document.body.style.backgroundImage = img_src;
const y = document.getElementById("clock")

function time(){
	let currentDate = new Date();
	let time = currentDate.getHours() + ":" + currentDate.getMinutes();
	y.textContent = time
}

setInterval(time, 1000);

search_form = document.getElementById('search');
search_query = document.getElementById('search_query');

const NOOGLE = "https://noogle-search.herokuapp.com/search?q=";

function search_noogle(event) {
    event.preventDefault();
    const url_to_open = NOOGLE + search_query.value;
    const window_with_search = window.open(url_to_open, '_blank');
    window_with_search.focus();
}

search_form.addEventListener('submit', search_noogle);