const HouseRow = ({house}) => {
    return (
        <>
            <tr >
                <td>{house.address}</td>
                <td>{house.country}</td>
                <td>${house.price.toLocaleString()}</td>
            </tr>
        </>
    );
}

export default HouseRow;

