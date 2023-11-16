import "react-sweet-progress/lib/style.css";
import { Progress } from 'antd';
import {useMoneyRaised} from "../context/MoneyRaisedProvider.jsx";



const twoColors = { '0%': '#108ee9', '100%': '#87d068' };
function TotalRaised() {
    const { totalMoneyRaised, totalMoney } = useMoneyRaised();
   const percentage = Math.floor(totalMoneyRaised/totalMoney * 100);
    return (
        <>
            Total Raised: {totalMoneyRaised} £ / {totalMoney} £

            <div style={{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center' }}>
                <Progress type="circle" percent={percentage} strokeColor={twoColors} />
                <Progress percent={percentage} strokeColor={twoColors} />
            </div>
        </>
    );

}

export default TotalRaised