import React, { useState } from "react";
import Map from "../Components/Map/Map";
import { sampledata } from "../Data/SampleData";
import FoodList from "../Components/FoodList/FoodList";

const MapDiv = () => {
    const [inputText, setInputText] = useState("");
    const [place, setPlace] = useState("");

    const onChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText == `sample`) {
            setPlace(sampledata);
        } else {
            setPlace("")
        }

        setInputText("");
    };

    const handleReset = (e) => {
        e.preventDefault();
        setPlace("removeAll");
        setInputText("");
    };

    return (
        <>
            <form className="inputForm" onSubmit={handleSubmit} onReset={handleReset}>
                <input
                    placeholder="Search Place..."
                    onChange={onChange}
                    value={inputText}
                />
                <button type="submit">검색</button>
                <button type="reset">초기화</button>
            </form>
            <Map searchPlaces={place} />
            <FoodList />
        </>
    );
};
export default MapDiv;