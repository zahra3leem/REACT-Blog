import { Link } from "react-router-dom";
import zaghll from "../assets/1.jpg";
function PostsCard(props) {
  return (
    <>
      <div className="card card-compact bg-base-100 shadow-xl">
        <div className="h-[200px]">
          <img
            className="h-full w-full rounded-2xl"
            src={props?.data?.images || zaghll}
            alt="Shoes"
          />
        </div>
        <div className="card-body text-left">
          <h2 className="card-title">{props?.data?.title}</h2>
          <p className="text-sm text-slate-400 ">
            By: {props?.data?.user.name}
          </p>
          <p>{props?.data?.description}</p>
          <div className="card-actions justify-end">
            <Link
              to={`/details/${props?.data?._id}`}
              className=" hover:bg-slate-700  btn-outline 
            btn shadow-sm border-y-2 text-white bg-slate-700 focus:outline-none glass  "
            >
              {" "}
              More Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostsCard;
