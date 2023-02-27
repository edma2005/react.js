import { useUsers } from "../../hooks/user";

const Users = () => {
  const { data } = useUsers();
  const users = data || [];

  return <div>Users</div>;
};

export default Users;
