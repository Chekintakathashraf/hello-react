import { CDN_URL } from "../utils/constant";

const RestuarantCard = (props) => {
    // console.log(props)
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        costForTwo,
        avgRatingString

    } = resData?.info;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRatingString}</h4>
        </div>
    )
}


export default RestuarantCard;