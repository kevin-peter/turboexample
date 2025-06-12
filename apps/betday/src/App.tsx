import "./App.css";
import { Header, Counter, UserList } from "@repo/ui";
import { useUsers } from "@repo/hooks";

function App() {
  const { users, loading, error } = useUsers();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header title="Welcome to Omkar" />
      <Counter></Counter>
      <UserList users={users} />
    </>
  );
}

export default App;
