import { useAuth } from "../../Auth";
import LogoutButton from "./LogoutButton";
import SignUpButton from "./SignUpButton";
function Profile() {
  const auth = useAuth();

  return (
    <div>
      <p className="lead text-warning ms-0" style={{ fontSize: "14px" }}>
        {auth.user && `Welcome ${auth.user}`}
      </p>
      {auth.isLoggedIn ? <LogoutButton /> : <SignUpButton />}
    </div>
  );
}

export default Profile;
