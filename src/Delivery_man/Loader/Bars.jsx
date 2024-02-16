import React from "react";
import ReactLoading from "react-loading";

const Example = () => (
    <>
   
      <div style={{ display: "flex", alignItems: "center",marginLeft:"400px" }}>
      <h1> <ReactLoading type={"bars"} color="#000" /></h1>
    
    </div>
 
    <div style={{ display: "flex", alignItems: "center",marginLeft:"400px" }}>
      <h3 style={{margin:0}}> Your data is Loading.....</h3>
      </div>
     </>
);

export default Example;
