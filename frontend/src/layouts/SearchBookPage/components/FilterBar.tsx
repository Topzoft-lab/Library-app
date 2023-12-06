export const FilterBar: React.FC<{ onSearchTermChange: any; onButtonClicked: any; categoryValue: string; categoryAction: any }> = (props) => {
  return (
    <div className="row mt-5 ">
      <div className="col-6">
        <div className="d-flex">
          <input className="form-control me-2" type="search" placeholder="search" aria-labelledby="search" onChange={(e) => props.onSearchTermChange(e.target.value)} />
          <button className="btn btn-outline-success" onClick={props.onButtonClicked}>
            Search
          </button>
        </div>
      </div>
      <div className="col-4">
        <CategoryFilter action={props.categoryAction} value={props.categoryValue} />
      </div>
    </div>
  );
};

const CategoryFilter: React.FC<{ action: any; value: string }> = (props) => {
  const { action, value } = props;
  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        {value}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li onClick={() => action("All")}>
          <a className="dropdown-item" href="#">
            All
          </a>
        </li>
        <li onClick={() => action("FE")}>
          <a className="dropdown-item" href="#">
            Front End
          </a>
        </li>
        <li onClick={() => action("BE")}>
          <a className="dropdown-item" href="#">
            Back End
          </a>
        </li>
        <li onClick={() => action("Data")}>
          <a className="dropdown-item" href="#">
            Data
          </a>
        </li>
        <li onClick={() => action("DevOps")}>
          <a className="dropdown-item" href="#">
            DevOps
          </a>
        </li>
      </ul>
    </div>
  );
};
