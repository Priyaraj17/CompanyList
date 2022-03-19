import CompanyType from "../CompanyType/CompanyType";
import "./Heading.css";
const Heading = () => {
  return (
    <header>
      <div class="overlay"></div>

      <video
        playsinline="playsinline"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source
          src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
          type="video/mp4"
        />
      </video>

      <div class="container h-100">
        <div class="d-flex h-100 text-center align-items-center">
          <div class="w-100 text-white">
            <h1 class="display-3">Company List</h1>
            <p class="lead mb-0">Here is the list of all the companies</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Heading;
