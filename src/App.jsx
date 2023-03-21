import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import News from "./Components/News/News";

function App() {
    return (
        <>
            <Header />
            {/* <Main /> */}
            <News/>
            {/* <Footer /> */}
        </>
    );
}

// React da 3 xil component mavjud
// 1. Class Component
// 2. Function Component
// 3. Arrow Component

// <></> = React.Fragment
export default App;
