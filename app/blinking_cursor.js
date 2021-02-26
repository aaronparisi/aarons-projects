let $cursor = $('#blinking-cursor')

const timeoutLoop = () => {
  setTimeout(() => {
    $('#blinking-cursor').toggleClass('blinked-on')
    $('#blinking-cursor').toggleClass('blinked-off')

    timeoutLoop()
  }, 500);
}

$(function() {
  timeoutLoop()
})