import React from "react"
import Graph from './Graph'
import StatList from './StatList'

function MainSection({data}) {
  return (
    <div className="h-full flex justify-center" >
        <div className = "hidden md: m-2.5 w-3/5 bg-gray-200"> <Graph data={data}/></div>
        <div className = "m-2.5 md:w-2/5 overflow-y-auto">
            <StatList data={data} />
        </div>
    </div>
  );
}

export default MainSection;
