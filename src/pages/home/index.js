import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommond from './components/Recommond'
import Writer from './components/Writer'

class Home extends Component {
    render () {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner_img" src="https://upload.jianshu.io/admin_banners/web_images/4976/a0012dd0250a3003bca3731ffa6098e82201d024.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommond />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home