import React from "react";
import Yorumlar from "../Yorumlar/Yorumlar";
import BeğenBölümü from "./BeğenBölümü";
import GönderiBaşlığı from "./GönderiBaşlığı";
import { useState } from "react";

const Gönderi = (props) => {
  const {
    gönderi,
    gonderiyiBegen,
    gonderiler,
    setGonderiler,
    setYorumYapAcik,
    yorumYapAcik,
  } = props;
  const [yorum, setYorum] = useState(null);

  const handleYorum = (event) => {
    setYorum(event.target.value);
  };

  const handleYorumGonder = (event) => {
    event.preventDefault();
    setGonderiler(
      gonderiler.map((gonderi) => {
        if (gonderi.id === gönderi.id) {
          gonderi.comments.push({
            id: 1993,
            username: "yigitz",
            text: yorum,
          });
        }
        return gonderi;
      })
    );
    setYorum("");
    setYorumYapAcik(!yorumYapAcik);
  };

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
            yorumYapAcik={yorumYapAcik}
            setYorumYapAcik={setYorumYapAcik}
          />
          {yorumYapAcik && (
            <div className="yorumArea">
              <input
                type="text"
                id="comment"
                name="comment"
                value={yorum}
                onChange={handleYorum}
              />
              <button
                type="submit"
                onClick={handleYorumGonder}
                disabled={!yorum}
              >
                Gönder
              </button>
            </div>
          )}

          <Yorumlar yorumlar={gönderi.comments} />
        </>
      ) : (
        <p>Aranan kritere göre gönderi bulunamadı!</p>
      )}
    </div>
  );
};

export default Gönderi;
