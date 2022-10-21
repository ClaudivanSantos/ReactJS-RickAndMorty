import { Pagination } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

interface IPaginationProps {
  matches: boolean;
  page: number;
  count: number;
  currentPage: number;
  handleChange: (event: React.ChangeEvent<unknown>,
    value: number) => void;
}

export function PaginationListCharacters({
  matches,
  page,
  currentPage,
  count,
  handleChange,
}: IPaginationProps) {
  return (
    <>
      <Pagination
        defaultPage={1}
        variant="outlined"
        color="primary"
        sx={{
          marginTop: "25px",
          marginBottom: "25px",
          backgroundcolor: "#fff",
        }}
        size={matches ? "large" : "medium"}
        count={count}
        page={currentPage}
        onChange={handleChange}
      />
    </>
  );
}
