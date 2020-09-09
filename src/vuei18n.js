import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)


const messages = {
    zh:{
         hello:'你好 世界'
      
    },
    en: {
        语言切换:" LangSwitcher",
        hello: 'hello world',
        首页:"Home",
        国际化:"internationalization",
        列表:"list",
        循环:"circulation"
    },
    ja: {
        语言切换:"言語の切り替え",
        hello: 'こんにちは、世界',
        首页:"トップページ",
        国际化:"国際化",
        列表:"一覧",
        循环:"循環"
    }
  }



const i18n = new VueI18n({
  locale: 'zh', // set locale
  messages, // set locale messages
  fallbackLocale: 'zh',
  silentTranslationWarn: true
})




  export default i18n
  