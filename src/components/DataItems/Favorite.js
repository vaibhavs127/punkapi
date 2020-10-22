import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./DataItems.css";

function Favorite() {
  const [favlist, setFevlist] = useState([]);
  const [data, setData] = useState([]);
  const [fav, setFav] = useState([]);

  useEffect(() => {
    setFevlist(JSON.parse(localStorage.getItem("favlist")));
    console.log("comment retrieve : ", setFevlist);
  }, [localStorage.getItem("favlist")]);

  const favlist2 = (id) => {
    if (localStorage.getItem("favlist")) {
      localStorage.removeItem("favlist");
    }
    console.log(id);
    const favlist = data.find((v) => v.id === id);
    const favlistpresent = fav.find((v) => v.id === id);

    if (!favlistpresent) {
      fav.push(favlist);
    } else {
      fav.splice(fav.indexOf(favlist), 1);
    }
    localStorage.removeItem("favlist", JSON.stringify(fav));
    console.log(fav);
    alert("Removed from Favorite List");
  };

  return (
    <div>
      {favlist &&
        favlist.map((datas) => (
          <div className="cont" style={{ display: "inline-block" }}>
            <Card
              style={{
                width: "18rem",
                height: "36rem",
                background: "white",
                margin: "20px 24px",
                boxShadow: "5px 5px 5px #333333",
              }}
            >
              <Button
                variant="light"
                className="w-25"
                onClick={() => favlist2(datas.id)}
              >
                <i className="fa fa-star-o" />
              </Button>
              <Card.Img
                class="img1"
                variant="top"
                src={datas && datas.image_url}
                height="150px"
              />

              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    textTransform: "uppercase",
                  }}
                >
                  {datas && datas.name}
                </Card.Title>
                <Card.Text style={{ textAlign: "justify", fontSize: "13px" }}>
                  {datas && datas.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
    </div>
  );
}

export default Favorite;
