export interface UserInfo {
    id: number;
    email: string;
    name: string;
    imageUrl: string;
    socialType: string | null;
    createdAt: string;
    status: string;
    account: string;
    bankname: string;
}

export interface ItemInfo {
    id: number;
    itemId: number;
    userId: number;
    category: string;
    title: string;
    contents: string;
    price: number;
    createdAt: string;
    dueTime: string;
    latitude: number;
    longtitude: number;
    image_url: string;
    status: string;
}

export interface ItemType {
    item: ItemInfo;
}

export interface GetUserAccount {
    getUserAccountInfo: () => boolean;
    bank: string;
    account: string;
}
