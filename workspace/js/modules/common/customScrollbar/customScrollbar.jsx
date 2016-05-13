/**
 * Created by Donghui Huo on 2016/5/13.
 */
import { Scrollbars } from 'react-custom-scrollbars';
require('./customScrollbar.scss');

class CustomScrollbar extends React.Component {
    render() {
        return (
            <Scrollbars
                autoHide
                autoHideTimeout={400}
                autoHideDuration={400}
                renderTrackHorizontal={({ style, ...props }) =><div {...props} style={{ ...style}} className="track-horizontal"/>}
                renderTrackVertical={({ style, ...props })  => <div {...props} style={{ ...style}} className="track-vertical"/>}
                renderThumbHorizontal={({ style, ...props })  => <div {...props} style={{ ...style}} className="thumb-horizontal"/>}
                renderThumbVertical={({ style, ...props })  => <div {...props} style={{ ...style}} className="thumb-vertical"/>}
                renderView={({ style, ...props })  => <div {...props} style={{ ...style}} className="view"/>}>
                {this.props.children}
            </Scrollbars>
        );
    }
}

module.exports = CustomScrollbar;