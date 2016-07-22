/**
 * Created by Donghui Huo on 2016/5/11.
 */
require('./index.scss');

import DefaultFormWrapper from '../../components/form/DefaultFormWrapper'
export default class FormMainBlock extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>

                <Panel.PanelWithHeader panelValues={{title : 'Default Form'}}>
                    <DefaultFormWrapper />
                </Panel.PanelWithHeader>
            </div>)
            ;
    }
}
