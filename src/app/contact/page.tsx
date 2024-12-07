
import Navbar from "../navbar";

export default function Contact() {
  return (
    <div className="container form-container">
      <Navbar />
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" placeholder="Enter your name" />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" placeholder="Enter your email" />
      <label htmlFor="phone">Phone Number:</label>
      <input type="tel" id="phone" placeholder="Enter your phone number" />
      <label htmlFor="address">Address:</label>
      <input type="text" id="address" placeholder="Enter your address" />
      <input type="submit" value="Submit" />
    </div>
  );
}
