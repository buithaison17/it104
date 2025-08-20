import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main ";
import Menu from "./Menu";

export default function AdminIndex() {
  return (
    <>
    <Header/>
    <div style={{display: "flex"}}>
        <Menu/>
        <div style={{display: "flex", flexDirection: "column", flex: "0.9", padding: "20px", backgroundColor: "#F3F4F6"}}>
            <Main/>
            <Footer/>
        </div>
    </div>
    </>
  )
}
