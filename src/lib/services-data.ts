import {
  Wrench,
  CircleDot,
  Sparkles,
  ClipboardCheck,
  Droplets,
  AlignCenter,
  CarFront,
  Thermometer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  price: string;
  highlight: boolean;
  image: string | null;
  pas: {
    hook: string;
    agitate: string;
    solution: string;
  };
  howItHappens: string;
  howWeFix: string;
  included: string[];
  whyUs: string[];
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "nc-state-inspection",
    icon: ClipboardCheck,
    title: "NC State Inspection",
    shortDescription:
      "Official NC inspection station. Walk-ins welcome. Most inspections done in under 30 minutes.",
    price: "From $13.60",
    highlight: true,
    image: null,
    pas: {
      hook: "Your registration renewal just showed up in the mail. You figure the car is probably fine. Maybe the tires look a little worn, but it drives okay. You schedule the NC state inspection and tell yourself it'll be a quick 20 minutes. Then the inspector walks back with a clipboard and a look on his face.",
      agitate:
        "A failed inspection means you can't legally drive the car until the issues are fixed. And the timing is never convenient. It's always the week you have somewhere to be and can't afford a surprise repair bill. Most drivers don't know exactly what NC inspectors check, so they have no idea what might fail. Worn brake pads, bald tires, a cracked windshield in the driver's sightline, tint that's too dark. These are the most common reasons we see people fail their NC state inspection every single week.",
      solution:
        "At LAV Motors, we're an official NC State Inspection Station right here in Hendersonville. We check everything on the state's required list, give you an honest assessment, and if something needs to be fixed before you'll pass, we can handle most repairs the same day. No runaround, no stress.",
    },
    howItHappens:
      "NC inspectors check over a dozen systems: brake condition and stopping power, tire tread depth (minimum 2/32\"), all exterior lighting, windshield condition, window tint opacity, horn, wipers, seat belts, and for vehicles in certain counties, emissions via an OBD-II scan. A single failed item means you walk away without a sticker. Brakes and tires are the most common culprits. They wear gradually and most people don't notice until an inspector flags it. A check engine light will also fail emissions in participating NC counties, even if the car runs fine.",
    howWeFix:
      "We run through the full NC inspection checklist top to bottom. If you pass, you get your sticker and you're done. If something fails (worn brake pads, a burnt-out light, low tread depth), we'll show you exactly what the issue is and give you a straightforward quote to fix it. Most common inspection failures are things we can repair the same day so you can get your sticker without a second trip.",
    included: [
      "Full NC safety inspection (brakes, lights, steering, wipers, horn, seat belts)",
      "Emissions OBD-II scan (required in some counties, $30 additional)",
      "Tire tread depth check",
      "Windshield and glass inspection",
      "NC inspection sticker upon passing",
      "Written report of any issues found",
    ],
    whyUs: [
      "State-certified NC inspection station, official and legal",
      "No appointment needed, walk right in",
      "Fast turnaround, usually 20 to 30 minutes",
      "If you fail, we can fix most issues the same day",
      "Honest assessments, we won't manufacture problems that aren't there",
    ],
    faq: [
      {
        question: "Do I need an appointment for an NC state inspection?",
        answer:
          "No appointment needed. Drive in during business hours and we'll get you taken care of. Usually done in 20 to 30 minutes.",
      },
      {
        question: "What happens if my vehicle fails inspection?",
        answer:
          "We'll give you a clear report of what failed and what it'll cost to fix. We can handle most repairs right here so you can get your sticker the same day without driving to another shop.",
      },
      {
        question: "Does my county require emissions testing?",
        answer:
          "Emissions testing (OBD-II scan) is required in some NC counties including Buncombe. The safety inspection is $13.60; the OBD test is an additional $30. If your county requires it, we'll perform both as part of the inspection process.",
      },
    ],
  },
  {
    slug: "tires",
    icon: CircleDot,
    title: "Tires",
    shortDescription:
      "Brand new tires at the best prices in town. Radar & Falken tires, 3–4 day delivery. Mounting, balancing, rotation, and flat repair.",
    price: "Mount & balance from $26.99/tire",
    highlight: false,
    image: "/tires.avif",
    pas: {
      hook: "It's raining on I-26 and you're headed home from work. Traffic slows, you tap the brakes, and for half a second your car floats. The steering goes light. Nothing you do matters for that moment because your tires aren't touching the road. You get control back and your hands are shaking.",
      agitate:
        "That's what hydroplaning feels like on worn tires, and it happens fast with zero warning. Tire tread doesn't always wear down evenly. Heat, alignment issues, and under-inflation can create bald spots while the rest of the tire still looks okay. Bald tires in wet conditions are one of the leading causes of loss-of-control accidents. And if a weakened tire blows at highway speed, you'll have fractions of a second to react. NC summers cook rubber faster than most drivers realize. A tire that looks fine in spring can be dangerously thin by August.",
      solution:
        "At LAV Motors, we offer some of the best tire prices in Hendersonville — brand new Radar and Falken tires ordered specifically for your vehicle. Most orders arrive in 3–4 days, with expedited shipping available if you need them faster. We'll check your tread depth and wear patterns, help you pick the right tire for your vehicle and budget, and get them mounted and balanced the day they arrive.",
    },
    howItHappens:
      "Tires wear down as the rubber makes contact with the road over thousands of miles. When tread depth drops below 2/32\", the grooves that channel water away from the contact patch become too shallow. Water sits between the tire and the road and you lose traction. Blowouts happen when a weakened tire can't handle the heat and pressure of highway driving. Uneven wear (bald on the edges, fine in the middle, or vice versa) usually points to an alignment or inflation problem, and that uneven wear will repeat on brand-new tires if the underlying issue isn't fixed.",
    howWeFix:
      "We start with a tread depth check and a visual inspection for wear patterns, bulges, and sidewall damage. If you need tires, we'll help you find the right match for your vehicle and how you drive. We're not going to oversell you on something you don't need. After mounting, we balance every tire on our balancing machine and torque your lug nuts to spec. If your wear pattern suggests an alignment issue, we'll let you know before we put new tires on so they don't wear the same way.",
    included: [
      "Tire sales — Radar and Falken tires, brand new, ordered to your specs",
      "Professional mounting and balancing",
      "Tire rotation",
      "Flat tire repair (when repairable)",
      "TPMS sensor service",
      "Old tire disposal",
    ],
    whyUs: [
      "Best tire prices in Hendersonville — brand new, not used or recapped",
      "Honest recommendations based on your budget and driving habits",
      "We check for alignment issues before mounting new tires",
      "Modern mounting and balancing equipment",
      "3–4 day delivery, expedited shipping available",
    ],
    faq: [
      {
        question: "How do I know if my tires are too worn?",
        answer:
          "Insert a penny upside down into the tread. If you can see the top of Lincoln's head, your tread is at or below 2/32\" and the tires need to be replaced. If it looks borderline, come in and we'll measure it for you.",
      },
      {
        question: "Can you repair a flat tire?",
        answer:
          "Sometimes, yes. If the puncture is in the tread area and the tire isn't severely damaged or run-flat, we can patch it. We'll assess it when you come in.",
      },
      {
        question: "Do I need to make an appointment?",
        answer:
          "Call ahead so we can order your size and get them ready. Most tires arrive in 3–4 days, with expedited shipping available if you need them sooner.",
      },
    ],
  },
  {
    slug: "oil-change",
    icon: Droplets,
    title: "Oil Change",
    shortDescription:
      "Mobil-1 Full Synthetic oil changes. Quick, no-appointment service.",
    price: "From $110",
    highlight: false,
    image: "/oil-change.avif",
    pas: {
      hook: "You keep meaning to get an oil change. Life gets busy. Work, kids, errands. Three thousand miles past due turns into five thousand. The car still starts every morning. It still drives. You tell yourself it's fine.",
      agitate:
        "Here's what's happening inside your engine while you wait: oil breaks down. It stops lubricating and starts forming sludge, a thick dark buildup that coats the tiny passages oil needs to travel through to reach your pistons, bearings, and valves. Once sludge sets in, it doesn't just wash away with a fresh oil change. Engines that get neglected long enough need full teardowns to clean out, and some can't be saved. We've seen it. A repair that costs thousands of dollars, for a problem that costs around $110 to prevent. NC summers make this worse too. Heat doubles the rate at which oil oxidizes and degrades.",
      solution:
        "An oil change at LAV Motors takes about 30 minutes. No appointment needed. We use the grade and type your vehicle manufacturer specifies, swap the filter, top off your fluids, do a quick visual inspection of what we can see while we're underneath, and you're back on the road.",
    },
    howItHappens:
      "Engine combustion produces byproducts including carbon, moisture, and metal particles that mix with your oil over time. Fresh oil handles this, but as it ages it breaks down and can no longer suspend those contaminants. They clump together into sludge. Heat accelerates this process dramatically. In an NC summer, your engine compartment can reach 200 degrees or more. Skipping an oil change in that environment compresses months of degradation into weeks.",
    howWeFix:
      "We drain the old oil completely, replace the oil filter, and refill with the correct oil type and grade for your vehicle. If we find signs of sludge buildup, we'll let you know and discuss whether an engine flush makes sense. While the car is up, we do a visual check of belts, hoses, leaks, and tire condition. Not to manufacture upsells, but because catching something obvious while we're already under there takes 60 seconds and might save you a roadside breakdown.",
    included: [
      "Full oil drain and refill (Mobil-1 Full Synthetic)",
      "New oil filter",
      "Fluid top-off (washer fluid, coolant level check)",
      "Tire pressure check",
      "Multi-point visual inspection",
      "Oil life reminder sticker",
    ],
    whyUs: [
      "Quick service, most oil changes done in 30 minutes or less",
      "No appointment needed",
      "We use the grade your vehicle manufacturer specifies",
      "Transparent pricing, no surprise charges at checkout",
      "30+ years keeping Hendersonville drivers on the road",
    ],
    faq: [
      {
        question: "How often should I change my oil?",
        answer:
          "It depends on your vehicle and oil type. Most modern cars using full synthetic go 5,000 to 7,500 miles between changes. Check your owner's manual, or ask us and we'll tell you what your specific car actually needs.",
      },
      {
        question: "What kind of oil do you use?",
        answer:
          "We use Mobil-1 Full Synthetic Engine Oil exclusively. It's the best protection available, and it's the only oil we trust in your engine.",
      },
      {
        question: "Do I need an appointment?",
        answer:
          "No. Walk-ins are always welcome. Calling ahead can help reduce your wait time if we're busy.",
      },
    ],
  },
  {
    slug: "wheel-alignment",
    icon: AlignCenter,
    title: "Wheel Alignment",
    shortDescription:
      "Computerized alignment to stop uneven tire wear and fix a pulling car.",
    price: "From $140 ($155 European)",
    highlight: false,
    image: "/car-alignment.avif",
    pas: {
      hook: "You're driving straight down the highway and you let go of the steering wheel for a second. Your car drifts noticeably, consistently, to one side. Or maybe you just looked at your front tires and noticed the tread is wearing down on the inside edge while the middle still looks fine. Something's off and you know it.",
      agitate:
        "A car pulling to one side, a steering wheel that sits crooked when you're going straight, vibration through the wheel. These are classic bad alignment symptoms and they don't fix themselves. Every mile you drive misaligned, your tires are wearing unevenly and wearing out faster. Your fuel economy drops because the drivetrain is fighting against itself. Your suspension components take more stress than they were designed for. Put a brand-new set of tires on a misaligned car and they'll show the same uneven wear within 10,000 miles.",
      solution:
        "Our computerized alignment system measures your wheel angles to a fraction of a degree and compares them against your vehicle's factory specs. We adjust camber, caster, and toe until everything is back where it should be. You get a printed before-and-after report showing exactly what changed. Starting at $140 for most vehicles, $155 for European makes. No hidden fees.",
    },
    howItHappens:
      "Your wheels are set at precise angles from the factory. Camber is how much the wheel tilts in or out. Toe is whether the wheels point slightly inward or outward. Caster affects steering stability. These angles are designed to keep your tires wearing evenly and your car tracking straight. They get knocked out of spec by hitting a pothole or curb hard, by worn shocks or struts that can no longer hold the suspension geometry, or just by gradual wear in steering and suspension components over time. NC roads with their potholes, rough patches, and mountain terrain are tough on alignment.",
    howWeFix:
      "We drive the car onto our alignment rack and attach sensors to all four wheels. The computerized system reads the current angles and compares them to your vehicle's factory specifications. Our technicians then adjust the adjustable components until the readings match spec. After the alignment is complete, we take it for a test drive to confirm the car tracks straight and the steering wheel is centered. You leave with a printout showing the before and after numbers.",
    included: [
      "4-wheel computerized alignment",
      "Camber, caster, and toe adjustment",
      "Before and after alignment spec printout",
      "Steering and suspension visual inspection",
      "Test drive verification",
    ],
    whyUs: [
      "State-of-the-art computerized alignment machine with factory specs for all makes",
      "From $140 (most vehicles) or $155 (European makes), no hidden fees or surprise charges",
      "We show you the before and after data so you know exactly what was done",
      "We flag suspension wear that will cause alignment to drift again",
      "Experienced technicians who understand the full picture, not just the numbers",
    ],
    faq: [
      {
        question: "How do I know if I need an alignment?",
        answer:
          "The most common signs: your car pulls to one side, the steering wheel sits crooked when driving straight, you feel vibration through the wheel, or your tires are wearing unevenly, especially if they're bald on just one edge.",
      },
      {
        question: "How long does an alignment take?",
        answer:
          "Usually about an hour. If we find suspension wear that needs to be addressed first, we'll let you know before we proceed.",
      },
      {
        question: "Can a pothole knock my alignment out?",
        answer:
          "Absolutely. A hard hit to a pothole or curb is one of the most common causes of misalignment. If you've hit something significant and notice any pulling or steering issues afterward, get it checked.",
      },
    ],
  },
  {
    slug: "brake-service",
    icon: Wrench,
    title: "Brake Service",
    shortDescription:
      "Brake pad replacement, rotor service, and fluid flush by certified technicians.",
    price: "Avg. $165/axle",
    highlight: false,
    image: "/brake-service.avif",
    pas: {
      hook: "You hear it for the first time on the way to work. A high-pitched squeal every time you slow down. You turn up the radio. A week later it's louder. Then it starts grinding. Then one morning you press the brake pedal and it feels soft, sinking a little too far before the car slows.",
      agitate:
        "That squeal is your brake pads telling you they're almost gone. Ignore it long enough and it becomes metal grinding on metal. The pad backing plate eating directly into your rotor. At that point you've turned a $200 brake job into a $600 one. And a soft spongy brake pedal isn't a minor annoyance. It means your hydraulic system is compromised. You're driving around with reduced stopping power and no idea how much margin you have left. NC humidity accelerates brake line corrosion and lowers brake fluid's boiling point, making the problem worse faster than you'd expect.",
      solution:
        "We inspect every component of your brake system including pads, rotors, calipers, and brake fluid, and give you a straight answer about what needs to be done now and what can wait. No pressure, no manufactured urgency. If we find something serious, we'll show you. If you've got life left in your brakes, we'll tell you that too.",
    },
    howItHappens:
      "Brake pads have a friction material that gradually wears away every time you stop. Most pads last 30,000 to 50,000 miles depending on how and where you drive. City driving and mountain roads are harder on brakes than highway miles. As pads wear thin, they lose stopping power and heat up more than they should. Repeated heat cycles warp rotors (causing that pulsing vibration when you brake) and degrade brake fluid. Brake fluid absorbs moisture over time, which lowers its boiling point and creates a soft spongy pedal feel. Rust is a factor too. NC humidity corrodes brake lines and caliper slides, causing uneven wear and reduced performance.",
    howWeFix:
      "We start with a full brake inspection: measure pad thickness, check rotor condition for warping and wear, inspect calipers for sticking or leaking, and test brake fluid for moisture contamination. From there we give you a clear quote. Brake pad replacement is the most common service and we can usually complete it same day. If rotors need resurfacing or replacement, we handle that too. If the brake fluid is contaminated, a flush takes about an hour and makes a real difference in pedal feel and fade resistance.",
    included: [
      "Brake pad inspection and replacement",
      "Rotor inspection, resurfacing, or replacement",
      "Caliper inspection and service",
      "Brake fluid condition test",
      "Brake fluid flush (if needed)",
      "Full brake system test drive",
    ],
    whyUs: [
      "Certified brake technicians with decades of experience",
      "We show you the worn parts before replacing anything",
      "Same-day service for most brake jobs",
      "Honest assessments, we won't replace parts that still have life in them",
      "Quality parts at fair prices",
    ],
    faq: [
      {
        question: "My brakes are squeaking. Is it safe to drive?",
        answer:
          "Squealing usually means your pads are getting low. You have some time, but don't wait. If it turns to grinding, you're already doing damage to the rotors and the cost goes up significantly.",
      },
      {
        question: "Why does my brake pedal feel soft or spongy?",
        answer:
          "A soft pedal is usually caused by moisture-contaminated brake fluid, air in the brake lines, or a failing caliper. It's a safety issue. Bring it in so we can diagnose it.",
      },
      {
        question: "How long do brake pads last?",
        answer:
          "Typically 30,000 to 50,000 miles, but it varies a lot based on driving habits and conditions. City driving, mountain roads, and heavy vehicles all wear pads faster.",
      },
    ],
  },
  {
    slug: "ac-service",
    icon: Thermometer,
    title: "A/C Service",
    shortDescription:
      "AC not blowing cold? We diagnose and fix all car air conditioning issues.",
    price: "From $140 + gas",
    highlight: false,
    image: "/ac-services.avif",
    pas: {
      hook: "It's July in Hendersonville. You've been running errands all morning and it's already 93 degrees outside. You hop back in the car, crank the AC, and wait for that rush of cold air. What you get instead is warm air. Then hot air. That first drop of sweat runs down the back of your neck and you realize your car AC is not working.",
      agitate:
        "NC summers don't let up. Between the heat and the humidity, a car with no AC isn't just uncomfortable. It's dangerous, especially with kids in the back seat. And here's the frustrating part: AC problems almost never announce themselves before the hottest day of the year. Refrigerant leaks slowly for months. The compressor gives small warning signs that are easy to miss. By the time you notice your car AC stopped working, the problem has usually been building for a while. The longer it goes unfixed, moisture gets into the system and causes corrosion that turns a simple recharge into a bigger repair.",
      solution:
        "Most car air conditioning problems are diagnosable and fixable the same day. Bring your car into LAV Motors and we'll pressure-test the system, locate any leaks, check the compressor, and tell you exactly what needs to happen to get you back to cold air before the next heat wave hits.",
    },
    howItHappens:
      "Your car's AC works by cycling refrigerant through a closed loop including the compressor, condenser, expansion valve, and evaporator. Refrigerant absorbs heat from inside the cabin and releases it outside. The most common reason AC stops blowing cold is a refrigerant leak. Rubber seals, O-rings, and hose connections degrade from constant heat cycling and vibration, developing small gaps that let refrigerant slowly escape. NC's heat and humidity push AC systems harder than drier climates. Your compressor runs nearly non-stop from May through September, stressing every component in the system.",
    howWeFix:
      "We start with a pressure test to check refrigerant levels and identify whether there's a leak. If refrigerant is low, we locate the source using UV dye and specialized leak detection equipment. Just recharging without fixing the leak is a temporary fix that costs you money twice. If the leak is at a seal or O-ring, we replace it and recharge the system. If the compressor is failing, we'll quote you on replacement. Most straightforward AC recharges and minor seal repairs are completed the same day.",
    included: [
      "AC system inspection and pressure test",
      "Leak detection (UV dye and electronic detection)",
      "Refrigerant recharge (R-134a / R-1234yf)",
      "Compressor inspection",
      "Cabin air filter check",
      "Blower motor and controls inspection",
    ],
    whyUs: [
      "We diagnose before we charge, no guessing",
      "Equipped for both R-134a and newer R-1234yf refrigerant systems",
      "Honest quote before any repair begins",
      "Most AC repairs completed same day",
      "30+ years fixing cars in NC summers",
    ],
    faq: [
      {
        question: "Why is my car AC blowing hot air?",
        answer:
          "The most common causes are low refrigerant from a slow leak, a failing compressor, or a blocked condenser. We diagnose the actual root cause before recommending any repair so you're not paying for the wrong fix.",
      },
      {
        question: "Can I just add refrigerant myself?",
        answer:
          "Those DIY recharge kits from auto parts stores can work temporarily, but they don't fix the leak. If refrigerant is low, it's because it escaped somewhere. We find where and fix it properly.",
      },
      {
        question: "How long does AC repair take?",
        answer:
          "A basic recharge takes about an hour. If we find a leak or component failure, it may take longer. We'll give you a time estimate once we know what we're dealing with.",
      },
    ],
  },
  {
    slug: "pre-purchase-inspection",
    icon: CarFront,
    title: "Pre-Purchase Inspection",
    shortDescription:
      "Know exactly what you're buying before you sign anything.",
    price: "$145",
    highlight: false,
    image: "/pre-purchase-inspection.avif",
    pas: {
      hook: "You found a used car online. Good price, reasonable miles, clean photos. The seller seems straightforward. You take it for a drive and it feels fine. You're ready to buy.",
      agitate:
        "Here's what a 20-minute test drive won't show you: whether the transmission is about to slip, whether that clean engine bay is hiding an oil leak, whether there's rust eating through the frame underneath a fresh undercoat, or whether the car was in a flood six months ago and cleaned up well. Private sellers and even dealerships disclose what they're required to. They don't always volunteer the rest. We see cars every week that looked fine on a test drive and turned into expensive headaches two weeks later for their new owners. A used car inspection before you buy isn't paranoia. It's how you avoid buying someone else's problem.",
      solution:
        "For $145, our technicians go through the vehicle mechanically, electrically, and structurally. You get a full written report of everything we find and honest estimates of what any issues will cost to fix. If it's a bad deal, we'll tell you. If it's solid, you'll know that too and you can negotiate from a position of real information instead of hope.",
    },
    howItHappens:
      "Used cars accumulate problems that don't always announce themselves during a test drive. Transmission slippage often only shows up under load or when fully warmed up. Rust develops in hidden areas like frame rails, floor pans, and wheel wells that look fine from a distance. Suspension wear creates a vague looseness that's easy to miss if you don't know what to feel for. Flood-damaged cars can be dried out and detailed to look clean while harboring mold and electrical issues behind dashboards. A mechanic inspection before buying a used car catches what a test drive and visual inspection miss.",
    howWeFix:
      "We put the car on a lift and inspect underneath for rust, leaks, suspension wear, and any signs of prior accident damage or repair. We check all fluid levels and conditions, test the brakes, inspect tires for wear patterns, and run an OBD-II scan for any stored or pending fault codes the seller may not have disclosed. We road test it, listening and feeling for anything abnormal. Everything we find goes into a written report with honest notes on what's urgent, what's minor, and what's normal wear for the mileage. We have no stake in whether you buy the car. Our only job is to give you accurate information.",
    included: [
      "Full mechanical inspection (engine, transmission, drivetrain)",
      "Brake and suspension inspection",
      "Fluid level and condition check",
      "Tire tread depth and wear pattern check",
      "Undercarriage and frame inspection for rust and damage",
      "OBD-II scan for stored and pending fault codes",
      "Detailed written inspection report",
    ],
    whyUs: [
      "Completely independent, we have zero stake in whether you buy",
      "Written report with honest repair cost estimates",
      "30+ years experience across all makes and models",
      "We explain what issues actually matter versus what's normal wear",
      "Could save you thousands on a bad purchase",
    ],
    faq: [
      {
        question: "Can the seller just bring the car to you?",
        answer:
          "Yes. You can coordinate with the seller to bring the vehicle to our shop. Most sellers who have nothing to hide are happy to allow it.",
      },
      {
        question: "Should I get an inspection even if it's from a dealership?",
        answer:
          "Yes. Even certified pre-owned vehicles can have issues that weren't caught or disclosed. An independent mechanic inspection gives you information that isn't filtered through the seller's interest.",
      },
      {
        question: "What if the inspection finds problems?",
        answer:
          "That's exactly why you get an inspection. You can use the findings to negotiate the price down, ask the seller to fix it first, or walk away from a bad deal. All better than finding out after you've signed.",
      },
    ],
  },
  {
    slug: "diagnostic-check",
    icon: Sparkles,
    title: "Diagnostic Check",
    shortDescription:
      "Check engine light on? We find the real cause, not just the code.",
    price: "Basic $135 / Advanced $195",
    highlight: false,
    image: "/diagnostic-check.avif",
    pas: {
      hook: "Your check engine light came on three days ago. The car still drives. You've been ignoring it, but that little orange light has been sitting in the corner of your eye every morning on the way to work. You finally grab a $30 OBD reader from the auto parts store, plug it in, and get a code: P0300. You Google it. Now you're reading forum posts from 2009 telling you it could be a bad coil pack, a vacuum leak, spark plugs, bad gas, a fuel injector, or carbon buildup.",
      agitate:
        "Here's the problem with a basic code reader: it tells you where the computer flagged something, not what actually caused it. A random misfire code could be a $15 spark plug or a $1,500 fuel injector issue. Replacing the wrong part doesn't make the check engine light go away. It just costs you money and still leaves you with the problem. Meanwhile, some check engine light causes are urgent. A flashing check engine light means stop driving. Others are minor sensor issues. Not being able to tell the difference means either you panic and overspend, or you ignore something that's about to become expensive.",
      solution:
        "Our professional diagnostic equipment does things a consumer code reader can't. It reads every stored and pending code, captures the live sensor data your car was reading at the moment the problem triggered, and gives our technicians what they need to identify the actual root cause. Most diagnostics take under an hour, and we walk you through what we found in plain language with no jargon and no pressure.",
    },
    howItHappens:
      "Modern vehicles have hundreds of sensors monitoring engine performance, emissions, transmission, and other systems. When a sensor reading falls outside the normal range, the car's computer stores a diagnostic trouble code and lights the check engine light. The code identifies the system where the problem was detected, not always the exact part that failed. A single root problem can trigger multiple codes at once, which is why seeing several codes doesn't always mean several separate failures. Cheap OBD-II readers only retrieve surface-level codes. They miss manufacturer-specific codes, pending codes, and the live data that shows what conditions caused the fault.",
    howWeFix:
      "We connect professional-grade scan equipment that reads all stored codes, pending codes, and freeze-frame data, which are the sensor values recorded at the exact moment the fault occurred. From there, our technicians use live data monitoring and targeted tests to narrow down the actual cause rather than guessing. Once we know what's wrong, we'll give you a clear repair quote. If you proceed with the repair here, we apply the diagnostic fee toward your bill.",
    included: [
      "Full OBD-II trouble code scan (stored and pending codes)",
      "Live sensor data analysis",
      "Freeze frame data review",
      "Engine and emissions system testing",
      "Plain-language explanation of findings",
      "Repair estimate if issues are found",
    ],
    whyUs: [
      "Professional-grade scan tools, not the same as a $30 consumer reader",
      "Technicians who understand what the data actually means",
      "We explain findings in plain English, not shop-speak",
      "Diagnostic fee applied toward your repair if you proceed with us",
      "We find the cause, not just the symptom",
    ],
    faq: [
      {
        question: "Is it safe to drive with the check engine light on?",
        answer:
          "It depends on the code. A steady check engine light usually means bring it in soon but the car is okay to drive short distances. A flashing or blinking check engine light means stop driving as soon as safely possible and call us. That usually indicates an active misfire that can damage the catalytic converter.",
      },
      {
        question: "Can I just clear the code and see if it comes back?",
        answer:
          "Clearing the code removes the light, but doesn't fix the problem. The code will return, often within a few drive cycles, and you'll have lost the freeze frame data that helps us diagnose it accurately.",
      },
      {
        question: "Do you work on all makes and models?",
        answer:
          "We service all domestic vehicles and most foreign makes and models. Call us if you have a question about a specific vehicle.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
