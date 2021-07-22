import { createUI } from 'taro-ui-vue3'
import {
  AtAvatar,
  AtButton,
  AtInput,
  AtTabs,
} from 'taro-ui-vue3/lib'

// 引用上述组件对应的样式文件
import 'taro-ui-vue3/dist/style/components/button.scss'
import 'taro-ui-vue3/dist/style/components/input.scss'
import 'taro-ui-vue3/dist/style/components/tabs.scss'
import 'taro-ui-vue3/dist/style/components/avatar.scss'

// 引用部分组件
const taroUI = createUI({
  AtAvatar,
  AtButton,
  AtInput,
  AtTabs
})

export default taroUI
