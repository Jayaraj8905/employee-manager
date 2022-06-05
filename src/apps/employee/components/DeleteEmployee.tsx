import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

const DeleteEmployee = ({ id, confirm }: { id: string, confirm: (id: string) => void}) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>Alert</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure to delete the employee?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => confirm(id)}>Yes</Button>
          <Button onClick={() => confirm('')}>No</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default React.memo(DeleteEmployee);
