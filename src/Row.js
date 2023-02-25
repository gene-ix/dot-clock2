import Cell from './Cell.js';

function Row(props) {
    const message = props.message;
    const char = Array.from(props.message);
    for (let i = 0; i < 12; i++) {
        char.push('off');
    }

    const rowStyle = {
        display: "flex",
        margin: "5px",
    };

    return (
        <div className="_row" style={rowStyle}>
            <Cell number={char[0]}></Cell>
            <Cell number={char[1]}></Cell>
            <Cell number={char[2]}></Cell>
            <Cell number={char[3]}></Cell>
            <Cell number={char[4]}></Cell>
            <Cell number={char[5]}></Cell>
            <Cell number={char[6]}></Cell>
            <Cell number={char[7]}></Cell>
            <Cell number={char[8]}></Cell>
            <Cell number={char[9]}></Cell>
            <Cell number={char[10]}></Cell>
            <Cell number={char[11]}></Cell>
        </div>
    );
}

export default Row;