/**
 * Created by Donghui Huo on 2016/5/10.
 */
import React from 'react';

class AuthOneClickBlock extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="auth-sep"><span><span>{this.props.intl.formatMessage({id: 'auth.oneClickLogin'})}</span></span></div>
                <div className="al-share-auth">
                    <ul className="al-share clearfix">
                        <li><i className="a socicon socicon-wechat" title="Share on wechat"></i></li>
                        <li><i className="a socicon socicon-weibo" title="Share on weibo"></i></li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default AuthOneClickBlock;