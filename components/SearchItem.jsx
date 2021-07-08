import React from 'react';

const SearchItem = (props) => {

  return (
    <div className="card mb-3" style="max-width: 540px;">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="...">
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title" id="searchItem-bookTitle">Book Title</h5>

            <span>
              <p className="card-text">Author:</p>
              <p className="searchItem-author"></p>
            </span>
            
            <span>
              <p className="card-text">Year Published:</p>
              <p className="searchItem-year"></p>
            </span>

            <button type="button" className="btn btn-outline-success">Add to Shelf</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
