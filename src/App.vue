<script>
import Editor from '@tinymce/tinymce-vue';
import CKEditor from "@/CkEditor.vue";

export default {
  name: 'App',
  components: {
    CKEditor,
    Editor,
  },
  data() {
    return {
      editorInit: {
        plugins: 'lists link image table code help wordcount',
      },
    };
  },
};
</script>

<template>
  <main id="sample" style="margin: 30px;">
    <Editor api-key="j5c3ean8dmfqyad3px3vkpngk0nww8lc8dfvpsr0waun6fpu" :init="editorInit" />
<!--    <CKEditor />-->
  </main>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  #sample {
    display: flex;
    flex-direction: column;
    place-items: center;
    width: 1000px;
  }
}
</style>
