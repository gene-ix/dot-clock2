// import './reset.css';
import React from 'react';
import './App.css';
import Row from './Row.js';

function App() {

    const month = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    const day = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

    // let dateobject, yearvalue, monthvalue, datevalue, dayvalue, hourvalue, minutevalue, secondvalue;

    // dateobject = new Date();
    // yearvalue = dateobject.getFullYear().toString();
    // monthvalue = month[dateobject.getMonth()];
    // datevalue = ordinal(dateobject.getDate().toString());
    // dayvalue = day[dateobject.getDay()];
    // hourvalue = numbertospell(dateobject.getHours());
    // minutevalue = (dateobject.getMinutes() == 0) ? "O'CLOCK" : numbertospell(dateobject.getMinutes());
    // secondvalue = dateobject.getSeconds().toString();



    const [now, setNow] = React.useState(new Date());
    React.useEffect(function () {
        const intervalId = setInterval(function () {
            setNow(new Date());
        }, 1000);
        return function () { clearInterval(intervalId) };
    }, [now]);

    let yearvalue, monthvalue, datevalue, dayvalue, hourvalue, minutevalue, secondvalue;
    yearvalue = now.getFullYear().toString();
    monthvalue = month[now.getMonth()];
    datevalue = ordinal(now.getDate().toString());
    dayvalue = day[now.getDay()];
    hourvalue = numbertospell(now.getHours());
    minutevalue = (now.getMinutes() == 0) ? "O'CLOCK" : numbertospell(now.getMinutes());

    return (
        <div>
            <Row message={monthvalue}></Row>
            <Row message={datevalue}></Row>
            <Row message={yearvalue}></Row>
            <Row message={dayvalue}></Row>
            <Row message=""></Row>
            <Row message={hourvalue}></Row>
            <Row message={minutevalue}></Row>
        </div>
    );

    // return (
    //     <div>
    //         <Row message={monthvalue}></Row>
    //         <Row message={datevalue}></Row>
    //         <Row message={yearvalue}></Row>
    //         <Row message={dayvalue}></Row>
    //         <Row message=""></Row>
    //         <Row message={hourvalue}></Row>
    //         <Row message={minutevalue}></Row>
    //         <Row message={secondvalue}></Row>
    //     </div>
    // );
}

export default App;

function ordinal(number) {
    let end = "TH";

    if (number > 20 || number < 11) {
        if (number % 10 == 1) {
            end = "ST";
        }
        else if (number % 10 == 2) {
            end = "ND";
        }
        else if (number % 10 == 3) {
            end = "RD";
        }
        else {
            end = "TH";
        }
    }
    else {
        end = "TH";
    }

    return number + end;
}

function numbertospell(number) {
    const spell = {
        0: "ZERO",
        1: "ONE",
        2: "TWO",
        3: "THREE",
        4: "FOUR",
        5: "FIVE",
        6: "SIX",
        7: "SEVEN",
        8: "EIGHT",
        9: "NINE",
        10: "TEN",
        11: "ELEVEN",
        12: "TWELVE",
        13: "THIRTEEN",
        14: "FOURTEEN",
        15: "FIFTEEN",
        16: "SIXTEEN",
        17: "SEVENTEEN",
        18: "EIGHTEEN",
        19: "NINETEEN",
        20: "TWENTY",
        30: "THIRTY",
        40: "FOURTY",
        50: "FIFTY",
    }

    if (number > 20 && number % 10 > 0) {
        return spell[Math.floor(number / 10) * 10] + "-" + spell[number % 10];
    }
    else {
        return spell[number];
    }
}