import React from 'react';
// import { getAllHotels } from '../services/api';
import { useLocation } from "react-router-dom";
import AppHeader from '../components/common/AppHeader';
import Page from '../components/common/Page';
import mockData from '../tests/mockData.json'
import { isAvailable } from '../utils/filters';
import HotelCard from '../components/common/HotelCard';
import RangeSlider from 'reactrangeslider';
import Button from '../components/common/Button';
import { sortHotelsByName, sortHotelsByPrice } from '../utils/sorting';

const HotelsList = ({ }) => {
    const location = useLocation();
    const [data, setData] = React.useState([] as any)

    const [error, setError] = React.useState('')

    const [state, setState] = React.useState({
        searchByName: '',
        sortASC: true,
        priceFilter: 100,
    })

    const { state: { startDate, endDate, totalNights } } = location;

    React.useEffect(() => {
        // JSON from api has an extra trailing comma.
        // and will not be parsed as JS array of objects
        // hence will use the correct mock data from local file instead of revalidating the JSON 
        // (unless thats a trick in the assignment :D)
        // anyway the service is implemented and we can fetch it in teh effect below.

        // const fetchData = async () => {
        //     getAllHotels().then(res => {
        //         setData(res);
        //     }).catch(e => {
        //         setError(e);
        //     })
        // }
        // fetchData();

        setData(mockData?.filter(hotel => isAvailable(hotel.available_on, startDate)))
    }, [])

    const handleSearchHotels = (e) => {
        e.persist();
        setState({ ...state, searchByName: e.target.value })
        if (e.target.value) {
            setData(data.filter(item => item.name.includes(e.target.value)))
        }
        else {
            setData(mockData);
        }
    }

    const handlePriceChange = (event) => {
        setState({ ...state, priceFilter: event.target.value })
        setData(mockData.filter(item => item.price > event.target.value ))
    }
    const sortByName = () => {
        setState({ ...state, sortASC: !state.sortASC })
        setData(sortHotelsByName(data, state.sortASC))
    }

    const sortByPrice = () => {
        setState({ ...state, sortASC: !state.sortASC })
        setData(sortHotelsByPrice(data, state.sortASC))
    }

    const availableData = data.filter(hotel => isAvailable(hotel.available_on, startDate))

    return (
        <>
            <AppHeader title="Hotel Listing" />
            <Page>
                <input style={{ height: 20, margin: 16, borderRadius: 8 }} placeholder="hotel name" type="text" value={state.searchByName} onChange={handleSearchHotels} />
                <p style={{ marginTop: 10 }}><b>Total Nights:</b> {totalNights}</p>
           
                <div style={{ columnCount: data?.length > 5 ? 2 : 1, marginTop: 10, breakInside: 'avoid-column' }}>
                    <Button text="Sort By Name" onClick={sortByName} />
                    <Button text="Sort By Price" onClick={sortByPrice} />
                   <div>
                    <b>price filter :</b> <input
                    id="typeinp"
                    type="range"
                    min="100" max="1000"
                    value={state.priceFilter}
                    onChange={handlePriceChange}
                    step="1" />
                    {state.priceFilter} AED Per night
                    </div>
                    {availableData?.length ? (
                        availableData.map(hotel => {
                            return <HotelCard totalNights={totalNights} key={hotel?.name} hotel={hotel} />
                        })
                    ) : ('No Hotels available in the selected search criteria')}
                </div>
            </Page>
        </>
    )

}

export default HotelsList;
