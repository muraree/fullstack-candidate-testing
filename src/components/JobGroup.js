import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from 'react-modal'
import { FaRegTimesCircle } from 'react-icons/fa'


const JobGroup = props => {
  const jobitems = props.jobitems;
  const index = props.index;

  const jobs_saved_count = props.jobs_saved_count;
  const setJobsSaved = props.setJobsSaved;

  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  const calcOldTimePost = date => {
    const oneDay = 24 * 60 * 60 * 1000;
    const dateini = new Date(date);
    const datenow = new Date();
    const days = Math.round(Math.abs((datenow - dateini) / oneDay));
    let salida = "";

    const weeksago = Math.trunc(days / 7);
    const daysago = days % 7;
    if (weeksago > 0 && daysago > 0) {
      salida = weeksago + " weeks ago and " + daysago + " days ago";
    } else if (weeksago === 0 && daysago > 0) {
      salida = days + " days ago";
    } else if (weeksago > 0 && daysago === 0) {
      salida = weeksago + " weeks ago";
    }

    return salida;
  };

  const openCloseJobDetail = id => {
    if (document.getElementById(id).style.display !== "block") {
      document.getElementById(id).style.display = "block";
    } else {
      document.getElementById(id).style.display = "none";
    }
  };

  const saveJobInProfile = () => {
    setJobsSaved(jobs_saved_count + 1);
  };

  const jobDetail = (item) => {
    setModalOpen(true)
    setModalContent(item)
  };

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <>
      <ul className="contentJobs" id={"jobs_".concat(index)}>
        {jobitems.map((item, indx) => (
          <li key={indx} className="jobData">
            <div
              className="row"
              onClick={() =>
                openCloseJobDetail("jobdetail_".concat(index, "_", indx))
              }
            >
              <div className="col-sm-10 divWP">
                <span className="spanBold">{item.job_title}</span>
                <div className="jobDescription">
                  {item.work_schedule} |{" "}
                  {item.salary_range.map(s => `$${s}`).join(" - ")} and hour |{" "}
                  {item.city}
                </div>
              </div>
              <div className="col-sm-2 postTime">
                {calcOldTimePost(item.created)}
              </div>
            </div>
            <div className="jobDetail" id={"jobdetail_".concat(index, "_", indx)}>
              <div className="row rowDetailJob">
                <div className="col-sm-4 divWP">
                  <span className="spanBold">Departament:</span>
                </div>
                <div className="col-sm-6 divWP detailJobDesc">
                  {item.department.join(", ")}
                </div>
                <div className="col-sm-2 divWP"></div>
              </div>
              <div className="row rowDetailJob">
                <div className="col-sm-4 divWP">
                  <span className="spanBold">Hours / shifts:</span>
                </div>
                <div className="col-sm-6 divWP detailJobDesc">
                  {item.hours} hours / {item.work_schedule}
                </div>
                <div className="col-sm-2 divWP"></div>
              </div>
              <div className="row rowDetailJob">
                <div className="col-sm-4 divWP">
                  <span className="spanBold">Summary</span>
                </div>
                <div className="col-sm-6 divWP detailJobDesc">
                  {item.description}
                </div>
                <div className="col-sm-2 divWP colTools">
                  <button className="btn blue-btn" onClick={()=>jobDetail(item)}>
                    Job details
                  </button>
                  <button className="btn white-btn" onClick={saveJobInProfile}>
                    Save job
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Modal
        isOpen={modalOpen}
        className="Modal"
        overlayClassName="Overlay"
        contentLabel="Login"
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 10101
          },
          content: {
            color: "black",
            zIndex: 10103
          }
        }}
      >
      <div className="modalWhiteBox">
        <div className="modalHeader">
          <div className="modalTitle">Job Details</div>
          <button
            className="btn btn-danger modalCloseBtn"
            onClick={closeModal}
          >
            <FaRegTimesCircle fontSize={20} />
          </button>
        </div>
        { modalContent && <div className="row modalBody">
          <div>
            <div className="row rowDetailJob">
              <div className="col-sm-4 divWP">
                <span className="spanBold">Departament:</span>
              </div>
              <div className="col-sm-6 divWP detailJobDesc">
                {modalContent.department.join(", ")}
              </div>
              <div className="col-sm-2 divWP"></div>
            </div>
            <div className="row rowDetailJob">
              <div className="col-sm-4 divWP">
                <span className="spanBold">Hours / shifts:</span>
              </div>
              <div className="col-sm-6 divWP detailJobDesc">
                {modalContent.hours} hours / {modalContent.work_schedule}
              </div>
              <div className="col-sm-2 divWP"></div>
            </div>
            <div className="row rowDetailJob">
              <div className="col-sm-4 divWP">
                <span className="spanBold">Summary</span>
              </div>
              <div className="col-sm-6 divWP detailJobDesc">
                {modalContent.description}
              </div>
            </div>
          </div>
        </div>}
      </div>
    </Modal>
  </>
  );
};

const mS = state => ({
  jobs_saved_count: state.mainReducer.jobs_saved_count
});

const mD = dispatch => ({
  setJobsSaved(jobs_saved_count) {
    dispatch({
      type: "SET_JOBS_SAVED",
      jobs_saved_count: jobs_saved_count
    });
  }
});

export default connect(mS, mD)(JobGroup);
