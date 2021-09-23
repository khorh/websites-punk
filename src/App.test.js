import { render, screen } from '@testing-library/react';
import Header from "./components/Header/Header";
import SearchBox from "./components/SearchBox/SearchBox";
import Filter from "./components/Filter/Filter";
import Sort from "./components/Sort/Sort";

it("should be a header", () => {
    render(<Header />);

    const title = screen.getByRole("heading",{name: /punk beers/i});
    const subtitle = screen.getByRole("heading",{name: /learn about brewdog's craft beers/i});

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
});

it("should be a search", () => {
    render(<SearchBox />);

    const search = screen.getByRole("textbox", {name: /search/i});
    const searchPlaceholder = screen.getByPlaceholderText("ENTER BEER NAME");

    expect(search).toBeInTheDocument();
    expect(searchPlaceholder).toBeInTheDocument();
});

it("should be a filter", () => {
    render(<Filter />);

    const filterByAbv = screen.getByRole("radio", {name: /abv above 6%/i});
    const filterByPh = screen.getByRole("radio", {name: /ph lower than 4/i});

    expect(filterByAbv).toBeInTheDocument();
    expect(filterByPh).toBeInTheDocument();
});

it("should be a sort", () => {
    render(<Sort />);

    const sortByProductName = screen.getByRole("radio", {name: /product name - a-z/i});
    const sortByAbv = screen.getByRole("radio", {name: /abv - low to high/i});
    const sortByPh = screen.getByRole("radio", {name: /ph - low to high/i});

    expect(sortByProductName).toBeInTheDocument();
    expect(sortByAbv).toBeInTheDocument();
    expect(sortByPh).toBeInTheDocument();
})
