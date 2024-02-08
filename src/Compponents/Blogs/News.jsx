

const News = ({ news }) => {


    const {title,author, urlToImage
    } = news;

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl my-4">
        <figure>
          <img
            src={urlToImage}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{author? author:"pollob"}</h2>
          <p>{title}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"> Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
