import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = category => {
  const [state, setstate] = useState({
    data: [],
    loading: true
  });
  //Los efectos no pueden ser async
  useEffect(() => {
    getGifs(category).then(imgs => {
      setstate({
        data: imgs,
        loading: false
      });
    });
  }, []); // [] sin dependencias, solo se ejecuta una vez

  return state; //{data: [], loading: true}
};
