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
  name: "HoverZIndex",
  data() {
    return {
      zIndex: 0,
    };
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  margin-block-start: 2rem;
}

.wrapper {
  display: grid;
  max-width: 400px;
  height: 270px;
  grid-template-areas:
    "header header header"
    "left left right"
    "left left right";
  grid-template-rows: 30% 1fr;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 5px;
  margin: 2rem auto 4rem;
  padding: 10px;
  background-color: white;
  border: 5px solid #333;
  perspective: 750px;
  transition: transform 1s;
}

.wrapper:hover {
  transform: perspective(800px) rotateY(-50deg);
}
.wrapper:hover .header {
  transform: translate3d(-120px, 0px, 240px);
  background-color: rgb(68, 51, 255);
}

.wrapper:hover .left {
  background-color: rgb(0, 179, 179);
  transform: translate3d(-25px, 0px, 50px);
}
.wrapper:hover .right {
  transform: translate3d(-75px, 0px, 150px);
  background-color: rgb(230, 0, 103);
}

.child {
  border: 5px solid;
  transform: translate3d(0px, 0px, 0px);
  display: grid;
  place-items: center;
  color: white;
  font-size: 1.75rem;
  font-weight: bold;
}

.header {
  grid-area: header / header / header / header;
  border-color: rgb(68, 51, 255);
  transition: transform 500ms ease 350ms, background-color 250ms ease 350ms;
}

.left {
  border-color: rgb(0, 179, 179);
  grid-area: left / left / left / left;
  transition: transform 200ms ease 250ms, background-color 250ms ease 250ms;
}

.right {
  border-color: rgb(230, 0, 103);
  grid-area: right / right / right / right;
  transition: transform 250ms ease 300ms, background-color 250ms ease 300ms;
}
</style>
