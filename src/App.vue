<template>
  <div>
    <a-select default-value="lucy" style="width: 120px" @change="handleChange">
      <a-select-option value="jack"> Jack </a-select-option>
      <a-select-option value="lucy"> Lucy </a-select-option>
      <a-select-option value="disabled" disabled> Disabled </a-select-option>
      <a-select-option value="Yiminghe"> yiminghe </a-select-option>
    </a-select>
    <a-select default-value="lucy" style="width: 120px" disabled>
      <a-select-option value="lucy"> Lucy </a-select-option>
    </a-select>
    <a-select default-value="lucy" style="width: 120px" loading>
      <a-select-option value="lucy"> Lucy </a-select-option>
    </a-select>
  </div>

  <div style="margin: 20px">
    <a-dropdown-button>
      Dropdown
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="1"> <user-outlined />1st menu item </a-menu-item>
          <a-menu-item key="2"> <user-outlined />2nd menu item </a-menu-item>
          <a-menu-item key="3"> <user-outlined />3rd item </a-menu-item>
        </a-menu>
      </template>

      <template #icon>
        <user-outlined />
      </template>
    </a-dropdown-button>

    <div>
      <a-table :dataSource="dataSource" :columns="columns" />
    </div>
  </div>
</template>

<script>
import UserOutlined from '@ant-design/icons-vue/UserOutlined';

export default {
  name: 'App',
  components: {
    UserOutlined,
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
