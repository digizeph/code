import React from "react";
import styled from "styled-components";
import ContentCSS from "../../../src/components/CSS/ContentCSS";

const MarkdownCSS = styled.section`

    padding-bottom: 2.6rem;
    background-color: white;
    padding: 1rem;
    margin: 0;

    ${ContentCSS}

`;

export default props => <MarkdownCSS {...props} />;

