import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

interface ICircular {
  Circular: boolean;
}

export function Loader({ Circular }: ICircular) {
  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={Circular}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
