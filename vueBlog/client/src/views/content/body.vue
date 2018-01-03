<template>
  <div>
    正文1
    <b-button>I am a Button</b-button>
    <b-button href="#">I am a Link</b-button>
  </div>
</template>

<script>
import btn from 'bootstrap-vue/es/components/button/button'

export default {
  name: 'bodyView',
  components: {
    'b-button': btn
  }
}
</script>
