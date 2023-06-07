//Type Definitions

//Images within a collection
export interface CollectionImages {
    id: string;
    title: string;
    image: string;
    imageUrl: string;
    latitude: number;
    longitude: number;
}

//Collection
export interface Collections {
    id: string;
    title: string;
    description: string;
    user_id: string;
    collection_images: CollectionImages[];
}

//Sign Up Form
export interface FormTextInputs {
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
    first_name: string;
    last_name: string;
    about: string;
    setup: string;
}

//New User
export interface newUser {
    id: string;
    username: string;
    password: string;
    email: string;
    first_name: string;
    last_name: string;
    about: string;
    setup: string;
    profile_img: string;
    cover_img: string;
}
