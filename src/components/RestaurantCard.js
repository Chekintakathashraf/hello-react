import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    // console.log(props)
    const {resData} = props;
    const {loggedInUser} = useContext(UserContext)
    const {
        cloudinaryImageId,
        name,
        cuisines,
        costForTwo,
        avgRatingString

    } = resData?.info;

    

    return (
        <div className="m-2 p-2 w-[200px] bg-gray-100 rounded-lg hover:bg-green-200 ">
            <img className="rounded-lg" alt="res-logo" src={CDN_URL+cloudinaryImageId}></img>
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRatingString}</h4>
            <h4>User : {loggedInUser}</h4>
        </div>
    )
}
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-red-500 text-white m-1 p-1 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;