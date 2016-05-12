/**
 * Created by Donghui Huo on 2016/5/10.
 */
require('./dashBoardLeftNav.scss');
import data from './data/dashBoardLeftNav';

class DashboardTop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <sidebar></sidebar>
        );
    }
}

export default DashboardTop;
