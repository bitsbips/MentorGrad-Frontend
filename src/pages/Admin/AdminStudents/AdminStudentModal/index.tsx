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
import { notifyError, notifySuccess } from "../../../../components/Toastifycom";

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
  getAllUsers: () => void;
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
  getAllUsers,
}) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [fetchedUserType, setFetchedUserType] = React.useState("");
  const [fetchedVerified, setFetchedVerified] = React.useState(false);
  const [fetchedDeactivationStatus, setFetchedDeactivationStatus] =
    React.useState(false);
  const userTypeRef = React.useRef<HTMLInputElement>();
  const isVerifiedRef = React.useRef<HTMLInputElement>(null);
  const isDeactivatedRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserById(id).then((result) => {
          console.log(result.data);
          setFirstName(result.data.first_name || ""); // Set default to empty string if undefined
          setLastName(result.data.last_name || ""); // Set default to empty string if undefined
          setFetchedVerified(result.data.isverified);
          setFetchedUserType(result.data.userType);
          setFetchedDeactivationStatus(result.data.isDeactivated);
        })
      } catch (error) {
        console.error("Error fetching user data:", (error as Error).message);
      }
    };

    fetchData();
  }, [id]);

  const handleUpdate = () => {
    let finalUserType = fetchedUserType;
    let finalVerificationStatus = fetchedVerified;
    let finalDeactivationStatus = fetchedDeactivationStatus;

    if (
      ["Mentor", "Student"].includes(
        userTypeRef.current?.innerText.split("user")[0].split("\n")[0] as string
      )
    ) {
      finalUserType = userTypeRef.current?.innerText
        .split("user")[0]
        .split("\n")[0] as string;
    }

    if (
      ["Verified", "Unverified"].includes(
        isVerifiedRef.current?.innerText.split("is")[0].split("\n")[0] as string
      )
    ) {
      finalVerificationStatus =
        isVerifiedRef.current?.innerText.split("is")[0].split("\n")[0] ===
        "Verified";
    }

    if (
      ["Activated", "Deactivated"].includes(
        isDeactivatedRef.current?.innerText
          .split("Activation")[0]
          .split("\n")[0] as string
      )
    ) {
      finalDeactivationStatus =
        isDeactivatedRef.current?.innerText
          .split("Activation")[0]
          .split("\n")[0] === "Deactivated";
    }

    console.log(
      isDeactivatedRef.current?.innerText
        .split("Activation")[0]
        .split("\n")[0] as string
    );

    adminEditUser(id, {
      first_name: firstName,
      last_name: lastName,
      userType: finalUserType,
      isverified: finalVerificationStatus,
      isDeactivated: finalDeactivationStatus,
    })
      .then((response) => {
        notifySuccess("The user has been updated");
        setOpen(false);
        getAllUsers();
      })
      .catch((e) => notifyError("There was an error updating user"));
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
                  value={fetchedUserType}
                  onChange={(e) => {
                    const newUserType = e.target.value;
                    setFetchedUserType(newUserType);
                  }}
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
                  onChange={(e) => {
                    const newValue = e.target.value;
                    const isVerifiedValue = newValue === "Verified";
                    setFetchedVerified(isVerifiedValue);
                  }}
                  value={fetchedVerified ? "Verified" : "Unverified"}
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
                  value={fetchedDeactivationStatus ? "Deactivated" : "Activated"}
                  onChange={(e) => {
                    const newActivationStatus = e.target.value === "Deactivated";
                    setFetchedDeactivationStatus(newActivationStatus);
                    // Handle any other logic you need
                  }}
                  ref={isDeactivatedRef}
                >
                  <MenuItem value={"Activated"}>Activated</MenuItem>
                  <MenuItem value={"Deactivated"}>Deactivated</MenuItem>
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
