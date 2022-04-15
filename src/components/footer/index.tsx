import "./index.scss";

import GoogleIcon from "../../assets/images/google-icon.svg";

const Benefits = () => {
  return (
    <div className="footer container text-center">
      <div className="header mb-2">Powered By</div>
      <div>
        <img src={GoogleIcon} alt="google developer group" className="mr-5" />{" "}
        Google Developer Groups
      </div>
      <div>Ajah</div>
    </div>
  );
};

export default Benefits;
