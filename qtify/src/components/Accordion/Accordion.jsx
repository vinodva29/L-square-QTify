import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";

const FAQ = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionStyle = {
    background: "var(--color-black)",
    color: "white",
    width: "100%",
    margin: "0 auto",
    border: "1px solid white",
    borderRadius: "10px",
    marginBottom: "8px",
  };

  const expandIconStyle = {
    color: "green",
  };

  const accordionDetailsStyle = {
    background: "whiteSmoke",
    padding: "16px",
    color: "black",
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Typography
          variant="h3"
          sx={{
            marginBottom: "20px",
            color: "white",
            fontWeight: "600",
            fontSize: "50px",
            textAlign: "center",
            padding: "15px",
          }}
        >
          FAQs
        </Typography>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={accordionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={expandIconStyle} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ color: "white" }}>
              Is Qtify free to use?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={accordionDetailsStyle}>
            <Typography sx={{ color: "black" }}>
              Yes! It is 100% free, and has 0% ads!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={accordionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={expandIconStyle} />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ color: "white" }}>
              Can I download and listen to songs offline?
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={accordionDetailsStyle}>
            <Typography sx={{ color: "black" }}>
              Sorry, unfortunately we don't provide the service to download any
              songs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default FAQ;