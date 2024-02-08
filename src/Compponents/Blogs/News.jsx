

const News = ({ news }) => {


    const {title,author, urlToImage
    } = news;

  return (
    <div>
      <div className="card card-compact h-96 w-96 bg-base-100 shadow-xl my-4">
        <figure>
          <img
            src={urlToImage? urlToImage:"../Image/Hay.jpg"}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{author? author:"Opps ! This content is expired"}</h2>
          <p>{title? title:" Sorry! , there is no news here"}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"> Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
