import React, { useState } from "react";
import Modal from "react-modal";

const WhiteBox = props => {
  const maxitemslist = 10;
  const title = props.title;
  const list = props.list;
  const modaldata = props.modaldata;
  const action = props.action;

  const [openModalDepartaments, setOpenModalDepartaments] = useState(false);

  const openModal = () => {
    setOpenModalDepartaments(true);
  };

  const closeModal = () => {
    setOpenModalDepartaments(false);
  };

  const actionModal = key => {
    action(key);
    closeModal();
  };

  return (
    <div className="whitebox-content">
      <div className="whitebox-title">{title}</div>
      <ul className="whitebox-data">
        {list.map(l => (
          <li key={l.key} onClick={() => action(l.key)}>
            {l.key}
            <span className="item-count">{l.doc_count}</span>
          </li>
        ))}
        {list.length >= maxitemslist ? (
          <li className="list-showmore" onClick={openModal}>
            Show more
          </li>
        ) : null}
      </ul>
      <Modal
        isOpen={openModalDepartaments}
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
            <div className="modalTitle">{title.toLowerCase()}</div>
            <button
              className="btn btn-danger modalCloseBtn"
              onClick={closeModal}
            />
          </div>
          <div className="row modalBody">
            {modaldata.map(data => (
              <div
                className="col-sm-3 modalDataItem"
                key={data.key}
                onClick={() => actionModal(data.key)}
              >
                {data.key} <span className="item-count">{data.doc_count}</span>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

Modal.setAppElement("body");

export default WhiteBox;
