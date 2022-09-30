const HomePage = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid">
        <h1 className="display-5 fw-bold">Why do you we need Test?</h1>
        <p className="col-md-8 fs-4">
          To guarantee our code quality. And to show the people that we also
          care about it and wish to give something that already proven, at least
          by ourself.
        </p>
        <a href="/comments">
          <button type="button" className="btn btn-primary mt-2">
            Comments List
          </button>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
