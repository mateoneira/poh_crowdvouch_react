import React from "react"
import Status from "./Status"

function StatList({data}) {

  const count_registered = (data) => {
    var i = 0;
    var count = 0;
    while (i<data.length) {
      if(data[i].registered) count +=1;
      i+=1
    }
    return count;
  }

  const count_vouched = (data) => {
    var i = 0;
    var count = 0;
    while (i<data.length) {
      if(data[i].status === "PendingRegistration") count +=1;
      i+=1
    }
    return count;
  }

  const on_queue = (data) => {
    return data.length - count_registered(data) - count_vouched(data)
  }


  return (
    <div>
      <h3 className="text-center text-lg">
        Registered: {count_registered(data)}
        <br/>
        Vouched: {count_vouched(data)}
        <br/>
        Queue: {on_queue(data)}
      </h3>
      <br/>
      <hr />
      <h3 className="m-1 text-lg"> Crowdvoucher List</h3>
      <ul>
        {data.map(person => ( 
          <Status person={person} />
        ))}
      </ul>
    </div>
  );
}

export default StatList;
