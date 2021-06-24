<template>
  <div ref="puzzle" v-if="visible" class="puzzle-container">
    <div class="puzzle-mask"></div>

    <div class="puzzle-panel">
      <div class="puzzle-header">
        <span>请完成安全验证</span>
        <svg-icon iconClass="close" :size="1.5"></svg-icon>
      </div>

      <div class="puzzle-content">
        <div class="puzzle-content-top">
          <svg-icon iconClass="question" :size="1.5"></svg-icon>
          <svg-icon iconClass="refresh" :size="1.5"></svg-icon>
        </div>
        <div class="puzzle-content-main">
          <img ref="puzzleBg" src="@/assets/puzzle-bg.jpg" />
          <img ref="contentSlider" class="puzzle-content-slider" src="@/assets/puzzle-slider.png" />
        </div>
      </div>

      <div class="puzzle-control">
        <div ref="indicator" class="puzzle-control-indicator"></div>
        <div ref="controlSlider" class="puzzle-control-slider" @mousedown="sliderMove">
          <svg-icon iconClass="arrow-right" :size="1.5"></svg-icon>
        </div>
        <div class="puzzle-control-tips">向右滑动完成拼图</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        puzzlePanelVisible: Boolean
    },
    data: function() {
        return {
            visible: this.puzzlePanelVisible
        }
    },
    mounted: function() {
        this.insertToBody()
    },
    methods: {
        insertToBody: function() {
            const ele = this.$refs.puzzle
            const body = document.body
            body.appendChild(ele)
        },

        sliderMove: function(e) {
            const contentSlider = this.$refs.contentSlider
            const controlSlider = this.$refs.controlSlider
            const puzzleBg = this.$refs.puzzleBg
            const indicator = this.$refs.indicator

            const MAX_OFFSET = puzzleBg.clientWidth - contentSlider.clientWidth
            const original = { x: e.x, y: e.y }

            const real = 210
            // x offset when mouseup
            let x = 0
            const mouseMove = event => {
                x = event.x - original.x
                if (x > MAX_OFFSET || x < 0) return false

                controlSlider.style.left = x + 'px'
                contentSlider.style.left = x + 'px'
                indicator.style.width = controlSlider.clientWidth + x + 'px'
                indicator.classList.add('is-moving')
            }

            const mouseUp = () => {
                document.removeEventListener('mousemove', mouseMove)
                document.removeEventListener('mouseup', mouseUp)

                if (x >= real - 3 && x <= real + 3) this.setValue()
                else indicator.classList.add('error')

                controlSlider.style.left = 0
                contentSlider.style.left = 0
                indicator.style.width = 0
                indicator.classList.remove('is-moving')
                indicator.classList.remove('error')
            }

            document.addEventListener('mousemove', mouseMove)
            document.addEventListener('mouseup', mouseUp)
        },

        setValue: function() {
            this.visible = false
            this.$emit('invisible', false)
        }
    }
}
</script>

<style lang="scss" scoped>
.puzzle-container {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .puzzle-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  .puzzle-panel {
    position: absolute;
    z-index: 10;
    top: 35%;
    left: 50%;
    background: #ffffff;
    transform: translate(-50%, -50%);

    .puzzle-header {
      height: 3rem;
      margin: 0 1rem;
      border-bottom: 1px solid #e4e7eb;

      span {
        line-height: 3rem;
      }

      svg {
        float: right;
        transform: translateY(0.75rem);
      }
    }

    .puzzle-content {
      position: relative;
      margin: 1rem;

      .puzzle-content-top {
        position: absolute;
        z-index: 11;
        top: 0;
        right: 0;

        svg {
          margin-right: 0.5rem;
          color: rgba(0, 0, 0, 0.3);
          cursor: pointer;
        }

        svg:hover {
          color: rgba(0, 0, 0, 0.65);
        }
      }

      .puzzle-content-main {
        position: relative;

        .puzzle-content-slider {
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }

    .puzzle-control {
      position: relative;
      height: 3rem;
      margin: 1rem;
      background-color: #f7f9fa;
      border: 1px solid #e4e7eb;
      border-radius: 2px;
      outline: none;

      .puzzle-control-indicator {
        position: absolute;
        top: -1px;
        left: -1px;
        width: 0;
        height: 3rem;
        border: 1px solid #e4e7eb;
        border-radius: 2px;

        &.is-moving {
          background-color: #d1e9fe;
          border-color: #1991fa;
        }

        &.error {
          border-color: #f57a7a;
          background-color: #fce1e1;
        }
      }

      .puzzle-control-slider {
        position: absolute;
        top: 0;
        left: 0;
        width: 3rem;
        height: 3rem;
        background-color: #ffffff;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
        cursor: pointer;

        &:hover {
          color: #ffffff;
          background-color: #1991fa;
        }

        svg {
          transform: translate(0.75rem, 0.75rem);
        }
      }

      .puzzle-control-tips {
        margin-left: 3rem;
        line-height: 3rem;
        text-align: center;
      }
    }
  }
}
</style>
