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
      default: ''
    },
    randomChars: {
      type: String,
      default: 'ABCDEFGHIJKLMNOPQRSTUVWXYG01234566789'
    },
    timeOut: {
      type: Number,
      default: 20
    },
    emptyChar: {
      type: String,
      default: '-'
    }
  },
  data() {
    return {
      text: '',
      outputText: '',
      originalLength: 0,
      length: 0,
      shuffleLength: 0,
      startTime: 0
    }
  },
  async mounted() {
    this.startTime = await new Date().getTime()
    this.originalLength = this.originalText.length
    await this.init()
    this.update()
  },
  methods: {
    init() {
      this.text = ''
      this.length = 0
      this.shuffleLength = 0
    },
    update() {
      if (this.length > this.originalLength) {
        return
      }
      const currentTime = new Date().getTime()

      if (currentTime - this.startTime > this.timeOut) {
        this.startTime = currentTime

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
      }
      this.outputText = this.text
      window.requestAnimationFrame(() => {
        this.update()
      })
    },
    generateRandomText(l) {
      let randomText = ''
      for (let i = 0; i < l; i++) {
        randomText += this.randomChars[
          Math.floor(Math.random() * this.randomChars.length)
        ]
      }
      return randomText
    }
  }
}
</script>
