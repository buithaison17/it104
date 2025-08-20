import Header from "../lession6/Header";
import Nav from "./Nav";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Menu from "./Menu";
import Main from "./Main";
import Article from "./Article";

export default function UserLayout() {
  return <>
    <Header></Header>
    <Nav></Nav>
    <div className="d-flex" style={{height: "500px"}}>
        <Menu></Menu>
        <Main></Main>
        <Article></Article>
    </div>
  </>;
}
