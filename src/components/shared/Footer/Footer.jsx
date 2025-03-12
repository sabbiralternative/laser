import { Settings } from "../../../api";
import images from "../../../assets/images";

const Footer = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="power-wrap">
            <h3>
              <img src={images.gc} className="img-fluid" />
            </h3>
            <div className="licence_embed">
              <img src={images.lice} className="img-fluid" />
            </div>
            <p>
              {Settings.siteTitle} is the trading name of Sports Target B.V., a
              company incorporated and regulated in Curaçao under company number
              148053 with its registered office at Fransche Bloemweg 4,
              Willemstad, Curaçao.
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="foot">
            <p>
              Our website works best in the newest and last prior version of
              these browsers: Google Chrome. Firefox
            </p>
            <p>
              <a
                style={{ color: "black" }}
                className="mail-link"
                href="mailto:mylaser83@gmail.com"
              >
                {Settings.siteTitle}@gmail.com
              </a>
            </p>
            <ul>
              <li>
                <a>privacy policy</a>
              </li>
              <li>
                <a>terms and conditions</a>
              </li>
              <li>
                <a>rules and regulations</a>
              </li>
              <li>
                <a>about us</a>
              </li>
              <li>
                <a>responsible gaming</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 text-center" />
      </div>
    </>
  );
};

export default Footer;
