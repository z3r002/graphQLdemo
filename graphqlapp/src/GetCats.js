import {gql, useQuery} from '@apollo/client';
import React from "react";


const GET_Cats = gql`
    query {
        cats{
            id
            name
        }
    }
`


export default function GetCats() {
    const {loading, error, data} = useQuery(GET_Cats);
    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    return (
        <div className='getCats'>
            <ul>
                {data.cats.map(({id, name}) => (
                    <li key={id} value={name}>
                        Котик {name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

