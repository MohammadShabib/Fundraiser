import React from 'react';
import Slot from "./Slot.jsx";
import {Col, Row} from "antd";
import {useMoneyRaised} from "../context/MoneyRaisedProvider.jsx";

const slotData = [
    [1000, 5],
    [500, 10],
    [250, 5],
    [100, 10],
];

const calculateTotalMoney = (data) =>
{

    return data.reduce((total, [sharePrice, numberOfShares]) =>
    {
        return total + (sharePrice * numberOfShares);
    }, 0);

}
const Slots = () =>
{
    const {setTotalMoney} = useMoneyRaised();
    setTotalMoney(calculateTotalMoney(slotData))

    return (
        <Row gutter={[16, 16]}>
            {slotData.map(([sharePrice, numberOfShares], index) => (
                <Col key={index} span={6}>
                    <Slot
                        sharePrice={sharePrice}
                        numberOfShares={numberOfShares}/>
                </Col>
            ))}
        </Row>
    );

}

export default Slots;
