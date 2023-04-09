import { useEffect } from "react";
import { Container } from "reactstrap";

function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard | Skote - React Admin & Dashboard Template";
  }, []);

  return (
    <div className="page-content">
      <Container fluid>
        <h4>Dashboard</h4>
      </Container>
    </div>
  );
}

export default Dashboard;
