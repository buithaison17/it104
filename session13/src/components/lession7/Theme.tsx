import { Component } from "react";

interface StateType {
  theme: "light" | "dark";
  language: "vietnamese" | "english";
}

export default class Theme extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = { theme: "light", language: "vietnamese" };
  }
  render() {
    const { theme, language } = this.state;
    return (
      <>
        <div
          style={{
            minHeight: "100vh",
            backgroundColor: theme === "dark" ? "#222" : "#fff",
            color: theme === "dark" ? "#fff" : "#000",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <h1>Theme hiện tại: {theme === "light" ? "Sáng" : "Tối"}</h1>
          <h2>
            Ngôn ngữ hiện tại: {language === "vietnamese" ? "Vietnamese" : "English"}
          </h2>
        </div>
      </>
    );
  }
}
