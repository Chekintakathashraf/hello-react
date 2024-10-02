import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
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

    const [showIndex,setShowIndex] = useState(0)

    const resInfo = useRestaurantMenu(resId);

    if (resInfo == null ) return  <Shimmer/> ;

    const { name, avgRating, cuisines, costForTwoMessage, cloudinaryImageId } = resInfo?.cards[2]?.card?.card?.info ;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ;

    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log(categories)
    
    return  (
        <div className="text-center ">
            <h1 className="font-bold m-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
        
            { categories.map( (category,index) => (
                 <RestaurantCategory 
                    key={category?.card?.card?.title}
                     data = {category?.card?.card}
                      showItems = {index === showIndex ? true : false}
                    //   newSetShowIndex = { () => setShowIndex(index)}
                    // if we convrt showIndex to null it will close, to a value(index) i will open that particular index
                    newSetShowIndex={() => setShowIndex(index === showIndex ? null : index)}

                /> 
        
        ) 
        )}
        </div>
    );
};

export default RestaurantMenu;