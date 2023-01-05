import React from "react";
import Card from "./Card";
import data from "./Sdata";
import '../sass/index.scss'

export default function Service() {
  return (
    <>
      <h2 className="w-100 text-center p-4">Services</h2>
      <div className="container-fluid mb-4">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {data.map((val, index) => {
                return <Card img={val.imgsrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
