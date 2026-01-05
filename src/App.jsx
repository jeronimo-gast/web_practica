import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import Banner from "./components/Banner/Banner";
import Cookies from "./components/Cookies/Cookies";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Banner />
      <Footer />
      <Cookies />
    </div>
  );
}

export default App;
