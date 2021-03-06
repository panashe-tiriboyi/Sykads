import Head from "next/head";

import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navigation from "../components/Navbar/navbar";
import Home2 from "../components/Home/Home";
import AboutUs from "../components/AboutUs/aboutus";
import Products from "../components/Products/products";
import ContactUs from "../components/ContactUs/contactUs";
import Welcome from "../components/Welcome/welcome";
import Location from "../components/Location/location";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navigation />
      </div>

      <main>
        <Home2 />
        <Welcome />

        <div className="container">
          <AboutUs />
          <Products />
          <ContactUs />
          <Location />
        </div>
      </main>
    </div>
  );
}
