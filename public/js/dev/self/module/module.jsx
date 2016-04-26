var data = require('../data/data');
var HelloMessage = React.createClass({  // Create a component, HelloMessage.
    render: function() {
        return <div>Hello {data.getName()}</div>;
    }
});
module.exports = {
    invoke: function(){
        ReactDOM.render(  // Render HelloMessage component at #name.
        <HelloMessage name="feenan" />,
            document.querySelector('.name1'));
    }
}