const form = document.querySelector('form');


const storageKey = 'user_data';


function storeData(nama, email, password) {

const data = JSON.parse(localStorage.getItem(storageKey)) || [];


data.push({nama, email, password});

localStorage.setItem(storageKey, JSON.stringify(data));
}

form.addEventListener('submit', (event) => {
event.preventDefault();

const nama = form.nama.value;
const email = form.email.value;
const password = form.password.value;

storeData(nama, email, password);

alert('Registrasi berhasil silahkan login');

form.reset();
});
