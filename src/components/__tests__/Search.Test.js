import { render,screen,fireEvent } from "@testing-library/react/types";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Body from "../Body";
import MOCK_DATA from '../mockData/mockResList.json'
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom"

global.fetch = jest.fn( () => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);

        }
    })
})

it("should render the body component with search",async () => {
    await act(async () => render (
            <BrowserRouter>
                <Body/>

            </BrowserRouter>
        )
    );


    const searchBtn = screen.getByRole("button",{name:"Search"});
    expect(searchBtn).toBeInTheDocument(); 
    
})

it("should search ResList for burger text input ",async () => {
    await act(async () => render (
            <BrowserRouter>
                <Body/>

            </BrowserRouter>
        )
    );
    // initally 20 card after search 4 card

    const cardsBeforeSearch = screen.getByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(20);

    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, {target : {value:"burger"}});
    fireEvent.click(searchBtn);

    //screen should load 4 cards

    const cardsAfterSearch = screen.getByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(4);

    
})

it("should filter top rated restaurant ",async () => {
    await act(async () => render (
            <BrowserRouter>
                <Body/>

            </BrowserRouter>
        )
    );
    // initally 20 card after filter 4 card

    const cardsBeforeFilter = screen.getByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(20);
    
    const topRatedBn = screen.getByRole("button", { name : "Top Rated Restaurants"})
    
    fireEvent.click(topRatedBn);

    //screen should load 13 cards

    const cardsAfterFilter = screen.getByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(13);

    
})
