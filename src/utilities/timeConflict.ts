export const parseMeeting = (meets: string) => {
  if (!meets) return { days: [], start: 0, end: 0 };

  const parts = meets.split(" ");
  if (parts.length < 2) return { days: [], start: 0, end: 0 };

  const [daysPart, timesPart] = parts;
  const days = daysPart.split("");

  const [startStr, endStr] = timesPart.split("-");
  const start = parseTime(startStr);
  const end = parseTime(endStr);

  return { days, start, end };
};

// hopefully works for only military time
export const parseTime = (timeStr: string) => {
  const [hour, minute] = timeStr.split(":").map(Number);
  return hour * 60 + minute;
};


export const timesOverlap = (start1: number, end1: number, start2: number, end2: number) =>
  start1 < end2 && start2 < end1;

export const daysOverlap = (days1: string[], days2: string[]) =>
  days1.some((day) => days2.includes(day));

export const coursesConflict = (courseA: any, courseB: any) => {

  if (courseA.term !== courseB.term) return false;

  // no meeting times for one or both courses
  if (!courseA.meets || !courseB.meets) return false;

  const a = parseMeeting(courseA.meets);
  const b = parseMeeting(courseB.meets);

  return daysOverlap(a.days, b.days) && timesOverlap(a.start, a.end, b.start, b.end);
};

export const hasConflict = (course: any, selected: string[], allCourses: any) => {
  return selected.some((id) => coursesConflict(course, allCourses[id]));
};