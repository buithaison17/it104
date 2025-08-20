import Input from "./Input";
import Button from "./Button";

export default function TodoForm() {
  return (
    <>
      <form className="d-flex justify-content-center align-items-center mb-4">
        <Input></Input>
        <Button></Button>
      </form>
    </>
  );
}
