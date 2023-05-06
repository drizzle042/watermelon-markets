const baseUrl = process.env.REACT_APP_BACKEND_API_URL

const SalesMgt = {
    sales: new URL('admin/api/v0/administrators/sales/', baseUrl)
}

const Sales = {
    sales: new URL('sellers/api/v0/sellers/sale/', baseUrl)
}

export { 
    baseUrl,
    SalesMgt,
    Sales
}