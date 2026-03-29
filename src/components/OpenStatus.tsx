"use client";

export function OpenStatus() {
  const now = new Date();
  const et = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
  const day = et.getDay(); // 0=Sun,1=Mon..6=Sat
  const minutes = et.getHours() * 60 + et.getMinutes();

  let isOpen = false;
  if (day >= 1 && day <= 6) {
    isOpen = minutes >= 540 && minutes < 1140; // Mon–Sat 9AM–7PM
  } else if (day === 0) {
    isOpen = minutes >= 720 && minutes < 1140; // Sun 12PM–7PM
  }

  return (
    <div
      className={`ml-auto flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${
        isOpen ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          isOpen ? "animate-pulse bg-emerald-500" : "bg-red-400"
        }`}
      />
      {isOpen ? "Open Now" : "Closed"}
    </div>
  );
}
