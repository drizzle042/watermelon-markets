import { useState, useEffect } from "react";
import useFetchOnMount from '../../../Lib/Requests/useFetchOnMount';
import usePost from '../../../Lib/Requests/usePost';
import { SalesMgt } from '../../../Lib/Endpoints/Endpoints';


const SalesLogic = () => {
    /********************Accessories*********************/
    const [saleSearchQueryParams, setSaleSearchQueryParams] = useState({
      keyword: '',
      active: ' ',
    })

    function handleField(e, field){
        setSaleSearchQueryParams({
          ...saleSearchQueryParams,
          [field]: e?.target?.value
        })
    }
    /******************Network Requests*****************/
    const {
        data: SalesData, 
        setData: SetSalesData,
        isLoading: FetchSalesDataLoading, 
        error: FetchSalesDataError, 
        fetchData: FetchSalesData,
        handleQuery: HandleQuerySales
    } = useFetchOnMount(SalesMgt.sales)

    useEffect(() => {
        HandleQuerySales(saleSearchQueryParams)
      // eslint-disable-next-line
    }, [saleSearchQueryParams])
    /*****************************************************/
    const {
        message: ActivateSaleMessage,
        setMessage: SetActivateSaleMessage,
        messageSeverity: ActivateSaleMessageSeverity,
        postFunc: ActivateSale
    } = usePost(SalesMgt.sales)
    /*****************************************************/
    const reFetch = () => {
        FetchSalesData()
    }
    /********************Accessories*********************/
    function changeSaleStatus(id){
        let data = SalesData?.data.map((i) => {
            if (i.id === id){
                i.is_active = !i.is_active;
            }
            return i;
        });
        let newData = {
            data: data,
            status: SalesData?.status
        }
        SetSalesData(newData);
    }

    const salesLogic = {
        saleSearchQueryParams,
        handleField,
        SalesData,
        FetchSalesDataLoading,
        FetchSalesDataError,
        FetchSalesData,
        ActivateSaleMessage,
        SetActivateSaleMessage,
        ActivateSaleMessageSeverity,
        ActivateSale,
        reFetch,
        changeSaleStatus
    }
    return ({ salesLogic });
}
 
export default SalesLogic;