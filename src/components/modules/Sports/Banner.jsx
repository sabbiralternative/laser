import images from "../../../assets/images";

const Banner = () => {
  return (
    <div id="My-Slider" data-bs-ride="carousel" className="carousel slide">
      <ol className="carousel-indicators">
        <li
          data-bs-target="#My-Slider"
          data-bs-slide-to={0}
          className="active"
        />
        <li data-bs-target="#My-Slider" data-bs-slide-to={1} />
        <li data-bs-target="#My-Slider" data-bs-slide-to={2} />
      </ol>
      <div role="listbox" className="carousel-inner">
        <div className="carousel-item active">
          <img src={images.bnr1} className="img-fluid d-none d-sm-block" />
          <img src={images.bnr1} className="img-fluid d-block d-sm-none" />
        </div>
        <div className="carousel-item">
          <img
            src="assets/img/bnr2.webp"
            className="img-fluid d-none d-sm-block"
          />
          <img
            src="assets/img/m_bnr2.webp"
            className="img-fluid d-block d-sm-none"
          />
        </div>
        <div className="carousel-item">
          <img
            src="assets/img/bnr3.webp"
            className="img-fluid d-none d-sm-block"
          />
          <img
            src="assets/img/m_bnr3.webp"
            className="img-fluid d-block d-sm-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
