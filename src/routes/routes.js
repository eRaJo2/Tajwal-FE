import {
    Switch,
    Route,
  } from "react-router-dom";
import HotelsList from "../pages/HotelsList";
import SearchHotels from "../pages/SearchHotels";

export const Routes = () => {
    return (
    <Switch>
    <Route path="/results">
        <HotelsList />
    </Route>
    <Route path="/">
        <SearchHotels />
    </Route>
    </Switch>
)
}