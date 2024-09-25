import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestaurants,setListOfRestaurant] = useState([]);
    const [filteredRestaurants,setFilteredRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");

    const handleSearch = () => {
        const filteredRestaurants = listOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurant(filteredRestaurants);
    };

    useEffect(() => {
        fetchData();
    },[]);
    
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
    
        console.log(json)
        // setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }; 

    return listOfRestaurants.length === 0  ? (
         <Shimmer/>  
        ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}></input>
                    <button onClick={handleSearch}>Search</button>
                </div>
                <button className="filter-btn" 
                onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.3
                        );
                        setListOfRestaurant(filteredList);
                    }
                }>Top rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants.map((restaurant) => (
                        < Link 
                            key = {restaurant.info.id} 
                            to = {"/restaurants/"+restaurant.info.id} 
                        >
                            <RestaurantCard  resData={restaurant} />
                        </Link>
                    ))
                }
            </div>

        </div>
    )
}

export default Body;