// <form>
//     <h2>Search for Restaurant</h2>
//     <label>Location:</label>
//     <input type="text" placeholder="Location" />
//     <label className="cuisine">Cuisine:</label>
//     <input type="text" placeholder="Type of cuisine" />
//     <button>Search</button>
// </form>;

// import React, { useState, useEffect } from "react";

// // fetching data and use effects
// const [restaurants, setRestaurants] = useState([]);
// async function fetchRestaurants() {
//     const baseURL =
//         "https://www.apitutor.org/yelp/simple/v3/businesses/search?";
//     const url = `${baseURL}location=Asheville,%20NC&term=pizza&limit=5`;
//     const response = await fetch(url);
//     const restaurants = await response.json();
//     console.log(restaurants);
// }

// useEffect(() => {
//     fetchRestaurants();
// }, []);

// {
//     restaurants.map((restaurant) => {
//         return (
//             <div className="restaurant">
//                 <img src={restaurant.image_url} />
//                 <p>{restaurant.name}</p>
//             </div>
//         );
//     });
// }
