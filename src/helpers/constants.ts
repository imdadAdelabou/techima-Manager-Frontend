export const roles = [
  { key: "user", label: "Utilisateur" },
  { key: "garden", label: "Gardien" },
  { key: "admin", label: "Admin" },
];

export function returnLabelRol(query: string) {
  return roles.filter((role) => role.key === query)[0].label;
}

export const messages = {
  requiredField: "Ce champs est requis",
  requiredEmail: "Veuillez entrer une adresse mail",
  passwordIsRequired: "Veuillez entrer votre mot de passe",
  incorrectPassword: "Mot de passe incorrect",
  inexistantUser: "Utilisateur inexistant",
  errorOccurs: "Une erreur c'est produite",
};

export const BASE_API_URL = "http://localhost:3000/api";
// import.meta.env.VUE_APP_MODE == "DEV"
// ? "http://localhost:3000/api"
// : "https://techima-manager.fly.dev/api";
