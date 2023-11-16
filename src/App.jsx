import './App.css'
import TotalRaised from "./components/TotalRaised.jsx";
import Slots from "./components/Slots.jsx";
import {MoneyRaisedProvider} from "./context/MoneyRaisedProvider.jsx";
import {Col, Layout, Row} from "antd";
import {Content} from "antd/es/layout/layout.js";

function App() {
    return (
        <MoneyRaisedProvider >
            <Content>
                <Row >
                    <Col span={24}>
                        <TotalRaised />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Slots />
                    </Col>
                </Row>
            </Content>
        </MoneyRaisedProvider>
    );
}
export default App
