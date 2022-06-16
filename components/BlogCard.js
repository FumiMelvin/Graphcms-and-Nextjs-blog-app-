import Link from "next/link";
import Image from "next/image";

export default function BlogPost({
  title,
  author,
  coverPhoto,
  datePublished,
  slug,
}) {
  return (
    <div className="container my-24 px-6 mx-auto">
      <div className="mb-32 text-gray-800 text-center">
        <h2 className="text-3xl font-semibold mb-12 pb-4 text-center">
          Latest Articles
        </h2>

        <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
          <div className="mb-6 lg:mb-0">
            <div className="relative block bg-white rounded-lg shadow-lg">
              <div className="flex">
                <div
                  className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img src={coverPhoto.url} alt="" className="w-full" />
                </div>
              </div>
              <div className="p-6">
                <h5 className="font-bold text-lg mb-3">{title}</h5>
                <p className="text-gray-500 mb-4">
                  <small>
                    Published <u>{datePublished}</u> by {author.name}
                  </small>
                </p>
                <Link
                  href={"/posts/" + slug}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className=""
                >
                  Read Blog Post
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
