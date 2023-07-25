export function getUserRole() {
  const userData = localStorage.getItem('user');
  const data = JSON.parse(userData);
  const role = data && data.role ? data.role : null;
  return role;
}
