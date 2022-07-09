//1.按需导入createApp函数
import {createApp} from "vue";
// import App from './components/04.props/App.vue'
// import App from "./components/05.style/App.vue";
import App from "./components/06.customEvent/App.vue";
//2.导入待渲染的App.vue组件
// import App from "./App.vue";

//3.调用createApp函数，创建App应用实例
const app = createApp(App);

//4.调用mount()把App的模板结构渲染到指定的el区域中
app.mount('#app')


