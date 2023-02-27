// (Ek görev olarak, kullanıcınızın aynı gönderiyi birden fazla kez "beğenmesini" engelleyin.)
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";

const BeğenBölümü = (props) => {
  const { gonderiyiBegen, begeniSayisi, setYorumYapAcik, yorumYapAcik } = props;
  const handleYorumArea = () => {
    setYorumYapAcik(!yorumYapAcik);
  };
  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faHeart} onClick={gonderiyiBegen} />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} onClick={handleYorumArea} />
        </div>
      </div>
      <p className="like-number"> {begeniSayisi} likes</p>
    </div>
  );
};

export default BeğenBölümü;
