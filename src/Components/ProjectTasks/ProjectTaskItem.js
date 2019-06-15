import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProjectTask } from "../../actions/projectTaskActions";

class ProjectTaskItem extends Component {
  onDeleteClick(pt_id) {
    this.props.deleteProjectTask(pt_id);
  }

  render() {
    const { project_task } = this.props;
    return (
      <div class="card mb-1 bg-light">
        <div class="card-header text-primary">ID:{project_task.id}</div>
        <div class="card-body bg-light">
          <h5 class="card-title">{project_task.summary}</h5>
          <p class="card-text text-truncate ">
            {project_task.acceptanceCriteria}
          </p>
          <a href="" class="btn btn-primary">
            View / Update
          </a>

          <button
            class="btn btn-danger ml-4"
            onClick={this.onDeleteClick.bind(this, project_task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

ProjectTaskItem.propTypes = {
  deleteProjectTask: PropTypes.func.isRequired
}

export default connect(
  null,
  { deleteProjectTask }
)(ProjectTaskItem);


