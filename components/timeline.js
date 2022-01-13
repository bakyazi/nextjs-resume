import React from 'react'

function TimelineItem({ item }) {
  return (
    <div className="timeline-item">
      <div className="timeline-item-time">
        <div className="timeline-item-time-start">
          {item.startDate}
        </div>
        <div className="timeline-item-time-seperator">
          -
        </div>
        <div className="timeline-item-time-end">
          {item.endDate}
        </div>
      </div>
      <div className="timeline-item-detail">
      <p className="item-location">{item.location}</p>
        <p className="item-title">{item.title}</p>
        <p className="item-details">{item.description}</p>
      </div>
    </div>
  );
}

export default function Timeline({ title, titleIcon, items }) {
  return (
    <div className="timeline">
      <div className="timeline-title">
        {title}
      </div>
      <div className="timeline-items">
        {
          items.map(item => <TimelineItem item={item} />)
        }
      </div>
    </div>
  );
}
