import { ref, onMounted, onUnmounted } from "vue";
export function useScroll() {
  const isGoingDown = ref(false)

  const handlerScroll = (event) => {
    if (checkScrollDirectionIsUp(event)) {
      isGoingDown.value = false
    } else {
      isGoingDown.value = true
    }
  }
  function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }
  onMounted(() => {
    window.addEventListener('wheel', handlerScroll)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', handlerScroll)
  })

  return {isGoingDown}
}