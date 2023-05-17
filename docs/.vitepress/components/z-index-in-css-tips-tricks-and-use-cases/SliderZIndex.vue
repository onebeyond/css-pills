<template>
  <div>
    <div class="demo-container">
      <div class="background" :style="{ 'z-index': zIndex }">
        change my z-index
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
  name: "SliderZIndex",
  data() {
    return {
      zIndex: 0,
    };
  },
};
</script>

<style scoped>
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
  background-color: beige;
}
.child {
  display: flex;
  height: 50px;
  background-color: rgb(186, 195, 195);
  color: white;
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
  align-items: end;
  justify-content: center;
  background-color: blue;
  position: relative;
  border: 5px solid lightskyblue;
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
  background-color: red;
  position: relative;
  border: 5px solid lightcoral;
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
