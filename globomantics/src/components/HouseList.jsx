import { use, useState } from "react";
import HouseRow from "./HouseRow";

const fetchHousesFromApi =  async () => {
    const url = 'https://localhost:4000/houses';
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const result = fetchHousesFromApi();

const HouseList = () => {
    //Call hook at top level of the component
    const houseArray = use(result);
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