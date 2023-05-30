<template>
  <div class="main-wrapper">
    <div class="demo-container">
      <div class="background" :style="{ 'z-index': zIndex }">
        Change my z-index
      </div>
      <div class="wrapper-one">
        <div class="child blue one">z-index: 6</div>
        <div class="child blue two">z-index: 4</div>
        <div class="child blue three">z-index: 2</div>
      </div>
      <div class="wrapper-two">
        <div class="child red four">z-index: auto</div>
        <div class="child red five">z-index: auto</div>
        <div class="child red six">z-index: auto</div>
      </div>
    </div>
    <div class="control-bar">
      <form>
        <label for="position-slider">
          Use this slider to change the z-index of the yellow box
        </label>
        <input
          type="range"
          min="0"
          max="7"
          id="position-slider"
          name="position-slider"
          list="markers"
          step="1"
          v-model="zIndex"
        />

        <datalist id="markers">
          <option value="0" label="0"></option>
          <option value="1" label="1"></option>
          <option value="2" label="2"></option>
          <option value="3" label="3"></option>
          <option value="4" label="4"></option>
          <option value="5" label="5"></option>
          <option value="6" label="6"></option>
          <option value="7" label="7"></option>
        </datalist>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderZIndex',
  data() {
    return {
      zIndex: 0,
    };
  },
};
</script>

<style scoped>
.main-wrapper {
  /* THEME COLORS */

  --background-color: #fff;
  --main-color: #ffdf50;
  --main-border-color: #d8b130;
  --blue-color: #87cdeb;
  --blue-border-color: #65a6c5;
  --red-color: #e7adad;
  --red-border-color: #c47979;
}

.demo-container {
  width: 300px;
  margin: 4rem auto;
  position: relative;
  transition: transform 1s;
}

.background {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--main-color);
  border: 2px solid var(--main-border-color);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  font-size: 15px;
  font-weight: bold;
  color: #333;
}

.child {
  display: flex;
  height: 50px;
  color: white;
  border: 3px solid #bbb;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  font-weight: bold;
  align-items: bottom;
  justify-content: bottom;
}

.wrapper-one {
  position: relative;
  top: -20px;
}

.wrapper-two {
  position: relative;
  bottom: -20px;
}

.blue {
  align-items: flex-end;
  justify-content: center;
  background-color: var(--blue-color);
  border: 2px solid var(--blue-border-color);
  position: relative;
}

.blue:hover {
  background-color: #78c4e9;
}

.red:hover {
  background-color: #eaa0a0;
}

.one {
  margin-top: -20px;
  left: -30px;
  z-index: 6;
}

.two {
  margin-top: -20px;
  z-index: 4;
}

.three {
  margin-top: -20px;
  left: 30px;
  z-index: 2;
  margin-block-end: 40px;
}

.red {
  justify-content: center;
  position: relative;
  background-color: var(--red-color);
  border: 2px solid var(--red-border-color);
}

.four {
  margin-top: 0px;
  left: -30px;
}

.five {
  margin-top: -20px;
}

.six {
  margin-top: -20px;
  left: 30px;
}

.control-bar form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

datalist {
  display: flex;
  justify-content: space-between;
  width: 300px;
  font-family: monospace;
}

input {
  width: 300px;
}
</style>
