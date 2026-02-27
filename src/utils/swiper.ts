export const getLoopConfig = (count: number, min = 2) => {
  const canLoop = count >= min;
  return { canLoop, loop: canLoop, autoplay: canLoop };
};