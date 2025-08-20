export default function ColorBox() {
  return (
    <>
        <div style={{display: "flex", gap: "10px"}}>
            <div style={{display: "flex", flexDirection: "column", gap: "5px"}}>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center",width: "200px", height: "200px", backgroundColor: "red", color: "white"}}>
                    <p>Box</p>
                </div>
                <button style={{padding: "5px", border: "1px solid black", width: "100px", margin: "auto"}}>Red</button>
            </div>
            <div style={{display: "flex", flexDirection: "column", gap: "5px"}}>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center",width: "200px", height: "200px", backgroundColor: "Blue", color: "white"}}>Box</div>
                <button style={{padding: "5px", border: "1px solid black", width: "100px", margin: "auto"}}>Blue</button>
            </div>
            <div style={{display: "flex", flexDirection: "column", gap: "5px"}}>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center",width: "200px", height: "200px", backgroundColor: "Green", color: "white"}}>Box</div>
                <button style={{padding: "5px", border: "1px solid black", width: "100px", margin: "auto"}}>Green</button>
            </div>
        </div>
    </>
  )
}
