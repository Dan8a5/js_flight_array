document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Function to fetch JSON data
        const getJSON = async () => {
            const response = await fetch('./data/flight_logs.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        };

        // Fetch the JSON data
        const flightData = await getJSON();
        console.log('Original data:', flightData);

        // Level 1: Sort and return the data based on the airline
        const sortedByAirline = [...flightData].sort((a, b) => 
            a.airline.localeCompare(b.airline)
        );
        console.log('Sorted by airline:', sortedByAirline);

        // Level 1: Sort and return the data based on the arrival airport
        const sortedByArrivalAirport = [...flightData].sort((a, b) => 
            a.arrival_airport.localeCompare(b.arrival_airport)
        );
        console.log('Sorted by arrival airport:', sortedByArrivalAirport);

        // Level 2: Filter out everything but the flights made by Delta
        const deltaFlights = flightData.filter(flight => flight.airline === 'Delta');
        console.log('Delta flights:', deltaFlights);

        // Additional logging to show the first few items of each result
        console.log('First 5 flights sorted by airline:', sortedByAirline.slice(0, 5));
        console.log('First 5 flights sorted by arrival airport:', sortedByArrivalAirport.slice(0, 5));
        console.log('First 5 Delta flights:', deltaFlights.slice(0, 5));

    } catch (error) {
        console.error('An error occurred:', error);
    }
});