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

export const beforeEnteCheckIfIsConnected = (to: any, from: any, next: any) => {
  let isConnected = false;

  if (isConnected) {
    next();
  } else {
    next({ name: "Login" });
  }
};
