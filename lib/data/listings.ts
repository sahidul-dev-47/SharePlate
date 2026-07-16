import { FoodListing } from "@/lib/types";
import { unsplash, FOOD_IMAGES } from "@/lib/images";

const HOUR = 60 * 60 * 1000;

function fromNow(hours: number): string {
  return new Date(Date.now() + hours * HOUR).toISOString();
}

const img = (id: string) => unsplash(id, 900, 700);

export const LISTINGS: FoodListing[] = [
  {
    id: "l-001",
    title: "Chicken Biryani — cooked fresh, 25 servings left over",
    description:
      "Extra biryani from tonight's wedding catering. Made with soft basmati rice, tender chicken, and fried onions. Packed in trays, ready for pickup.",
    fullDescription:
      "We catered a wedding reception at Community Hall in Dhanmondi and prepared slightly more biryani than was needed. It was cooked this evening in large batches and has been kept warm since. Roughly 25 single servings remain, portioned in foil trays. Perfect for a family, a hostel, or anyone who can put it to good use tonight — it won't be nearly as good reheated tomorrow.",
    images: [img(FOOD_IMAGES.riceAndCurry[0]), img(FOOD_IMAGES.riceAndCurry[5]), img(FOOD_IMAGES.riceAndCurry[9])],
    category: "Restaurant Surplus",
    donor: { name: "Dhanmondi Biryani House", type: "Restaurant", rating: 4.8, reviewCount: 132, verified: true, avatarInitial: "D" },
    area: "Dhanmondi",
    city: "Dhaka",
    servings: 25,
    price: 0,
    postedAt: fromNow(-2),
    pickupStart: fromNow(0.5),
    pickupEnd: fromNow(4),
    dietaryTags: ["Contains Dairy", "Halal"],
    status: "available",
    specifications: [
      { label: "Servings", value: "25 boxes" },
      { label: "Made", value: "Today, 8:00 PM" },
      { label: "Storage", value: "Kept warm in insulated trays" },
      { label: "Pickup type", value: "Self pickup only" },
    ],
    reviews: [
      { id: "r1", author: "Farhana K.", rating: 5, comment: "Picked up biryani here twice now — always generous portions and still warm.", date: fromNow(-240) },
      { id: "r2", author: "Imran H.", rating: 5, comment: "Donor was polite and had everything packed and labeled.", date: fromNow(-480) },
    ],
  },
  {
    id: "l-002",
    title: "Homemade Khichuri & Beef Bhuna — cooked for Ashura, extra portions",
    description:
      "Made a big pot for the neighborhood and have about 12 servings extra. Khichuri with beef bhuna on the side, still hot.",
    fullDescription:
      "Every year we cook khichuri and beef bhuna at home to share with neighbors, and this year we made a bit too much. Around 12 servings are left in clean containers — happy to hand them out to anyone nearby in Uttara who wants a warm plate tonight. Please bring your own container if you can, but we have some disposable ones too.",
    images: [img(FOOD_IMAGES.riceAndCurry[2]), img(FOOD_IMAGES.riceAndCurry[11])],
    category: "Home Cooked",
    donor: { name: "Rehana Begum", type: "Individual", rating: 4.9, reviewCount: 41, verified: true, avatarInitial: "R" },
    area: "Uttara Sector 7",
    city: "Dhaka",
    servings: 12,
    price: 0,
    postedAt: fromNow(-1),
    pickupStart: fromNow(0.2),
    pickupEnd: fromNow(3),
    dietaryTags: ["Halal", "Contains Nuts"],
    status: "available",
    specifications: [
      { label: "Servings", value: "12 plates" },
      { label: "Made", value: "Today, 6:30 PM" },
      { label: "Spice level", value: "Medium" },
      { label: "Pickup type", value: "Self pickup, ring the bell" },
    ],
    reviews: [
      { id: "r1", author: "Sabbir A.", rating: 5, comment: "So kind of her to share — the bhuna was excellent.", date: fromNow(-96) },
    ],
  },
  {
    id: "l-003",
    title: "Fresh bakery surplus — bread loaves, buns & croissants",
    description:
      "End-of-day bakery stock that won't be sold tomorrow. Sandwich bread, milk buns, and butter croissants, all baked this morning.",
    fullDescription:
      "As part of our daily zero-waste policy, we set aside anything unsold by closing time. Today that includes about 20 sandwich loaves, 30 milk buns, and a tray of butter croissants — all baked this morning and perfectly fine to eat. First come, first served at our counter; please bring a bag or box.",
    images: [img(FOOD_IMAGES.bakery[0]), img(FOOD_IMAGES.bakery[6]), img(FOOD_IMAGES.bakery[1])],
    category: "Bakery & Sweets",
    donor: { name: "Golden Crust Bakery", type: "Bakery", rating: 4.7, reviewCount: 88, verified: true, avatarInitial: "G" },
    area: "Agrabad",
    city: "Chattogram",
    servings: 40,
    price: 0,
    postedAt: fromNow(-3),
    pickupStart: fromNow(0.1),
    pickupEnd: fromNow(1.5),
    dietaryTags: ["Vegetarian", "Contains Gluten"],
    status: "available",
    specifications: [
      { label: "Items", value: "Bread, buns, croissants" },
      { label: "Baked", value: "This morning" },
      { label: "Quantity", value: "~40 pieces" },
      { label: "Pickup type", value: "Counter pickup, closing at 9 PM" },
    ],
    reviews: [
      { id: "r1", author: "Nusrat J.", rating: 5, comment: "Their end-of-day bread is always fresh, never stale. Great initiative.", date: fromNow(-720) },
      { id: "r2", author: "Tanvir R.", rating: 4, comment: "Got croissants for the whole office, everyone loved them.", date: fromNow(-1440) },
    ],
  },
  {
    id: "l-004",
    title: "Mixed vegetable crates from morning bazaar — unsold produce",
    description:
      "Leftover vegetables from our stall: potatoes, tomatoes, gourds, and greens. All fresh, just more than we sold today.",
    fullDescription:
      "We run a vegetable stall in the local bazaar and always end the day with some produce that's fresh but won't keep till tomorrow's market. Today that's a mix of potatoes, tomatoes, bottle gourd, and leafy greens — roughly 3 crates worth. Great for a family kitchen or a community kitchen. Please bring your own bags.",
    images: [img(FOOD_IMAGES.produce[0]), img(FOOD_IMAGES.produce[6]), img(FOOD_IMAGES.produce[9])],
    category: "Grocery & Pantry",
    donor: { name: "Karim's Vegetable Stall", type: "Grocery Store", rating: 4.6, reviewCount: 27, verified: false, avatarInitial: "K" },
    area: "Chandpur Sadar Bazaar",
    city: "Chandpur",
    servings: 30,
    price: 0,
    postedAt: fromNow(-4),
    pickupStart: fromNow(0.3),
    pickupEnd: fromNow(2.5),
    dietaryTags: ["Vegan", "Vegetarian"],
    status: "available",
    specifications: [
      { label: "Contents", value: "Potato, tomato, gourd, greens" },
      { label: "Quantity", value: "~3 crates" },
      { label: "Condition", value: "Fresh, minor surface blemishes" },
      { label: "Pickup type", value: "At the stall, near the bazaar gate" },
    ],
    reviews: [
      { id: "r1", author: "Moushumi A.", rating: 5, comment: "Vegetables were in great shape, barely any waste at all.", date: fromNow(-1200) },
    ],
  },
  {
    id: "l-005",
    title: "Corporate lunch leftovers — Morog Polao & mixed salad",
    description:
      "Office training event ran short on attendees. About 18 boxed lunches of morog polao and salad still sealed and untouched.",
    fullDescription:
      "We hosted a training session that had fewer attendees than expected, leaving 18 sealed lunch boxes: morog polao, salad, and a boiled egg each. Everything is from a licensed caterer and was delivered an hour ago, still sealed. Ideal for a shelter, hostel, or anyone who can collect them together.",
    images: [img(FOOD_IMAGES.riceAndCurry[6]), img(FOOD_IMAGES.riceAndCurry[10])],
    category: "Event Leftovers",
    donor: { name: "Bay Corporate Park", type: "Event Host", rating: 4.5, reviewCount: 15, verified: true, avatarInitial: "B" },
    area: "Gulshan 2",
    city: "Dhaka",
    servings: 18,
    price: 0,
    postedAt: fromNow(-1.5),
    pickupStart: fromNow(0.2),
    pickupEnd: fromNow(2),
    dietaryTags: ["Halal", "Contains Egg"],
    status: "available",
    specifications: [
      { label: "Servings", value: "18 sealed boxes" },
      { label: "Delivered", value: "1 hour ago" },
      { label: "Caterer", value: "Licensed, food-safety certified" },
      { label: "Pickup type", value: "Reception desk, ID required" },
    ],
    reviews: [],
  },
  {
    id: "l-006",
    title: "Roshogolla, Chomchom & sweets tray — shop closing surplus",
    description:
      "Unsold sweets from today's production. Roshogolla, chomchom, and kalojam — still fresh, kept chilled since morning.",
    fullDescription:
      "Every evening we have a small surplus of sweets that were made fresh this morning but won't be sold before they're no longer at their best. Tonight that's a tray each of roshogolla, chomchom, and kalojam. All kept properly chilled. Perfect for a get-together or just to share with neighbors.",
    images: [img(FOOD_IMAGES.bakery[3]), img(FOOD_IMAGES.bakery[8])],
    category: "Bakery & Sweets",
    donor: { name: "Mistir Bhandar", type: "Bakery", rating: 4.9, reviewCount: 204, verified: true, avatarInitial: "M" },
    area: "GEC Circle",
    city: "Chattogram",
    servings: 30,
    price: 50,
    postedAt: fromNow(-2.5),
    pickupStart: fromNow(0.1),
    pickupEnd: fromNow(1),
    dietaryTags: ["Vegetarian", "Contains Dairy"],
    status: "available",
    specifications: [
      { label: "Items", value: "Roshogolla, chomchom, kalojam" },
      { label: "Quantity", value: "~30 pieces" },
      { label: "Price", value: "Tk 50 for the whole tray (covers containers)" },
      { label: "Pickup type", value: "Shop counter" },
    ],
    reviews: [
      { id: "r1", author: "Anika T.", rating: 5, comment: "Unbelievable that this was almost thrown out — tasted perfectly fresh.", date: fromNow(-2000) },
    ],
  },
  {
    id: "l-007",
    title: "Beef Tehari — restaurant closing early, 15 plates ready",
    description:
      "We're closing an hour early tonight and have 15 plates of beef tehari made for dinner service that won't be sold.",
    fullDescription:
      "Lower than usual footfall tonight means we're left with 15 plates of beef tehari cooked for dinner service. Rice is fluffy, beef is tender, and everything was cooked no more than two hours ago. Containers provided. Please only claim what you can actually use tonight.",
    images: [img(FOOD_IMAGES.riceAndCurry[3]), img(FOOD_IMAGES.riceAndCurry[13])],
    category: "Restaurant Surplus",
    donor: { name: "Chattogram Tehari Ghor", type: "Restaurant", rating: 4.6, reviewCount: 76, verified: true, avatarInitial: "C" },
    area: "Nasirabad",
    city: "Chattogram",
    servings: 15,
    price: 0,
    postedAt: fromNow(-0.8),
    pickupStart: fromNow(0.1),
    pickupEnd: fromNow(1.5),
    dietaryTags: ["Halal"],
    status: "available",
    specifications: [
      { label: "Servings", value: "15 plates" },
      { label: "Cooked", value: "2 hours ago" },
      { label: "Container", value: "Provided" },
      { label: "Pickup type", value: "Restaurant counter" },
    ],
    reviews: [
      { id: "r1", author: "Rakib M.", rating: 5, comment: "Tehari was still hot when I picked it up around closing.", date: fromNow(-500) },
    ],
  },
  {
    id: "l-008",
    title: "Egg curry & plain rice — hostel mess extra portions",
    description:
      "Our mess cooked for more students than showed up today. 10 servings of egg curry and rice, kept covered and warm.",
    fullDescription:
      "Some students went home for the weekend and our mess kitchen overestimated headcount. We have 10 extra servings of egg curry with plain rice, made fresh at lunch and kept warm since. Great for anyone nearby who needs a solid meal — students, rickshaw pullers, or neighbors.",
    images: [img(FOOD_IMAGES.riceAndCurry[7]), img(FOOD_IMAGES.riceAndCurry[4])],
    category: "Home Cooked",
    donor: { name: "Shahjalal Hostel Mess", type: "Individual", rating: 4.4, reviewCount: 19, verified: false, avatarInitial: "S" },
    area: "Amberkhana",
    city: "Sylhet",
    servings: 10,
    price: 0,
    postedAt: fromNow(-3.5),
    pickupStart: fromNow(0.1),
    pickupEnd: fromNow(2),
    dietaryTags: ["Halal", "Contains Egg"],
    status: "available",
    specifications: [
      { label: "Servings", value: "10 plates" },
      { label: "Made", value: "At lunch, kept warm" },
      { label: "Spice level", value: "Mild" },
      { label: "Pickup type", value: "Hostel gate" },
    ],
    reviews: [],
  },
  {
    id: "l-009",
    title: "Pitha platter — Nakshi, Bhapa & Chitoi, made for winter fair",
    description:
      "We made extra pitha for a community winter fair. Nakshi pitha, bhapa pitha, and chitoi pitha, about 40 pieces total.",
    fullDescription:
      "Our women's cooperative made pitha for a winter community fair and prepared more than the stalls could sell. We have roughly 40 pieces across nakshi, bhapa, and chitoi pitha, made fresh this afternoon with date-palm jaggery. Would love for these to go to families who'll enjoy them rather than go to waste.",
    images: [img(FOOD_IMAGES.bakery[7]), img(FOOD_IMAGES.bakery[2])],
    category: "Home Cooked",
    donor: { name: "Nokshi Nari Somobay", type: "Individual", rating: 4.9, reviewCount: 33, verified: true, avatarInitial: "N" },
    area: "Boalia",
    city: "Rajshahi",
    servings: 40,
    price: 0,
    postedAt: fromNow(-5),
    pickupStart: fromNow(0.5),
    pickupEnd: fromNow(3),
    dietaryTags: ["Vegetarian", "Contains Nuts"],
    status: "available",
    specifications: [
      { label: "Items", value: "Nakshi, bhapa, chitoi pitha" },
      { label: "Quantity", value: "~40 pieces" },
      { label: "Sweetener", value: "Date-palm jaggery (nolen gur)" },
      { label: "Pickup type", value: "Community hall entrance" },
    ],
    reviews: [
      { id: "r1", author: "Lubna S.", rating: 5, comment: "The bhapa pitha was soft and not overly sweet — lovely.", date: fromNow(-3000) },
    ],
  },
  {
    id: "l-010",
    title: "Grocery pantry surplus — rice, lentils, oil (near expiry-safe date)",
    description:
      "Store is rotating stock. 20kg rice, 8kg lentils, and cooking oil bottles being given away before the shelf reset.",
    fullDescription:
      "As we rotate our shelves for a seasonal reset, some pantry stock needs to move out today: about 20kg of rice in 5kg bags, 8kg of lentils, and a dozen 1-litre cooking oil bottles. All well within safe dates, just not staying on our shelves. First come, first served, ideally to someone who can distribute it further.",
    images: [img(FOOD_IMAGES.produce[1]), img(FOOD_IMAGES.produce[12])],
    category: "Grocery & Pantry",
    donor: { name: "Khulna Family Mart", type: "Grocery Store", rating: 4.3, reviewCount: 22, verified: true, avatarInitial: "K" },
    area: "Khalishpur",
    city: "Khulna",
    servings: 50,
    price: 0,
    postedAt: fromNow(-6),
    pickupStart: fromNow(0.5),
    pickupEnd: fromNow(5),
    dietaryTags: ["Vegan", "Vegetarian"],
    status: "available",
    specifications: [
      { label: "Contents", value: "Rice, lentils, cooking oil" },
      { label: "Quantity", value: "20kg rice, 8kg lentils, 12 oil bottles" },
      { label: "Shelf life", value: "3+ months remaining" },
      { label: "Pickup type", value: "Store back entrance" },
    ],
    reviews: [
      { id: "r1", author: "Community Kitchen Khulna", rating: 5, comment: "This restocked our community kitchen for two weeks. Thank you.", date: fromNow(-4000) },
    ],
  },
  {
    id: "l-011",
    title: "Wedding reception leftovers — Kacchi Biryani, Borhani & Roast",
    description:
      "Large family wedding ended with plenty of food left. Kacchi biryani, chicken roast, and borhani for around 60 people.",
    fullDescription:
      "Our family wedding reception at a community center had lighter turnout than the catering was planned for. We have kacchi biryani, chicken roast, and borhani (yogurt drink) enough for roughly 60 servings, all sealed within the last hour. We'd rather this go to people who need it than be thrown away — please come with containers if you're collecting for a group.",
    images: [img(FOOD_IMAGES.riceAndCurry[1]), img(FOOD_IMAGES.riceAndCurry[8]), img(FOOD_IMAGES.riceAndCurry[14])],
    category: "Event Leftovers",
    donor: { name: "Islam Family (Private Event)", type: "Event Host", rating: 5.0, reviewCount: 6, verified: false, avatarInitial: "I" },
    area: "Mirpur DOHS",
    city: "Dhaka",
    servings: 60,
    price: 0,
    postedAt: fromNow(-1),
    pickupStart: fromNow(0.3),
    pickupEnd: fromNow(3),
    dietaryTags: ["Halal", "Contains Dairy"],
    status: "available",
    specifications: [
      { label: "Servings", value: "~60 portions" },
      { label: "Sealed", value: "Within the last hour" },
      { label: "Items", value: "Kacchi biryani, roast, borhani" },
      { label: "Pickup type", value: "Community center gate" },
    ],
    reviews: [],
  },
  {
    id: "l-012",
    title: "Bakorkhani & tea biscuits — bakery day-end tray",
    description:
      "Traditional bakorkhani and a tray of tea biscuits from today's baking, more than our regular customers took.",
    fullDescription:
      "We bake bakorkhani fresh every afternoon and today's batch was larger than what our regular customers picked up. About 25 pieces of bakorkhani and a full tray of tea biscuits remain — great with evening tea. Everything was baked this afternoon.",
    images: [img(FOOD_IMAGES.bakery[4]), img(FOOD_IMAGES.bakery[5])],
    category: "Bakery & Sweets",
    donor: { name: "Puran Dhaka Bakorkhani", type: "Bakery", rating: 4.8, reviewCount: 156, verified: true, avatarInitial: "P" },
    area: "Old Dhaka, Chawkbazar",
    city: "Dhaka",
    servings: 25,
    price: 20,
    postedAt: fromNow(-2),
    pickupStart: fromNow(0.2),
    pickupEnd: fromNow(2),
    dietaryTags: ["Vegetarian", "Contains Gluten"],
    status: "available",
    specifications: [
      { label: "Items", value: "Bakorkhani, tea biscuits" },
      { label: "Quantity", value: "25 pieces + 1 tray" },
      { label: "Price", value: "Tk 20 (covers packaging)" },
      { label: "Pickup type", value: "Shop front" },
    ],
    reviews: [
      { id: "r1", author: "Zubair H.", rating: 5, comment: "Bakorkhani here is legendary, glad it didn't go to waste.", date: fromNow(-1600) },
    ],
  },
  {
    id: "l-013",
    title: "Fresh fish & vegetable combo — riverside market unsold stock",
    description:
      "Small river fish and a mix of seasonal vegetables left after the evening market closed. Fresh, kept on ice.",
    fullDescription:
      "We sell fish and vegetables at the riverside evening market, and today we're left with a modest quantity of small river fish (kept on ice all day) plus mixed seasonal vegetables. It's all still fresh and would go to waste if not collected tonight. Good for a family or a shared community meal.",
    images: [img(FOOD_IMAGES.produce[3]), img(FOOD_IMAGES.produce[10])],
    category: "Grocery & Pantry",
    donor: { name: "Meghna Ghat Market", type: "Grocery Store", rating: 4.2, reviewCount: 11, verified: false, avatarInitial: "M" },
    area: "Chandpur Launch Ghat",
    city: "Chandpur",
    servings: 20,
    price: 100,
    postedAt: fromNow(-2.2),
    pickupStart: fromNow(0.2),
    pickupEnd: fromNow(1.5),
    dietaryTags: ["Contains Fish"],
    status: "available",
    specifications: [
      { label: "Contents", value: "River fish, seasonal vegetables" },
      { label: "Storage", value: "Kept on ice" },
      { label: "Price", value: "Tk 100 (well below market rate)" },
      { label: "Pickup type", value: "Market stall, near the ghat" },
    ],
    reviews: [],
  },
  {
    id: "l-014",
    title: "Birthday party leftovers — Fried rice, chicken chap & dessert",
    description:
      "Small birthday gathering, more food ordered than eaten. Fried rice, chicken chap, and a mixed dessert tray.",
    fullDescription:
      "We hosted a birthday get-together at home and, as usual, over-ordered. Left over are two large trays of fried rice, chicken chap, and a dessert tray with rasmalai and fruit custard. Everything is untouched, from sealed catering trays, and safe for a few more hours.",
    images: [img(FOOD_IMAGES.riceAndCurry[12]), img(FOOD_IMAGES.bakery[3])],
    category: "Event Leftovers",
    donor: { name: "Tabassum Family", type: "Event Host", rating: 4.9, reviewCount: 9, verified: false, avatarInitial: "T" },
    area: "Banani",
    city: "Dhaka",
    servings: 14,
    price: 0,
    postedAt: fromNow(-1.2),
    pickupStart: fromNow(0.2),
    pickupEnd: fromNow(2.5),
    dietaryTags: ["Halal", "Contains Dairy"],
    status: "available",
    specifications: [
      { label: "Servings", value: "14 portions" },
      { label: "Items", value: "Fried rice, chicken chap, dessert" },
      { label: "Condition", value: "Untouched, sealed trays" },
      { label: "Pickup type", value: "Apartment lobby" },
    ],
    reviews: [],
  },
  {
    id: "l-015",
    title: "Farmhouse vegetable share — extra harvest from home garden",
    description:
      "Our home garden had a big harvest this week. Sharing extra pumpkin, spinach, and okra with neighbors.",
    fullDescription:
      "We grow vegetables in our small home garden and this week's harvest was more than our family can use before it turns. Sharing a good amount of pumpkin, spinach, and okra — all picked this morning, no pesticides used in the last month. Anyone nearby is welcome to come by.",
    images: [img(FOOD_IMAGES.produce[4]), img(FOOD_IMAGES.produce[7])],
    category: "Grocery & Pantry",
    donor: { name: "Anwar Hossain", type: "Individual", rating: 4.7, reviewCount: 14, verified: false, avatarInitial: "A" },
    area: "Hathazari",
    city: "Chattogram",
    servings: 15,
    price: 0,
    postedAt: fromNow(-8),
    pickupStart: fromNow(0.5),
    pickupEnd: fromNow(6),
    dietaryTags: ["Vegan", "Vegetarian"],
    status: "available",
    specifications: [
      { label: "Contents", value: "Pumpkin, spinach, okra" },
      { label: "Harvested", value: "This morning" },
      { label: "Farming method", value: "No pesticide in the last month" },
      { label: "Pickup type", value: "Front yard, gate open till evening" },
    ],
    reviews: [
      { id: "r1", author: "Dilruba P.", rating: 5, comment: "Spinach was some of the freshest I've had from a home garden.", date: fromNow(-5000) },
    ],
  },
  {
    id: "l-016",
    title: "Cafe surplus — sandwiches, pastries & cold coffee",
    description:
      "Daily unsold stock from our cafe counter. Club sandwiches, fruit pastries, and bottled cold coffee.",
    fullDescription:
      "Every closing time we set aside what's left on our counter for anyone who can use it: today that's about 10 club sandwiches, 8 fruit pastries, and 6 bottles of cold coffee, all made or bottled today. Comes from a hygienic kitchen with daily food-safety checks.",
    images: [img(FOOD_IMAGES.bakery[1]), img(FOOD_IMAGES.bakery[2])],
    category: "Bakery & Sweets",
    donor: { name: "Corner Cafe & Bites", type: "Restaurant", rating: 4.5, reviewCount: 63, verified: true, avatarInitial: "C" },
    area: "Zindabazar",
    city: "Sylhet",
    servings: 10,
    price: 0,
    postedAt: fromNow(-1.8),
    pickupStart: fromNow(0.1),
    pickupEnd: fromNow(1),
    dietaryTags: ["Contains Dairy", "Contains Gluten"],
    status: "available",
    specifications: [
      { label: "Items", value: "Sandwiches, pastries, cold coffee" },
      { label: "Made", value: "Today" },
      { label: "Quantity", value: "10 sandwiches, 8 pastries, 6 drinks" },
      { label: "Pickup type", value: "Cafe counter, closing at 10 PM" },
    ],
    reviews: [
      { id: "r1", author: "Proma D.", rating: 4, comment: "Sandwiches were fresh, good portion for the whole family.", date: fromNow(-2600) },
    ],
  },
  {
    id: "l-017",
    title: "Iftar plate surplus — Piyaju, Beguni, Chola & Jilapi",
    description:
      "Mosque committee prepared extra iftar for the neighborhood. Piyaju, beguni, chola, and jilapi, still warm.",
    fullDescription:
      "Our mosque committee cooks a community iftar every evening during the season and today's batch had a comfortable surplus: piyaju, beguni, boiled chola, and jilapi, about 35 plates worth. All prepared a couple of hours before sunset and kept covered since. Open to anyone in the neighborhood.",
    images: [img(FOOD_IMAGES.riceAndCurry[9]), img(FOOD_IMAGES.bakery[6])],
    category: "Home Cooked",
    donor: { name: "Baitul Aman Mosque Committee", type: "Individual", rating: 4.9, reviewCount: 58, verified: true, avatarInitial: "B" },
    area: "Firozshah",
    city: "Chattogram",
    servings: 35,
    price: 0,
    postedAt: fromNow(-3),
    pickupStart: fromNow(0.1),
    pickupEnd: fromNow(1.2),
    dietaryTags: ["Halal", "Vegetarian"],
    status: "available",
    specifications: [
      { label: "Items", value: "Piyaju, beguni, chola, jilapi" },
      { label: "Servings", value: "~35 plates" },
      { label: "Prepared", value: "A couple of hours before sunset" },
      { label: "Pickup type", value: "Mosque courtyard" },
    ],
    reviews: [
      { id: "r1", author: "Mahfuz K.", rating: 5, comment: "Consistent every single day during the season, very organized.", date: fromNow(-6000) },
    ],
  },
  {
    id: "l-018",
    title: "Seminar snack boxes — samosa, cake slice & juice",
    description:
      "University seminar over-ordered snack boxes. About 22 boxes with samosa, cake slice, and juice, unopened.",
    fullDescription:
      "We held a department seminar and ordered snack boxes for more attendees than actually came. 22 sealed boxes remain, each with a samosa, a slice of cake, and a juice box. Everything was delivered this afternoon and kept in a cool room since.",
    images: [img(FOOD_IMAGES.bakery[0]), img(FOOD_IMAGES.riceAndCurry[0])],
    category: "Event Leftovers",
    donor: { name: "University Dept. of CSE", type: "Event Host", rating: 4.6, reviewCount: 12, verified: true, avatarInitial: "U" },
    area: "Kazla",
    city: "Rajshahi",
    servings: 22,
    price: 0,
    postedAt: fromNow(-2.6),
    pickupStart: fromNow(0.2),
    pickupEnd: fromNow(2),
    dietaryTags: ["Vegetarian", "Contains Gluten"],
    status: "available",
    specifications: [
      { label: "Servings", value: "22 sealed boxes" },
      { label: "Contents", value: "Samosa, cake slice, juice" },
      { label: "Delivered", value: "This afternoon" },
      { label: "Pickup type", value: "Department office, ID required" },
    ],
    reviews: [],
  },
  {
    id: "l-019",
    title: "Dal, Aloo Bhorta & Rice — daily mess overproduction",
    description:
      "Our mess kitchen runs a fixed menu and today came out ahead by 8 servings. Dal, aloo bhorta, and rice, still warm.",
    fullDescription:
      "We run a small tiffin/mess service and today's headcount came in lower than the food prepared. Extra today: dal, aloo bhorta, and steamed rice, 8 servings, made a couple of hours ago and kept warm in a hotpot. Simple home-style food, good for anyone needing a proper meal tonight.",
    images: [img(FOOD_IMAGES.riceAndCurry[6]), img(FOOD_IMAGES.produce[5])],
    category: "Home Cooked",
    donor: { name: "Anandi Tiffin Service", type: "Individual", rating: 4.5, reviewCount: 29, verified: false, avatarInitial: "A" },
    area: "Sonadanga",
    city: "Khulna",
    servings: 8,
    price: 0,
    postedAt: fromNow(-1.4),
    pickupStart: fromNow(0.1),
    pickupEnd: fromNow(1.5),
    dietaryTags: ["Vegetarian", "Halal"],
    status: "available",
    specifications: [
      { label: "Servings", value: "8 plates" },
      { label: "Made", value: "A couple of hours ago" },
      { label: "Kept", value: "Warm in hotpot" },
      { label: "Pickup type", value: "Home kitchen door" },
    ],
    reviews: [
      { id: "r1", author: "Kamrul I.", rating: 4, comment: "Simple, homely food — appreciated it after a long day.", date: fromNow(-3200) },
    ],
  },
  {
    id: "l-020",
    title: "Grocery store bread & dairy — near best-before, still good",
    description:
      "Packaged bread, yogurt cups, and milk cartons approaching their best-before date tomorrow. All refrigerated properly.",
    fullDescription:
      "As part of our stock rotation, we pull items a day before their best-before date even though they're perfectly fine to eat. Today that includes packaged bread loaves, yogurt cups, and milk cartons, kept refrigerated the entire time. All safe to consume over the next couple of days if refrigerated at home.",
    images: [img(FOOD_IMAGES.bakery[8]), img(FOOD_IMAGES.produce[2])],
    category: "Grocery & Pantry",
    donor: { name: "Green Valley Grocers", type: "Grocery Store", rating: 4.4, reviewCount: 34, verified: true, avatarInitial: "G" },
    area: "Shahjalal Upashahar",
    city: "Sylhet",
    servings: 20,
    price: 0,
    postedAt: fromNow(-5.5),
    pickupStart: fromNow(0.3),
    pickupEnd: fromNow(4),
    dietaryTags: ["Vegetarian", "Contains Dairy", "Contains Gluten"],
    status: "available",
    specifications: [
      { label: "Contents", value: "Bread, yogurt, milk" },
      { label: "Best before", value: "Tomorrow" },
      { label: "Storage", value: "Refrigerated" },
      { label: "Pickup type", value: "Store back door" },
    ],
    reviews: [
      { id: "r1", author: "Farzana B.", rating: 5, comment: "Everything was still well within date and properly chilled.", date: fromNow(-7000) },
    ],
  },
];

export function getListingById(id: string): FoodListing | undefined {
  return LISTINGS.find((l) => l.id === id);
}

export function getRelatedListings(listing: FoodListing, count = 4): FoodListing[] {
  return LISTINGS.filter(
    (l) => l.id !== listing.id && (l.category === listing.category || l.city === listing.city)
  ).slice(0, count);
}

export const CATEGORIES: { name: FoodListing["category"]; blurb: string }[] = [
  { name: "Restaurant Surplus", blurb: "Catering and kitchen overproduction" },
  { name: "Home Cooked", blurb: "Extra portions from home kitchens" },
  { name: "Bakery & Sweets", blurb: "Day-end bread, pastries and sweets" },
  { name: "Grocery & Pantry", blurb: "Rotated stock, still well within date" },
  { name: "Event Leftovers", blurb: "Weddings, parties and office events" },
];

export const CITIES = ["Dhaka", "Chattogram", "Chandpur", "Sylhet", "Khulna", "Rajshahi"];
