import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import MdIconStarBorder from 'material-ui/svg-icons/toggle/star-border';
import MdIconStar from 'material-ui/svg-icons/toggle/star';
import MdIconSupervisorAccount from 'material-ui/svg-icons/action/supervisor-account';
import MdIconBook from 'material-ui/svg-icons/action/book';
import MdIconBookMark from 'material-ui/svg-icons/action/bookmark';

import {red500, yellow500, blue500} from 'material-ui/styles/colors';


class Content extends Component {
    ctxl=["内内内内内内内内内","外外外外外外外外外","我我我我我我我我"];

    render() {
        var items=[],ctt=[]
        if (this.props.contentIndex){
            var ctt = ( <Card>
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
                            <FlatButton label="返回" onClick={() => this.props.select(0)}/>
                            <FlatButton label="Action2" />
                        </CardActions>
                        </Card>)
        }
        else{
            var ctt=(
                <List>
                <ListItem primaryText="打卡题" secondaryText="鸡兔同笼" leftIcon={<MdIconBook />} rightAvatar={<div><MdIconStar  color={yellow500}/><MdIconStarBorder /><MdIconStarBorder /></div>} />
                <ListItem primaryText="复习题" 
                secondaryText="Dec 8, 2017 - Dec 15, 2017 课堂习题" 
                leftIcon={<MdIconBookMark />} 
                onNestedListToggle={this.handleNestedListToggle}
                nestedItems={[
                    <ListItem key={1} primaryText="Drafts" leftIcon={<MdIconBook />} />,
                  ]}
                />
                <ListItem primaryText="复习题" secondaryText="Dec 8, 2017 - Dec 15, 2017 课堂习题" leftIcon={<MdIconBook />} rightAvatar={<div><MdIconStarBorder /><MdIconStarBorder /><MdIconStarBorder /></div>} />
                <ListItem primaryText="复习题" secondaryText="Dec 8, 2017 - Dec 15, 2017 课堂习题" leftIcon={<MdIconBook />} rightAvatar={<div><MdIconStarBorder /><MdIconStarBorder /><MdIconStarBorder /></div>} />

                <ListItem primaryText="5v5 团体赛 (3:4)" secondaryText="开始时间 Jan 9, 2018" leftIcon={<MdIconSupervisorAccount />} />
                </List>)
        }

		return (
            <div>
                {ctt}
            </div>    
        );
    }
}

export default Content;