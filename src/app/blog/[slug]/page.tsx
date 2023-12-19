import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'

async function getBlogData(id: string) {
  const apiUrl =
    "https://eu-central-1.aws.data.mongodb-api.com/app/data-vvcdg/endpoint/data/v1/action/findOne";

  const requestData = {
    dataSource: "exypnos",
    database: "bahadircan-blog-posts",
    collection: "blog-posts",
    filter: {
      _id: { $oid: id },
    },
  };

  const apiKey =
    "WVR6exPJ0816GYZuXZkhbsxzOrxr5jgVQHSKaVvaJ4jlKWHGUukbCx2CkuiRiFBN";

  let postsData = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/ejson",
      Accept: "application/json",
      apiKey: apiKey,
    },
    body: JSON.stringify(requestData),
    next: {
      revalidate: 30,
    }
  })
    .then((response) => response.json())
    .then((data) => {
      return data.document;
    })
    .catch((error) => console.error("Error:", error));

  return postsData;
}

type BlogPostHeaderProps = {
  title?: string;
};

function BlogPostHeader(props: BlogPostHeaderProps) {
  const { title } = props;
  return (
    <>
      <div className="w-full text-center text-7xl pb-[10vh]">{title}</div>
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

type BlogPostTextProps = {
  body?: string;
};

function BlogPostText(props: BlogPostTextProps) {
  const { body } = props;
  // console.log(body)
  return <div><Markdown remarkPlugins={[remarkGfm]}>{body}</Markdown></div>;
}

function BlogPostFooter() {
  return (
    <div className="w-full flex justify-between">
      <Link href="/blog/2">{"<- "} Next Post</Link>
      <Link href="/blog/3">Previous Post {" ->"}</Link>
    </div>
  );
}

async function BlogPage({ params }: { params: { slug: string } }) {
  const blogPost = await getBlogData(params.slug);

  return (
    <div className="w-full h-fit flex items-center justify-center pt-[10vh]">
      <div className="w-4/5 min-h-screen bg-white rounded-lg p-[5vw] flex flex-col justify-between">
        <div>
          <BlogPostHeader title={blogPost.title} />
          <BlogPostText body={blogPost.body} />
        </div>
        {/* <BlogPostFooter /> */}
      </div>
    </div>
  );
}

export default BlogPage;
