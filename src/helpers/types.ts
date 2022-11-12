export interface RoleType {
  key: string;
  label: string;
}

export interface ContentBtn {
  label: string;
  onClick: () => void;
}

export interface Visitor {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  createdDate: string;
  status: string;
  email: string;
}

export interface User {
  id: string;
  isActive: boolean;
  firstName: string;
  lastName: string;
  role: string;
  isLogin: boolean;
  userToken: string;
}

export interface StatItem {
  icon: object;
  label: string;
  content: number;
  bgColor: string;
}

export interface LoginRecord {
  email: string;
  password: string;
}

export const beforeEnteCheckIfIsConnected = (to: any, from: any, next: any) => {
  // A user is connected when there a user token on a localStorage
  let userToken: string = localStorage.getItem("userToken") as string;
  let isConnected = userToken != null && userToken != "";

  if (isConnected) {
    next();
  } else {
    next({ name: "Login" });
  }
};

export const beforeLogin = (to: any, from: any, next: any) => {
  let userToken: string = localStorage.getItem("userToken") as string;

  userToken != null && userToken != ""
    ? next({ name: "DashboardView" })
    : next();
};
