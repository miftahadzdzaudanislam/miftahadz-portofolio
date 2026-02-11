import Card from "@/component/Card";
import { projects } from "@/utils/project";


export default function Project() {
  return (
    <>
      <div>
        <h1>My Projects</h1>
        <div className="flex flex-wrap gap-4">
          {projects.map((p) => (
            <Card
              key={p.link}
              img={p.img}
              title={p.title}
              desc={p.desc}
              link={p.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}
