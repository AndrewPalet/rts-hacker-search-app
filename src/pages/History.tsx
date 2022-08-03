import React from 'react';
import { Link } from 'react-router-dom';
import './History.css';
import { SEARCH_PAGE } from './Paths';
import { HistoryProps } from '../App';

const History = ({ history, setHistory}:HistoryProps) => {
    return (
        <div className='History'>
            <h1>History</h1>
            {
                history?.map((search, idx) => {
                    return(
                        <div key={idx}>{search}</div>
                    )
                })
            }
            <Link to={SEARCH_PAGE}>Back</Link>
        </div>
    )
}

export default History;