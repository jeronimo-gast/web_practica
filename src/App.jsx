import Navbar from './components/Navbar/Navbar';
//import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
