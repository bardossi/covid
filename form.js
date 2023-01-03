import { addCard, addChart } from "./cards.js";
import { getCovidData, getVaccineData } from "./coviddata.js";

export const initForm = () => {
    const form = document.getElementById('form');
    const cardContainer = document.getElementById('card-container');
    const errorMessage = document.getElementById('error-message');
    const submitButton = document.getElementById('submit-btn');
    const chartCountry = [];
    const chartData = [];
    let counter = 0;
    
    form.addEventListener('submit', async e => {
        const country = document.getElementById('country-input').value;
        e.preventDefault();
        cardContainer.insertAdjacentHTML('afterbegin', ` <div class="loader" id="loading-indicator"</div>`)
        submitButton.disabled = true;
        try {
            const covidData = await getCovidData(country);
            console.log(covidData);
            const vaccineData = await getVaccineData(country);
            console.log(vaccineData);
            chartCountry.push(vaccineData.country);
            chartData.push(vaccineData.people_vaccinated);
            addCard(counter, country, covidData, vaccineData);
            addChart(chartCountry, chartData);
            counter++;
            form.reset();
        }
        catch {
            errorMessage.style.display = 'block';
        }
        submitButton.disabled = false;
        cardContainer.removeChild(document.getElementById('loading-indicator'));
        }
    )

}