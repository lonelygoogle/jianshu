import React, { PureComponent } from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommond from './components/Recommond'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Home extends PureComponent {
    handleScrollTop() {
        window.scrollTo(0, 0)
    }
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
                { this.props.showScroll === true ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop>: null}
            </HomeWrapper>
        )
    }

    componentDidMount () {
        this.props.changeHomeData()
        this.bindEvent()
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvent () {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData () {
        dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow () {
        if (document.documentElement.scrollTop) {
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})

export default connect(mapState, mapDispatch)(Home)