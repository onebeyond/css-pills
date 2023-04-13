<template>
  <div class="box-model-wrapper">
    <h1 class="header">CSS Box Model</h1>

    <div class="box-model-container">
      <div class="box-model-area margin-area">
        <div class="box-model-area border-area">
          <div class="box-model-area padding-area">
            <div class="box-model-area content-area"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxModel",
};
</script>

<style scoped>
.box-model-wrapper {
  /* FONTS  */
  --primary-font: "Roboto Mono", monospace;

  /*  THEME COLORS  */
  --background-color: #fff;
  --text-color: #000;
  --content-color: #fff;
  --padding-color: #c2cf8a;
  --border-color: #fddd9b;
  --margin-color: #f9cc9d;

  /*    */
  --size: 8vmin;
  --width: calc(var(--size) * 4);
  --height: calc(var(--size) * 1);
  --font-size: calc(var(--size) * 0.25);

  font-family: var(--primary-font);
  color: var(--text-color);

  position: relative;
  width: 100%;

  background-color: var(--background-color);
  aspect-ratio: 12/7;
  padding: 15px;
}

.header {
  width: 100%;
  display: flex;
  justify-content: center;
}

.box-model-container {
  position: relative;
  margin: 20px auto;
}

.box-model-area {
  cursor: pointer;
  width: calc(100% - 7rem);
  aspect-ratio: 16/9;
  border-radius: 0.2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.box-model-area:hover {
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
}

.box-model-area::before {
  position: absolute;
  top: 0.3rem;
  left: 50%;
  transform: translateX(-50%);
}

.margin-area {
  background-color: var(--margin-color);
  top: 0;
  transform: translateX(-50%);
}

.margin-area::before {
  content: "Margin";
}

.border-area {
  background-color: var(--border-color);
}

.border-area::before {
  content: "Border";
}

.padding-area {
  background-color: var(--padding-color);
}

.padding-area::before {
  content: "Padding";
}

.content-area {
  background-color: var(--content-color);
}

.content-area::before {
  content: "Content";
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
