import {configureStore} from "@reduxjs/toolkit";
import {cryptoApi} from "../service/cryptoApi";
export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    }
})