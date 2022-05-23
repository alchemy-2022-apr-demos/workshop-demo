// On Load
// 1. Load up the list of workshops
// 2. Loop through each one, create an option value
// 3. Append the option value to the page

import { createParticipant, getWorkshops } from '../fetch-utils.js';
import { renderOption } from '../render-utils.js';

const workshopSelect = document.getElementById('workshops');
const participantForm = document.getElementById('new-participant');

async function onLoad() {
    const workshops = await getWorkshops();
    for (let workshop of workshops) {
        const workshopOption = renderOption(workshop);
        workshopSelect.append(workshopOption);
    }
}
onLoad();

participantForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = new FormData(participantForm);
    console.log(form.get('workshop_id'));
    await createParticipant({
        name: form.get('name'),
        contact_info: form.get('contact'),
        workshop_id: form.get('workshop_id'),
    });
    window.location.href = '/workshops';
});
