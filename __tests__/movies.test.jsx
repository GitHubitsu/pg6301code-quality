import * as React from "react";
import * as ReactDOM from "react-dom";

import {ListMovies, NewMovieForm} from "../application";
import {Simulate} from "react-dom/test-utils";

describe("movies application", () => {

    it("shows movie list", () => {
        const element = document.createElement("div");
        ReactDOM.render(<ListMovies/>, element);
        expect(element.querySelector("h1").innerHTML)
            .toEqual("List movies");
        expect(element.innerHTML).toMatchSnapshot();
    });

    it("shows new movie form", () => {
        const element = document.createElement("div");
        ReactDOM.render(<NewMovieForm/>, element);
        expect(element.innerHTML).toMatchSnapshot();
    });

    it("submit new movie", () => {
        const onAddMovie = jest.fn();

        const element = document.createElement("div");
        ReactDOM.render(<NewMovieForm onAddMovie={onAddMovie} />, element);

        Simulate.change(element.querySelector("[data-testid=title]"), {target: {value: "Movie 1"}});
        Simulate.change(element.querySelector("[data-testid=year]"), {target: {value: "2022"}});
        Simulate.submit(element.querySelector("form"));

        expect(onAddMovie).toBeCalledWith({
            title: "Movie 1", year: "2022", plot: ""
        })
    })
})