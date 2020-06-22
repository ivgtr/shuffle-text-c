<template>
  <span>
    {{ outputText }}
  </span>
</template>

<script>
export default {
  props: {
    originalText: {
      type: String,
      default: undefined
    },
    randomChars: {
      type: String,
      default: 'ABCDEFGHIJKLMNOPQRSTUVWXYG01234566789'
    },
    timeOut: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      text: '',
      outputText: '',
      originalLength: this.originalText.length,
      length: 0,
      shuffleLength: 0,
      startTime: undefined
    }
  },
  mounted() {
    this.startTime = new Date().getTime()
    this.shuffle()
  },
  methods: {
    init() {
      this.text = ''
      this.length = 0
      this.shuffleLength = 0
    },
    shuffle() {
      this.init()
      requestAnimationFrame(this.update().bind(this))
    },
    update() {
      if (this.length > this.originalLength) {
        return
      }
      const currentTime = new Date().getTime()
      if (currentTime - this.startTime > this.timeOut) {
        if (this.text.length < this.originalLength) {
          this.text += this.emptyChar
        }
        if (this.text.length > this.originalLength / 3) {
          this.text =
            this.generateRandomText(this.shuffleLength) +
            this.text.slice(this.shuffleLength)

          if (this.shuffleLength < this.originalLength) this.shuffleLength++
        }

        if (this.shuffleLength > this.originalLength / 2) {
          this.text =
            this.originalText.slice(0, this.length) +
            this.text.slice(this.length)
          this.length++
        }
      } else {
        return
      }
      this.outputText = this.text
      requestAnimationFrame(this.update())
    },
    generateRandomTex(length) {
      let randomText = ''
      for (let i = 0; i < length; i++) {
        randomText += this.randomChars[
          Math.floor(Math.random() * this.randomChars.length)
        ]
      }
      return randomText
    }
  }
}
</script>
