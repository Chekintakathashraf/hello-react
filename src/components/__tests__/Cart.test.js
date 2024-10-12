import { render,screen,fireEvent } from "@testing-library/react/types";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom"
import MOCK_CART_DATA from '../mockData/mockCartData.json'
import RestaurantMenu from '../RestaurantMenu';
import Cart from "../Cart";

global.fetch = jest.fn( () => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_CART_DATA);

        }
    })
})

it("should load Restaurant menu component",async () => {
    await act(async () => render (
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>

            </Provider>
        </BrowserRouter>
        )
    );
    // initally 20 card after filter 4 card

    const accordionHeader = screen.getByTestId("Biriyani (5)");
    fireEvent.click(accordionHeader);
    expect(screen.getByTestId("foodItems").length).toBe(5);
    
    const addBtns = screen.getByRole("button", { name : "Add +"});
    //before clicking 0
    expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument(); 

    //after clicking it should 1
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument(); 
    //after again clicking it should 2
    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument(); 
    //  food item count( total there ar 5 items) + cart item count (2 items in the cart)
    expect(screen.getByTestId("foodItems").length).toBe(7);

    const clearBtns = screen.getByRole("button", { name : "Clear Cart"});
    fireEvent.click(clearBtns);

    //after clearing the count will be back to food item count
    expect(screen.getByTestId("foodItems").length).toBe(5);

    // there will be a text of cart is empty
    expect(screen.getByText("Cart is empty. Add items to the cart!")).toBeInTheDocument(); 

    
})