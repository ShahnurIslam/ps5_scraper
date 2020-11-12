export interface Product{
    retailer: string
    stock:Boolean
};

export function createProduct(retailer:string,stock:boolean):Product{
    return {
        retailer,
        stock
    };
};