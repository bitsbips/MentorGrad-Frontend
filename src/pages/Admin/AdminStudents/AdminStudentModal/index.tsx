import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { adminEditUser, getUserById } from "../../../../api";

interface ObjectToUpdate {
  first_name: string;
  last_name: string;
  userType: string;
  isverified: boolean;
  isDeactivated: boolean;
}

interface AdminMentorModalProps {
  id: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const AdminMentorModal: React.FC<AdminMentorModalProps> = ({
  id,
  open,
  setOpen,
}) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const userTypeRef = React.useRef<HTMLInputElement>();
  const isVerifiedRef = React.useRef<HTMLInputElement>(null);
  const isDeactivatedRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserById(id);

        setFirstName(userData.data.first_name || ""); // Set default to empty string if undefined
        setLastName(userData.data.last_name || ""); // Set default to empty string if undefined
        // Set default values for the dropdowns
        if (userTypeRef.current) {
          userTypeRef.current.value = userData.data.userType || "Mentor";
        }

        if (isVerifiedRef.current) {
          isVerifiedRef.current.value = userData.data.isverified ? "Verified" : "Unverified";
        }

        if (isDeactivatedRef.current) {
          isDeactivatedRef.current.value = userData.data.isDeactivated ? "Deactivated" : "Activated";
        }
      } catch (error) {
        console.error("Error fetching user data:", (error as Error).message);
      }
    };

    fetchData();
  }, [id]);

  const handleUpdate = () => {
    adminEditUser(id, {
      first_name: firstName,
      last_name: lastName,
      userType: userTypeRef.current?.innerText.split("user")[0].split("\n")[0],
      isverified:
        isVerifiedRef.current?.innerText.split("is")[0].split("\n")[0] ===
        "Verified",
      isDeactivated:
        isDeactivatedRef.current?.innerText
          .split("Activation")[0]
          .split("\n")[0] === "Deactivate",
    })
      .then((response) => console.log("User updated"))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container columnGap={0.5} rowGap={3}>
            <Grid item xs={11} md={5.5}>
              <Input
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={11} md={5.5}>
              <Input
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={11}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">User Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="userType"
                  ref={userTypeRef}
                >
                  <MenuItem value={"Mentor"}>Mentor</MenuItem>
                  <MenuItem value={"Student"}>Student</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={11}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Verification Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="isVerified"
                  ref={isVerifiedRef}
                >
                  <MenuItem value={"Verified"}>Verified</MenuItem>
                  <MenuItem value={"Unverified"}>Unverified</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={11}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Activation Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Activation Status"
                  ref={isDeactivatedRef}
                >
                  <MenuItem value={"Activated"}>Activate</MenuItem>
                  <MenuItem value={"Deactivated"}>Deactivate</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={11}>
              <Button
                variant="contained"
                sx={{ width: "100%" }}
                onClick={handleUpdate}
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default AdminMentorModal;
