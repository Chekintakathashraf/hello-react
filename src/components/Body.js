import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants,setListOfRestaurant] = useState([]);
    const [filteredRestaurants,setFilteredRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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
    
        // console.log(json)
        // setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }; 

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false){
        return (
            <h1>
                Looks like u r in offline.. connect to internet
            </h1>
        )
    }

    return listOfRestaurants.length === 0  ? (
         <Shimmer/>  
        ) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}></input>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"  onClick={handleSearch}>Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center "  >

                <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
                onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.3
                        );
                        setListOfRestaurant(filteredList);
                    }
                }>Top rated Restaurant</button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurants.map((restaurant) => (
                        < Link 
                            key = {restaurant.info.id} 
                            to = {"/restaurants/"+restaurant.info.id} 
                        >
                            { console.log(restaurant.info.isOpen)}
                            { restaurant.info.isOpen ? (<RestaurantCardPromoted resData={restaurant} />) : 
                            (<RestaurantCard  resData={restaurant} />) 
                        }
                        </Link>
                    ))
                }
            </div>

        </div>
    )
}

export default Body;