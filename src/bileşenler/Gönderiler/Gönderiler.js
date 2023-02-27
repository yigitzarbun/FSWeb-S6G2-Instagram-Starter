import React from "react";
import Gönderi from "./Gönderi";
import "./Gönderiler.css";

const Gönderiler = (props) => {
  const { gonderiyiBegen, gonderiler, arama } = props;
  let arananGonderilerDizisi = gonderiler.filter((gonderi) => {
    if (gonderi.comments[0].text === "") {
      return gonderi;
    } else if (
      gonderi.comments[0].text.toLowerCase().includes(arama.toLowerCase())
    ) {
      return gonderi;
    }
  });

  return (
    <div className="posts-container-wrapper">
      {arananGonderilerDizisi.length > 0 ? (
        arananGonderilerDizisi.map((item) => (
          <Gönderi gönderi={item} gonderiyiBegen={gonderiyiBegen} />
        ))
      ) : (
        <p>Aradığınız kritere uygun gönderi bulunamadı.</p>
      )}
    </div>
  );
};

export default Gönderiler;
