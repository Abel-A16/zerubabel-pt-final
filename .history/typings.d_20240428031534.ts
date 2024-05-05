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
    role: string;
    name: s
    heroImage: Image;
    backgroundInformation: string;
    profilePic: Image;
    phoneNumber: string;
    email: string;
    address: string;
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}