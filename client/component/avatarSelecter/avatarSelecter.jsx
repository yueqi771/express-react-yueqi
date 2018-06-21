import React, {Component} from 'react';
import { Grid, List } from 'antd-mobile';
import PropTypes from 'prop-types'
import './avatar.less'

class AvatarSelector extends Component {
    static propTypes = {
        selectAvatar: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {


        // 头像列表
        let imgArr = [
            { src: 1, name: '阿狸' },
            { src: 2, name: '越祈' },
            { src: 3, name: '葛清霏' },
            { src: 4, name: '祝语' },
            { src: 5, name: '昭言' },
            { src: 6, name: '小蜘蛛' },
            { src: 7, name: '亚丝娜' },
            { src: 8, name: '2B' },
            { src: 9, name: '小七' },
        ]

        const avatarList = imgArr.map(item => ({
            icon: require(`../../static/images/${item.src}.jpg`),
            text: item.name,
        }))

        // 已经选择的头像
        const girdHeader = this.state.icon ? 
                            ( 
                                <div>
                                    <span>已选择头像</span>
                                    <img style={{ marginLeft: 10, width: 50, height: 40, borderRadius: '50%' }} src={this.state.icon} alt=""/>
                                </div> 
                            ) : ( <div>请选择头像</div> )
        return (
            <div>
                {/* 以选择的头像 */}
                <List renderHeader={() => girdHeader}>
                    <Grid data={avatarList} square={false} onClick={
                        imgname => {
                            this.setState(imgname)
                            this.props.selectAvatar(imgname)
                        }
                    } />
                </List>

                
            </div> 
        )
    }
}

export default AvatarSelector;