import { useEffect, useState } from "react";
import styles from "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/api";
import Section from "./components/Section/Section";

import Accordion from "./components/Accordion/Accordion";
// import Player from "./components/Player/Player";

function App() {
  const [data, setData] = useState([]);
  const [topAlbumsData, setAlbumsData] = useState([]);
  const [NewAlbumsData, setNewAlbumsData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [filteredDataValue, setFilteredDataValue] = useState([]);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const generateSongsData = (value) => {
    let key;
    if (value === 0) {
      filteredData(songsData);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    } else if (value === 3) {
      key = "jazz";
    } else if (value === 4) {
      key = "blues";
    }
    const res = songsData.filter((item) => item.genre.key === key);
    filteredData(res);
  };
  useEffect(() => {
    generateSongsData(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const generateTopAlbumsData = async () => {
    try {
      const data = await fetchTopAlbums();
      setAlbumsData(data);
      setData((prevData) => [...prevData, ...data]);
    } catch (e) {
      console.error(e);
    }
  };

  const generateNewAlbumsData = async () => {
    try {
      const data = await fetchNewAlbums();
      setNewAlbumsData(data);
      setData((prevData) => [...prevData, ...data]);
    } catch (e) {
      console.error(e);
    }
  };

  const generateAllSongsData = async () => {
    try {
      const data = await fetchSongs();
      setSongsData(data);
      setFilteredDataValue(data);
      setData((prevData) => [...prevData, ...data]);
    } catch (err) {
      console.error(err);
    }
  };
  const filteredData = (val) => {
    setFilteredDataValue(val);
  };
  useEffect(() => {
    generateTopAlbumsData();
    generateNewAlbumsData();
    generateAllSongsData();
  }, []);
  return (
    <div>
      <Navbar data={data} />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section
          data={topAlbumsData}
          type="album"
          title="Top Albums"
          filteredDataValues={data}
        />
        <Section
          data={NewAlbumsData}
          type="album"
          title="New Albums"
          filteredDataValues={data}
        />
        <hr
          className={styles.line}
          style={{
            borderColor: "var(--color-primary)",
            borderWidth: "2px",
            borderStyle: "solid",
          }}
        />

        <Section
          data={songsData}
          type="song"
          title="Songs"
          filteredData={filteredData}
          filteredDatavalues={filteredDataValue}
          value={value}
          handleChange={handleChange}
        />
        <hr
          className={styles.line}
          style={{
            borderColor: "var(--color-primary)",
            borderWidth: "2px",
            borderStyle: "solid",
          }}
        />
      </div>
      <div>
        <Accordion />
      </div>

      {/* <hr className={styles.player__horizontal}/>
      <Player /> */}
    </div>
  );
}

export default App;