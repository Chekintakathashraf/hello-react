import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";
test("should load contact us page", () => {
    render(<Contact/>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test("should load button in contact us page", () => {
    render(<Contact/>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
})

test("should load input in contact us page", () => {
    render(<Contact/>);
    const name = screen.getByPlaceholderText("name");
    expect(name).toBeInTheDocument();
})

test("should load 2 input boxes in contact us page", () => {
    render(<Contact/>);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
})