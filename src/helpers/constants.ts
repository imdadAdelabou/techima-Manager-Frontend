export const roles = [
  { key: "user", label: "Utilisateur" },
  { key: "garden", label: "Gardien" },
  { key: "admin", label: "Admin" },
];

export const messages = {
  requiredField: "Ce champs est requis",
  requiredEmail: "Veuillez entrer une adresse mail",
  passwordIsRequired: "Veuillez entrer votre mot de passe",
  incorrectPassword: "Mot de passe incorrect",
  inexistantUser: "Utilisateur inexistant",
};

export const BASE_API_URL = "http://localhost:3000/api";
// import.meta.env.VUE_APP_MODE == "DEV"
// ? "http://localhost:3000/api"
// : "https://techima-manager.fly.dev/api";
