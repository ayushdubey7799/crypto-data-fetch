

const Crypto = (props) => {
    console.log(props.item.image);
    return (<tr>
        <td><img src={props.item.image} alt=""/></td>
        <td>{props.item.name}</td>
        <td>{props.item.symbol.toUpperCase()}</td>
        <td>${props.item.current_price}</td>
        <td>${props.item.total_volume}</td>
        
    </tr>)
};

export default Crypto;