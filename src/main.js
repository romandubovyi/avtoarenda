import { createApp } from 'vue';
import { Button, Menu, Dropdown, Select } from 'ant-design-vue';
import Icon, { UserAddOutlined, FilterFilled } from '@ant-design/icons-vue';

import App from './App.vue';

const app = createApp(App);
app.config.productionTip = false;
app.use(Button);
app.use(Dropdown);
app.use(Menu);
app.use(Select);
app.component(UserAddOutlined.name, UserAddOutlined);
app.component(FilterFilled.name, FilterFilled);
app.component(Icon.name, Icon);

app.mount('#app');
