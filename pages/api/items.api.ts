import axios from 'axios';

export interface ItemType {
    id:              number;
    name:            string;
    originalPrice:   number;
    minSellingPrice: number;
    ncSellingPrice:  number;
    warning:         string;
    discountRate:    number;
    isOnlyAccount:   number;
    imageUrl:        string;
    options:         Option[];
}

interface Option {
    expireAt: Date;
    count: number;
    sellingPrice: number;
}

export async function getItemInfo() {
    const request = await axios.get('https://api2.ncnc.app/con-items/501');
    const { data } = request;
    const { id, name, originalPrice, minSellingPrice, ncSellingPrice, warning, discountRate, isOnlyRate, imageUrl, options } = data;
    const itemInfo = { id, name, originalPrice, minSellingPrice, ncSellingPrice, warning, discountRate, isOnlyRate, imageUrl, options };

    return {
        itemInfo
    }
}