import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    title: '《React Native 精解与实战》书籍连载「React 与 React Native 简介」',
    content: '<img alt="" src="http://upload-images.jianshu.io/upload_images/3860317-1439261ef1f9502a.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp"></img><p><b>此文是我的出版书籍</b>《React Native 精解与实战》连载分享，此书由机械工业出版社出版，书中详解了 React Native 框架底层原理、React Native 组件布局、组件与 API 的介绍与代码实战，以及 React Native 与 iOS、Android 平台的混合开发底层原理讲解与代码实战演示，精选了大量实例代码，方便读者快速学习。</p><p>此文是我的出版书籍《React Native 精解与实战》连载分享，此书由机械工业出版社出版，书中详解了 React Native 框架底层原理、React Native 组件布局、组件与 API 的介绍与代码实战，以及 React Native 与 iOS、Android 平台的混合开发底层原理讲解与代码实战演示，精选了大量实例代码，方便读者快速学习。</p><p>此文是我的出版书籍《React Native 精解与实战》连载分享，此书由机械工业出版社出版，书中详解了 React Native 框架底层原理、React Native 组件布局、组件与 API 的介绍与代码实战，以及 React Native 与 iOS、Android 平台的混合开发底层原理讲解与代码实战演示，精选了大量实例代码，方便读者快速学习。</p><p>此文是我的出版书籍《React Native 精解与实战》连载分享，此书由机械工业出版社出版，书中详解了 React Native 框架底层原理、React Native 组件布局、组件与 API 的介绍与代码实战，以及 React Native 与 iOS、Android 平台的混合开发底层原理讲解与代码实战演示，精选了大量实例代码，方便读者快速学习。</p>'
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({
                title: fromJS(action.title),
                content: fromJS(action.content)
            })
        default: 
            return state
    }
}