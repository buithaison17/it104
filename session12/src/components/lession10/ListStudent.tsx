import Form from "./Form";
import InforStudent from "./InforStudent";
import TableStudent from "./TableStudent";

export default function ListStudent() {
  return (
    <>
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            <Form></Form>
            {/* END CONTROL */}

            {/* START LIST STUDENT */}
            <div className="card-body">
              <h3 className="card-title">Danh sách sinh viên</h3>
              <div className="table-responsive pt-3">
                <TableStudent></TableStudent>
              </div>
            </div>
            {/* END LIST STUDENT */}
          </div>
        </div>

        {/* START FORM SINH VIEN */}
        <div className="col-5 grid-margin">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Thông tin sinh viên</h3>
              <InforStudent></InforStudent>
            </div>
          </div>
        </div>
        {/* END FORM SINH VIEN */}
      </div>
    </>
  );
}
