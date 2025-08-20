import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
import TodoTabs from "./TodoTabs";
// import TodoTabs from "./TodoTabs";

export default function TodoListIndex() {
  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <h3 style={{ textAlign: "center", marginBottom: 40 }}>
                    Quản lý công việc
                  </h3>
                  <TodoForm></TodoForm>
                  {/* Tabs navs */}
                  <TodoTabs></TodoTabs>
                  {/* Tabs navs */}
                  {/* Tabs content */}
                  <div className="tab-content">
                    <div className="tab-pane fade show active">
                      <ul className="list-group mb-0">
                        <TodoItems></TodoItems>
                        <TodoItems></TodoItems>
                      </ul>
                    </div>
                  </div>
                  {/* Tabs content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
