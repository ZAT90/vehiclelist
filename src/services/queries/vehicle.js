import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const vehicleApi = createApi({
    reducerPath: 'vehicleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api/'
    }),
    endpoints: (builder)=> ({
        getVehicleList: builder.query({
            query:()=> '/vehicles'
        })
    })
 })

 export const { useGetVehicleListQuery } = vehicleApi;