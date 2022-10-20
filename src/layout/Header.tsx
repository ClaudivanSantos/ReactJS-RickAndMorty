import Box from "@mui/material/Box";
import logo from "../assets/logo2.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "#6E22B5",
          padding: "10px",
          a: { textDecoration: "none" },
        }}
      >
        <Link
          style={{ textDecoration: "none" }}
          to={`/`}
        >
          <Box
            component="img"
            sx={{
              width: 110,
            }}
            alt="logo"
            src={logo}
          />
        </Link>
      </Box>
    </>
  );
}

export default Header;
