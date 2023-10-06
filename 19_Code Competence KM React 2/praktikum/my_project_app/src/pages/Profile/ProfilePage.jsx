import Header from "./component/Header";
import ProfileCard from "./component/ProfileCard";

export default function ProfileList({ users }) {
  return (
    <>
      <Header text="Profile Page" />
      <h1>Profile Page</h1>
      {users.map((user) => (
        <ProfileCard user={user} />
      ))}
    </>
  );
}
