export const mergeIntervals = (intervals) => {
    if (!intervals.length) return [];
  
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [intervals[0]];
  
    for (let i = 1; i < intervals.length; i++) {
      const [currStart, currEnd] = intervals[i];
      const lastEnd = merged[merged.length - 1][1];
  
      if (currStart <= lastEnd) {
        // Merge overlapping intervals
        merged[merged.length - 1][1] = Math.max(lastEnd, currEnd);
      } else {
        merged.push([currStart, currEnd]);
      }
    }
  
    return merged;
  };
  
  export const getProgressPercent = (intervals, duration) => {
    const totalWatched = intervals.reduce(
      (sum, [start, end]) => sum + (end - start),
      0
    );
    return (totalWatched / duration) * 100;
  };
  