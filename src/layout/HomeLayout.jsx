import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="">
      <header>
        <nav className="py-2.5 fixed top-0 left-0 w-full z-20 bg-white  shadow-lg">
          <Navbar />
        </nav>
        <section>
          <Banner />
        </section>
      </header>
      <main></main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayout;
