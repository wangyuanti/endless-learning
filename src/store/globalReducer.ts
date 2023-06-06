import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const globalReducer = createApi({
   // 这个reducerPath相当于我们 createSlice配置中的name
   reducerPath: 'globalReducer',
   // 配置一些异步请求 fetchBaseQuery是库内置的基于fetch封装的请求方法
   baseQuery: fetchBaseQuery({
    baseUrl: "https://www.fastmock.site/mock/5d21ead666216108f62f69e1c82a5579/list",
  }),
  
  // 配置你的异步方法
   endpoints: (builder) => {
     return {
       // 定义一个接口
       //从参数生成查询参数 转变响应并且缓存
       //React entry point 会自动根据endpoints生成hooks
       getTodos: builder.query({query: (params) => ({
          method: 'GET',
          url: `/api/getUser`,
          params
       })}),
       getPost: builder.mutation({query: (params) => ({
        method: 'POST',
        url: `/api/post`,
        params
     })}),
     }
   }
 })
 export const { useGetTodosQuery,useGetPostMutation } = globalReducer
export default globalReducer;