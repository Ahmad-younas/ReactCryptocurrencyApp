import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '63400e6762msh6bb71aed05a4d80p16ae02jsn43aeba09c274'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com/stats';
const createRequest = (url)=>({url,header:cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:()=> createRequest('./coins')
        })
    })
})
export const {
    useGetCryptosQuery,
}=createApi;
