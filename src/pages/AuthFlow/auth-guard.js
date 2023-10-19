import PropTypes from "prop-types";
import { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------

export default function AuthGuard({ children }) {
  const navigate = useNavigate();

  const authenticated = localStorage.getItem("@storage_Key");

  const [checked, setChecked] = useState(false);

  const check = useCallback(() => {
    if (!authenticated) {
      navigate("/login");
    } else {
      setChecked(true);
    }
  }, [authenticated]);

  useEffect(() => {
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!checked) {
    return null;
  }

  return <>{children}</>;
}

AuthGuard.propTypes = {
  children: PropTypes.node,
};
