import { loginFields } from "../../data/inputFields";
import Form from "../organismos/Form";

export default function LoginForm() {
  return (
    <div>
      <Form fields={loginFields} title="Iniciar Sesión" />
    </div>
  );
}
