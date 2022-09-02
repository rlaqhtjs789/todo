import React from "react";
import FormInput from "./components/Forminput";
import List from "./components/list";
import Header from "./components/Header";
import {DataProvider} from "./components/DataProvider"
import {useState, useEffect} from "react";
import style from "./index.css";


function App() {
  const [infos, setinfo] = useState([]);
  const [ctime, setCtime] = useState('');
  const urlApi = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
  const parentFunction = (x) => {
    setCtime(x);
  };
  const getTodays = () => {
      const config = {
          method: "get"
      };

      fetch(urlApi, config)
      .then(response => response.json())
      .then(data => {
          const unixTime = data.unixtime;
          const what_time = new Date(unixTime*1000);
          const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          const todayName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

          let month = what_time.getMonth()+1;
          month = monthName[month - 1];
          let date = what_time.getDate();
          let dateText = todayName[what_time.getDay()];
          let time = what_time.toLocaleString('en-US', {hour: "numeric", minute: "numeric" ,hour12: true});
          let timeinfoAll = [month, date, dateText, time];
          
          setinfo([...timeinfoAll]);
      })
      .catch(error => console.log("fetch 에러!"));
  }
  useEffect(() => {
      getTodays()
  },[]);

  return (
    <DataProvider>
      <div className="App">
        <Header month={infos[0]} date={infos[1]} dateText={infos[2]} />
        <FormInput parentFunction={parentFunction} />
        <List time={infos[3]} />
      </div>
    </DataProvider>
  );
}

export default App;
