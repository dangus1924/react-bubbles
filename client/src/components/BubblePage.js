import React, { useState, useEffect } from "react";
import { axiosWithAuth as axios } from "axios";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [data, setData] = useState(false)

  useEffect(() => {
    axios()
      .get('./api/colors')
      .then(res => {
        setColorList(res.data)
      })
      .catch(err => {
        console.log(err, 'Bubble machine borken, I think it need a new battery')
      })
  }, [data])

  const makeData = () => {
    setData(!data)
  }
  return (
    <>
      <ColorList colors={colorList} makeData={makeData} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
