import React from "react";
import "./BodyNList.css";
import LiGenerating from "./LiGenerating";

const BodyNList = ({ data }) => {
  return (
    <section className="conteudo">
      <div className="content">
        <div className="content-container">
          <ul id="list">
            {data.map((result, index) => (
            <LiGenerating key={index} data={result}/>
             ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BodyNList;
