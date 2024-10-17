import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineItems, icons } from "../../utils/TimelineConstants";
import "./Timeline.css"; // Import the external CSS

const Timeline = () => {
  return (
    <div>
      {/* <h1 className="timeline-heading">Timeline</h1> */}

      <div className="timeline-container">
        <VerticalTimeline>
          {timelineItems.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              date={<div className="timeline-date">{item.date}</div>}
              className={index % 2 === 0 ? "even-timeline-element" : "odd-timeline-element"}
            //   iconStyle="timeline-icon"
              iconClassName="timeline-icon"
              icon={icons[index]}
            >
              <h3 className="timeline-title">{item.title}</h3>
              <h4 className="timeline-subtitle">{item.location}</h4>
              <p>{item.content}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;
