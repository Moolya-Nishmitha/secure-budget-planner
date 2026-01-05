import { logout } from "../utils/auth";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Your budget data will live here.</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
