import React from "react";
import { Link } from "react-router-dom";

function Inicio({ title, content, buttonTitle }) {
  return (
    <>
      <div className="card w-50 bg-white text-violet-900">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{content}</p>
          <Link replace to={"/home"}>
            <div className="card-actions justify-end">
              <button className="btn btn-primary mt-3">{buttonTitle}</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Inicio;
