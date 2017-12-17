import React from 'react';
import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';
import MdIconDoneAll from 'material-ui/svg-icons/action/done-all';
import MdIconCenterFocusWeak from 'material-ui/svg-icons/image/center-focus-weak';
import MdIconThumbUp from 'material-ui/svg-icons/action/thumb-up';
import MdIconEqualizer from 'material-ui/svg-icons/av/equalizer';
import MdIconExplore from 'material-ui/svg-icons/action/explore';
import MdIconBookmarkBorder from 'material-ui/svg-icons/action/bookmark-border';
import Subheader from 'material-ui/Subheader'
import {lightBlue500, indigo500, green500, orange500} from 'material-ui/styles/colors';


class Home extends React.Component {
	render() {
		let iconSizeStyle = {
			width: 100,
			height: 100
		};
		let gridTileStyle = {
			textAlign: 'center',
			marginRight: 10,
			marginBottom: 20
		};

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
					<Subheader style={{color: 'white'}}>命中率</Subheader>
					<div style={{paddingTop: 0, paddingLeft: 20, paddingRight: 20, paddingBottom: 20}}>
						<span style={{fontSize: 40}}>64.09%</span>
						<MdIconCenterFocusWeak color='white' style={{width: 50, height: 50, float: 'right'}} />
					</div>
				</Paper>


				<div style={{marginTop: 80}}>
					<GridList>
						<GridTile
							key={0}
							style={gridTileStyle}
						>
							<MdIconThumbUp style={iconSizeStyle} color={indigo500} />
						</GridTile>
						<GridTile
							key={1}
							style={gridTileStyle}
						>
							<MdIconEqualizer style={iconSizeStyle} color={green500} />
						</GridTile>
						<GridTile
							key={2}
							style={gridTileStyle}
						>
							<MdIconExplore style={iconSizeStyle} color={orange500} />
						</GridTile>
						<GridTile
							key={3}
							style={gridTileStyle}
						>
							<MdIconBookmarkBorder style={iconSizeStyle} color={lightBlue500} />
						</GridTile>
					</GridList>
				</div>
			</div>
		);
	}
}

export default Home;
