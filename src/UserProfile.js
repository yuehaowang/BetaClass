import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Chip from 'material-ui/Chip'
import MdIconCake from 'material-ui/svg-icons/social/cake'
import MdIconSchool from 'material-ui/svg-icons/social/school'
import MdIconStars from 'material-ui/svg-icons/action/stars'
import MdIconOfflinePin from 'material-ui/svg-icons/action/offline-pin'
import MdIconAllOut from 'material-ui/svg-icons/action/all-out'
import yuehaoavatar from './assets/avatar.png'

class UserProfile extends React.Component {
	render() {
		return (
			<Card>
				<CardHeader
					title='wyh'
					subtitle='学渣一枚，大神多多关照'
					avatar={yuehaoavatar}
				/>
				<CardMedia>
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
							primaryText="某某学校"
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
							primaryText="全国排名 1000+"
							leftIcon={<MdIconOfflinePin />}
						/>
						<Divider />
						<ListItem
							insetChildren={true}
							primaryText="命中率 0.1%"
							leftIcon={<MdIconAllOut />}
						/>
						<Divider />
					</List>
				</CardMedia>
				<CardActions>
					<FlatButton label="更改信息" />
				</CardActions>
			</Card>
		);
	}
}

export default UserProfile;
