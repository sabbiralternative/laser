import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CasinoThumbnail = ({ data }) => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleNavigateToIFrame = (casino) => {
    if (!token) return navigate("/login");
    navigate(`/casino/${casino?.name?.replace(/ /g, "")}/${casino?.id}`);
  };
  return (
    <>
      {data?.map((casino, i) => (
        <div
          key={`${casino?.id}-${casino?.category}-${casino?.product}-${i}`}
          className="col-md-2 col-4 align-self-center text-center ng-star-inserted"
        >
          <div className="casino position-relative">
            <img className="img-fluid" src={casino?.url_thumb} />
            <a
              onClick={() => handleNavigateToIFrame(casino)}
              className="btn casino-btn"
            >
              {casino?.name}
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default CasinoThumbnail;
