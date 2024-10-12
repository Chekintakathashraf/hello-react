import { render,screen,fireEvent } from "@testing-library/react/types";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom"
import MOCK_DATA from '../mockData/resCardMock.json'
import RestaurantCard from '../RestaurantCard';

it("should render RestaurantCard component with props data", () => {
    render(
        <RestaurantCard resData={MOCK_DATA}/>
    );

    const name = screen.getByText("ABCD");
    expect(name).toBeInTheDocument();
})

