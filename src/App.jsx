import oebLogo from "../src/assets/images/oeb_logo.png";
import MainBody from "./components/MainBody/MainBody";

function App() {
  return (
    <div style={{ zIndex: 10 }}>
      <header style={{ background: "#efefef" }}>
        <img
          src={oebLogo}
          alt="Online Exam Batch Logo"
          height={100}
          width={120}
          style={{
            cursor: "pointer",
          }}
        />
      </header>
      <MainBody />
      <footer>
        <p>Copyright &copy; 2024. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
