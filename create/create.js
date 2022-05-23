// On Load
// 1. Load up the list of workshops
// 2. Loop through each one, create an option value
// 3. Append the option value to the page

import { getWorkshops } from '../fetch-utils.js';
import { renderOption } from '../render-utils.js';

const workshopSelect = document.getElementById('workshops');

async function onLoad() {
    const workshops = await getWorkshops();
    for (let workshop of workshops) {
        const workshopOption = renderOption(workshop);
        workshopSelect.append(workshopOption);
    }
}
onLoad();
