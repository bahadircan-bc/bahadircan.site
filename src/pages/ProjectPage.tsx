function ProjectHeader() {
  return (
    <div id="project-header" className="w-full h-fit relative rounded-lg">
      <img
        className="w-full aspect-video object-cover rounded-lg"
        src="https://source.unsplash.com/random/?sig={1}"
        alt=""
      />
      <h1
        id="project-title"
        className="absolute bottom-0 left-0 text-9xl text-white px-10"
        style={{
          WebkitTextStroke: "1px #131313",
        }}
      >
        Project 1
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

function ProjectDescription() {
  return (
    <div className="w-full">
      <h2>Description</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        possimus dignissimos cupiditate debitis voluptas, officiis et
        exercitationem qui maxime consectetur magni dolores nam minima vero eius
        quo voluptate assumenda quis?
      </p>
    </div>
  );
}

function ProjectTechnologies() {
  return (
    <div className="w-full">
      <h2>Technologies</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quas.
      </p>
    </div>
  );
}

function ProjectText() {
  return (
    <p className="w-full flex items-center justify-center">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ipsa
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
      inventore ex sequi.
    </p>
  );
}

function ProjectPage() {
  return (
    <div className="w-full h-fit flex items-center justify-center pt-[10vh]">
      <div className="w-4/5 min-h-screen bg-white rounded-lg">
        <ProjectHeader />
        <ProjectBody>
          <ProjectDescription />
          <ProjectTechnologies />
          {/* <div className="w-full grid grid-cols-3 px-[10vw] gap-10">
            <div className="w-full aspect-[2/1] flex items-center justify-center border border-primary">
              asdf
            </div>
            <div className="w-full aspect-[2/1] flex items-center justify-center border border-primary">
              asdf
            </div>
            <div className="w-full aspect-[2/1] flex items-center justify-center border border-primary">
              asdf
            </div>
          </div> */}
          <ProjectText />
        </ProjectBody>
      </div>
    </div>
  );
}

export default ProjectPage;
