import { useNavigate } from "react-router-dom";

const CasinoThumbnail = ({ data }) => {
  const navigate = useNavigate();
  const handleNavigateToIFrame = (casino) => {
    navigate(
      `/casino/${casino?.name?.replace(/ /g, "")}/${casino?.event_type_id}`
    );
  };
  return (
    <>
      {data?.map((casino) => (
        <div
          key={casino?.id}
          className="col-md-2 col-4 align-self-center text-center ng-star-inserted"
        >
          <div className="casino position-relative">
            <img className="img-fluid" src={casino?.url_thumb} />
            <a
              onClick={() => handleNavigateToIFrame(casino)}
              className="btn casino-btn"
            >
              Play Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default CasinoThumbnail;
