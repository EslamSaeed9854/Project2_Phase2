import { useNavigate } from "react-router-dom";
function Footer() {
    let route = useNavigate();
  return (
    <div class=" mt-5 pb-5" style={{ backgroundColor: "#1c1d1f" }}>
      <div className="row ms-2 align-items-center justify-content-between">
        <th class="col-6 mt-3 text-white ms-4" style={{ fontSize: "18px" }}>
          {" "}
          Top companies choose{" "}
          <span style={{ color: "blueviolet" }}> Udemy Business </span> to build
          in-demand career skills.
        </th>
        <img
          className="col-1 mt-3"
          style={{ height: "40px" }}
          src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
          alt="===="
        ></img>
        <img
          className="col-1 mt-3"
          style={{ height: "40px" }}
          src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
          alt="===="
        ></img>
        <img
          className="col-1 mt-3"
          style={{ height: "40px" }}
          src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
          alt="===="
        ></img>
        <img
          className="col-1 mt-3"
          style={{ height: "40px" }}
          src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
          alt="===="
        ></img>
        <img
          className="col-1 me-2 mt-3"
          style={{ height: "40px" }}
          src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
          alt="===="
        ></img>
      </div>
      <div className="mb-3" style={{ color : "darkgray" }}>
        ___________________________________________________________________________________________________________________________________________________________________________________________________________</div>
      <div className="row text-white" style={{ marginLeft: "30px" }}>
        <div class="col-7">
          <div class="row mb-2">
            <div class="col-4">Udemy Business</div>
            <div class="col-4">Careers</div>
            <div class="col-4">Terms</div>
          </div>
          <div class="row mb-2">
            <div class="col-4">Teach on Udemy</div>
            <div class="col-4">Blog</div>
            <div class="col-4">Privacy policy</div>
          </div>
          <div class="row mb-2">
            <div class="col-4">Get the app</div>
            <div class="col-4">Help and Support</div>
            <div class="col-4">Cookie settings</div>
          </div>
          <div class="row mb-2">
            <div class="col-4">About us</div>
            <div class="col-4">Affiliate</div>
            <div class="col-4">Sitemap</div>
          </div>
          <div class="row mb-2">
            <div class="col-4">Contact us</div>
            <div class="col-4">Investors</div>
            <div class="col-4">Accessibility statement</div>
          </div>
        </div>
        <div className="col-3"></div>
        <div class="col-2 ">
          <button
            class="text-white border p-1 pe-5"
            style={{ backgroundColor: "#1c1d1f" }}
          >
            <span class="material-icons mt-1 ms-2" style={{ fontSize: "20px" }}>
              language
            </span>{" "}
            <span class="col-6 text-white ms-1" style={{ fontSize: "18px" }}>
              {" "}
              English
            </span>
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
          alt="Logo"
          width="150"
          height="40"
          class="d-inline-block align-text-top ms-3 mt-5"
          onClick={ ()=>{ route("/Home");}}
          role="button"
        />
        <div class="text-white" style={{ textIndent: "85%" }}>
          © 2022 Udemy, Inc.
        </div>
      </div>
    </div>
  );
}

export default Footer;
