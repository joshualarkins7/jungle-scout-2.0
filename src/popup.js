import React from "react";
import {render} from "react-dom";
import App from "./components/App/App";



const root = document.getElementById('root');
if (root) {
    render(<App/>, document.getElementById('root'));
}