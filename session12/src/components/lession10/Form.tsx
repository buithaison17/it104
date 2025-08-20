import ButtonAddStudent from "./ButtonAddStudent";
import ButtonSearchStudent from "./ButtonSearchStudent";
import SearchStudent from "./SearchStudent";
import SortStudent from "./SortStudent";

export default function Form() {
  return (
    <>
      <div className="card-header">
        <div className="row">
          <div className="col-3">
            <ButtonAddStudent></ButtonAddStudent>
          </div>
          <div className="col-6">
            <form className="search-form" action="#">
              <i className="icon-search"></i>
              <SearchStudent></SearchStudent>
              <ButtonSearchStudent></ButtonSearchStudent>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <SortStudent></SortStudent>
          </div>
        </div>
      </div>
    </>
  );
}
