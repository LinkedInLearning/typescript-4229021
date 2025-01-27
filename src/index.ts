// Les types littéraux de modèle

// Exemple 1
type World = "world";
type Greeting = `hello ${World}`;


// Exemple 2
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;


// Exemple 3
type Size = "small" | "medium" | "large";
type ResponseMessage = `${Size} size selected`;


// Exemple 4
type Lang = "en" | "ja" | "pt";
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;

