<template>
  <Footer class="layout-footer-center">2018- &copy; shell</Footer>
</template>

<script>
import { Button, Table } from 'iview'
export default {
  name: 'footerView',
  component: { Button, Table },
  methods: {
    test: () => {
      console.log(1)
    }
  }
}
</script>

<<style lang="less" scoped>
  .layout-footer-center {
    text-align: center;
    background: #fff;
  }
</style>

