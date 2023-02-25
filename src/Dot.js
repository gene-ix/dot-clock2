// import { render } from "@testing-library/react";

function Dot(props) {
    const offStyle = {
        width: "10px",
        height: "10px",
        backgroundColor: "#55555577",
        margin: "1px",
        borderRadius: "50%",
    };
    const onStyle = {
        width: "10px",
        height: "10px",
        backgroundColor: "#0ff",
        margin: "1px",
        borderRadius: "50%",
        boxShadow: "0 0 10px #0ff",
    };
    const dotStyle = (props.status == 1) ? onStyle : offStyle;

    return (
        <div className="_dot" style={dotStyle}></div>
    );
}

export default Dot;