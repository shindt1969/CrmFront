<template lang="pug">
a-list(item-layout='horizontal' :data-source='data')
    template(#renderitem='{ item }')
      a-list-item
        a-list-item-meta(description='Ant Design, a design language for background applications, is refined by Ant UED Team')
          template(#title='')
            a(href='https://www.antdv.com/') {{ item.title }}
          template(#avatar='')
            a-avatar(src='https://joeschmoe.io/api/v1/random')

</template>

<script>
import { defineComponent } from 'vue';
const data = [{
  title: 'Ant Design Title 1',
}, {
  title: 'Ant Design Title 2',
}, {
  title: 'Ant Design Title 3',
}, {
  title: 'Ant Design Title 4',
}];
export default defineComponent({
  setup() {
    return {
      data,
    };
  },

});
</script>

