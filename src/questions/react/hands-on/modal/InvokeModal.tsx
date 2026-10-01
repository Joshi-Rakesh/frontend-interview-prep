import { Button } from "antd";
import { useState } from "react";
import Modal from "./Modal";

const InvokeModal = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button onClick={() => setShow(true)}>Click here to open modal</Button>
      <Modal show={show} onClose={() => setShow(false)}>
        <div>
          <h1>Modal Title</h1>
          <div>description</div>
        </div>
      </Modal>
    </div>
  );
};

export default InvokeModal;
