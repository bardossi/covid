export const getCovidData = async (country) => {
    const response = await fetch(`https://europe-central2-webuni-js-covid-exam.cloudfunctions.net/cases?country=${country}`);
    if (response.status !== 200) {
        throw 'Error loading covid data for country';
    }
    const jsonResponse = await response.json();
    return jsonResponse;
}

export const getVaccineData = async (country) => {
    const response = await fetch(`https://europe-central2-webuni-js-covid-exam.cloudfunctions.net/vaccines?country=${country}`);
    if (response.status !== 200) {
        throw 'Error loading vaccine data for country';
    }
    const jsonResponse = await response.json();
    return jsonResponse;
}
