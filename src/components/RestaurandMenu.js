import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
    // const [resInfo,setResInfo] = useState(null);
    const { resId } = useParams();

    // useEffect( () => {
    //     fetchMenu();
    // },[]);

    // const fetchMenu = async () => {
    //     const data = await fetch(
    //         MENU_API +resId
    //     );

    //     const json = await data.json();
    //     console.log(json);
    //     setResInfo(json.data);
    // };



    const resInfo = useRestaurantMenu(resId);

    if (resInfo == null ) return  <Shimmer/> ;

    const { name, avgRating, cuisines, costForTwoMessage, cloudinaryImageId } = resInfo?.cards[2]?.card?.card?.info ;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ;

    console.log(itemCards);

    
    return  (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{costForTwoMessage}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating}</h3>
            <ul>
                { itemCards.map( 
                    item => 
                        <li> {item?.card?.info?.name} </li> 
                ) 
                }
            </ul>
        </div>
    );
};

export default RestaurantMenu;