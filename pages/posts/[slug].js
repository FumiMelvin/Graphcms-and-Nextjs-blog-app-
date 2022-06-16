import { GraphQLClient, gql } from "graphql-request";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const graphcms = new GraphQLClient(
  "https://api-ap-southeast-2.graphcms.com/v2/cl4gzwbk41y0w01xv9r1h0zlx/master"
);

const MyQuery = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      datePublished
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(MyQuery, { slug });
  const post = data.post;

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default function BlogPost({ post }) {
  return (
    <>
      <Header />
      <main>
        <div className="container my-24 px-40 mx-auto">
          <div className="grid grid-cols-1 justify-center mb-32 text-gray-800">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg -mt-4"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img src={post.coverPhoto.url} alt="" className="w-full" />
            </div>
            <div className="">
              <p className="text-gray-500 mb-4">
                <small>
                  Published <u>{post.datePublished}</u> by {post.author.name}
                </small>
              </p>
            </div>
            <div className="">
              <h2>{post.title}</h2>
              <div
                className=""
                dangerouslySetInnerHTML={{ __html: post.content.html }}
              ></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
