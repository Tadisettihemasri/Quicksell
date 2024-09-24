import React from 'react';
import './taskboard.css';

const TaskCard = ({ id, title, tag, avatar }) => (
  <div className="task-card">
    <div className="task-id">{id}</div>
    <div className="task-title">{title}</div>
    <div className="task-footer">
      <span className="task-tag">{tag}</span>
      {avatar && <img src={`/api/placeholder/24/24`} alt="Avatar" className="task-avatar" />}
    </div>
  </div>
);

const TaskColumn = ({ title, count, tasks }) => (
  <div className="task-column">
    <div className="column-header">
      <span className="column-title">{title}</span>
      <span className="task-count">{count}</span>
      <button className="add-task">+</button>
      <button className="more-options">...</button>
    </div>
    <div className="task-list">
      {tasks.map(task => <TaskCard key={task.id} {...task} />)}
    </div>
  </div>
);

const TaskBoard = () => {
  const columns = [
    {
      title: "Todo",
      count: 3,
      tasks: [
        { id: "CAM-4", title: "Add Multi-Language Support", tag: "Feature Request", avatar: "/avatar1.jpg" },
        { id: "CAM-2", title: "Implement Email Notification System", tag: "Feature Request", avatar: "/avatar2.jpg" },
        { id: "CAM-1", title: "Update User Profile Page UI", tag: "", avatar: "/avatar3.jpg" },
      ]
    },
    {
      title: "In Progress",
      count: 1,
      tasks: [
        { id: "CAM-3", title: "Optimize Database Queries for Performance", tag: "Feature Request", avatar: "/avatar4.jpg" },
      ]
    },
    {
      title: "Done",
      count: 5,
      tasks: [
        { id: "CAM-6", title: "Enhance Search Functionality", tag: "Feature Request", avatar: "/avatar5.jpg" },
        { id: "CAM-7", title: "Integrate Third-Party Payment Gateway", tag: "Feature Request", avatar: "/avatar6.jpg" },
        { id: "CAM-11", title: "Conduct Security Vulnerability Assessment", tag: "Feature Request", avatar: "/avatar7.jpg" },
        { id: "CAM-10", title: "Upgrade Server Infrastructure", tag: "Feature Request", avatar: "/avatar8.jpg" },
        { id: "CAM-9", title: "Implement Role-Based Access Control (RBAC)", tag: "Feature Request", avatar: "/avatar9.jpg" },
      ]
    },
    {
      title: "Canceled",
      count: 0,
      tasks: []
    }
  ];

  return (
    
    <div className="task-board">
      <div className="board-header">
        <div className="display-dropdown">
          <span>Display</span>
          <span className="dropdown-arrow">▼</span>
        </div>
        <div className="filter-options">
          <div className="filter-option">
            <span>Grouping</span>
            <span className="dropdown-value">Status</span>
            <span className="dropdown-arrow">▼</span>
          </div>
          <div className="filter-option">
            <span>Ordering</span>
            <span className="dropdown-value">Priority</span>
            <span className="dropdown-arrow">▼</span>
          </div>
        </div>
      </div>
      <div className="board-columns">
        {columns.map(column => (
          <TaskColumn key={column.title} {...column} />
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;