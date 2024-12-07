import Navbar from "../navbar";

export default function About() {
  return (
    <div className="container">
      <Navbar />
      <section>
        <h2>About Myself</h2>
        <p>
          Currently, I am studying in{" "}
          <abbr title="Governor Initiative in Artificial Intelligence">
            GIAIC
          </abbr>
          .
        </p>
        <p>I am a web developer and accountant.</p>
        <p>I am working in a firm as a junior accountant.</p>
        <a href="https://resume-builder-iota-seven.vercel.app/" className="button">
          My Resume
        </a>
      </section>
    </div>
  );
}
