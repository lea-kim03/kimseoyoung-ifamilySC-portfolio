import { Link } from "react-router-dom";

export default function DocumentCard({ title, description, to }) {
  return (
    <Link className="document-card" to={to}>
      <span className="card-label">Document</span>
      <h2>{title}</h2>
      <p>{description}</p>
      <span className="text-button">바로가기</span>
    </Link>
  );
}
