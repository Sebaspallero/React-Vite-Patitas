import Snackbar from '@mui/material/Snackbar';

export const SuccesSnackbar = () =>{
    return(
        <Snackbar
        open={open}
        autoHideDuration={2000}
        /* onClose={handleClose} */
        message="Mensaje Enviado!"
        action={action}
      />
    )
}

export const ErrorSnackbar = () =>{
    return(
        <Snackbar
        open={open}
        autoHideDuration={2000}
        /* onClose={handleClose} */
        message="Verifique todos los campos"
        action={action}
      />
    )
}