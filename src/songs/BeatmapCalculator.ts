export function generateBeatmaps({
  tempo,
  offset,
  end,
}: {
  tempo: number;
  offset: number;
  end: number;
}): { left: number[]; right: number[] } {
  const interval = 60 / tempo;
  const left: number[] = [];
  const right: number[] = [];

  let t = offset;
  let isLeft = true;
  
  while (t <= end + 1e-9) {
    const roundedT = Math.round(t * 1000) / 1000;
    if (isLeft) {
      left.push(roundedT);
    } else {
      right.push(roundedT);
    }
    isLeft = !isLeft;
    t += interval;
  }

  return { left, right };
}
