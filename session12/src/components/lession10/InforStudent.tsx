import ButtonSubmit from "./ButtonSubmit";
import Input from "./Input";
import InputAddress from "./InputAddress";
import InputBirthday from "./InputBirthday";
import InputBirthPlace from "./InputBirthPlace";
import SelectGender from "./SelectGender";

export default function InforStudent() {
  return (
    <>
      <form className="form-sample">
        <div className="form-group row">
          <label className="col-sm-3 col-form-label" htmlFor="studentId">
            Mã sinh viên
          </label>
          <Input></Input>
        </div>

        <div className="form-group row">
          <label className="col-sm-3 col-form-label" htmlFor="studentName">
            Tên sinh viên
          </label>
          <Input></Input>
        </div>

        <div className="form-group row">
          <label className="col-sm-3 col-form-label" htmlFor="studentAge">
            Tuổi
          </label>
          <Input></Input>
        </div>

        <div className="form-group row">
          <label className="col-sm-3 col-form-label" htmlFor="studentGender">
            Giới tính
          </label>
          <SelectGender></SelectGender>
        </div>

        <div className="form-group row">
          <label className="col-sm-3 col-form-label" htmlFor="studentDob">
            Ngày sinh
          </label>
          <InputBirthday></InputBirthday>
        </div>

        <div className="form-group row">
          <label
            className="col-sm-3 col-form-label"
            htmlFor="studentBirthPlace"
          >
            Nơi sinh
          </label>
          <InputBirthPlace></InputBirthPlace>
        </div>

        <div className="form-group row">
          <label className="col-sm-3 col-form-label" htmlFor="studentAddress">
            Địa chỉ
          </label>
          <InputAddress></InputAddress>
        </div>
        <ButtonSubmit></ButtonSubmit>
      </form>
    </>
  );
}
