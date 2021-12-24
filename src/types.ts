export type StoreType = {
    cart: CartType[];
    userSession: UserSessionType;
    search: string;
    filter: any;
};

export type ProductType = {
    id: number;
    productId: string;
    description: string;
    name: string;
    price: number;
    image: string;
    salePrice: number;
    productStock: number;
    category: string;
    rating: string;
    createdAt: Date;
    updatedAt: Date;
};

export interface ProductResponseType {
    totalItems: number;
    data: ProductType[];
    currentPage: number;
    totalPages: number;
}

export type MenuType = {
    menuItem: string;
    menuLink: string;
};

export type CartType = {
    productQty: number;
} & ProductType;

export type LoginResponseType = {
    message: string;
    expiresIn: number;
    access_token: string;
};

export type UserSessionType = {
    user: object | null;
    error: string | null;
};
