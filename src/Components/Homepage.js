import  react from 'react';
import millify from "millify";
import {Typography,Row, Col, Statistic} from "antd";
import {Link} from 'react-router-dom';
import {useGetCryptosQuery} from "../service/cryptoApi";
const  {Title} = Typography;
const Exchnage =  () =>{
    const {data, isFetching} = useGetCryptosQuery();
    // console.log(data)
    return(
        <>
            <Title level={2} className={"heading"}>Global Crypto Status</Title>
            <Row>
                <Col span={12}><Statistic title={"Total Cryptocurrencies"} value={"5"}/></Col>
                <Col span={12}><Statistic title={"Total Exchanges"} value={"5"}/></Col>
                <Col span={12}><Statistic title={"Total Market Cap"} value={"5"}/></Col>
                <Col span={12}><Statistic title={"Total 24H Volume"} value={"5"}/></Col>
                <Col span={12}><Statistic title={"Total Markets"} value={"5"}/></Col>
            </Row>
        </>
    )
}
export default Exchnage;