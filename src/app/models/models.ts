export interface IProduct{
    productId: string,
    brand: string;
    title: string;
    price: number;
    category: string;
    imgSrc: string;
    sizesAvailable: string;
    color: string;
    material: string;
    description: string;
    rating: string;
}

export interface ICartProduct {
    productId: string;
    title: string;
    quantity: number;
    size: number;
    price: number;
    imgSrc: string;
    totalPrice?: number
}

export interface IWishlist{
    productId: string;
    title: string;
    size: number;
    price: number;
    imgSrc: string;
}

export interface IUser{
    name: string;
    username: string;
    password: string;
    email: string;
    contactNumber: number;
    address: string;
    cart?: ICartProduct[];
    wishlist?: IWishlist[];
    orders?: IOrder[];
}

export interface IAppState{
    username: string;
    cartProducts: ICartProduct[];
    wishlist: IWishlist[],
    isFetching: boolean,
    isError: boolean,
    error: string,
    cartQuantity: number,
    cartAmount: number,
    wishlisted: string[],
    carted: string[],
    storeInitialized: boolean
}

export interface Action {
    type: string, 
    payload: any
}

export interface IOrder {
    productId: string;
    title: string;
    quantity: number;
    size: number;
    price: number;
    imgSrc: string;
    totalPrice?: number,
    dated: string
}