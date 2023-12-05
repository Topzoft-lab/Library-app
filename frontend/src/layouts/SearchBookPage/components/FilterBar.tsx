export const FilterBar = () => {
  return (
    <div className="row mt-5 ">
      <div className="col-6">
        <div className="d-flex">
          <input className="form-control me-2" type="search" placeholder="search" aria-labelledby="search" />
          <button className="btn btn-outline-success">Search</button>
        </div>
      </div>
      <div className="col-4">
        <CategoryFilter />
      </div>
    </div>
  );
};

const CategoryFilter = () => {
  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Category
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a className="dropdown-item" href="#">
            All
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Front End
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Back End
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Data
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            DevOps
          </a>
        </li>
      </ul>
    </div>
  );
};
