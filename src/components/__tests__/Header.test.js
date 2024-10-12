import { render,screen,fireEvent } from "@testing-library/react/types";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom"



it("Should render Header component with a login btton", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );
    // const loginButton = screen.getByRole("button");
    const loginButton = screen.getByRole("button",{name:"Login"});
    // const loginButton = screen.getByText("Login"); 
    expect(loginButton).toBeInTheDocument();

});


it("Should render Header component with a cart item", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );
    const cartItems = screen.getByText(/Cart/);
   
    expect(loginButton).toBeInTheDocument();



});

it("Should render Header component with a cart item 0", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );
    const cartItems = screen.getByText("Cart - (0 items");
   
    expect(loginButton).toBeInTheDocument();



});

it("Should change login button to logout on click", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button",{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();


});



