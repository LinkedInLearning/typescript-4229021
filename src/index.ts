// Les enums

interface Contact {
    id: number;
    name: string;
    status: ContactStatus
}

enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    Buzy = "occupe"
}

const contact1: Contact = {
    id: 1,
    name: "Tony",
    status: ContactStatus.Active // Active, Inactive, Buzy
}