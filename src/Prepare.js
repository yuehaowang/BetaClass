import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import MdIconPermIdentity from 'material-ui/svg-icons/action/perm-identity'
import Divider from 'material-ui/Divider'


class Prepare extends React.Component {
	render() {
		return (
			<Card>
				<CardHeader
					title={<h1><MdIconPermIdentity /> 1v1单挑赛</h1>}
					subtitle='开始时间 Dec 8, 2017'
				/>
				<Divider />
				<CardText>
					<div>
						<h4>上海历年高考真题</h4>
						<div>
							<ul>
								<li>限时：10min</li>
								<li>题数：1道</li>
							</ul>
						</div>
					</div>
				</CardText>
				<CardActions>
					<RaisedButton label='返回' onClick={() => this.props.mainApp.back()}/>
					<RaisedButton label='开始挑战' onClick={() => this.props.mainApp.enterChallenge()} />
				</CardActions>
			</Card>
		);
	}
}

export default Prepare;
