import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";
export default function SignUpPage() {
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
          {
            label: "confirm password",
            type: "password",
          },
        ]}
        submitButtonLabel="sign up"
      />
      <div>
        <Link to="/" className="text-emerald-700 text-sm underline">
          Already have an account?
        </Link>
      </div>
    </FormContainer>
  );
}
