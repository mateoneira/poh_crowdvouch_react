import React from "react"

function Status({person}) {

    const get_vouched = (person) => {
        if (person.vouched_by.length === 0) {
            if (person.registered  || person.status === "PendingRegistration"){ return 'external'}
            else{
                return ""
            }
        }
        else{
            return person.vouched_by[0]
        }
    }

  return (
    <div className="flex m-1 bg-gray-100">
        <div className={person.registered ? "w-5 bg-green-500": person.status ==="PendingRegistration" ? "w-5 bg-yellow-500": "w-5 bg-red-500"}></div>
        <div className="p-1">
        <h4 className="font-lg font-bold">{person.name}</h4>
        {
            get_vouched(person) !== "" 
            ? <div>&nbsp;&nbsp;&nbsp;&nbsp;vouched by: {get_vouched(person)}</div>
            : <div></div>

        }
        
        {
            person.registered 
            ? <div>&nbsp;&nbsp;&nbsp;&nbsp; # vouches: {person.n_vouches} </div>
            : person.status === "PendingRegistration"
                ?<div>&nbsp;&nbsp;&nbsp;&nbsp;pending: {person.days_left}</div>
                :<div>&nbsp;&nbsp;&nbsp;&nbsp;waiting for vouch</div>
        }
        {
            person.current_vouch 
            ? <div>&nbsp;&nbsp;&nbsp;&nbsp;current vouch: {person.current_vouch.name}</div>
            : <div></div>
        }
        
        </div>
        
    </div>
  );
}

export default Status;
