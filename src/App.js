import "./App.css";
import { DatePicker } from "antd";
import MyDrawer from "./Drawer";

// import { Carousel } from "antd";

function App() {
    return (
        <div className="App">
            <header>Header</header>
            <main>
                <section id="section1">
                    <DatePicker />
                </section>
                <section id="restaurants">
                    <MyDrawer />
                </section>
            </main>
        </div>
    );
}

export default App;
