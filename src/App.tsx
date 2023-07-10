import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Phone from "./pages/Phone";
import Laptop from "./pages/Laptop";
import Desktop from "./pages/Desktop";
import Tablet from "./pages/Tablet";
import MiniPhone from "./pages/MiniPhone";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/laptop":
        title = "";
        metaDescription = "";
        break;
      case "/desktop":
        title = "";
        metaDescription = "";
        break;
      case "/tablet":
        title = "";
        metaDescription = "";
        break;
      case "/miniphone":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Phone />} />
      <Route path="/laptop" element={<Laptop />} />
      <Route path="/desktop" element={<Desktop />} />
      <Route path="/tablet" element={<Tablet />} />
      <Route path="/miniphone" element={<MiniPhone />} />
    </Routes>
  );
}
export default App;
