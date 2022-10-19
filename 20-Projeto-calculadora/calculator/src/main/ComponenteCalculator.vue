<template>
  <div class="calculator">
    <ComponenteDisplay :value="displayValue" />
    <ComponenteButton label="AC" triple @onCalcButtonClick="clearMemory" />
    <ComponenteButton label="/" operation @onCalcButtonClick="setOperation" />
    <ComponenteButton label="7" @onCalcButtonClick="addDigit" />
    <ComponenteButton label="8" @onCalcButtonClick="addDigit" />
    <ComponenteButton label="9" @onCalcButtonClick="addDigit" />
    <ComponenteButton label="*" operation @onCalcButtonClick="setOperation" />
    <ComponenteButton label="4" @onCalcButtonClick="addDigit" />
    <ComponenteButton label="5" @onCalcButtonClick="addDigit" />
    <ComponenteButton label="6" @onCalcButtonClick="addDigit" />
    <ComponenteButton label="+" operation @onCalcButtonClick="setOperation" />
    <ComponenteButton label="1" @onCalcButtonClick="addDigit" />
    <ComponenteButton label="2" @onCalcButtonClick="addDigit" />
    <ComponenteButton label="3" @onCalcButtonClick="addDigit" />
    <ComponenteButton label="-" operation @onCalcButtonClick="setOperation" />
    <ComponenteButton label="0" double @onCalcButtonClick="addDigit" />
    <ComponenteButton label="." @onCalcButtonClick="addDigit" />
    <ComponenteButton label="=" operation @onCalcButtonClick="setOperation" />
  </div>
</template>

<script>
import ComponenteDisplay from "../components/ComponenteDisplay.vue";
import ComponenteButton from "../components/ComponenteButton.vue";
export default {
  data: function () {
    return {
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      current: 0,
    };
  },
  components: {
    ComponenteDisplay,
    ComponenteButton,
  },
  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data());
    },
    setOperation(operation) {
      if (this.current === 0) {
        this.operation = operation;
        this.current = 1;
        this.clearDisplay = true;
      } else {
        const equals = operation === "=";
        const currentOperation = this.operation;
        try {
          this.values[0] = eval(
            `${this.values[0]}  ${currentOperation}  ${this.values[1]}`
          );
        } catch (e) {
          this.$emit("onError", e);
        }
        this.values[1] = 0;

        this.displayValue = this.values[0];
        this.operation = equals ? null : operation;
        this.current = equals ? 0 : 1;
        this.clearDisplay = !equals;
      }
    },
    addDigit(n) {
      if (n === "." && this.displayValue.includes(".")) {
        return;
      }
      const clearDisplay = this.displayValue === "0" || this.clearDisplay;
      const currentValue = clearDisplay ? "" : this.displayValue;
      const displayValue = currentValue + n;
      this.displayValue = displayValue;
      this.clearDisplay = false;
      this.values[this.current] = displayValue;
    },
  },
};
</script>

<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>