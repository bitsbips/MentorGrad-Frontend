import { Box, Button, Grid, Typography } from "@mui/material";
import StudentPaymentPlan from "../../components/StudentPaymentPlan";

const StudentSubscriptionPage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box sx={{ ml: "auto" }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Pick the Plan That Is Right For You
          </Typography>
          <Typography sx={{ color: "#8B8B8B", mt: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            condimentum mi et vehicula vulputate.
          </Typography>
        </Box>
        <Button
          sx={{
            ml: "auto",
            width: "141px",
            height: "39px",
            borderRadius: "12px",
          }}
          variant="contained"
        >
          Cancel Plan
        </Button>
      </Box>
      <Box sx={{ mt: 5, display: "flex" }}>
        <Grid container gap={2}>
          <StudentPaymentPlan
            title={"Basic"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            price={5}
            timePeriod={"Monthly"}
            infoPoints={[
              { title: "Lorem ipsum", isActive: true },
              { title: "Lorem ipsum", isActive: true },
              { title: "Lorem ipsum", isActive: true },
              { title: "Lorem ipsum", isActive: true },
              { title: "Lorem ipsum", isActive: true },
              { title: "Lorem ipsum", isActive: true },
            ]}
            isCurrentSub={true}
          />
          <StudentPaymentPlan
            title={"Advance"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            price={50}
            timePeriod={"Monthly"}
            infoPoints={[
              { title: "Lorem ipsum", isActive: true },
              { title: "Lorem ipsum", isActive: true },
              { title: "Lorem ipsum", isActive: true },
              { title: "Lorem ipsum", isActive: true },
              { title: "Lorem ipsum", isActive: true },
              { title: "Lorem ipsum", isActive: true },
            ]}
            isCurrentSub={false}
          />
          <StudentPaymentPlan
            title={"Premium"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            price={150}
            timePeriod={"Yearly"}
            infoPoints={[
              { title: "Lorem ipsum", isActive: false },
              { title: "Lorem ipsum", isActive: true },
              { title: "Lorem ipsum", isActive: true },
              { title: "Lorem ipsum", isActive: true },
              { title: "Lorem ipsum", isActive: true },
              { title: "Lorem ipsum", isActive: true },
            ]}
            isCurrentSub={false}
          />
        </Grid>
      </Box>
    </>
  );
};
export default StudentSubscriptionPage;
