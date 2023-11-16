import React from 'react';
import Slot from "../molecule/Slot.jsx";
import {Col, Row} from "antd";
import {useMoneyRaised} from "../../context/MoneyRaisedProvider.jsx";

const slotData = [
    [1000, 5],
    [500, 6],
    [250, 4],
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
        <Row className={"slot-container"} gutter={[16, 16]}>
            {slotData.map(([sharePrice, numberOfShares], index) => (
                <Col
                    key={index}
                    xs={24}    // Full width on extra small screens (1 component per row)
                    sm={12}    // Half width on small screens (2 components per row)
                    md={8}     // One third width on medium screens (3 components per row)
                    lg={6}
                >
                    <Slot
                        sharePrice={sharePrice}
                        numberOfShares={numberOfShares}
                    />
                </Col>
            ))}
        </Row>
    );
}

export default Slots;
