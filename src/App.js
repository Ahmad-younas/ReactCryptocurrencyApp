import React from 'react';
import {Switch,Route, Link } from 'react-router-dom';
import {Layout,Typography, Space} from "antd";
import Navbar from "./Components/Navbar";
import './App.css'
import News from "./Components/News";
import CryptoDetails from "./Components/CryptoDetails";
import Cryptocurrencies from "./Components/Cryptocurrencies";
import Homepage from "./Components/Homepage";
import Exchanges from "./Components/Exchange";

const App = ()=>{
    return(
        <div className={"app"}>
            <div className={"navbar"}>
                <Navbar/>
            </div>
            <div className={"main"}>
                <Layout>
                    <div className={"routes"}>
                        <Switch>
                            <Route exact path={"/"}>
                                <Homepage/>
                            </Route>
                            <Route exact path={"/exchanges"}>
                                <Exchanges/>
                            </Route>
                            <Route exact path={"/cryptocurrencies"}>
                                <Cryptocurrencies/>
                            </Route>
                            <Route exact path={"/crypto/:coinId"}>
                                <CryptoDetails/>
                            </Route>
                            <Route exact path={"/news"}>
                                <News/>
                            </Route>
                        </Switch>
                    </div>
                </Layout>
            </div>
            <div className= "footer">
                <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
                    Cryptoverse <br/>
                    All rights reserved
                </Typography.Title>
                <space>
                    <Link to="/">Home</Link>
                    <Link to="/exchanges">Exchanges</Link>
                    <Link to="/news">News</Link>
                </space>
            </div>
        </div>
    )
}
export default App