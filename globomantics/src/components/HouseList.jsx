import { useState } from "react";
import HouseRow from "./HouseRow";

const houseArray = [
 {
    id: 1,
    address: '123 Elm St',
    country: 'USA',
    price: 900000
 },
 {
    id: 2,
    address: '1234 Elm St',
    country: 'USA',
    price: 800000
 },
];

const HouseList = () =>{
    //Call hook at top level of the component
    const [houses,setHouses] = useState(houseArray);

    const addHouse = () =>{
        const newHouse = {
            id: houses.length + 1,
            address: `New House ${houses.length + 1}`,
            country: 'USA',
            price: Math.floor(Math.random() * 1000000) + 500000
        };
        setHouses([
            ...houses,
            newHouse
        ]);

    };

    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontCloor text-center">
                    HOuses currently on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        houses.map((house) => (
                            <HouseRow key={house.id} house={house}/>
                        ))
                    }
                </tbody>
            </table>
            <div>
                <button className="btn btn-primary" onClick={addHouse}>
                    Add House
                </button>
                <button className="btn btn-danger" onClick={() => {setHouses([])}}>
                    Clear Houses
                </button>
            </div>
        </>
    )
};

export default HouseList;