import { Box, Button, Grid, Typography } from "@mui/material";

const StudentPaymentPlan = (props: any) => {
  return (
    <Grid
      item
      xs={12}
      md={3.75}
      sx={{
        width: "390px",
        backgroundColor: "white",
        borderRadius: "20px",
        px: 2,
        py: 4,
      }}
    >
      <Box sx={{ borderBottom: "2px solid #7476D1" }}>
        <Typography variant="h5" sx={{ fontWeight: 600, color: "#7476D1" }}>
          {props.title}
        </Typography>
        <Typography sx={{ fontSize: "13px", color: "#8B8B8B", my: 2 }}>
          {props.desc}
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: "#146FD1", my: 3, fontWeight: 600 }}
        >
          <span>${props.price}</span>
          <span style={{ fontSize: "24px" }}>/Monthly</span>
        </Typography>
      </Box>
      <Box sx={{ my: 2 }}>
        {props.infoPoints.map((point: any) => (
          <Box sx={{ my: 2, color: "#8B8B8B", display: "flex" }}>
            <img
              src={
                point.isActive
                  ? "./studentSubscriptionPropertyApproved.png"
                  : "studentSubscriptionPropertyNotApproved.png"
              }
              alt="studentSubscriptionPropertyApproved"
              style={{ marginRight: "auto", width: "20px", height: "20px" }}
            />
            <Typography sx={{ width: "100%" }}>{point.title}</Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ width: "100%", mt: 5 }}>
        <Button
          sx={{
            border: "1px solid #7476D1",
            width: "100%",
            borderRadius: "12px",
          }}
          variant={props.isCurrentSub ? "outlined" : "contained"}
        >
          {props.isCurrentSub ? "current" : "upgrade"}
        </Button>
      </Box>
    </Grid>
  );
};
export default StudentPaymentPlan;
