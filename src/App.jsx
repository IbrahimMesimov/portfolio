import {
  Header,
  Footer,
  Home,
  Aboutme,
  SkillsInfo,
  Services,
  Portfolio,
  GetinTouch,
  OurClients,
  Contact,
} from "./components";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import ThemeToggle from "./components/themeToggle/ThemeToggle";
function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <div className="container"></div>
        <Aboutme />
        <SkillsInfo />
        <Services />
        <Portfolio />
        <GetinTouch />
        <OurClients />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <ThemeToggle />
    </>
  );
}

export default App;
