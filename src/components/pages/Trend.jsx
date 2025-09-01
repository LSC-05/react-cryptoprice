import { useContext, useState, useEffect } from 'react';
import { StateContext } from './../providers/StateContext';
import { TrendList } from './../blocks/TrendList';
import { getTrend } from '../providers/CryptoAPI';

export const Trend = () => {
  const [trendData, setTrendData] = useState();
  useEffect(()=>{
      (async ()=>{
        if(trendData !== undefined){
          return;
        }
        const data = await getTrend();
        setTrendData(data);
      })();
    },[]);

  return trendData !== undefined && <TrendList trendData={trendData} />;
};
