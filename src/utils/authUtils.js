// utils/authUtils.js
export function isLoggedIn() {
  return !!localStorage.getItem("token");
}
