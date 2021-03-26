import React from 'react';
import AppHeader from '../components/common/AppHeader';
import Button from '../components/common/Button';
import DateSelector from '../components/common/DateRangePicker';
import Page from '../components/common/Page';

import { useHistory } from "react-router-dom";
import { getNumberOfTotalNights } from '../utils/dates';

const SearchHotels: React.FunctionComponent = () => {
    const history = useHistory()
    const [state, setState] = React.useState({
        startDate: new Date(),
        endDate: new Date()
    })
    const setDate = (key, value) => {
        setState({
            ...state,
            [key]: value
        })
    }

    const handleSearch = () => {
        history.push({
            pathname: '/results',
            state: { startDate: state.startDate.toISOString().split('T')[0], endDate: state.endDate.toISOString().split('T')[0], totalNights: getNumberOfTotalNights(state.endDate, state.startDate) }
        })
    }

    return (
        <>
            <AppHeader title="Search Hotels" />
            <Page>
                <DateSelector setDate={setDate} startDate={state?.startDate} endDate={state?.endDate} />
                <Button buttonStyle={{ marginTop: 50 }} text="Search" onClick={handleSearch} />
            </Page>
        </>
    )
}

export default SearchHotels
