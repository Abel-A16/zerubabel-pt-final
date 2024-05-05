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
    _type: "social";
    role: s
    heroImage: s
    backgroundInformation: s
    profilePic: s
    phoneNumber: s
    email: s
    address: s
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}