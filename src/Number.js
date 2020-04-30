import React from 'react';
import styled from 'styled-components';

const Element = styled.div`
    margin-top: 10px;
    font-size: 50px;
`


const Number = (props) => {

    return(
        <Element>
            {props.number}
        </Element>
    )
}

export default Number;