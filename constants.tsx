
import { Service, Neighborhood, Testimonial, BlogPost, FAQ } from './types';

export const PHONE_NUMBER = "(206) 495-0997";
export const BUSINESS_NAME = "Cloud Concrete of Seattle";
export const DOMAIN = "https://cloudconcreteseattle.com";

export const SERVICES: Service[] = [
  {
    name: "Concrete Driveways",
    slug: "concrete-driveways",
    category: "residential",
    keywords: ["driveway installation", "driveway replacement", "driveway repair", "concrete driveway cost"],
    shortDescription: "Custom-built concrete driveways designed to withstand Seattle's unique weather patterns and heavy rainfall.",
    longDescription: "A driveway is the first impression of your home. At Cloud Concrete of Seattle, we specialize in high-durability residential driveways that blend aesthetics with functionality. Our process includes deep subgrade preparation, heavy-duty rebar reinforcement (Grade 60), and high-PSI concrete mixes specifically tailored for the Pacific Northwest freeze-thaw cycles. We ensure proper slope management to handle Seattle's persistent rain runoff, preventing pooling and premature cracking. Every driveway we pour is an investment in your property's value and safety.",
    priceIndicator: "$$$"
  },
  {
    name: "Stamped Concrete",
    slug: "stamped-concrete",
    category: "decorative",
    keywords: ["stamped concrete patterns", "decorative concrete", "stamped concrete patio", "stamped concrete driveway"],
    shortDescription: "Get the high-end look of stone, brick, or wood with the durability and affordability of concrete.",
    longDescription: "Stamped concrete is our specialty. We offer dozens of patterns including Ashlar Slate, Roman Cobblestone, and Wood Plank. Perfect for patios and walkways, our stamped solutions are sealed with high-grade UV protection to ensure color longevity and resistance to fading. We use integral coloring and antique release agents to create depth and realism that rivals natural stone while providing a monolithic, weed-free surface. This is the ultimate solution for Seattle homeowners who want luxury aesthetics without the maintenance of natural pavers.",
    priceIndicator: "$$$$"
  },
  {
    name: "Concrete Patios",
    slug: "concrete-patios",
    category: "residential",
    keywords: ["patio installation", "backyard patio", "concrete patio cost", "patio contractors"],
    shortDescription: "Create the ultimate outdoor living space with a custom-poured concrete patio.",
    longDescription: "Seattle summers are beautiful, and there is no better way to enjoy them than on a professional concrete patio. Whether you want a standard broom finish, a modern polished look, or a decorative stamped design, we handle everything from excavation to the final seal. Our patios are designed to be the centerpiece of your outdoor living area, engineered with proper drainage to stay dry and durable year-round. We work closely with landscape designers to ensure your patio complements the lush PNW flora of your backyard.",
    priceIndicator: "$$"
  },
  {
    name: "Concrete Foundations",
    slug: "concrete-foundations",
    category: "structural",
    keywords: ["foundation repair", "foundation pouring", "slab foundation", "foundation contractors"],
    shortDescription: "Structural integrity starts from the ground up. Professional foundation services for homes and additions.",
    longDescription: "When it comes to foundations, there is no room for error. Our structural team ensures every pour meets Seattle building codes and structural engineering specifications. We handle stem walls, monoblock slabs, and crawl space foundations with extreme precision, ensuring a level and stable base for any structure in the Pacific Northwest's varied soil conditions. We prioritize seismic safety and moisture barriers to protect your home's core structure from the ground up.",
    priceIndicator: "$$$$$"
  },
  {
    name: "Concrete Retaining Walls",
    slug: "concrete-retaining-walls",
    category: "structural",
    keywords: ["retaining wall installation", "concrete wall", "garden retaining wall", "slope stabilization"],
    shortDescription: "Tame Seattle's hilly terrain with engineered concrete retaining walls that add value and safety.",
    longDescription: "Seattle topography requires specialized retaining wall solutions. We build gravity walls and cantilevered walls designed to manage drainage and soil pressure. Our walls are engineered for maximum longevity, protecting your property from erosion while adding significant curb appeal and creating usable flat space on sloped lots. We specialize in both structural poured-in-place walls and decorative segmented systems that integrate beautifully into your landscape.",
    priceIndicator: "$$$$"
  },
  {
    name: "Garage Floors",
    slug: "garage-floors",
    category: "residential",
    keywords: ["garage floor coating", "epoxy garage floor", "garage floor repair", "garage slab"],
    shortDescription: "Heavy-duty concrete garage floors designed to withstand vehicle weight and chemicals.",
    longDescription: "A high-quality garage floor is essential for any Seattle home. We provide precision slab pouring with industrial-grade finishing that resists cracking and spalling. We also offer advanced coating options to make your garage floor oil-resistant and easy to clean, transforming your garage into a clean, functional workspace. Our slabs are reinforced to handle the weight of modern SUVs and shop equipment without settlement issues.",
    priceIndicator: "$$$"
  },
  {
    name: "Concrete Sidewalks",
    slug: "concrete-sidewalks",
    category: "residential",
    keywords: ["sidewalk repair", "sidewalk installation", "walkway concrete", "front walkway"],
    shortDescription: "Safe, durable, and attractive walkways and sidewalks for residential and commercial properties.",
    longDescription: "We install and repair sidewalks that meet ADA requirements and City of Seattle standards. Our walkways are designed for longevity, providing a safe path for pedestrians while enhancing the curb appeal of your property through clean lines and professional finishes that withstand the rainy PNW weather. We handle all city permitting for sidewalk work in the public right-of-way, ensuring a hassle-free experience for the property owner.",
    priceIndicator: "$$"
  },
  {
    name: "Exposed Aggregate",
    slug: "exposed-aggregate",
    category: "decorative",
    keywords: ["exposed aggregate concrete", "decorative aggregate", "pebble concrete", "aggregate driveway"],
    shortDescription: "A rugged, non-slip decorative finish that showcases the natural beauty of stone.",
    longDescription: "Exposed aggregate is a PNW favorite for its slip-resistant properties and natural aesthetic. By revealing the stones within the concrete, we create a durable surface that handles rain beautifully and provides excellent traction for driveways and pool decks. It's the perfect blend of natural beauty and industrial strength, offering a texture that is both visually stunning and practically superior in wet conditions.",
    priceIndicator: "$$$"
  },
  {
    name: "Commercial Concrete",
    slug: "commercial-concrete",
    category: "commercial",
    keywords: ["commercial flatwork", "parking lot concrete", "loading dock", "warehouse floor"],
    shortDescription: "Heavy-duty concrete solutions for Seattle businesses and industrial facilities.",
    longDescription: "From high-traffic warehouse floors to custom loading docks, we provide commercial-grade flatwork designed for maximum weight capacity and durability. Our crews are trained for large-scale pours and tight commercial deadlines, ensuring your business operations continue with minimal disruption. We understand the specific load requirements for industrial environments and deliver slabs that meet the highest industrial standards.",
    priceIndicator: "$$$$$"
  },
  {
    name: "Concrete Repair",
    slug: "concrete-repair",
    category: "repair",
    keywords: ["crack repair", "concrete resurfacing", "spalling repair", "concrete restoration"],
    shortDescription: "Extend the life of your existing concrete with professional crack repair and resurfacing.",
    longDescription: "Don't replace when you can restore. We use high-bonding polymers and advanced resurfacing techniques to fix spalling, cracks, and uneven surfaces, making your concrete look and perform like new for a fraction of the cost of total replacement. Our repairs are engineered to handle Seattle's freeze-thaw cycles and prevent water ingress that leads to deep structural failure.",
    priceIndicator: "$"
  },
  {
    name: "Concrete Leveling",
    slug: "concrete-leveling",
    category: "repair",
    keywords: ["mudjacking", "slab jacking", "concrete lifting", "uneven concrete"],
    shortDescription: "Fix sunken slabs and trip hazards with precise concrete leveling and lifting.",
    longDescription: "Sunken slabs are a common result of Seattle's shifting soil and heavy rainfall. We use polyurethane foam injection or traditional mudjacking to lift and level walkways, driveways, and garage floors quickly with minimal downtime, eliminating trip hazards and restoring drainage. This cost-effective solution saves thousands compared to total demolition and re-pouring.",
    priceIndicator: "$$"
  },
  {
    name: "Pool Decks",
    slug: "pool-decks",
    category: "decorative",
    keywords: ["pool deck resurfacing", "concrete pool deck", "cool deck", "pool patio"],
    shortDescription: "Slip-resistant and beautiful concrete pool decks for Seattle backyards.",
    longDescription: "Create a safe and stylish oasis around your pool. We offer cool-deck coatings and slip-resistant stamped patterns that handle water and foot traffic perfectly. Our pool decks are designed to complement your home's architecture while providing a durable, low-maintenance surface for relaxation. We prioritize comfortable under-foot temperatures and maximum grip for family safety.",
    priceIndicator: "$$$"
  },
  {
    name: "Concrete Slabs",
    slug: "concrete-slabs",
    category: "commercial",
    keywords: ["concrete slab cost", "garage slab", "shed foundation", "slab pouring"],
    shortDescription: "Precision-poured concrete slabs for sheds, garages, and secondary structures.",
    longDescription: "Whether you're building a detached garage, a backyard shed, or a commercial warehouse, a high-quality concrete slab is the essential starting point. We focus on subgrade compaction and moisture barriers to ensure your slab remains level and dry through the wet Seattle winters. Our slabs are laser-leveled for absolute precision, perfect for any subsequent framing or flooring installation.",
    priceIndicator: "$$"
  },
  {
    name: "Decorative Concrete",
    slug: "decorative-concrete",
    category: "decorative",
    keywords: ["decorative finishes", "concrete design", "custom concrete", "artistic concrete"],
    shortDescription: "Custom concrete finishes including staining, polishing, and artistic textures.",
    longDescription: "Concrete doesn't have to be gray and boring. Our decorative team uses advanced staining, scoring, and texturing techniques to create custom surfaces that look like marble, tile, or stone. Perfect for interior floors and luxury outdoor spaces, decorative concrete offers unparalleled durability combined with bespoke artistic flair tailored to your home's unique style.",
    priceIndicator: "$$$"
  },
  {
    name: "Concrete Curbing",
    slug: "concrete-curbing",
    category: "landscape",
    keywords: ["landscape curbing", "concrete edging", "garden borders", "lawn edging"],
    shortDescription: "Permanent, attractive landscape borders and garden edging.",
    longDescription: "Tired of plastic or wood edging that rots and shifts? Our extruded concrete curbing provides a permanent, lawnmower-friendly border for your garden beds and walkways. Available in multiple colors and stamped patterns, our curbing acts as a root barrier and adds a professional, manicured look to your property that lasts for decades.",
    priceIndicator: "$"
  },
  {
    name: "Broom Finish Concrete",
    slug: "broom-finish-concrete",
    category: "finishing",
    keywords: ["brushed concrete", "textured finish", "slip-resistant concrete", "standard finish"],
    shortDescription: "The classic, durable, and slip-resistant standard for Seattle walkways.",
    longDescription: "Broom finish is the gold standard for safety and durability in the Pacific Northwest. By pulling a specialized broom across the wet concrete, we create a fine-textured surface that provides excellent grip even during the rainiest Seattle days. This classic finish is cost-effective and provides a clean, uniform look that complements any property style.",
    priceIndicator: "$"
  },
  {
    name: "Polished Concrete",
    slug: "polished-concrete",
    category: "finishing",
    keywords: ["concrete polishing", "polished floors", "interior concrete", "concrete grinding"],
    shortDescription: "High-gloss, industrial-strength interior flooring for modern Seattle homes.",
    longDescription: "Polished concrete is an eco-friendly and incredibly durable flooring option for modern interiors. By grinding down the concrete surface and applying densifiers, we create a mirror-like finish that is easy to clean and practically indestructible. It reflects light to brighten rooms and eliminates the need for expensive tiles or hardwoods that can scratch and warp.",
    priceIndicator: "$$$"
  },
  {
    name: "Concrete Sealing",
    slug: "concrete-sealing",
    category: "maintenance",
    keywords: ["driveway sealing", "concrete sealant", "protective coating", "concrete maintenance"],
    shortDescription: "Professional-grade sealing to protect your concrete from moisture and stains.",
    longDescription: "In Seattle, moisture is the enemy of concrete. Professional sealing prevents water from penetrating the pores of the concrete, significantly reducing the risk of spalling, cracking, and staining. Our high-performance sealants also protect against oil spills and UV damage, keeping your concrete looking brand new for years. We recommend re-sealing every 3-5 years as part of a comprehensive maintenance plan.",
    priceIndicator: "$"
  },
  {
    name: "Colored Concrete",
    slug: "colored-concrete",
    category: "decorative",
    keywords: ["concrete staining", "colored concrete driveway", "concrete dye", "integral color concrete"],
    shortDescription: "Permanent, integral color solutions for sophisticated concrete designs.",
    longDescription: "Integral color is mixed directly into the concrete before pouring, ensuring a permanent and uniform hue throughout the entire slab. This is the preferred method for colored driveways and patios in the Pacific Northwest, as the color cannot wear off, chip away, or fade from surface abrasion. We offer a wide spectrum of earth tones that blend seamlessly with Seattle's natural environment.",
    priceIndicator: "$$$"
  },
  {
    name: "Concrete Steps & Stairs",
    slug: "concrete-steps",
    category: "residential",
    keywords: ["concrete stairs", "front steps", "porch steps", "step repair"],
    shortDescription: "Expertly crafted concrete stairs for safe and beautiful property access.",
    longDescription: "Safe steps are critical, especially on Seattle's many sloped properties. We design and pour custom stairs that match your home's architecture, ensuring perfect rise-and-run measurements for comfortable and secure entry to your home. Our stairs are reinforced with heavy-duty steel and textured for maximum slip-resistance during our frequent rain events.",
    priceIndicator: "$$"
  }
];

export const NEIGHBORHOODS: Neighborhood[] = [
  { name: "Ballard", slug: "ballard", zip: "98107" },
  { name: "Beacon Hill", slug: "beacon-hill", zip: "98144" },
  { name: "Capitol Hill", slug: "capitol-hill", zip: "98102" },
  { name: "Central District", slug: "central-district", zip: "98122" },
  { name: "Columbia City", slug: "columbia-city", zip: "98118" },
  { name: "Crown Hill", slug: "crown-hill", zip: "98117" },
  { name: "Downtown Seattle", slug: "downtown-seattle", zip: "98101" },
  { name: "Eastlake", slug: "eastlake", zip: "98102" },
  { name: "Fremont", slug: "fremont", zip: "98103" },
  { name: "Georgetown", slug: "georgetown", zip: "98108" },
  { name: "Green Lake", slug: "green-lake", zip: "98103" },
  { name: "Greenwood", slug: "greenwood", zip: "98117" },
  { name: "Highland Park", slug: "highland-park", zip: "98106" },
  { name: "Interbay", slug: "interbay", zip: "98119" },
  { name: "Lake City", slug: "lake-city", zip: "98125" },
  { name: "Laurelhurst", slug: "laurelhurst", zip: "98105" },
  { name: "Leschi", slug: "leschi", zip: "98122" },
  { name: "Madison Park", slug: "madison-park", zip: "98112" },
  { name: "Madrona", slug: "madrona", zip: "98122" },
  { name: "Magnolia", slug: "magnolia", zip: "98199" },
  { name: "Maple Leaf", slug: "maple-leaf", zip: "98115" },
  { name: "Mount Baker", slug: "mount-baker", zip: "98144" },
  { name: "North Seattle", slug: "north-seattle", zip: "98133" },
  { name: "Northgate", slug: "northgate", zip: "98125" },
  { name: "Phinney Ridge", slug: "phinney-ridge", zip: "98103" },
  { name: "Queen Anne", slug: "queen-anne", zip: "98109" },
  { name: "Rainier Beach", slug: "rainier-beach", zip: "98118" },
  { name: "Rainier Valley", slug: "rainier-valley", zip: "98118" },
  { name: "Ravenna", slug: "ravenna", zip: "98115" },
  { name: "Roosevelt", slug: "roosevelt", zip: "98115" },
  { name: "Sand Point", slug: "sand-point", zip: "98115" },
  { name: "Seward Park", slug: "seward-park", zip: "98118" },
  { name: "South Lake Union", slug: "south-lake-union", zip: "98109" },
  { name: "South Park", slug: "south-park", zip: "98108" },
  { name: "University District", slug: "university-district", zip: "98105" },
  { name: "Wallingford", slug: "wallingford", zip: "98103" },
  { name: "Wedgwood", slug: "wedgwood", zip: "98115" },
  { name: "West Seattle", slug: "west-seattle", zip: "98116" },
  { name: "White Center", slug: "white-center", zip: "98106" },
  { name: "Windermere", slug: "windermere", zip: "98105" },
  // Surrounding Areas
  { name: "Bellevue", slug: "bellevue", zip: "98004" },
  { name: "Kirkland", slug: "kirkland", zip: "98033" },
  { name: "Redmond", slug: "redmond", zip: "98052" },
  { name: "Renton", slug: "renton", zip: "98055" },
  { name: "Burien", slug: "burien", zip: "98166" },
  { name: "Tukwila", slug: "tukwila", zip: "98188" },
  { name: "SeaTac", slug: "seatac", zip: "98198" },
  { name: "Shoreline", slug: "shoreline", zip: "98133" },
  { name: "Edmonds", slug: "edmonds", zip: "98020" },
  { name: "Lynnwood", slug: "lynnwood", zip: "98036" },
  { name: "Mercer Island", slug: "mercer-island", zip: "98040" },
  { name: "Issaquah", slug: "issaquah", zip: "98027" },
  { name: "Sammamish", slug: "sammamish", zip: "98074" },
  { name: "Woodinville", slug: "woodinville", zip: "98072" },
  { name: "Bothell", slug: "bothell", zip: "98011" },
  { name: "Kenmore", slug: "kenmore", zip: "98028" },
  { name: "Lake Forest Park", slug: "lake-forest-park", zip: "98155" },
  { name: "Mountlake Terrace", slug: "mountlake-terrace", zip: "98043" },
  { name: "Des Moines", slug: "des-moines", zip: "98198" },
  { name: "Federal Way", slug: "federal-way", zip: "98003" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    location: "Ballard",
    text: "Cloud Concrete did an amazing job on our stamped concrete patio. The team was professional, clean, and finished ahead of schedule. Highly recommend!",
    rating: 5
  },
  {
    name: "Mark Thompson",
    location: "West Seattle",
    text: "Our new driveway looks incredible. They handled the steep slope of our property perfectly. The best concrete contractors in Seattle.",
    rating: 5
  },
  {
    name: "Emily Davis",
    location: "Capitol Hill",
    text: "Used them for a retaining wall in our backyard. Solid engineering and great communication throughout the permit process.",
    rating: 5
  },
  {
    name: "James Wilson",
    location: "Fremont",
    text: "Professional, punctual, and highly skilled. They fixed a crumbling foundation wall that other contractors wouldn't touch. Amazing results.",
    rating: 5
  }
];

export const FAQS: FAQ[] = [
  {
    question: "How much does a concrete driveway cost in Seattle?",
    answer: "For professional installation in 2025, homeowners can typically expect to pay between $12 and $22 per square foot, depending on the thickness, reinforcement, and finishing choices. Site accessibility and the need for slope stabilization can also impact the final price."
  },
  {
    question: "How long does concrete take to cure in Seattle's climate?",
    answer: "Initial set occurs within 24 hours, meaning you can walk on it with light shoes. However, curing takes 28 days to reach full structural strength. We recommend waiting 7 days before driving standard vehicles on a new pour, and 14-21 days for heavy trucks or equipment."
  },
  {
    question: "Do you handle the permitting process with the City of Seattle?",
    answer: "Yes, for most structural projects and work within the public right-of-way (like sidewalks), we manage the entire permit application and inspection scheduling process with SDOT and DPD to ensure your project is fully compliant."
  },
  {
    question: "Is stamped concrete slippery when wet?",
    answer: "While any smooth surface can be slippery when wet, we add specialized slip-resistant shark-grip additives to our sealers to ensure that even highly decorative stamped surfaces remain safe and walkable during Seattle's frequent rainy months."
  },
  {
    question: "What is the best time of year to pour concrete in Washington?",
    answer: "While we can pour year-round using specific weather admixtures, the most ideal window is between mid-April and early October. During winter, we monitor humidity and temperature closely to ensure the hydration process is not interrupted by frost or excessive saturation."
  },
  {
    question: "Why does concrete crack, and can it be prevented?",
    answer: "Concrete naturally shrinks as it cures, which can cause minor hairline cracks. We prevent significant cracking by using precision-cut expansion joints, heavy-duty rebar reinforcement, and high-quality subgrade compaction. We also use fiber-reinforced mixes for extra tensile strength."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "How Much Does a Concrete Driveway Cost in Seattle? (2025 Price Guide)",
    slug: "concrete-driveway-cost-seattle",
    category: "Tips & Advice",
    date: "January 12, 2025",
    excerpt: "An in-depth look at square foot pricing, material costs, and labor for Seattle concrete projects in the current market.",
    content: "Calculating the cost of a concrete driveway in Seattle involves several factors: square footage, thickness, reinforcement, and local permitting. On average, homeowners can expect to pay between $12 and $22 per square foot for professional installation in 2025. Factors that drive up the price include site accessibility, the degree of excavation required, and decorative finishes like stamping or staining. In neighborhoods like Queen Anne or Magnolia where slopes are steep, engineering costs and reinforced footings may also apply. At Cloud Concrete, we provide detailed, transparent quotes that break down every cost element so you can make an informed decision for your property's future.",
    author: "Cloud Concrete Staff"
  },
  {
    title: "Stamped Concrete vs. Pavers: The Seattle Verdict",
    slug: "stamped-concrete-vs-pavers",
    category: "Design",
    date: "December 05, 2024",
    excerpt: "Why decorative concrete is often a better choice than pavers for Seattle's unique climate and maintenance needs.",
    content: "While pavers look great initially, Seattle's consistent rain often leads to weed growth in joints and shifting due to soil saturation. Stamped concrete provides a monolithic surface that is easier to maintain and doesn't shift over time. With modern stamping techniques, we can replicate the look of pavers perfectly while providing a surface that is much more durable against the PNW weather. Additionally, stamped concrete eliminates the problem of ants and moss growing between pavers, a common headache for Seattle homeowners. From a long-term value perspective, stamped concrete offers a high-end look with significantly lower maintenance costs.",
    author: "Cloud Concrete Staff"
  },
  {
    title: "Concrete Solutions for Seattle's Rainy Climate",
    slug: "concrete-solutions-seattle-rain",
    category: "Seattle Local Guides",
    date: "February 22, 2025",
    excerpt: "How we engineer concrete to handle 37+ inches of annual rainfall and prevent structural erosion.",
    content: "Drainage is the single most important factor in Seattle concrete work. Without proper subgrade preparation and runoff management, even the thickest slab will eventually fail due to hydrostatic pressure and soil erosion. At Cloud Concrete, we prioritize geological audits to ensure water moves away from your structure, preventing soil erosion and frost heave. We use specialized drainage rock as our base and integrate channel drains or catch basins into our designs where necessary. Our goal is to ensure your concrete remains dry and stable even during the heaviest November downpours.",
    author: "Cloud Concrete Staff"
  },
  {
    title: "Permit Requirements for Concrete Work in Seattle",
    slug: "seattle-concrete-permits",
    category: "Industry News",
    date: "March 01, 2025",
    excerpt: "What homeowners need to know about SDOT and DPD regulations when planning their next project.",
    content: "Navigating the City of Seattle's permit requirements can be daunting. Generally, any work within the public right-of-way (like sidewalks or curb cuts) requires an SDOT Street Use permit. For residential slabs on your property, requirements vary by size and impact on neighbors. In 2025, the city has updated its regulations regarding pervious surfaces to manage stormwater runoff. We stay up-to-date with all local ordinances to ensure your project is 100% legal. Our team handles the entire application process, including site plan drawings and inspection scheduling, saving you time and stress.",
    author: "Cloud Concrete Staff"
  },
  {
    title: "Dealing with Seattle's Soil Conditions: Foundation Tips",
    slug: "seattle-soil-foundation-tips",
    category: "Seattle Local Guides",
    date: "June 30, 2024",
    excerpt: "How clay and glacial till affect your home's structural stability and what you can do about it.",
    content: "Seattle sits on a complex mix of glacial till and heavy clay. This soil can expand and contract significantly with moisture changes, which can lead to foundation settling and basement leaks. We discuss why deep footings and proper compaction are non-negotiable for Seattle foundations. When pouring a new foundation or addition, we often recommend helical piers or specialized footing designs depending on the soil report. Understanding the geology of your specific neighborhood is the first step in building a foundation that will last for a century.",
    author: "Cloud Concrete Staff"
  },
  {
    title: "The Best Time of Year to Pour Concrete in Seattle",
    slug: "best-time-to-pour-seattle",
    category: "Tips & Advice",
    date: "April 15, 2025",
    excerpt: "Navigating the PNW weather for a perfect cure. When to schedule your project for the best results.",
    content: "While professional crews can pour concrete almost year-round in Seattle, certain windows offer better predictability for the finishing process. We discuss the pros and cons of spring, summer, and fall pours. Summer offers the most stable conditions, but also requires careful moisture management to prevent the concrete from drying too quickly. Fall pours are excellent for curing but require a keen eye on the rain forecast. We share our insider tips on how we manage the weather to ensure every pour achieves maximum strength and aesthetic perfection, regardless of the month.",
    author: "Cloud Concrete Staff"
  },
  {
    title: "10 Stunning Stamped Concrete Patterns for Seattle Patios",
    slug: "stamped-patterns-seattle",
    category: "Design Inspiration",
    date: "May 10, 2025",
    excerpt: "From Ashlar Slate to Wood Plank, discover the most popular decorative designs for Pacific Northwest homes.",
    content: "Ready to transform your backyard? We've compiled a list of the top 10 stamped patterns currently trending in Seattle. We highlight the timeless beauty of Random Stone for traditional homes and the sleek, modern look of Large Tile for contemporary Seattle architecture. We also explore color palettes that complement the lush greens and grays of the PNW landscape. Whether you want a rustic wood-look patio or a sophisticated stone entryway, this guide will provide the inspiration you need to start your design process.",
    author: "Cloud Concrete Staff"
  },
  {
    title: "Eco-Friendly Concrete: Options for Green Seattle Homes",
    slug: "eco-friendly-concrete-seattle",
    category: "Tips & Advice",
    date: "May 22, 2025",
    excerpt: "Sustainable concrete choices for environmentally conscious homeowners in the Emerald City.",
    content: "Seattle homeowners are some of the most environmentally conscious in the country. In this post, we explore sustainable concrete options including the use of recycled aggregates and fly-ash as a cement replacement. We also deep-dive into pervious concrete, which allows rainwater to filter through the slab and back into the ground, reducing the load on our city's storm drains. Discover how you can have a beautiful, durable concrete surface while minimizing your property's environmental footprint.",
    author: "Cloud Concrete Staff"
  },
  {
    title: "How to Prepare Your Property for Concrete Installation",
    slug: "prepare-property-concrete",
    category: "Tips & Advice",
    date: "June 05, 2025",
    excerpt: "A homeowner's checklist for a smooth and successful project day. From access to utility marking.",
    content: "Preparation is key to a successful pour. We walk you through everything you need to do before our crew arrives. This includes clearing the work area of obstacles, notifying neighbors of potential noise, and ensuring we have clear access for our trucks and equipment. We also explain the importance of 'Call Before You Dig' (811) to mark underground utilities. By following this simple checklist, you'll help ensure that project day goes smoothly and our finishers can focus on what they do best: creating a perfect concrete surface.",
    author: "Cloud Concrete Staff"
  },
  {
    title: "Historic Seattle Homes: Concrete Restoration Tips",
    slug: "historic-concrete-restoration",
    category: "Seattle Local Guides",
    date: "June 20, 2025",
    excerpt: "Preserving the character of Seattle's older neighborhoods through expert concrete repair.",
    content: "Neighborhoods like Capitol Hill and Queen Anne are full of historic homes with original concrete features that are starting to show their age. We discuss how to restore vintage walkways and porch steps while maintaining their historic character. We explore color-matching techniques for old concrete and how to structurally reinforce aging slabs without a total teardown. Preserving the architectural history of Seattle is a passion of ours, and we share the specialized techniques we use for heritage projects.",
    author: "Cloud Concrete Staff"
  }
];
