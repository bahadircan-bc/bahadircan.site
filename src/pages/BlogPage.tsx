import { Link } from "react-router-dom";

function BlogPostHeader() {
  return (
    <>
      <div className="w-full text-center text-7xl pb-[10vh]">Blog Post 1</div>
      <div>
        <img
          className="w-1/2 aspect-video object-cover rounded-lg float-right mb-5 ml-5"
          src="https://source.unsplash.com/random/?sig=1"
          alt="The forger family picture"
        />
      </div>
    </>
  );
}

function BlogPostText() {
  return (
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt velit
      repellendus harum labore quas saepe ipsum repudiandae porro sunt! Optio
      molestias ex ullam excepturi, explicabo expedita! Quam harum quo hic.
      Sunt, dicta doloribus. Ea perferendis porro, laborum officiis et, earum
      facilis debitis adipisci quidem odit rem incidunt hic in sunt minima eaque
      quam, saepe veniam aperiam? Distinctio quas sapiente expedita? Assumenda
      at ipsa temporibus repellendus quae, tempora odio culpa adipisci nostrum
      similique molestias quibusdam nihil dicta officia aspernatur aliquam,
      excepturi laboriosam placeat corporis? Quia tenetur cumque enim aperiam
      assumenda explicabo! Corporis nostrum recusandae laudantium sit ullam
      placeat non? Explicabo molestias, repudiandae necessitatibus ducimus iure
      facere dolorum! Veritatis vitae enim esse, est animi totam magnam non
      sint! Asperiores id porro possimus! Consequuntur atque aspernatur rem
      ratione amet facilis deserunt minima tenetur nisi neque, obcaecati
      quibusdam. Sit beatae quaerat sunt, ullam in assumenda atque quia quidem
      laudantium sequi saepe? Dolore, possimus nulla. Vel, similique aspernatur
      vero ipsa porro rerum nisi ad. Maxime, incidunt recusandae optio
      perspiciatis enim suscipit quis iure, harum ratione cupiditate saepe
      pariatur voluptate. Nulla temporibus totam in ex minus. Est unde
      reiciendis nobis rerum nemo earum, esse cupiditate modi perspiciatis
      blanditiis omnis assumenda culpa error tempora placeat animi. Quasi
      voluptate beatae vel, consectetur aliquam deleniti repellendus? Nostrum,
      eius veniam! Officia sequi et dolores facere, consequuntur eveniet
      placeat. Voluptatibus ex voluptate sed, dolorum saepe asperiores aperiam
      sit consequuntur fuga ab placeat assumenda laborum eveniet iusto similique
      nostrum error? Quidem, accusantium.
    </div>
  );
}

function BlogPostFooter() {
  return (
    <div className="w-full flex justify-between">
      <Link to="/blog/2">{'<- '} Next Post</Link>
      <Link to="/blog/3">Previous Post {' ->'}</Link>
    </div>
  );
}

function BlogPage() {
  return (
    <div className="w-full h-fit flex items-center justify-center pt-[10vh]">
      <div className="w-4/5 min-h-screen bg-white rounded-lg p-[5vw] flex flex-col justify-between">
        <div>
        <BlogPostHeader />
        <BlogPostText />
        </div>
        <BlogPostFooter />
      </div>
    </div>
  );
}

export default BlogPage;
