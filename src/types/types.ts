type Geo = {
    lat: string;
    lng: string;
};

type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
};

type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
};

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: Address;
    company: Company;
};

export type UserContextType = {
    users: User[];
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    changeTheme: () => void;
};