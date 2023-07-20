import * as React from "react";
import * as ReactDOM from "react-dom";

import {ListMovies, NewMovieForm} from "../application";

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
    })
});