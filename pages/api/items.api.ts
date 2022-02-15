import axios from 'axios';

export interface ItemInfoType {
    id:              number;
    name:            string;
    originalPrice:   number;
    minSellingPrice: number;
    ncSellingPrice:  number;
    warning:         string;
    discountRate:    number;
    imageUrl:        string;
    options:         Option[];
    brand:           string;
}

export interface Option {
    expireAt: Date;
    count: number;
    sellingPrice: number;
}

export async function getItemInfo(paramsId: string | string[] | undefined) {
    const request = await axios.get(`https://api2.ncnc.app/con-items/${paramsId}`);
    const { data: { conItem } } = request;
    
    const { id, name, originalPrice, minSellingPrice, ncSellingPrice, warning, discountRate, imageUrl, options, } = conItem;
    
    const itemInfo = { id, name, originalPrice, minSellingPrice, ncSellingPrice, warning, discountRate, imageUrl, options, brand: conItem["conCategory2"].name };
    
    return {
        itemInfo
    }
}