import Avatar from "./Avatar";
import Date from "./Date";
import CoverImage from "./CoverImage";
import PostTitle from "./PostTitle";
import Categories from "./Categories";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden">
        <Avatar author={author} />
      </div>
      <div className="hidden">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <div className="hidden">
        <div className="block md:hidden mb-6">
          <Avatar author={author} />
        </div>
        <div className="hidden">
          Posted <Date dateString={date} />
          <Categories categories={categories} />
        </div>
      </div>
    </>
  );
}
