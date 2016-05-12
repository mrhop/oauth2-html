/**
 * Created by Donghui Huo on 2016/5/10.
 */
require('./dashBoardLeftNav.scss');
import data from './data/dashBoardLeftNav';
import { Scrollbars } from 'react-custom-scrollbars';


class DashboardTop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <sidebar>
                <aside className="al-sidebar">
                    <Scrollbars style="{{heigh:100%}}">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </Scrollbars>
                </aside>
            </sidebar>
        );
    }
}

export default DashboardTop;
