import React from "react";
import { Container } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import DataTable from "react-data-table-component";

function FilterComponent({ filterText, onFilter, onClear }) {
  return (
    <div className="d-flex mb-2">
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        value={filterText}
        onChange={onFilter}
      />
      <button className="btn btn-primary mx-2" onClick={onClear}>
        Clear
      </button>
    </div>
  );
}
const PageStarter = () => {
  document.title = "Starter Page | Vite React Admin & Dashboard Template";
  const data = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Smith", age: 30 },
    { id: 3, name: "Bob Johnson", age: 40 },
  ];

  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true },
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Age", selector: (row) => row.age, sortable: true },
  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = data.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Utility" breadcrumbItem="Starter Page" />

          <DataTable
            columns={columns}
            data={filteredItems}
            pagination={true}
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            selectableRows
            persistTableHead
          />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default PageStarter;
