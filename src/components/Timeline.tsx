import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./style/Timeline.scss";

const Timeline = () => {
  return (
    <div className="container__timeline">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Start coding</h3>
          <p>creating the first pages</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Starting postgraduate studies in frontend
          </h3>
          <p>creating the first advanced website</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2044"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <p>Ekstra xDDDDDDD</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
