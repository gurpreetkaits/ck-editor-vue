<template>
  <div id="app">
    <h1>Vue 2 CKEditor Integration</h1>
    <!-- CKEditor Component -->
    <ckeditor
        :editor="editor"
        v-model="editorData"
        :config="editorConfig"
    />
    <h2>Editor Content:</h2>
    <div v-html="editorData"></div>
  </div>
</template>

<script>
// Import the CKEditor build
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// CKEditor does not require importing plugins separately (like Essentials).
// Also, the CSS import is incorrect; CKEditor 5 builds include their CSS by default.

export default {
  name: 'CKEditor',
  data() {
    return {
      editor: ClassicEditor, // Specify the CKEditor build
      editorData: '<p>Hello from CKEditor 5!</p>', // Initial content
      editorConfig: {
        toolbar: ['bold', 'italic', 'link', '|', 'undo', 'redo'], // Toolbar configuration
        licenseKey: 'get-your-key',
      },
    };
  },
};
</script>

<style>
#app {
  max-width: 800px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
}
</style>
