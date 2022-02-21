import React, { useState } from "react";
import Confirm from "carbon-react-copy/lib/components/confirm";
import Button from "carbon-react-copy/lib/components/button";
import Dialog from "carbon-react-copy/lib/components/dialog";

const Component = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState(false);
  return (
    <>
      <Button onClick={() => setOpenDialog(true)}>Click me</Button>
      <Dialog
        open={openDialog}
        title="Dialog"
        onCancel={() => {
          setConfirmDialog(true);
        }}
      >
        Press ESC. You should see a confirm dialog.
      </Dialog>
      <Confirm
        open={confirmDialog}
        onCancel={() => {
          setConfirmDialog(false);
        }}
        onConfirm={() => {
          setConfirmDialog(false);
          setOpenDialog(false);
        }}
        showCloseIcon
        title="Confirm Dialog"
      >
        Press ESC. The confirm should close and the dialog remain open.
      </Confirm>
    </>
  );
};

export default Component;
