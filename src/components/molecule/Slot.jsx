import React, {useState, useMemo} from 'react';
import {MinusCircleOutlined, PlusCircleOutlined} from '@ant-design/icons';
import {Card, Col,  Row} from 'antd';
import {useMoneyRaised} from "../../context/MoneyRaisedProvider.jsx";
import './Slot.css';
import { progressBarColorReversed} from "../../assets/globals.jsx";

import ProgressbarCard from "../atom/ProgressbarCard.jsx"; // Import the CSS file

const Slot = ({sharePrice, numberOfShares}) =>
{
    const [sharesRaised, setSharesRaised] = useState(0);
    const {increaseMoneyRaised, decreaseMoneyRaised} = useMoneyRaised();

    const totalMoneyWanted = useMemo(() => sharePrice * numberOfShares, [sharePrice, numberOfShares]);
    const moneyRaised = useMemo(() => sharesRaised * sharePrice, [sharesRaised, sharePrice]);
    const percentageRaised = useMemo(() => Math.floor(moneyRaised / totalMoneyWanted * 100), [moneyRaised, totalMoneyWanted]);

    const onIncreaseShares = () =>
    {
        setSharesRaised(prevShares =>
        {
            const newSharesRaised = prevShares + 1;
            increaseMoneyRaised(sharePrice);
            return newSharesRaised;
        });
    };

    const onDecreaseShares = () =>
    {
        setSharesRaised(prevShares =>
        {
            if (prevShares <= 0) return prevShares;
            const newSharesRaised = prevShares - 1;
            decreaseMoneyRaised(sharePrice);
            return newSharesRaised;
        });
    };

    return (<Card className={"slot"}
                  title={sharePrice + " £"}
                  bordered={false}
                  actions={[<MinusCircleOutlined onClick={onDecreaseShares}/>,
                      <PlusCircleOutlined onClick={onIncreaseShares}/>]}
    >
        <Row>
            <ProgressbarCard title={"Money Raised £"} percent={percentageRaised}
                             format={() => moneyRaisedPercentage(moneyRaised, totalMoneyWanted)}/>
        </Row>
        <Row>
            <Col span={24}>
                <ProgressbarCard title={"Share Raised "} percent={percentageRaised}
                                 strokeColor={progressBarColorReversed}
                                 format={() => ShareRaisedPercentage(sharesRaised, numberOfShares)}/>

            </Col>
        </Row>
    </Card>);


};

const moneyRaisedPercentage = (moneyRaised, totalMoneyWanted) =>
{
    if (moneyRaised >= totalMoneyWanted)
    {
        return moneyRaised
    }
    return moneyRaised + "/" + totalMoneyWanted;
}

const ShareRaisedPercentage = (sharesRaised, numberOfShares) =>
{
    if (sharesRaised >= numberOfShares)
    {
        return sharesRaised
    }
    return sharesRaised + "/" + numberOfShares;
}

export default Slot;
