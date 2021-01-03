export const Delay = (args: Function, time: number) => setTimeout(() => {
  args()
}, time)
