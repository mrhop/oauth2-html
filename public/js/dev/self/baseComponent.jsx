import React from 'react';
import utilFun from 'utilFun';




class BaseComponent extends React.Component {
    constructor(props) {
        super(props);
        //add app properties
        props.appPros = utilFun.getGlobalProps();
    }


}

export default BaseComponent;