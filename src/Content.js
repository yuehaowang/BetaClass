import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import MdIconStarBorder from 'material-ui/svg-icons/toggle/star-border';
import MdIconStar from 'material-ui/svg-icons/toggle/star';
import MdIconSupervisorAccount from 'material-ui/svg-icons/action/supervisor-account';
import MdIconBook from 'material-ui/svg-icons/action/book';
import MdIconBookMark from 'material-ui/svg-icons/action/bookmark';
import MdIconPermIdentity from 'material-ui/svg-icons/action/perm-identity'
import UserProfile from './UserProfile'
import Contest1v1 from './Contest1v1'
import {yellow500} from 'material-ui/styles/colors';


class Content extends Component {
    ctxl=["内内内内内内内内内","外外外外外外外外外","我我我我我我我我"];

    render() {
        var ctt;

        if (this.props.contentIndex >= 0){
            if (this.props.contentIndex == 0) {
                ctt = (
                    <Card>
                        <CardHeader
                            title={this.props.contentIndex}
                        />
                        <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>
                        <CardActions>
                            <RaisedButton label="返回" onClick={() => this.props.select(-1)}/>
                        </CardActions>
                    </Card>
                )
            } else if (this.props.contentIndex == 100) {
                ctt = (
                    <Card>
                        <CardHeader
                            title={<h1>1v1单挑赛</h1>}
                        />
                        <CardText>
                            <h4>上海历年高考真题</h4>
                        </CardText>
                        <CardActions>
                            <RaisedButton label="返回" onClick={() => this.props.select(-1)}/>
                            <RaisedButton label="开始挑战" onClick={() => this.props.select(101)} />
                        </CardActions>
                    </Card>
                ) 
            } else if (this.props.contentIndex == 101) {
                ctt = <Contest1v1 />
            }
        }
        else{
            if (this.props.bottomIndex == 2) {
                ctt = <UserProfile />
            } else {
                ctt = (
                    <List>
                    <ListItem primaryText="打卡题" secondaryText="鸡兔同笼" leftIcon={<MdIconBook />} rightAvatar={<div><MdIconStar  color={yellow500}/><MdIconStarBorder /><MdIconStarBorder /></div>} />
                    <ListItem primaryText="复习题" secondaryText="Dec 8, 2017 - Dec 15, 2017 课堂习题" leftIcon={<MdIconBookMark />} rightAvatar={<div><MdIconStar  color={yellow500}/><MdIconStarBorder /><MdIconStarBorder /></div>} />
                   
                    <ListItem onClick={() => {this.props.select(100)}} primaryText="单挑赛" secondaryText="开始时间 Dec 8, 2017" leftIcon={<MdIconPermIdentity />} />
                    <ListItem primaryText="5v5 团体赛 (3:4)" secondaryText="开始时间 Jan 9, 2018" leftIcon={<MdIconSupervisorAccount />} />
                    </List>
                )
            }
        }

		return (
            <div>
                {ctt}
            </div>    
        );
    }
}

export default Content;