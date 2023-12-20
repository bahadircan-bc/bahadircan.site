import Image from "next/image";
import { ProjectItem } from "../page";
import { getProjectData } from "@/db/dbReq";
import { Suspense } from "react";

type ProjectHeaderProps = {
  title?: string;
};

function ProjectHeader(props: ProjectHeaderProps) {
  const { title } = props;
  return (
    <div id="project-header" className="w-full h-fit relative rounded-lg">
      <div
        className="w-full aspect-video object-cover rounded-lg"
        style={{
          backgroundImage: `url(https://source.unsplash.com/random/?sig=1)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      {/* <Image
        className="w-full aspect-video object-cover rounded-lg"
        width={1920}
        height={1080}
        src={`https://source.unsplash.com/random/?sig=1`}
        alt=""
      /> */}
      <h1
        id="project-title"
        className="absolute bottom-0 left-0 text-9xl text-white px-10"
        style={{
          WebkitTextStroke: "1px #131313",
        }}
      >
        {title ?? "Project Title"}
      </h1>
    </div>
  );
}

type ProjectBodyProps = {
  children: React.ReactNode;
};

function ProjectBody(props: ProjectBodyProps) {
  return (
    <div
      id="project-body"
      className="flex flex-col items-center px-[5vw] py-[10vh] gap-[10vh]"
    >
      {props.children}
    </div>
  );
}

type ProjectDescriptionProps = {
  description?: string;
};

function ProjectDescription(props: ProjectDescriptionProps) {
  const { description } = props;
  return (
    <div className="w-full">
      <h2>Description</h2>
      <p>
        {description ??
          "This is the description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quas."}
      </p>
    </div>
  );
}

type ProjectTechnologiesProps = {
  technologies?: string;
};

function ProjectTechnologies(props: ProjectTechnologiesProps) {
  const { technologies } = props;
  return (
    <div className="w-full">
      <h2>Technologies</h2>
      <p>
        {technologies ??
          "This is the technologies. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quas."}
      </p>
    </div>
  );
}

type ProjectTextProps = {
  text?: string;
};

function ProjectText(props: ProjectTextProps) {
  const { text } = props;
  return (
    <p className="w-full flex items-center justify-center">
      {text ??
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ipsa
      deserunt iste, enim voluptatibus dolor culpa et, exercitationem qui vel
      aliquid. Assumenda, itaque hic rerum reiciendis placeat iusto debitis cum!
      Incidunt quia necessitatibus officiis totam odit facilis culpa? Dolorum
      aperiam omnis eos! Distinctio, libero quasi nesciunt iure pariatur
      sapiente facere a amet laboriosam ex omnis voluptatem fugiat sed,
      architecto explicabo. Nostrum harum ducimus explicabo mollitia ullam
      aperiam. Tenetur doloremque nulla deleniti commodi, ea impedit sunt dolore
      molestias dicta, quos velit ratione earum modi repellat facilis ab nostrum
      adipisci dolorum libero. Sed, minima voluptatem, ad at illo molestias est
      aliquam doloremque provident inventore obcaecati nemo in eos voluptates!
      Explicabo nostrum eum, provident, cumque possimus, corporis incidunt illo
      accusantium itaque sint velit! Eaque ad necessitatibus consequuntur
      maiores quo unde sint vero suscipit possimus officiis et, repellendus,
      enim quam, aliquam quae voluptates. Sequi molestias magnam aliquid ipsa.
      Numquam officiis possimus nisi minima dicta. Incidunt ut, esse quos
      possimus natus minus suscipit odio sed et unde neque magnam quisquam earum
      quaerat! Rem cum unde necessitatibus! Ullam eveniet doloremque minus
      commodi suscipit, voluptates praesentium provident! Expedita inventore hic
      fugiat corrupti laboriosam optio aspernatur odit iure? Ab inventore atque
      porro nulla vero quae eius vel tempore, at neque quo corrupti nihil veniam
      ipsam hic eveniet eum? Dolorum veniam ullam molestias eius distinctio
      sapiente fugit soluta, quas reprehenderit dolor similique repellat velit
      fuga nisi, inventore numquam! Labore possimus quod excepturi laborum
      assumenda eos tempora asperiores est ducimus. Dolores optio consequuntur
      aut, iusto adipisci expedita iure quia suscipit rem culpa, doloremque ex
      et veniam beatae, eius velit ea ducimus natus sequi repudiandae eum?
      Voluptas veniam debitis sed suscipit. Accusantium alias sequi quisquam
      commodi ullam nulla. Recusandae quam aperiam quae perferendis odio nostrum
      ipsa amet sint molestiae nobis. Recusandae illum possimus fugiat
      perspiciatis quibusdam deleniti natus sint reiciendis sed? Placeat vel
      sapiente nisi natus consequatur voluptates atque ut impedit nam. Labore,
      ipsam. Rem earum deleniti quis voluptas voluptatibus voluptate, non odit
      natus perspiciatis nesciunt beatae ducimus possimus id vel? Magni omnis
      ipsam possimus esse illum facere nesciunt veritatis iusto alias, beatae
      tempora molestias, fugit non nam doloribus deserunt accusantium? Sapiente
      fugit aliquid excepturi sit reiciendis! Obcaecati quae voluptatibus ad!
      Autem deleniti cumque amet eum dolore mollitia reprehenderit eligendi
      beatae est at? Adipisci exercitationem cum officiis eaque rem dignissimos
      minus ex ad libero incidunt sit excepturi, ab neque fugit reiciendis?
      Commodi animi quidem repudiandae ipsam, laboriosam explicabo aspernatur
      earum sequi atque expedita? Dicta officia cumque molestias consectetur
      optio sunt culpa consequuntur velit animi voluptatem ipsum explicabo nulla
      ab, repellat laborum. Commodi porro et ipsa minus architecto aspernatur
      rem similique, amet sapiente eligendi quis dicta quas ab quaerat magni
      voluptates vel, sit aut explicabo sequi dolore! Consequuntur voluptates
      inventore ex sequi.`}
    </p>
  );
}

async function ProjectPageComponent({ params }: { params: { slug: string } }) {
  const project: ProjectItem = (await getProjectData()).filter(
    (project: ProjectItem) => project._id === params.slug
  )[0];

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="w-full h-fit flex items-center justify-center pt-[10vh]">
      <div className="w-4/5 min-h-screen bg-white rounded-lg">
        <ProjectHeader title={project.title} />
        <ProjectBody>
          <ProjectDescription description={project.description} />
          <ProjectTechnologies technologies={project.technologies} />
          <ProjectText text={project.body} />
        </ProjectBody>
      </div>
    </div>
  );
}

function ProjectPage(props: any) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ProjectPageComponent {...props} />
    </Suspense>
  );
}

export default ProjectPage;
