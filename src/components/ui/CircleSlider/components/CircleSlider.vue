<template>
  <div class="slider-circle">
    <div class="fields_item_img" v-if="urlImg">
      <img :src="urlImg" alt="img">
    </div>
    <div class="fields_item_txt" v-if="text">
      <p>{{text}}</p>
    </div>
    <div class="fields_item_svg">
      <svg v-if="disabled" :width="side + 'px'" :height="(side + 20) + 'px'" :viewBox="'0 0 ' + side + ' ' + side" ref="_svg"
           @click="handleClick"
      >
        <g>
          <circle :stroke="circleColor" style="cursor: pointer;" fill="none" :stroke-width="cpMainCircleStrokeWidth" :cx="cpCenter" :cy="cpCenter" :r="radius"></circle>
          <path :stroke="progressColor" fill="none" :stroke-width="cpPathStrokeWidth" :d="cpPathD"></path>
          <circle style="cursor: pointer;" :fill="knobColor" :r="cpKnobRadius" :cx="cpPathX" :cy="cpPathY" stroke="#FF441D" stroke-width="5"></circle>
          <text :x="cpPathX" :y="cpPathY"
                text-anchor="middle"
                dominant-baseline="central"
                stroke="#3B3B3B"
                style="font-size: 24px; font-weight: bold;"
                stroke-width="1px"
          > {{value}}
          </text>
        </g>
      </svg>
      <svg v-else :width="side + 'px'" :height="(side + 20) + 'px'" :viewBox="'0 0 ' + side + ' ' + side" ref="_svg">
        <g>
          <circle :stroke="circleColor" fill="none" :stroke-width="cpMainCircleStrokeWidth" :cx="cpCenter" :cy="cpCenter" :r="radius"></circle>
          <path :stroke="progressColor" fill="none" :stroke-width="cpPathStrokeWidth" :d="cpPathD"></path>
          <circle style="cursor: pointer;" :fill="knobColor" :r="cpKnobRadius" :cx="cpPathX" :cy="cpPathY" stroke="#FF441D" stroke-width="5"></circle>
          <text :x="cpPathX" :y="cpPathY"
                text-anchor="middle"
                dominant-baseline="central"
                stroke="#3B3B3B"
                style="font-size: 24px; font-weight: bold;"
                stroke-width="1px"
          > {{value}}
          </text>
        </g>
      </svg>

    </div>

  </div>
</template>
<script>
import TouchPosition from '../modules/touch_position.js'
import CircleSliderState from '../modules/circle_slider_state.js'
export default {
  name: 'CircleSlider',
  created () {
    this.stepsCount = 1 + (this.max - this.min) / this.stepSize
    this.steps = Array.from({
      length: this.stepsCount
    }, (_, i) => this.min + i * this.stepSize)

    this.circleSliderState = new CircleSliderState(this.steps, this.startAngleOffset, this.value)
    this.angle = this.circleSliderState.angleValue
    this.currentStepValue = this.circleSliderState.currentStep

    let maxCurveWidth = Math.max(this.cpMainCircleStrokeWidth, this.cpPathStrokeWidth)
    this.radius = (this.side / 2) - Math.max(maxCurveWidth, this.cpKnobRadius * 2) / 2
    this.updateFromPropValue(this.value)
  },
  mounted () {
    this.touchPosition = new TouchPosition(this.$refs._svg, this.radius, this.radius / 2)
  },
  // beforeUpdate () {
  //   console.log('BeforeUpdated')
  //   this.stepsCount = 1 + (this.max - this.min) / this.stepSize
  //   this.steps = Array.from({
  //     length: this.stepsCount
  //   }, (_, i) => this.min + i * this.stepSize)
  //   console.log(this.steps, 'steps before')
  // },
  // updated () {
  //   this.circleSliderState = new CircleSliderState(this.steps, this.startAngleOffset, this.value)
  // },
  props: {
    startAngleOffset: {
      type: Number,
      required: false,
      default: function () {
        // return Math.PI / 20
        return 0
      }
    },
    value: {
      type: Number,
      required: false,
      default: 0
    },
    limit: {
      type: Number,
      required: false,
      default: 0
    },
    disabled: {
      type: Boolean,
      required: false,
      default: true
    },
    side: {
      type: Number,
      required: false,
      default: 100
    },
    stepSize: {
      type: Number,
      required: false,
      default: 1
    },
    min: {
      type: Number,
      required: false,
      default: 0
    },
    max: {
      type: Number,
      required: false,
      default: 100
    },
    urlImg: {
      type: String,
      required: false,
      default: ''
    },
    text: {
      type: String,
      required: false,
      default: ''
    },
    circleColor: {
      type: String,
      required: false,
      default: '#334860'
    },
    progressColor: {
      type: String,
      required: false,
      default: '#00be7e'
    },
    knobColor: {
      type: String,
      required: false,
      default: '#00be7e'
    },
    knobRadius: {
      type: Number,
      required: false,
      default: null
    },
    knobRadiusRel: {
      type: Number,
      required: false,
      default: 7
    },
    circleWidth: {
      type: Number,
      required: false,
      default: null
    },
    circleWidthRel: {
      type: Number,
      required: false,
      default: 20
    },
    progressWidth: {
      type: Number,
      required: false,
      default: null
    },
    progressWidthRel: {
      type: Number,
      required: false,
      default: 10
    }
  },
  data () {
    return {
      steps: null,
      stepsCount: null,
      radius: 0,
      angle: 0,
      currentStepValue: 0,
      mousePressed: false,
      circleSliderState: null,
      mousemoveTicks: 0,
      newAngle: null,
      timer: null,
      old: null
    }
  },
  computed: {
    // cpStartAngleOffset () {
    //   if (!this.minStepLimit) {
    //     return 0
    //   }
    // },
    cpCenter () {
      return this.side / 2
    },
    cpAngle () {
      return this.angle + Math.PI / 2
    },
    cpMainCircleStrokeWidth () {
      return this.circleWidth || (this.side / 2) / this.circleWidthRel
    },
    cpPathDirection () {
      return (this.cpAngle < 3 / 2 * Math.PI) ? 0 : 1
    },
    cpPathX () {
      return this.cpCenter + this.radius * Math.cos(this.cpAngle)
    },
    cpPathY () {
      return this.cpCenter + this.radius * Math.sin(this.cpAngle)
    },
    cpPathStrokeWidth () {
      return this.progressWidth || (this.side / 2) / this.progressWidthRel
    },
    cpKnobRadius () {
      return this.knobRadius || (this.side / 2) / this.knobRadiusRel
    },
    cpPathD () {
      let parts = []
      parts.push('M' + this.cpCenter)
      parts.push(this.cpCenter + this.radius)
      parts.push('A')
      parts.push(this.radius)
      parts.push(this.radius)
      parts.push(0)
      parts.push(this.cpPathDirection)
      parts.push(1)
      parts.push(this.cpPathX)
      parts.push(this.cpPathY)
      return parts.join(' ')
    }
  },
  methods: {
    /*
     */
    fitToStep (val) {
      return Math.round(val / this.stepSize) * this.stepSize
    },

    /*
     */
    handleClick (e) {
      this.touchPosition.setNewPosition(e)
      if (this.touchPosition.isTouchWithinSliderRange) {
        this.newAngle = this.touchPosition.sliderAngle

        if (this.limit <= 0 && this.newAngle > this.angle) return true

        this.old = this.angleOld.bind(this, this.angle, this.newAngle)
        this.animateSlider(this.angle, this.newAngle)
      }
    },

    angleOld (angle, newAngle) {
      this.animateSlider(newAngle, angle)
    },

    /*
     */
    handleMouseDown (e) {
      e.preventDefault()
      this.mousePressed = true
      window.addEventListener('mousemove', this.handleWindowMouseMove)
      window.addEventListener('mouseup', this.handleMouseUp)
    },

    /*
     */
    handleMouseUp (e) {
      e.preventDefault()
      this.mousePressed = false
      window.removeEventListener('mousemove', this.handleWindowMouseMove)
      window.removeEventListener('mouseup', this.handleMouseUp)
      this.mousemoveTicks = 0
    },

    /*
     */
    handleWindowMouseMove (e) {
      e.preventDefault()
      if (this.mousemoveTicks < 5) {
        this.mousemoveTicks++
      }
      this.touchPosition.setNewPosition(e)
      this.updateSlider()
    },

    /*
     */
    handleTouchMove (e) {
      this.$emit('touchmove')
      // Do nothing if two or more fingers used
      if (e.targetTouches.length > 1 || e.changedTouches.length > 1 || e.touches.length > 1) {
        return true
      }

      const lastTouch = e.targetTouches.item(e.targetTouches.length - 1)
      this.touchPosition.setNewPosition(lastTouch)
      if (this.touchPosition.isTouchWithinSliderRange) {
        e.preventDefault()
        this.updateSlider()
      }
    },

    /*
     */
    updateAngle (angle) {
      this.circleSliderState.updateCurrentStepFromAngle(angle)
      this.angle = this.circleSliderState.angleValue
      this.currentStepValue = this.circleSliderState.currentStep
      this.$emit('input', this.currentStepValue)
    },

    /*
     */
    updateFromPropValue (value) {
      let stepValue = this.fitToStep(value)
      this.circleSliderState.updateCurrentStepFromValue(stepValue)

      this.angle = this.circleSliderState.angleValue
      this.currentStepValue = stepValue
      this.$emit('input', this.currentStepValue)
    },

    /*
     */
    updateSlider () {
      const angle = this.touchPosition.sliderAngle
      if (Math.abs(angle - this.angle) < Math.PI) {
        this.updateAngle(angle)
      }
    },

    /*
     */
    animateSlider (startAngle, endAngle) {
      const direction = startAngle < endAngle ? 1 : -1
      const curveAngleMovementUnit = direction * this.circleSliderState.angleUnit * 2

      const animate = () => {
        // if (Math.abs(endAngle - startAngle) < Math.abs(2 * curveAngleMovementUnit)) {
        if (direction) {
          this.updateAngle(endAngle)
        } else {
          const newAngle = startAngle + curveAngleMovementUnit
          this.updateAngle(newAngle)
          this.animateSlider(newAngle, endAngle)
        }
      }

      window.requestAnimationFrame(animate)
    }
  },
  watch: {
    value (val) {
      this.updateFromPropValue(val)

      if (this.limit < 0) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => this.old(), 0)
        return true
      }
      clearTimeout(this.timer)
    }
  }
}
</script>

<style scoped>
  .slider-circle {
    display: inline-block;
    position: relative;
    padding: 10px;
  }

  .fields_item_svg {
    position: relative;
    z-index: 5;
  }
  .fields_item_img {
    position: absolute;
    width: 117px;
    height: 117px;
    top: 49%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .slider-circle__item {
    position: relative;
    z-index: 10;
  }

  .circle-text {
    fill: #ffffff
  }
</style>
