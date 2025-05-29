import HouseRow from "./HouseRow";

const houses = [
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
        </>
    )
};

export default HouseList;