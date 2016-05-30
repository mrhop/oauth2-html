/**
 * Created by Donghui Huo on 2016/5/13.
 */
import {Scrollbars} from 'react-custom-scrollbars';
require('./modal.scss');

class BasicModal extends React.Component {
    closeModal() {
        if (this.props.modalValues.closeFun) {
            if (this.props.modalValues.closeFun()) {
                this.modalDom.classList.remove('open');
            }
            ;
        } else {
            this.modalDom.classList.remove('open');
        }
    }

    componentDidMount() {
        //open trigger
        if (this.props.modalValues.openDom) {
            UtilFun.domReady(function () {

                var openDomList = document.querySelectorAll(this.props.modalValues.openDom);
                for (var i = 0; i < openDomList.length; i++) {
                    openDomList[i].onclick = function () {
                        this.modalDom.classList.add('open');
                    }.bind(this);
                }
            }.bind(this));
        }
    }
}

class DefaultModal extends BasicModal {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="modal-wrapper open" ref={(ref) => this.modalDom = ref}>
                <div className="modal-bg" onClick={super.closeModal.bind(this)}></div>
                <div className="modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close fa"
                                        onClick={super.closeModal.bind(this)}></button>
                                <h4 className="modal-title">
                                    {this.props.modalValues.title}
                                </h4>
                            </div>
                            <div className="modal-body">
                                {this.props.modalValues.content}
                                {this.props.children}
                            </div>
                            <div className="modal-footer">
                                {(this.props.modalValues.footerCloseButton.visible == undefined || this.props.modalValues.footerCloseButton.visible) ? (
                                    <button className="btn btn-primary"
                                            onClick={super.closeModal.bind(this)}>{this.props.modalValues.footerCloseButton.title ? this.props.modalValues.footerCloseButton.title : 'close'}</button>) : null}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

DefaultModal.propTypes = {modalValues: React.PropTypes.object};
//modalValues title,content,button-value
//need to deal with the display:none cause no animation question

module.exports = {
    DefaultModal
};