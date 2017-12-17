import React from 'react';
import {Card, CardActions, CardHeader, CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import MdIconCake from 'material-ui/svg-icons/social/cake';
import MdIconSchool from 'material-ui/svg-icons/social/school';
import MdIconStars from 'material-ui/svg-icons/action/stars';
import MdIconFlashOn from 'material-ui/svg-icons/image/flash-on';
import MdIconAllOut from 'material-ui/svg-icons/action/all-out';
import MdIconHistory from 'material-ui/svg-icons/action/history';
import MdIconChangeHistory from 'material-ui/svg-icons/action/change-history';
import yuehaoavatar from './assets/avatar.png';


class UserProfile extends React.Component {
	render() {
		return (
			<Card>
				<CardHeader
					title='王小明'
					subtitle='学渣一枚，大神们多多关照'
					avatar={yuehaoavatar}
				/>
				<CardMedia>
					<div>
						<List>
							<Divider />
							<ListItem
								key={0}
								insetChildren={true}
								primaryText='16岁 高中二年级'
								leftIcon={<MdIconCake />}
							/>
							<Divider />
							<ListItem
								key={1}
								insetChildren={true}
								primaryText='上海中学'
								leftIcon={<MdIconSchool />}
							/>
							<Divider />
							<ListItem
								key={2}
								insetChildren={true}
								primaryText={
									<div style={{display: 'flex', flexWrap: 'wrap'}}>
										<Chip style={{marginRight: 7}}>数学</Chip>
										<Chip style={{marginRight: 7}}>物理</Chip>
									</div>
								}
								leftIcon={<MdIconStars />}
							/>
							<Divider />
							<ListItem
								key={3}
								insetChildren={true}
								primaryText='全国综合排名 1024'
								leftIcon={<MdIconFlashOn />}
							/>
							<Divider />
							<ListItem
								key={4}
								insetChildren={true}
								primaryText='正确率 64%'
								leftIcon={<MdIconAllOut />}
							/>
							<Divider />
							<ListItem
								key={5}
								insetChildren={true}
								primaryText='挑战记录'
								leftIcon={<MdIconHistory />}
								nestedItems={[
									<ListItem
										key={0}
										primaryText='1v1单挑赛 获胜'
										leftIcon={<MdIconChangeHistory />}
									/>,
									<ListItem
										key={1}
										primaryText='完成复习题'
										leftIcon={<MdIconChangeHistory />}
									/>
								]}
							/>
							<Divider />
						</List>
					</div>
				</CardMedia>
				<CardActions>
					<FlatButton label='更改信息' />
				</CardActions>
			</Card>
		);
	}
}

export default UserProfile;
