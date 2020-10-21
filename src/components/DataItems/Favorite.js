import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./DataItems.css";

function Favorite() {
  const [favlist, setFevlist] = useState([]);

  useEffect(() => {
    setFevlist(localStorage.getItem("favlist", JSON.parse(favlist)));
  }, [localStorage.getItem("favlist")]);

  return (
    <div>
      {favlist.map((datas) => (
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
            <Card.Img
              class="img1"
              variant="top"
              src={datas.image_url}
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
                {datas.name}
              </Card.Title>
              <Card.Text style={{ textAlign: "justify", fontSize: "13px" }}>
                {datas.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Favorite;
