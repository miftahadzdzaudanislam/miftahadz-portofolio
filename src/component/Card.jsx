import { Link } from "react-router-dom";

export default function Card({img, title, desc, link}) {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={`${img}`}
            alt={`${title}`}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            {desc}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/portofolios/${link}`} className="btn btn-primary">Buy Now</Link>
          </div>
        </div>
      </div>
    </>
  );
}
