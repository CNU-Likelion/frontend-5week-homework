import React, { Todayday, Todaymonth, Todayyear } from "react";

function Todaydate() {
  const today = new Date();
  const [ Todayday ] = useState(today.getDate());
  const [ Todaymonth ] = useState(today.getMonth() + 1);
  const [ Todayyear ] = useState(today.getFullYear());

  return (
    <div>
      <Dday></Dday>
    </div>
  );
}

export default Todaydate;