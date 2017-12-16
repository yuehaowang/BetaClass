import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Chip from 'material-ui/Chip'
import MdIconCake from 'material-ui/svg-icons/social/cake'
import MdIconSchool from 'material-ui/svg-icons/social/school'
import MdIconStars from 'material-ui/svg-icons/action/stars'
import MdIconFlashOn from 'material-ui/svg-icons/image/flash-on'
import MdIconAllOut from 'material-ui/svg-icons/action/all-out'
import MdIconHistory from 'material-ui/svg-icons/action/history'
import MdIconChangeHistory from 'material-ui/svg-icons/action/change-history'
import yuehaoavatar from './assets/avatar.png'

class UserProfile extends React.Component {
	render() {
		return (
			<Card>
				<CardHeader
					title='wyh'
					subtitle='学渣一枚，大神们多多关照'
					avatar={yuehaoavatar}
				/>
				<CardMedia>
					<div>
						<List>
							<Divider />
							<ListItem
								insetChildren={true}
								primaryText="12岁  初中一年级"
								leftIcon={<MdIconCake />}
							/>
							<Divider />
							<ListItem
								insetChildren={true}
								primaryText="上海中学"
								leftIcon={<MdIconSchool />}
							/>
							<Divider />
							<ListItem
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
								insetChildren={true}
								primaryText="全国排名 1024"
								leftIcon={<MdIconFlashOn />}
							/>
							<Divider />
							<ListItem
								insetChildren={true}
								primaryText="命中率 64%"
								leftIcon={<MdIconAllOut />}
							/>
							<Divider />
							<ListItem
								insetChildren={true}
								primaryText="历史记录"
								leftIcon={<MdIconHistory />}
								nestedItems={[
									<ListItem
										key={1}
										primaryText="1v1单挑赛 获胜"
										leftIcon={<MdIconChangeHistory />}
									/>,
									<ListItem
										key={2}
										primaryText="完成复习题"
										leftIcon={<MdIconChangeHistory />}
									/>
								]}
							/>
							<Divider />
						</List>
					</div>
				</CardMedia>
				<CardActions>
					<FlatButton label="更改信息" />
				</CardActions>
			</Card>
		);
	}
}

export default UserProfile;
