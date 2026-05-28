import Header   from "./components/Header";
import Footer   from "./components/Footer";
import AppRouter from "./router/AppRouter";
import "./styles/global.css";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}
