import { checkAuth, getWorkshops, logout } from '../fetch-utils.js';
import { renderWorkshop } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

async function loadData() {
    const main = document.querySelector('main');
    const data = await getWorkshops();
    for (let workshop of data) {
        const workshopElem = renderWorkshop(workshop);
        main.append(workshopElem);
    }
}

loadData();
