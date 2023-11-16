import React, { useState, useMemo } from 'react';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import {Card, Col, Progress, Row} from 'antd';
import { useMoneyRaised } from "../context/MoneyRaisedProvider.jsx";
import './Slot.css'; // Import the CSS file

const twoColors = { '0%': '#108ee9', '100%': '#87d068' };
const twoColorsReversed = {  '0%': '#87d068', '100%': '#108ee9', };

const Slot = ({ sharePrice, numberOfShares }) => {
    const [sharesRaised, setSharesRaised] = useState(0);
    const { increaseMoneyRaised, decreaseMoneyRaised } = useMoneyRaised();

    const totalMoneyWanted = useMemo(() => sharePrice * numberOfShares, [sharePrice, numberOfShares]);
    const moneyRaised = useMemo(() => sharesRaised * sharePrice, [sharesRaised, sharePrice]);
    const percentageRaised = useMemo(() => Math.floor(moneyRaised / totalMoneyWanted * 100), [moneyRaised, totalMoneyWanted]);

    const onIncreaseShares = () => {
        setSharesRaised(prevShares => {
            const newSharesRaised = prevShares + 1;
            increaseMoneyRaised(sharePrice);
            return newSharesRaised;
        });
    };

    const onDecreaseShares = () => {
        setSharesRaised(prevShares => {
            if (prevShares <= 0) return prevShares;
            const newSharesRaised = prevShares - 1;
            decreaseMoneyRaised(sharePrice);
            return newSharesRaised;
        });
    };

    return (
        <Card
            title={sharePrice + " £"}
            bordered={false}
            actions={[
                <MinusCircleOutlined onClick={onDecreaseShares}/>,
                <PlusCircleOutlined onClick={onIncreaseShares}/>
            ]}
        >
            <Row>
                <Col span={24}>Money Raised £:</Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Progress
                        type="circle"
                        percent={percentageRaised}
                        strokeColor={twoColors}
                        format={() => moneyRaisedPercentage(moneyRaised, totalMoneyWanted)}
                    />
                </Col>
            </Row>
            <Row>
                <Col span={24}>Shares Raised:</Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Progress
                        type="circle"
                        percent={percentageRaised}
                        strokeColor={twoColorsReversed}
                        format={() => ShareRaisedPercentage(sharesRaised, numberOfShares)}
                    />
                </Col>
            </Row>
        </Card>
    );


};

const moneyRaisedPercentage = (moneyRaised, totalMoneyWanted) =>
{
    if(moneyRaised >= totalMoneyWanted)
    {
        return moneyRaised
    }
    return moneyRaised + "/" + totalMoneyWanted;
}

const ShareRaisedPercentage = (sharesRaised, numberOfShares) =>
{
    if(sharesRaised >= numberOfShares)
    {
        return sharesRaised
    }
    return sharesRaised + "/" + numberOfShares;
}

export default Slot;
