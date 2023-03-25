const form = document.querySelector('form');


const storageKey = 'user_data';


function login(email, password) {

const data = JSON.parse(localStorage.getItem(storageKey));


const user = data.find((user) => user.email === email && user.password === password);


if (user) {
    alert('Login berhasil!');
    window.location.href = "home.html";

} else {
    alert('Username atau password salah!');
}
}


form.addEventListener('submit', (event) => {
event.preventDefault();


const email = form.email.value;
const password = form.password.value;


login(email, password);

form.reset();
});
