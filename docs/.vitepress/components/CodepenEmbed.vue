<template>
  <div class="codepen-embed">
    <iframe
      :src="codepenUrl"
      :height="height"
      :title="title"
      frameborder="no"
      loading="lazy"
      allowtransparency="true"
      allowfullscreen="true"
      scrolling="no"
      style="width: 100%"
    >
      See the Pen
      <a :href="penUrl">{{ title }}</a> by {{ authorName }} (<a
        :href="authorUrl"
        >@{{ user }}</a
      >) on <a href="https://codepen.io">CodePen</a>.
    </iframe>
  </div>
</template>

<script>
export default {
  name: "CodepenEmbed",
  props: {
    user: {
      type: String,
      required: true,
    },
    pen: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      default: "450",
    },
    theme: {
      type: String,
      default: "dark",
    },
    title: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
  },
  computed: {
    codepenUrl() {
      return `https://codepen.io/${this.user}/embed/${this.pen}?height=${this.height}&theme-id=${this.theme}&default-tab=result`;
    },
    authorUrl() {
      return `https://codepen.io/${this.user}`;
    },
    penUrl() {
      return `https://codepen.io/${this.user}/pen/${this.pen}`;
    },
  },
};
</script>

<style scoped>
.codepen-embed {
  margin: 0 auto;
  width: 95%;
}
</style>
