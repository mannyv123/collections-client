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
export interface NewUser {
    username: string;
    password: string;
    email: string;
    first_name: string;
    last_name: string;
    about: string;
    setup: string;
}

//User Profile
type ExcludedProperties = "password" | "email";

export interface UserProfile extends Omit<NewUser, ExcludedProperties> {
    cover_img_url: string;
    profile_img_url: string;
    id: string;
}
