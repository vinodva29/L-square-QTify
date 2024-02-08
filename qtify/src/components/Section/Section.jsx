import React from "react";
import styles from "./Section.module.css";
import { Box, CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../Tabs/Tabs";

const Section = ({
  title,
  data,
  type,
  filteredData = null,
  filteredDatavalues = [],
  toggle = false,
  handleToggle = null,
  value = 0,
  handleChange = null,
}) => {
  // const [carouselToggle, setCarouselToggle] = useState(true);
  // const handleToggle = () => {
  //   setCarouselToggle(!carouselToggle);
  // };

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!toggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {type === "song" ? (
        <BasicTabs value={value} handleChange={handleChange} />
      ) : null}
      {data.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className={styles.cardsWrapper}>
          {toggle ? (
            <div className={styles.wrapper}>
              {data.map((item) => {
                return <Card data={item} type={type} />;
              })}
            </div>
          ) : (
            // {!carouselToggle ? (
            //   <div className={styles.wrapper}>
            //     {data.map((item) => (
            //       <Card data={item} type={type} />
            //     ))}
            //   </div>
            // ) }
            <Carousel
              data={type === "song" ? filteredDatavalues : data}
              renderComponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};
export default Section;