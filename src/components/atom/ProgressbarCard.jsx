import {Col, Row} from 'antd';
import Progressbar from "../atom/Progressbar.jsx";
import {Content} from "antd/es/layout/layout.js";


const ProgressbarCard = (props) =>
{
    return (<Content>

        <Row>
            <Col span={24}>
                <h4>
                    {props.title}
                </h4>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Progressbar
                    type="dashboard"
                    percent={props.percent}
                    format={props.format}
                    strokeColor={props.strokeColor}
                />
            </Col>
        </Row>
    </Content>);


};
export default ProgressbarCard;
