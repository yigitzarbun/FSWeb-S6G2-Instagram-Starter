import React from "react";
import Yorumlar from "../Yorumlar/Yorumlar";
import BeğenBölümü from "./BeğenBölümü";
import GönderiBaşlığı from "./GönderiBaşlığı";

const Gönderi = (props) => {
  const { gönderi, gonderiyiBegen } = props;

  return (
    <div className="post-border">
      {gönderi ? (
        <>
          <GönderiBaşlığı
            username={gönderi.username}
            thumbnailUrl={gönderi.thumbnailUrl}
          />
          <div className="post-image-wrapper">
            <img
              alt="post thumbnail"
              className="post-image"
              src={gönderi.imageUrl}
            />
          </div>
          <BeğenBölümü
            gonderiyiBegen={() => gonderiyiBegen(gönderi.id)}
            begeniSayisi={gönderi.likes}
          />
          <Yorumlar yorumlar={gönderi.comments} />
        </>
      ) : (
        <p>Aranan kritere göre gönderi bulunamadı!</p>
      )}
    </div>
  );
};

export default Gönderi;
