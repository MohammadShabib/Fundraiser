import "react-sweet-progress/lib/style.css";
import {useMoneyRaised} from "../../context/MoneyRaisedProvider.jsx";
import Progressbar from "../atom/Progressbar.jsx";
import {Col, Row} from "antd";


function MainDashboard()
{
    const {totalMoneyRaised, totalMoney} = useMoneyRaised();
    const percentage = Math.floor(totalMoneyRaised / totalMoney * 100);
    return (
        <>
            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
                <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center", marginRight: "10px" }}>
                    <h2>Total Raised £ : {totalRaisedDisplay(totalMoneyRaised, totalMoney)}</h2>
                </Col>
                {/*<Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center", marginLeft: "10px" }}>*/}
                {/*    <Progressbar  type="circle" percent={percentage}/>*/}
                {/*</Col>*/}
            </Row>


            <Row>
                <Col span={24}>
                    <Progressbar percent={percentage}/>
                </Col>
            </Row>
        </>
    );

}

const totalRaisedDisplay = (totalMoneyRaised, totalMoney) =>
{
    if (totalMoneyRaised >= totalMoney)
        return totalMoneyRaised
    return `${totalMoneyRaised} / ${totalMoney}`;
}
export default MainDashboard