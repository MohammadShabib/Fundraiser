import {ConfigProvider, Progress} from "antd";
import {progressBarColor, progressBarTrailColor} from "../../assets/globals.jsx";

function Progressbar(props)
{

    return (
        <ConfigProvider
            theme={{
                components: {
                    Progress: {
                        circleTextFontSize: "0.8em"
                    },
                },
            }}
        >
            <Progress className={props.className} type={props.type}
                      percent={props.percent}
                      strokeColor={props.strokeColor}
                      trailColor={props.trailColor}
                      format={props.format}

            />
        </ConfigProvider>
    );
}

Progressbar.defaultProps = {
    type: 'line',
    percent: 50,
    strokeColor: progressBarColor,
    trailColor: progressBarTrailColor,
    format: null
};
export default Progressbar