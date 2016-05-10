import React from 'react';
import utilFun from '../../util/utilFun';
import {intlShape, injectIntl} from 'react-intl';



class BaseComponent extends React.Component {
    constructor(props) {
        super(props);
    }
}


//add app properties
BaseComponent.propTypes = { appPros: React.PropTypes.object};
BaseComponent.defaultProps = { appPros: utilFun.getGlobalProps() };

export default BaseComponent;