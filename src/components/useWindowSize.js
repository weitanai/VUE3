import { ref, watchEffect } from 'vue'



export function useWindowSize() {
    if (!window) {
        return {
            width: ref(100),
            height: ref(100),
        }
    }
    const width = ref(window.innerWidth)
    const height = ref(window.innerHeight)


    window.addEventListener("resize", () => {
        width.value = window.innerWidth;
        height.value = window.innerHeight
    });

    watchEffect(() => {
        width.value = window.innerWidth
        height.value = window.innerHeight
    })
    return { width, height }
}