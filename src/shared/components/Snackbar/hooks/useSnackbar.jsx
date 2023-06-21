import { useState } from "react"

export const useSnackbar = () =>{
    const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return{
    handleClick,
    handleClose,
    open
  }
}