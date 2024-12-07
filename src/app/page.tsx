import Image from "next/image";
import Navbar from "./navbar";
import maaz from "../../image/WhatsApp Image 2024-11-21 at 05.19.20_f7593a19.jpg";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <div className="hero">
        <h1>Maaz Portfolio</h1>
        <Image src={maaz} alt="Maaz Pic" />
        <p>
          <strong>Hello, I am Syed Maaz Ali</strong> — I am a front-end
          developer and currently working as a software developer.
          <br />
          <strong>My skills are:</strong>
          <br />
          <i>
            HTML <br />
            CSS <br />
            TypeScript
          </i>
        </p>
      </div>
    </div>
  );
}
