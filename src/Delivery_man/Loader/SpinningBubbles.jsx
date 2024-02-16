import React from "react";
import ReactLoading from "react-loading";
import { Section, Title, Article, Prop, list } from "./MoreLoader";
// import "./styles.css";

const Example = () => (
    <Section style={{backgroundColor:"white"}}>
        
        <Article>
            <ReactLoading type={"spinningBubbles"} color="#000" />
            
            <span>Your data is Loading.....</span>
        </Article>
    </Section>
);

export default Example;
