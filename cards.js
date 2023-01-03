import * as echarts from 'echarts';


export const addCard = (counter, country, covidData, vaccineData) => {
    const cardContainer = document.getElementById('card-container');
    // const cardContainer = document.querySelectorAll('.card-container')[counter];
    const population = covidData.population;
    const cases = covidData.confirmed;
    const deaths = covidData.deaths;
    const vaccinated = vaccineData.people_vaccinated;
    
    cardContainer.insertAdjacentHTML('afterbegin', `
    <zizi-card id="card-${counter}" title="${country}">
   
    <div class="card-content">
        <div>Total population: ${population}</div>
        <div>Total cases: ${cases}</div>
        <div>Casualties: ${deaths}</div>
        <div>Vaccinated: ${vaccinated}</div>
        <button id="deleteCard-${counter}">Törlés</button>
    </div>
    </zizi-card>
    `);

    const deleteBtn = document.getElementById(`deleteCard-${counter}`);
   
    deleteBtn.addEventListener('click', e => {
    // e.target.closest('zizi-card').remove();
    document.getElementById(`card-${counter}`).remove();
    document.querySelector('canvas').remove();
})
}

export const addChart = (chartCountry, chartData) => {
    const myChart = echarts.init(document.getElementById('chart-container'));
// Draw the chart
myChart.setOption({
  title: {
    text: 'Vakcina adatok országonként'
  },
  tooltip: {},
  xAxis: {
    data: chartCountry
  },
  yAxis: {},
  series: [
    {
      name: 'Vaccina data',
      type: 'bar',
    data: chartData
    }
  ]
}
)
}