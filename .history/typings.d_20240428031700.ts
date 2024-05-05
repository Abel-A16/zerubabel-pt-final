interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface Social extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    role: string;
    name: string;
    email: string;
    heroImage: Image;
    profilePic: Image;
    phoneNumber: string;
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}