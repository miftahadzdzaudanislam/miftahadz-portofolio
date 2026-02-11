import { useParams, Link } from "react-router-dom";
import { projects } from "@/utils/project";
import NotFound from "@/component/NotFound";

export default function DetailPorject() {
  const { slug } = useParams();
  const data = projects.find((p) => p.link === slug);

  if (!data) {
    return (
      <NotFound />
    );
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <img src={data.img} alt={data.title} className="max-w-lg rounded" />
      <p>{data.desc}</p>
      <Link to="/portofolios" className="btn btn-primary">
        Kembali
      </Link>
    </div>
  );
}