/**
 * Created by Donghui Huo on 2016/5/11.
 */
require("./index.scss");
import data from './data/index'
import React from 'react';
import {DashBoardBlockCreate} from '../include/dashBoard/dashBoard.jsx';

class MainBlock extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <div>123</div>;
    }
}
DashBoardBlockCreate(MainBlock,'indexMainBlock')
//dashBoardCreate({},'indexMainBlock')

