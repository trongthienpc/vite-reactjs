import React from "react";
import { Container } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";

const PageStarter = () => {
  document.title = "Starter Page | Vite React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Utility" breadcrumbItem="Starter Page" />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Page;
