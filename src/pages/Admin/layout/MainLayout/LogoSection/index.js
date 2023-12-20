import { Link as RouterLink } from "react-router-dom";

// material-ui
import { Link } from "@mui/material";


// project imports
import { DASHBOARD_PATH } from "../../../config";
import Logo from "../../../../../Assets/Images/MG_Logo.png";
// import Logo from "../../../../../Assets/Images/MG_Logo.png"

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
  <Link component={RouterLink} to={DASHBOARD_PATH} aria-label="berry logo">
    {/* <Logo /> */}
    <img
              src={Logo}
              alt="Logo"
              style={{ width: '100%', objectFit: 'cover' }}
            />
  </Link>
);

export default LogoSection;
