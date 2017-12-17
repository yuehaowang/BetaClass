import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import fig3 from './assets/fig3.png';
import fig4 from './assets/fig4.png';


class NotificationContent extends React.Component {
	render() {
		let imgStyle = {
			width: 290,
			margin: 15
		};
		return (
			<div style={{padding: 10, height: '100%'}}>
				<Paper zDepth={2} style={{padding: 10}}>
					<h1>消息内容</h1>
					<h2>今日学习汇报</h2>
					<div>
						<span>数学汇总</span>
						<br />
						<img style={imgStyle} src={fig3} alt='fig3' />
						<br />
						<span>数学能力评估</span>
						<br />
						<img style={imgStyle} src={fig4} alt='fig4' />
						<br />
						<span>
							建议：补习数学归纳法和解斜三角形的内容，锻炼逻辑思维和思维创新能力
							<br />
							<FlatButton secondary={true}>推荐慕课视频</FlatButton>
						</span>
					</div>
					<br />
					<RaisedButton onClick={()=>{this.props.mainApp.back()}}>返回</RaisedButton>
				</Paper>
			</div>
		);
	}
}

export default NotificationContent;
