import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
    const [restaurants, setRestaurants] = useState([]);
    // fetching data and use effects
    async function fetchRestaurants() {
        const baseURL =
            "https://www.apitutor.org/yelp/simple/v3/businesses/search?";
        const url = `${baseURL}location=Asheville,%20NC&term=pizza&limit=5`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setRestaurants(data);
    }

    useEffect(() => {
        fetchRestaurants();
    }, []);

    return (
        <div className="App">
            <header>Header</header>
            <main>
                <section id="section1">Search form goes here...</section>
                <section id="restaurants">Restaurants go here...</section>
            </main>
        </div>
    );
}

export default App;
