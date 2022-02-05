import React from "react";
import "./styles.css";

export interface ILoaderProps {}

export default class Loader extends React.Component {
    public render() {
        return (
            <div className="backdrop">
                <div className="loader"></div>
            </div>
        );
    }
}
