<template>
  <div class="demo-container">
    <p class="title">
      Hover over the box to see the <code>z-index</code> property in action:
    </p>
    <div class="wrapper">
      <div class="child header">3</div>
      <div class="child left">1</div>
      <div class="child right">2</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HoverZIndex',
  data() {
    return {
      zIndex: 0,
    };
  },
};
</script>

<style scoped>
.demo-container {
  /* THEME COLORS */
  --background-color: #fff;
  --border-color: #333;
  --header-color: #9dba85;
  --left-color: #e3d46c;
  --right-color: #6fbbb6;
  --child-border-color: white;
  --header-border-color: #9dba85;
  --left-border-color: #e3d46c;
  --right-border-color: #6fbbb6;
}

.title {
  text-align: center;
  margin-block-start: 2rem;
}

.wrapper {
  display: grid;
  max-width: 400px;
  height: 270px;
  grid-template-areas:
    'header header header'
    'left left right'
    'left left right';
  grid-template-rows: 30% 1fr;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 5px;
  margin: 2rem auto 4rem;
  padding: 10px;
  background-color: var(--background-color);
  border: 4px solid var(--border-color);
  perspective: 750px;
  transition: transform 1s;
}

.wrapper:hover {
  transform: perspective(800px) rotateY(-50deg);
}

.wrapper:hover .header {
  transform: translate3d(-120px, 0px, 240px);
  background-color: var(--header-color);
}

.wrapper:hover .left {
  background-color: var(--left-color);
  transform: translate3d(-25px, 0px, 50px);
}

.wrapper:hover .right {
  transform: translate3d(-75px, 0px, 150px);
  background-color: var(--right-color);
}

.child {
  border: 4px solid var(--child-border-color);
  transform: translate3d(0px, 0px, 0px);
  display: grid;
  place-items: center;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
}

.header {
  grid-area: header / header / header / header;
  border-color: var(--header-border-color);
  transition: transform 500ms ease 350ms, background-color 250ms ease 350ms;
}

.left {
  border-color: var(--left-border-color);
  grid-area: left / left / left / left;
  transition: transform 200ms ease 250ms, background-color 250ms ease 250ms;
}

.right {
  border-color: var(--right-border-color);
  grid-area: right / right / right / right;
  transition: transform 250ms ease 300ms, background-color 250ms ease 300ms;
}
</style>
