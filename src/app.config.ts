export default {
  pages: [
    'pages/index/index',
    'pages/search/index',
    'pages/user/index'
  ],
  tabBar: {
    list: [{
      'iconPath': './assets/images/bar/type.png',
      'selectedIconPath': './assets/images/bar/type_on.png',
      pagePath: 'pages/index/index',
      text: '主页'
    }, {
      'iconPath': './assets/images/bar/search.png',
      'selectedIconPath': './assets/images/bar/search_on.png',
      pagePath: 'pages/search/index',
      text: '搜索'
    }, {
      'iconPath': './assets/images/bar/user.png',
      'selectedIconPath': './assets/images/bar/user_on.png',
      pagePath: 'pages/user/index',
      text: '个人中心'
    }],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
