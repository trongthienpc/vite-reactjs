import React from "react";

const LiVerticalTimeline = ({ props }) => {
  return (
    <React.Fragment>
      <li className="event-list">
        <div className="event-timeline-dot">
          <i
            className={
              props.status.id === 3
                ? "bx bx-right-arrow-circle bx-fade-right"
                : "bx bx-right-arrow-circle"
            }
          />
        </div>
        <div className="media">
          <div className="me-3">
            <i
              className={"bx " + props.status.iconClass + " h2 text-primary"}
            />
          </div>
          <div className="media-body">
            <div>
              <h5>{props.status.statusTitle}</h5>
              <p className="text-muted">{props.status.description}</p>
            </div>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
};

export default LiVerticalTimeline;
