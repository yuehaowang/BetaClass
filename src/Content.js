import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

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
            for(var i=0;i<6;i++){
                items.push({index: i, content: "题目"})
            }
            ctt=items.map(function (item) {
                return (<Card key={item.index}>
                            <CardHeader
                                title={this.ctxl[this.props.bottomIndex]}
                                subtitle={item.content+(item.index+1).toString()}
                                onClick={() => this.props.select(item.index+1)}
                            />
                        </Card>)
            }.bind(this))
        }

		return (
            <div>
                {ctt}
            </div>    
        );
    }
}

export default Content;