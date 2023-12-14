import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Navbar />
      <div className="text-white text-9xl pb-[5vh]">404 Not Found</div>
      <div className="text-white text-sm pb-[10vh]">
        The page you're looking for doesn't exist.
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
