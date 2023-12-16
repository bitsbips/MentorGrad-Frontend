import { Link as RouterLink } from "react-router-dom";

// material-ui
import { Link } from "@mui/material";


// project imports
import { DASHBOARD_PATH } from "../../../config";
import Logo from "../../../ui-component/Logo";
// import Logo from "../../../../../Assets/Images/MG_Logo.png"

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
  <Link component={RouterLink} to={DASHBOARD_PATH} aria-label="berry logo">
    <Logo />
  </Link>
);

export default LogoSection;
