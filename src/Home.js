import React from 'react';
import Paper from 'material-ui/Paper';
import MdIconDoneAll from 'material-ui/svg-icons/action/done-all';
import MdIconCenterFocusWeak from 'material-ui/svg-icons/image/center-focus-weak';
import MdIconEqualizer from 'material-ui/svg-icons/av/equalizer';
import Subheader from 'material-ui/Subheader'
import fig1 from './assets/fig1.png';


class Home extends React.Component {
	render() {
		return (
			<div style={{padding: 15}}>
				<Paper zDepth={1} style={{borderRadius: 8, padding: 5}}>
					<Subheader>完成进度</Subheader>
					<div style={{paddingTop: 0, paddingLeft: 20, paddingRight: 20, paddingBottom: 20}}>
						<MdIconDoneAll style={{width: 50, height: 50}} />
						<span style={{fontSize: 40, float: 'right'}}>198/300</span>
					</div>
				</Paper>

				<Paper zDepth={1} style={{borderRadius: 8, padding: 5, marginTop: 20, backgroundColor: '#03A9F4', color: 'white'}}>
					<Subheader style={{color: 'white'}}>正确率</Subheader>
					<div style={{paddingTop: 0, paddingLeft: 20, paddingRight: 20, paddingBottom: 20}}>
						<span style={{fontSize: 40}}>64.09%</span>
						<MdIconCenterFocusWeak color='white' style={{width: 50, height: 50, float: 'right'}} />
					</div>
				</Paper>

				<Paper zDepth={1} style={{borderRadius: 8, padding: 5, marginTop: 20, backgroundColor: '#E91E63', color: 'white'}}>
					<Subheader style={{color: 'white'}}>你的段位</Subheader>
					<div style={{paddingTop: 0, paddingLeft: 20, paddingRight: 20, paddingBottom: 20}}>
						<MdIconEqualizer color='white' style={{width: 50, height: 50}} />
						<span style={{fontSize: 40, float: 'right'}}>白银</span>
					</div>
				</Paper>


				<div style={{marginTop: 60}}>
					<h2>学习记录</h2>
					<img src={fig1} alt='fig1' />
				</div>
			</div>
		);
	}
}

export default Home;
