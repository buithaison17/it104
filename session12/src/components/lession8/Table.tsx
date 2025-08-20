import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ButtonEdit from "./ButtonEdit";
import ButtonRemove from "./ButtonRemove";

export default function Table() {
  interface Person {
    name: string;
    gender: "Male" | "Female" | "Other";
    address: string;
    dob: string; // YYYY-MM-DD
  }

  const people: Person[] = [
    {
      name: "Nguyen Van A",
      gender: "Male",
      address: "Hanoi, Vietnam",
      dob: "1990-05-12",
    },
    {
      name: "Tran Thi B",
      gender: "Female",
      address: "Ho Chi Minh City, Vietnam",
      dob: "1992-11-23",
    },
    {
      name: "Le Van C",
      gender: "Male",
      address: "Da Nang, Vietnam",
      dob: "1988-07-30",
    },
  ];

  console.log(people);

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="text-center" scope="col">
              STT
            </th>
            <th className="text-center" scope="col">
              Họ và tên
            </th>
            <th className="text-center" scope="col">
              Ngày sinh
            </th>
            <th className="text-center" scope="col">
              Giới tính
            </th>
            <th className="text-center" scope="col">
              Địa chỉ
            </th>
            <th className="text-center" colSpan={2} scope="col">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          {people.map((item, index) => (
            <tr className="text-center">
              <td>{index}</td>
              <td>{item.name}</td>
              <td>{item.dob}</td>
              <td>{item.gender}</td>
              <td>{item.address}</td>
              <td>
                <ButtonEdit></ButtonEdit>
              </td>
              <td>
                <ButtonRemove></ButtonRemove>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
