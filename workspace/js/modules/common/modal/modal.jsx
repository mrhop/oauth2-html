/**
 * Created by Donghui Huo on 2016/5/13.
 */
import {Scrollbars} from 'react-custom-scrollbars';
require('./modal.scss');

class BasicModal extends React.Component {
    closeModal(e) {
        var currentDom = e.currentTarget;
        if (!currentDom.classList.contains('modal-dialog')) {
            if (this.props.modalValues.closeFun) {
                if (this.props.modalValues.closeFun()) {
                    this.modalDom.classList.remove('open');
                    this.modalDom.classList.add('close');
                }
                ;
            } else {
                this.modalDom.classList.remove('open');
                this.modalDom.classList.add('close');
            }
        }
        e.stopPropagation();
    }

    componentDidMount() {
        //open trigger
        if (this.props.modalValues.openDom) {
            UtilFun.domReady(function () {
                this.modalDom.querySelector('.modal-bg').addEventListener('webkitAnimationEnd', function () {
                    if (this.modalDom.classList.contains('close')) {
                        this.modalDom.style.display = 'none';
                    }
                }.bind(this));
                var openDomList = document.querySelectorAll(this.props.modalValues.openDom);
                for (var i = 0; i < openDomList.length; i++) {
                    openDomList[i].onclick = function () {
                        this.modalDom.style.display = 'block';
                        this.modalDom.classList.add('open');
                        this.modalDom.classList.remove('close');
                    }.bind(this);
                }
            }.bind(this));
        }
    }

    renderBasic(dialogExtraClass) {
        var classNames = require('classnames');
        var dialogClass = classNames('modal-dialog', dialogExtraClass);
        return (
            <div className="modal-wrapper" ref={(ref) => this.modalDom = ref}>
                <div className="modal-bg"></div>
                <div className="modal" onClick={this.closeModal.bind(this)}>
                    <div className={dialogClass} onClick={this.closeModal.bind(this)}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close fa"  style={{color: !this.props.modalValues.title ? '#000' : null}}
                                        onClick={this.closeModal.bind(this)} ></button>
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
                                            onClick={this.closeModal.bind(this)}>{this.props.modalValues.footerCloseButton.title ? this.props.modalValues.footerCloseButton.title : 'close'}</button>) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderMessageModal(dialogExtraClass) {
        var classNames = require('classnames');
        var dialogClass = classNames('modal-dialog message', dialogExtraClass);
        return (
            <div className="modal-wrapper" ref={(ref) => this.modalDom = ref}>
                <div className="modal-bg"></div>
                <div className="modal" onClick={this.closeModal.bind(this)}>
                    <div className={dialogClass} onClick={this.closeModal.bind(this)}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <i className="fa"/>
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
                                            onClick={this.closeModal.bind(this)}>{this.props.modalValues.footerCloseButton.title ? this.props.modalValues.footerCloseButton.title : 'OK'}</button>) : null}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class DefaultModal extends BasicModal {
    constructor(props) {
        super(props);
    }

    render() {
        return (super.renderBasic());
    }
}

class DefaultLgModal extends BasicModal {
    constructor(props) {
        super(props);
    }

    render() {
        return (super.renderBasic('modal-lg'));
    }
}

class DefaultSmModal extends BasicModal {
    constructor(props) {
        super(props);
    }

    render() {
        return (super.renderBasic('modal-sm'));
    }
}

class MessageDefaultModal extends BasicModal {
    constructor(props) {
        super(props);
    }
    render() {
        return (super.renderMessageModal());
    }
}

class MessageSuccessModal extends BasicModal {
    constructor(props) {
        super(props);
    }
    render() {
        return (super.renderMessageModal('modal-success'));
    }
}

DefaultModal.propTypes = {modalValues: React.PropTypes.object};
DefaultLgModal.propTypes = {modalValues: React.PropTypes.object};
DefaultSmModal.propTypes = {modalValues: React.PropTypes.object};
MessageDefaultModal.propTypes = {modalValues: React.PropTypes.object};

//modalValues title,content,button-value
//need to deal with the display:none cause no animation question

module.exports = {
    DefaultModal,
    DefaultLgModal,
    DefaultSmModal,
    MessageDefaultModal,
};