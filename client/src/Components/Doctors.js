import { Link } from "react-router-dom";

const Doctor = () => {
  return (
    <section>
      <h1>Doctor Page</h1>
      <br />
      <p>You must have been assigned an Doctor role.</p>
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </section>
  );
};

export default Doctor;
