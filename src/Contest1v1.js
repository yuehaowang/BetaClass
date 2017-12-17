import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Paper from'material-ui/Paper';
import MdIconQuestionAnswer from 'material-ui/svg-icons/action/question-answer';
import MdIconCameraEnhance from 'material-ui/svg-icons/action/camera-enhance';
import MdIconFlag from 'material-ui/svg-icons/content/flag';
import q1img from './assets/q1.png';
import RaisedButton from 'material-ui/RaisedButton';


class Contest1v1 extends React.Component {
	constructor() {
		super();

		this.state = {
			time: 0
		};

		this.timer = setInterval(() => {
			this.setState({time: this.state.time + 30});
		}, 30);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render() {
		let paperStyle = {width: '50%', display: 'inline-block', padding: 10};
		let date = new Date(this.state.time);
		let milliSec = date.getMilliseconds(),
			sec = date.getSeconds(),
			min = date.getMinutes();

		return (
			<div>
				<Card>
					<CardHeader
						title='1v1单挑赛'
						subtitle='上海历年高考试题'
						avatar={<MdIconQuestionAnswer />}
					/>
					<CardMedia>
						<img src={q1img} alt='q1' />
					</CardMedia>
					<CardText>
						<Paper style={paperStyle} zDepth={1}>
							<h2>对手信息</h2>
							<h5>未提交</h5>
						</Paper>
						<Paper style={paperStyle} zDepth={1}>
							<h2>我方信息</h2>
							<h5>未提交</h5>
						</Paper>
					</CardText>
					<CardActions>
						<RaisedButton primary={true} label='提交' icon={<MdIconCameraEnhance />} />
						<RaisedButton secondary={true} label='认输' icon={<MdIconFlag />} />
						<Chip style={{display: 'inline-block', marginLeft: 30}}>{min + ':' + sec + ':' + milliSec}</Chip>
					</CardActions>
				</Card>
			</div>
		);
	}
}

export default Contest1v1;
