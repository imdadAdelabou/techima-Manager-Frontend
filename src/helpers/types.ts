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
  firstName: string;
  lastName: string;
  role: string;
  isLogin: boolean;
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
  let userToken: string = localStorage.getItem("userToken")!;
  let isConnected = userToken != null && userToken != "";

  if (isConnected) {
    next();
  } else {
    next({ name: "Login" });
  }
};
