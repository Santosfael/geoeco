export type EcoPonto = {
    id: number;
    images: images[],
    name: string;
    street: string;
    latitude: number;
    longitude: number;
    house_number: number;
    district: string;
    dayWeek: string;
    opering_hours: string;
};

type images = {
    id: number;
    url: string;
};