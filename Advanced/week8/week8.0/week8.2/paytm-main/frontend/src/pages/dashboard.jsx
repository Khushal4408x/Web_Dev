import Appbar from "../components/appbar";
import { useEffect,useState } from "react";
import SearchBar from "../components/searchbar";

export default function Dashboard(){
    return (
        <div>
            <Appbar  ></Appbar>
            <div>
                <SearchBar></SearchBar>
            </div>
        </div>
    )
}