const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
const TestComponent = ({children}) =>{
    const formRow = (city,index) => {
        return (
             city
        );

    };

    return(
        <>
        {children}
        {cities.map(formRow)}
        </>
    );
}


export default TestComponent;