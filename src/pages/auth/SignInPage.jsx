import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";

export default function SignInPage() {
  return (
    <FormContainer>
      <AuthForm
        fields={[
          {
            label: "username",
            type: "text",
          },
          {
            label: "password",
            type: "password",
          },
        ]}
        submitButtonLabel="sign in"
      />
      <div>
        <Link to="/SignUp" className="text-emerald-700 text-sm underline">
          Create account
        </Link>
      </div>
    </FormContainer>
  );
}
