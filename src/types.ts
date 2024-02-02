export type Restaurant = {
    id: string;
    country: string;
    city: string;
};

export type City = {
    id: string;
    name: string;
};

export type Country = {
    id: string;
    name: string;
    cities: City[];
};

export type FoodCategory = {
    id: string;
    name: string;
};
