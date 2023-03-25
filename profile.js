const storageKey = 'user_data';

const data = JSON.parse(localStorage.getItem(storageKey));

const userName = document.getElementById('user-Name');
const userNames = data.map((user) => user.nama);
const userListItems = userNames.map((nama) => `${nama}`);
userName.innerHTML = `${userListItems.join('')}`;


