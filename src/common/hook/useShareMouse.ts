import { createSharedComposable, useMouse } from '@vueuse/core';

const useSharedMouse = createSharedComposable(useMouse);

export { useSharedMouse };
