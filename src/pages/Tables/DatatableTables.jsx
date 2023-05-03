// src/components/filter.
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { CSVLink, CSVDownload } from "react-csv";
//import components
import Breadcrumbs from "../../components/Common/Breadcrumb";
import DataTable from "react-data-table-component";
import "./dataTable.css";
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

function DatatableTables() {
  const columns = [
    {
      name: "Name",
      selector: (row) => highlightFilterText(row.name, filterText),
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => highlightFilterText(row.age.toString(), filterText),
      sortable: true,
    },
    {
      name: "Position",
      selector: (row) => highlightFilterText(row.position, filterText),
      sortable: true,
    },
    {
      name: "Office",
      selector: (row) => highlightFilterText(row.office, filterText),
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => highlightFilterText(row.startDate, filterText),
      sortable: true,
    },
    {
      name: "Salary",
      selector: (row) => highlightFilterText(row.salary, filterText),
      sortable: true,
    },
  ];

  const data = [
    {
      name: "Jennifer Chang",
      position: "Regional Director",
      age: 28,
      office: "Singapore",
      startDate: "2010/11/14",
      salary: "$357,650",
    },
    {
      name: "Gavin Joyce",
      position: "Developer",
      age: 42,
      office: "Edinburgh",
      startDate: "2010/12/22",
      salary: "$92,575",
    },
    {
      name: "Angelica Ramos",
      position: "Chief Executive Officer (CEO)",
      age: 47,
      office: "London",
      startDate: "2009/10/09",
      salary: "$1,200,000",
    },
    {
      name: "Doris Wilder",
      position: "Sales Assistant",
      age: 23,
      office: "Sidney",
      startDate: "2010/09/20",
      salary: "$85,600",
    },
    {
      name: "Caesar Vance",
      position: "Pre-Sales Support",
      age: 21,
      office: "New York",
      startDate: "2011/12/12",
      salary: "$106,450",
    },
    {
      name: "Yuri Berry",
      position: "Chief Marketing Officer (CMO)",
      age: 40,
      office: "New York",
      startDate: "2009/06/25",
      salary: "$675,000",
    },
    {
      name: "Jenette Caldwell",
      position: "Development Lead",
      age: 30,
      office: "New York",
      startDate: "2011/09/03",
      salary: "$345,000",
    },
    {
      name: "Dai Rios",
      position: "Personnel Lead",
      age: 35,
      office: "Edinburgh",
      startDate: "2012/09/26",
      salary: "$217,500",
    },
    {
      name: "Bradley Greer",
      position: "Software Engineer",
      age: 41,
      office: "London",
      startDate: "2012/10/13",
      salary: "$132,000",
    },
    {
      name: "Gloria Little",
      position: "Systems Administrator",
      age: 59,
      office: "New York",
      startDate: "2009/04/10",
      salary: "$237,500",
    },
    {
      name: "Paul Byrd",
      position: "Chief Financial Officer (CFO)",
      age: 64,
      office: "New York",
      startDate: "2010/06/09",
      salary: "$725,000",
    },
    {
      name: "Michael Silva",
      position: "Marketing Designer",
      age: 66,
      office: "London",
      startDate: "2012/11/27",
      salary: "$198,500",
    },
    {
      name: "Tatyana Fitzpatrick",
      position: "Regional Director",
      age: 19,
      office: "London",
      startDate: "2010/03/17",
      salary: "$385,750",
    },
    {
      name: "Haley Kennedy",
      position: "Senior Marketing Designer",
      age: 43,
      office: "London",
      startDate: "2012/12/18",
      salary: "$313,500",
    },
    {
      name: "Charde Marshall",
      position: "SRegional Director",
      age: 36,
      office: "San Francisco",
      startDate: "2008/10/16",
      salary: "$470,600",
    },
    {
      name: "Quinn Flynn",
      position: "Support Lead",
      age: 22,
      office: "Edinburgh",
      startDate: "2013/03/03",
      salary: "$342,000",
    },
    {
      name: "Jena Gaines",
      position: "Office Manager",
      age: 30,
      office: "London",
      startDate: "2008/12/19",
      salary: "$90,560",
    },
    {
      name: "Sonya Frost",
      position: "Software Engineer",
      age: 23,
      office: "Edinburgh",
      startDate: "2008/12/13",
      salary: "$103,600",
    },
    {
      name: "Colleen Hurst",
      position: "Javascript Developer",
      age: 39,
      office: "San Francisco",
      startDate: "2009/09/15",
      salary: "$205,500",
    },
    {
      name: "Rhona Davidson",
      position: "Integration Specialist",
      age: 55,
      office: "Tokyo",
      startDate: "2010/10/14",
      salary: "$327,900",
    },
    {
      name: "Herrod Chandler",
      position: "Sales Assistant",
      age: 59,
      office: "San Francisco",
      startDate: "2012/08/06",
      salary: "$137,500",
    },
    {
      name: "Brielle Williamson",
      position: "Integration Specialist",
      age: 62,
      office: "New York",
      startDate: "2012/12/02",
      salary: "$372,000",
    },
    {
      name: "Airi Satou",
      position: "Accountant",
      age: 33,
      office: "Tokyo",
      startDate: "2008/11/28",
      salary: "$162,700",
    },
    {
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      age: 22,
      office: "Edinburgh",
      startDate: "2012/03/29",
      salary: "$433,060",
    },
    {
      name: "Ashton Cox",
      position: "Junior Technical Author",
      age: 66,
      office: "San Francisco",
      startDate: "2009/01/12",
      salary: "$86,000",
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      age: 63,
      office: "Tokyo",
      startDate: "2011/07/25",
      salary: "$170,750",
    },
    {
      name: "Tiger Nixon",
      position: "System Architect",
      age: 61,
      office: "Edinburgh",
      startDate: "2011/04/25",
      salary: "$320,800",
    },
  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const filteredItems = data.filter((item) =>
    ["name", "office", "position", "startDate", "age"].some((key) => {
      const value = item[key];
      if (typeof value === "string") {
        const match = value.toLowerCase().includes(filterText.toLowerCase());
        if (match) {
          item.matchedField = key; // Add a property to the item to indicate the matched field
        }
        return match;
      } else if (typeof value === "number") {
        const match = value.toString().includes(filterText);
        if (match) {
          item.matchedField = key;
        }
        return match;
      }
      return false;
    })
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

  function highlightFilterText(text, filterText) {
    const regex = new RegExp(`(${filterText})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) => {
      if (part.toLowerCase() === filterText.toLowerCase()) {
        return (
          <span key={i} style={{ backgroundColor: "yellow" }}>
            {part}
          </span>
        );
      } else {
        return <span key={i}>{part}</span>;
      }
    });
  }

  //meta title
  document.title = "Data Tables | Skote - React Admin & Dashboard Template";

  const CustomExportCSV = ({ title, data }) => {
    console.log("data :>> ", data);
    const csvData = React.useMemo(() => {
      const header = columns.map((column) => column.name);
      console.log("header :>> ", header);
      const rows = data.map((item) =>
        columns.map((column) => {
          // console.log("item[column.selector] :>> ", column);
          return item[column.name.toLowerCase()];
        })
      );
      console.log("rows :>> ", rows);
      return [header, ...rows];
    }, [data]);

    return (
      <CSVLink
        data={csvData}
        filename={`${title}.csv`}
        className="btn btn-primary float-end ms-2"
        target="_blank"
      >
        Export CSV
      </CSVLink>
    );
  };

  const actions = React.useMemo(
    () => <CustomExportCSV title="csv-export-test" data={filteredItems} />,
    [filteredItems]
  );
  return (
    <div className="page-content">
      <div className="container-fluid">
        <Breadcrumbs title="Tables" breadcrumbItem="Data Tables" />

        <DataTable
          columns={columns}
          data={filteredItems}
          pagination={true}
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          selectableRows
          persistTableHead
          highlightOnHover
          actions={actions}
        />
      </div>
    </div>
  );
}
DatatableTables.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default DatatableTables;
