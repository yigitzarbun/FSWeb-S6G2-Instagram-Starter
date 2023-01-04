import React from "react";
import Yorumlar from "../Yorumlar/Yorumlar";
import BeğenBölümü from "./BeğenBölümü";
import GönderiBaşlığı from "./GönderiBaşlığı";

const Gönderi = (props) => {
  const { gönderi, gonderiyiBegen } = props;

  return (
    <div className="post-border">
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
    </div>
  );
};

export default Gönderi;
