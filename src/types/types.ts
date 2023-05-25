//Type Definitions
export interface CollectionImages {
    id: string;
    title: string;
    image: string;
    imageUrl: string;
    latitude: number;
    longitude: number;
}

export interface Collections {
    id: string;
    title: string;
    description: string;
    user_id: string;
    collection_images: CollectionImages[];
}
