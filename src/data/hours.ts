export type Hour = {
  day: string;
  hours: string;
};

export const regularHours: Hour[] = [
  { day: "Monday", hours: "12–11 PM" },
  { day: "Tuesday", hours: "12–11 PM" },
  { day: "Wednesday", hours: "12–11 PM" },
  { day: "Thursday", hours: "12–11 PM" },
  { day: "Friday", hours: "12–11 PM" },
  { day: "Saturday", hours: "12–11 PM" },
  { day: "Sunday", hours: "12–11 PM" },
];

export const deliveryHours: Hour[] = [
  { day: "Monday", hours: "5 PM–12 AM" },
  { day: "Tuesday", hours: "12 AM–10 PM" },
  { day: "Wednesday", hours: "5–10 PM" },
  { day: "Thursday", hours: "5–10 PM" },
  { day: "Friday", hours: "5–10 PM" },
  { day: "Saturday", hours: "5–10 PM" },
  { day: "Sunday", hours: "5–10 PM" },
];

export const takeoutHours: Hour[] = [
  { day: "Monday", hours: "4:30–10 PM" },
  { day: "Tuesday", hours: "4:30–10 PM" },
  { day: "Wednesday", hours: "4:30–10 PM" },
  { day: "Thursday", hours: "4:30–10 PM" },
  { day: "Friday", hours: "4:30–10 PM" },
  { day: "Saturday", hours: "4:30–10 PM" },
  { day: "Sunday", hours: "4:30–11 PM" },
];
