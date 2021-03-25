import React from "react"
import Graph from './Graph'
import StatList from './StatList'

function MainSection({data}) {
  return (
    <div className="h-full flex" >
        <div className = "m-2.5 w-3/5 bg-gray-200"> <Graph data={data}/></div>
        <div className = "m-2.5 flex-auto overflow-y-auto">
            <StatList data={data} />
        </div>
    </div>
  );
}

export default MainSection;
