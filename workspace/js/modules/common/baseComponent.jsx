class BaseComponent extends React.Component {
    constructor(props) {
        super(props);
    }
}


//add app properties
BaseComponent.propTypes = { appPros: React.PropTypes.object};
BaseComponent.defaultProps = { appPros: UtilFun.getGlobalProps() };

module.exports = BaseComponent;
