import jwtDecode from "jwt-decode";

export interface JwtPayload {
  _id: string;
  role: string;
  exp: number;
}

export const getJwtPayload = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  try {
    const payload: JwtPayload = jwtDecode(token);

    if (!payload) {
      return null;
    }

    const now = new Date().getTime() / 1000;
    if (now > payload.exp) {
      localStorage.removeItem("token")
      return null;
    }

    return payload as JwtPayload;
  } catch {
    return null;
  }
};
