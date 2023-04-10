<template>
  <section>
    <p class="written-by">Written by</p>
    <div class="authors-wrapper">
      <div class="authors">
        <a v-for="author in authors" class="author-link" :href="`http://www.github.com/${author}`"
          :title="`View ${author}'s profile on GitHub`" target="_blank" rel="noopener noreferrer">
          <img class="author-image" :src="`https://www.github.com/${author}.png`" :alt="author" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    authors: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.written-by {
  font-size: 0.8rem;
  font-weight: 600;
  padding-block-start: 1rem;
}

.authors-wrapper {
  display: inline-block;
  width: fit-content;
}

.authors {
  display: flex;
}

.author-link {
  display: inline-block;
  margin-right: -8px;
  transition: all 0.2s ease-out;
}

.author-link:hover {
  z-index: 1;
  transform: scale(1.3);
}

.author-link:hover .author-image {
  filter: grayscale(0);
}

.author-image {
  width: 40px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 2px solid var(--vp-c-brand);
  filter: grayscale(1);
}

.authors:hover .author-link:not(:hover) {
  opacity: 0.4;
  transition: all 0.35s ease-out;
}
</style>
