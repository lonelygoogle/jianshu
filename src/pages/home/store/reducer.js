import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: 'https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },{
        id: 2,
        title: '手绘',
        imgUrl: 'https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    }],
    articleList: [{
        id: 1,
        title: '一段婚姻最好的状态',
        desc: '有人不想结婚，害怕婚后会变得不幸。 有人满怀憧憬走进婚姻，结果结婚还没多久，生活就只剩下了一地鸡毛，时常都怀疑自己选错了人，经常都想要赶紧离婚',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/2100084-4d3f58f5fa8597e9?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id: 2,
        title: '一段婚姻最好的状态',
        desc: '有人不想结婚，害怕婚后会变得不幸。 有人满怀憧憬走进婚姻，结果结婚还没多久，生活就只剩下了一地鸡毛，时常都怀疑自己选错了人，经常都想要赶紧离婚',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/2100084-4d3f58f5fa8597e9?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id: 3,
        title: '一段婚姻最好的状态',
        desc: '有人不想结婚，害怕婚后会变得不幸。 有人满怀憧憬走进婚姻，结果结婚还没多久，生活就只剩下了一地鸡毛，时常都怀疑自己选错了人，经常都想要赶紧离婚',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/2100084-4d3f58f5fa8597e9?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id: 4,
        title: '一段婚姻最好的状态',
        desc: '有人不想结婚，害怕婚后会变得不幸。 有人满怀憧憬走进婚姻，结果结婚还没多久，生活就只剩下了一地鸡毛，时常都怀疑自己选错了人，经常都想要赶紧离婚',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/2100084-4d3f58f5fa8597e9?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }],
    recommondList: [{
        id: 1,
        imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    },{
        id: 2,
        imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },{
        id: 3,
        imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },{
        id: 4,
        imgUrl: 'http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    }]
})

export default (state = defaultState, action) => {
    switch(action.type) {
        default: 
            return state
    }
}