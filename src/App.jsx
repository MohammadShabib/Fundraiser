import './App.css'
import MainDashboard from "./components/organism/MainDashboard.jsx";
import Slots from "./components/organism/Slots.jsx";
import {MoneyRaisedProvider} from "./context/MoneyRaisedProvider.jsx";
import {Col, Row} from "antd";
import {Content} from "antd/es/layout/layout.js";

function App()
{
    return (
        <MoneyRaisedProvider>
            <Content>
                <Row style={{marginBottom: '5px'}}>
                    <Col span={24}>
                        <MainDashboard/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Slots/>
                    </Col>
                </Row>
            </Content>
        </MoneyRaisedProvider>
    );
}

export default App
