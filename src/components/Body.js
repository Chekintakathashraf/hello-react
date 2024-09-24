import RestuarantCard from "./RestuarantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
    const [listOfRestuarants,setListOfRestuarant] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={() => {
                        const filteredList = listOfRestuarants.filter(
                            (res) => res.info.avgRating > 4.3
                        );
                        setListOfRestuarant(filteredList);
                    }
                }>Top rated restuarant</button>
            </div>
            <div className="res-container">
                {
                    listOfRestuarants.map((restuarant) => (
                        <RestuarantCard key = {restuarant.info.id} resData={restuarant} />
                    ))
                }
            </div>

        </div>
    )
}

export default Body;