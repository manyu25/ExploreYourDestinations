const data = [
  //Himachal
  {
    id: 1,
    name: "Grand Himachal Tour Package",
    Price: 1000,
    No_of_days: "9 Nights / 10 Days",
    Starting: ["Delhi", "Chandigarh"],
    Destination: ["Shimla", "Manali", "Dharamshala", "Dalhousie", "Amritsar"],
    image1:
      "https://media.istockphoto.com/id/1371289822/photo/himalayan-village-town-of-kalpa-with-kailash-mountain-snow-peaks-at-himachal-pradesh-india.jpg?s=612x612&w=0&k=20&c=ibz1ktqV34YlHk0FeSyBcoykG2IVViXNUxU2NLCGsg8=",
    image2:
      "https://www.tusktravel.com/blog/wp-content/uploads/2023/05/Beautiful-Valleys-in-Himachal-Pradesh.jpg",
    Itenerary: [
      {
        day: 1,
        loc: "Delhi / Chandigarh → Shimla",
        dist: 340,
        time: 8,
        desc: "You will be picked up from Delhi or Chandigarh, whether from the airport, railway station, or hotel, and embark on a scenic drive to Shimla, known as the 'Queen of Hills'. Upon arrival, you will check in at the hotel and enjoy some leisure time exploring Mall Road in the evening. Your day concludes with an overnight stay in Shimla.",
      },
      {
        day: 2,
        loc: "Shimla & Kufri Sightseeing",
        dist: 15,
        time: 0.22,
        desc: "After enjoying breakfast at the hotel, you will visit Kufri, where you can experience skiing and various adventure activities. Later, you will explore Jakhoo Temple, dedicated to Lord Hanuman, followed by a visit to Christ Church and the Ridge. You will also have time to stroll along Mall Road and browse through Lakkar Bazaar. The day concludes with an overnight stay in Shimla.",
      },
      {
        day: 3,
        loc: "Shimla → Manali via Kullu",
        dist: 250,
        time: 8,
        desc: "After breakfast, you will check out from the hotel and embark on a scenic drive to Manali via Kullu Valley. Along the way, you will visit Pandoh Dam and enjoy the breathtaking views at the Beas River Viewpoint. You will also explore the Kullu Shawl Factory and seek blessings at Vaishno Devi Temple. Upon arrival in Manali, you will check in at the hotel and relax for an overnight stay.",
      },
      {
        day: 4,
        loc: "Manali -> Solang Valley / Rohtang Pass",
        dist: 13,
        time: 0.39,
        desc: "Early in the morning, you will drive to Solang Valley, where you can enjoy snow activities and paragliding. Depending on NGT regulations, you may also visit Rohtang Pass or travel through the Atal Tunnel at an additional cost. Later, you will explore Nehru Kund, Hidimba Devi Temple, Manu Temple, and the Club House. In the evening, you can stroll along Mall Road and visit the Tibetan Monastery. The day concludes with an overnight stay in Manali.",
      },
      {
        day: 5,
        loc: "Manali → Dharamshala",
        dist: 220,
        time: 7,
        desc: "After breakfast, you will check out from the hotel and embark on a scenic drive to Dharamshala, the serene home of the Dalai Lama. Upon arrival, you will check in at the hotel and begin exploring the city's highlights, including McLeod Ganj and the Dalai Lama Monastery. You will also visit the picturesque Bhagsu Waterfall and the revered Bhagsunag Temple. The day ends with an overnight stay in Dharamshala.",
      },
      {
        day: 6,
        loc: "Dharamshala → Dalhousie",
        dist: 120,
        time: 4,
        desc: "After breakfast, you will check out from the hotel and visit the Dharamshala Cricket Stadium, one of the highest cricket stadiums in the world. Following this, you will drive to Dalhousie, a picturesque hill station known for its colonial charm. In the evening, you can enjoy a leisurely walk at Gandhi Chowk and visit Subhash Baoli, a serene spot surrounded by lush greenery. The day concludes with an overnight stay in Dalhousie.",
      },
      {
        day: 7,
        loc: "Dalhousie -> Khajjiar (Mini Switzerland of India)",
        dist: 22,
        time: 1,
        desc: "After breakfast at the hotel, you will visit Khajjiar, known for its breathtaking lush green meadows and dense pine forests. Here, you can indulge in activities like horse riding, zorbing, and photography. Later, you will explore the Kalatop Wildlife Sanctuary, home to diverse flora and fauna. After a day of sightseeing and adventure, you will return to Dalhousie for an overnight stay.",
      },
      {
        day: 8,
        loc: "Dalhousie → Amritsar",
        dist: 200,
        time: 5,
        desc: "After breakfast, you will check out from the hotel and drive to Amritsar, the historic city known for the iconic Golden Temple. Upon arrival, you will visit the Wagah Border to witness the patriotic and electrifying Evening Flag Ceremony. Later, you will explore the Golden Temple (Harmandir Sahib), a spiritual and architectural marvel. The day concludes with an overnight stay in Amritsar.",
      },
      {
        day: 9,
        loc: "Amritsar Sightseeing & Return to Delhi",
        dist: 520,
        time: 10,
        desc: "After breakfast, you will check out from the hotel and visit Jallianwala Bagh, a memorial commemorating the tragic 1919 massacre. Next, you will explore the Partition Museum, which showcases the history and impact of India's partition. Following these visits, you will embark on a drive back to Delhi, where you will check in at the hotel and relax for an overnight stay.",
      },
      {
        day: 10,
        loc: "Delhi Sightseeing & Departure",
        dist: "-",
        time: "-",
        desc: "After breakfast at the hotel, you will embark on a sightseeing tour of Delhi, depending on the time available. You will visit iconic landmarks such as India Gate and Rashtrapati Bhavan, followed by either Qutub Minar or Lotus Temple. You may also explore the historic Red Fort and the grand Jama Masjid. After completing the sightseeing, you will be dropped off at Delhi Airport or Railway Station for your departure.",
      },
    ],
  },

  //Jagannath_Puri
  {
    id: 2,
    name: "Jagannath Puri Tour Package",
    Price: 1000,
    No_of_days: "4 Nights / 5 Days",
    Starting: ["Bhubaneswar"],
    Destination: ["Puri", "Konark", "Chilika Lake", "Bhubaneswar"],
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAZeZdVHUHbakSd6xAG2yRWZyUO3wH-y8fjw&s",
    image2:
      "https://media.istockphoto.com/id/1128484961/photo/beautiful-sunrise-at-chilika-lake-india.jpg?s=612x612&w=0&k=20&c=_66oCSSEhQbX7SqJfnImwg0-OjUgoQpLZDUa24S-Yh0=",
    Itenerary: [
      {
        day: 1,
        loc: "Arrival in Bhubaneswar - Puri",
        dist: 65,
        time: 1.2,
        desc: "Upon arrival at Bhubaneswar Airport or Railway Station, you will be picked up and taken for a sightseeing tour. En route, you will visit the Dhauli Peace Pagoda (Shanti Stupa), followed by the Lingaraj Temple, which is the oldest temple in Bhubaneswar. Next, you will explore the Mukteshwar and Rajarani Temples, known for their intricate architecture. After the temple visits, you will proceed to Puri and check in at the hotel. In the evening, you can relax at the Golden Beach and explore the vibrant Swargadwar Market. The day concludes with an overnight stay in Puri.",
      },
      {
        day: 2,
        loc: "Puri - Jagannath Temple & Konark Excursion",
        dist: 36,
        time: 1,
        desc: "Early in the morning, you will visit the Jagannath Temple for darshan, keeping in mind that non-Hindus are not allowed inside. Afterward, you will explore the Gundicha Temple and Loknath Temple before heading towards the Konark Sun Temple, a UNESCO World Heritage Site. Along the way, you will visit Chandrabhaga Beach, known for its serene sunsets, followed by a stop at Pipili, a village famous for its exquisite applique handicrafts. You will also explore Raghurajpur, a heritage village renowned for its Pattachitra paintings and skilled artisans. After a day of exploration, you will return to Puri for an overnight stay.",
      },
      {
        day: 3,
        loc: "Puri - Chilika Lake Excursion (Satpada)",
        dist: 108,
        time: 2.5,
        desc: "After enjoying breakfast at the hotel, you will drive to Chilika Lake (Satpada side), where you can embark on a scenic boat ride to spot playful dolphins and explore Sea Mouth Island. Following this, you will visit the Alarnath Temple, a significant Vaishnavite pilgrimage site. Upon returning to Puri, you will have leisure time to relax at the Golden Beach. The day concludes with an overnight stay in Puri.",
      },
      {
        day: 4,
        loc: "Puri - Bhubaneswar Sightseeing",
        dist: 65,
        time: 1.2,
        desc: "After breakfast, you will check out from the hotel and drive to Bhubaneswar. Upon arrival, you will visit the Nandankanan Zoological Park, home to a variety of wildlife species. Next, you will explore the Khandagiri and Udayagiri Caves, ancient rock-cut caves with intricate carvings and inscriptions. You will also visit the State Museum and the Ekamra Haat, a vibrant handicrafts market. The day concludes with an overnight stay in Bhubaneswar.",
      },
      {
        day: 5,
        loc: "Departure from Bhubaneswar",
        dist: "-",
        time: "-",
        desc: "After breakfast, you will check out from the hotel and be transferred to Bhubaneswar Airport or Railway Station for your departure, marking the end of your memorable journey. Visit as per time availability - ISKCON Temple Bhubaneswar,Odisha State Museum",
      },
    ],
  },

  //Nashik
  {
    id: 3,
    name: "Nashik Tour Package",
    Price: 1000,
    No_of_days: "3 Nights / 4 Days",
    Starting: ["Nashik"],
    Destination: [
      "Nashik",
      "Trimbakeshwar",
      "Sula Vineyards",
      "Panchvati",
      "Shirdi",
      "Bhandardara",
    ],
    image1:
      "https://img.veenaworld.com/wp-content/uploads/2024/06/Best-Places-to-Visit-in-Nashik-1024x768.webp",
    image2:
      "https://s7ap1.scene7.com/is/image/incredibleindia/1-trimbakeshwar-nashik--maharashtra_-city-hero?qlt=82&ts=1726675387974",
    Itenerary: [
      {
        day: 1,
        loc: "Arrival in Nashik - Local Sightseeing",
        dist: "-",
        time: "-",
        desc: "Upon arrival in Nashik, you will be picked up from Nashik Railway Station or Airport and transferred to your hotel for check-in. The journey begins with a visit to Panchvati and the Kalaram Temple, both renowned for their connections to the Ramayana. Next, explore Sita Gufa, a sacred cave believed to be linked to Goddess Sita’s stay during exile. A visit to the holy Godavari Ghat follows, where pilgrims take sacred baths along the banks of the Godavari River. For those interested, an optional wine-tasting experience and vineyard tour at Sula Vineyards or York Winery can be arranged. The day concludes with an overnight stay in Nashik.",
      },
      {
        day: 2,
        loc: "Trimbakeshwar & Anjaneri Hills",
        dist: 30,
        time: 1,
        desc: "The day begins with a delightful breakfast at the hotel, followed by a visit to the Trimbakeshwar Jyotirlinga Temple, one of the 12 sacred Jyotirlingas dedicated to Lord Shiva. For those seeking adventure, an optional trek to Anjaneri Hills, believed to be the birthplace of Lord Hanuman, can be arranged. The journey continues with a visit to Muktidham Temple, a stunning white marble temple featuring replicas of all 12 Jyotirlingas. After a day of spiritual and scenic experiences, return to the hotel for an overnight stay in Nashik",
      },
      {
        day: 3,
        loc: "Shirdi & Shani Shingnapur (Optional)",
        dist: 94,
        time: 2,
        desc: "Start the day with a hearty breakfast at the hotel before embarking on a two-hour drive to Shirdi for a visit to the revered Shirdi Sai Baba Temple, where you can offer prayers and seek blessings. Continue exploring the spiritual sites of Dwarkamai and Chavadi, both deeply connected to Sai Baba’s life and teachings. For those interested, an optional visit to Shani Shingnapur Temple, renowned for its self-emerging Shani deity, can be arranged. After a fulfilling day, return to Nashik for an overnight stay at the hotel.",
      },
      {
        day: 4,
        loc: "Adventure & Departure",
        dist: "-",
        time: "-",
        desc: "Begin the day with a delicious breakfast at the hotel before heading to Bhandardara, a picturesque hill station known for its breathtaking landscapes, Wilson Dam, and Randha Falls (optional visit). For those traveling during the monsoon season, a visit to Vihigaon Waterfall offers a stunning natural retreat. After a day of exploring nature’s beauty, proceed to Nashik Railway Station or Airport for your return journey, marking the end of a memorable trip.",
      },
    ],
  },

  //Uttarakhand
  {
    id: 4,
    name: "Grand Uttarakhand Tour Package",
    Price: 1000,
    No_of_days: "9 Nights / 10 Days",
    Starting: ["Delhi"],
    Destination: [
      "Haridwar",
      "Rishikesh",
      "Mussoorie",
      "Nainital",
      "Corbett",
      "Kausani",
      "Almora",
    ],
    image1:
      "https://media.istockphoto.com/id/484389570/photo/himalayas.jpg?s=612x612&w=0&k=20&c=6jM32XJBWlvv6x7AF-av52jlncPkz5hn_AEhjaDSFYI=",
    image2:
      "https://www.peakadventuretour.com/assets/imgs/uttarakhand-tourism-01.webp",
    Itenerary: [
      {
        day: 1,
        loc: "Delhi → Haridwar",
        dist: 220,
        time: 6,
        desc: "Upon arrival at Delhi Airport or Railway Station, embark on a scenic drive to Haridwar, the sacred city on the banks of the Ganges. Begin your spiritual journey with a visit to Har Ki Pauri, where you can witness the mesmerizing Ganga Aarti at sunset. Continue to the revered Mansa Devi and Chandi Devi Temples, followed by a visit to Bharat Mata Mandir, dedicated to the spirit of India. After a day of divine experiences, check in at the hotel for an overnight stay in Haridwar.",
      },
      {
        day: 2,
        loc: "Haridwar → Rishikesh → Mussoorie",
        dist: 100,
        time: 4,
        desc: "Start the day with a refreshing morning drive to Rishikesh, known as the Yoga Capital of the World. Explore the iconic Ram Jhula and Laxman Jhula, followed by a visit to Triveni Ghat and Parmarth Niketan Ashram, where you can experience the serene spiritual atmosphere. Continue to the Neelkanth Mahadev Temple, a revered shrine dedicated to Lord Shiva. For adventure enthusiasts, an optional river rafting experience can be arranged at an additional cost. Later, proceed to Mussoorie and check in at the hotel. In the evening, enjoy a leisurely walk along Mall Road, soaking in the charming hill station ambiance. Conclude the day with an overnight stay in Mussoorie.",
      },
      {
        day: 3,
        loc: "Mussoorie Sightseeing",
        dist: "-",
        time: "-",
        desc: "Begin the day with a delightful breakfast at the hotel before heading out to explore Mussoorie’s scenic attractions. Start with a visit to Kempty Falls, a picturesque waterfall and popular picnic spot. Next, enjoy a ropeway ride to Gun Hill, offering breathtaking panoramic views of the surrounding mountains. Continue to Company Garden, a beautifully landscaped park, and take a stroll along Camel’s Back Road, known for its peaceful ambiance and stunning vistas. Conclude the sightseeing tour with a visit to Lal Tibba, the highest point in Mussoorie, providing mesmerizing views of the Himalayas. Return to the hotel for an overnight stay in Mussoorie.",
      },
      {
        day: 4,
        loc: "Mussoorie → Jim Corbett",
        dist: 250,
        time: 7,
        desc: "Start the day with a hearty breakfast at the hotel before checking out and embarking on a scenic drive to Jim Corbett National Park, renowned for its rich wildlife and lush landscapes. Upon arrival, check in at a jungle resort and unwind in the serene surroundings. Spend the evening at leisure, enjoying nature walks amidst the wilderness or relaxing by a cozy bonfire. Conclude the day with an overnight stay at the resort in Corbett.",
      },
      {
        day: 5,
        loc: "Jim Corbett Safari → Nainital ",
        dist: 80,
        time: 3,
        desc: "Start the day with an early morning Jeep Safari in Jim Corbett National Park for a chance to spot tigers and explore the rich wildlife. Visit the scenic Corbett Waterfall and the revered Garjia Devi Temple before driving to Nainital. Upon arrival, check in at the hotel and enjoy an evening boat ride on Naini Lake, followed by a visit to Naina Devi Temple. Conclude the day with a stroll along Mall Road and the Tibetan Market before returning to the hotel for an overnight stay in Nainital.",
      },
      {
        day: 6,
        loc: "Nainital & Nearby Lakes Tour",
        dist: "-",
        time: "-",
        desc: "Start the day with a delightful breakfast at the hotel before exploring Nainital’s scenic attractions. Take a cable car ride to Snow View Point for breathtaking Himalayan views, followed by visits to Naina Peak and Tiffin Top, offering panoramic landscapes. Later, explore the serene nearby lakes—Bhimtal, Sattal, and Naukuchiatal—each known for their natural beauty and tranquility. Return to the hotel for a relaxing overnight stay in Nainital.",
      },
      {
        day: 7,
        loc: "Nainital → Kausani",
        dist: 120,
        time: 5,
        desc: "After breakfast, check out from the hotel and embark on a scenic drive to Kausani, often called the 'Switzerland of India' for its breathtaking views. Visit Anasakti Ashram, where Mahatma Gandhi once stayed, followed by the serene Rudradhari Waterfalls. Explore the lush tea gardens and enjoy panoramic views of the Himalayan peaks from a scenic viewpoint. End the day with a mesmerizing sunset and an overnight stay in Kausani.",
      },
      {
        day: 8,
        loc: "Kausani → Almora ",
        dist: 60,
        time: 2,
        desc: "Enjoy a delicious breakfast at the hotel before driving to Almora, a picturesque hill town known for its serene beauty. Visit Bright End Corner for stunning sunrise and sunset views, followed by Kasar Devi Temple, a spiritually significant site. Explore the famous Chitai Golu Devta Temple, believed to fulfill devotees' wishes. For nature enthusiasts, an optional visit to Binsar Wildlife Sanctuary offers a chance to experience rich biodiversity. Conclude the day with an overnight stay in Almora.",
      },
      {
        day: 9,
        loc: "Almora → Ranikhet → Delhi",
        dist: 350,
        time: 9,
        desc: "After breakfast, check out from the hotel and proceed to Ranikhet to visit Jhula Devi Temple, known for its spiritual significance, and explore the beautifully maintained Chaubatia Gardens, famous for orchards and panoramic views. Later, embark on a scenic drive back to Delhi, check in at the hotel upon arrival, and relax with an overnight stay.",
      },
      {
        day: 10,
        loc: "Delhi Sightseeing & Departure",
        dist: "-",
        time: "-",
        desc: "Start the day with a delicious breakfast at the hotel before exploring Delhi’s iconic landmarks, time permitting. Visit India Gate and Rashtrapati Bhavan for a glimpse of the city’s grandeur, followed by either Qutub Minar or Humayun’s Tomb, both rich in historical significance. If time allows, explore the serene Lotus Temple or the magnificent Akshardham Temple. Finally, proceed to Delhi Airport or Railway Station for your departure, concluding a memorable journey.",
      },
    ],
  },

  //Leh-Ladakh
  {
    id: 5,
    name: "Leh-Ladakh Tour Package",
    Price: 1000,
    No_of_days: "5 Nights / 6 Days",
    Starting: ["Leh"],
    Destination: ["Leh", "Nubra Valley", "Pangong Lake", "Khardung La"],
    image1:
      "https://discoverlehladakh.in/wp-content/uploads/2020/02/all-you-want-to-know-about-leh-ladakh.jpg",
    image2: "https://rctrips.com//assets/leh1.jpg",
    Itenerary: [
      {
        day: 1,
        loc: "Arrival in Leh & Acclimatization",
        dist: "-",
        time: "-",
        desc: "Upon arrival at Leh Airport (Kushok Bakula Rimpochee Airport), transfer to the hotel and take time to rest and acclimatize to the high altitude. In the evening, visit the serene Shanti Stupa, offering panoramic views of Leh, followed by a stroll through Leh Market to explore local handicrafts and culture. Conclude the day with an overnight stay in Leh.",
      },
      {
        day: 2,
        loc: "Leh Local Sightseeing",
        dist: "-",
        time: "-",
        desc: "After breakfast at the hotel, begin the day with a visit to Leh Palace, a historic royal residence offering stunning panoramic views of the city. Continue to the renowned Hemis and Thiksey Monasteries, known for their rich Buddhist heritage and striking architecture. Experience the fascinating Magnetic Hill, where vehicles appear to defy gravity, and visit Sangam Point to witness the mesmerizing confluence of the Indus and Zanskar Rivers. Return to the hotel for an overnight stay in Leh.",
      },
      {
        day: 3,
        loc: "Leh to Nubra Valley (via Khardung La)",
        dist: 124,
        time: 6,
        desc: "After breakfast at the hotel, embark on a scenic drive to Nubra Valley via Khardung La, one of the world's highest motorable roads at 18,380 ft. Upon arrival, explore the mesmerizing Hunder Sand Dunes and enjoy a unique double-humped camel safari. Visit the iconic Diskit Monastery, home to a towering Buddha statue offering breathtaking valley views. Conclude the day with an overnight stay at a camp or hotel in Nubra Valley.",
      },
      {
        day: 4,
        loc: "Nubra Valley to Pangong Lake",
        dist: 274,
        time: 6.5,
        desc: "After breakfast at the camp or hotel, embark on a scenic drive to Pangong Lake via the breathtaking Shyok Route, passing through stunning landscapes. Upon arrival, witness the mesmerizing beauty of Pangong Tso, renowned for its ever-changing shades of blue. Spend the evening soaking in the tranquil surroundings before settling in for an overnight stay at a lakeside camp in Pangong.",
      },
      {
        day: 5,
        loc: "Pangong Lake to Leh (via Chang La Pass)",
        dist: "160",
        time: "5",
        desc: "After breakfast at the camp, embark on a scenic drive back to Leh via Chang La Pass, one of the highest motorable roads at 17,688 ft. En route, visit the renowned Hemis Monastery, known for its rich Buddhist heritage, and explore Shey Palace, the former summer retreat of Ladakhi kings. Upon arrival in Leh, check in at the hotel and relax with an overnight stay.",
      },
      {
        day: 6,
        loc: "Departure from Leh",
        dist: "-",
        time: "-",
        desc: "After breakfast at the hotel, proceed for a transfer to Leh Airport for your onward journey, carrying unforgettable memories of the trip.",
      },
    ],
  },

  //Munnar
  {
    id: 6,
    name: "💑Romantic Munnar - Thekkady - Alleppey Tour Package (For Couples)",
    Price: 1000,
    No_of_days: "4 Nights / 5 Days",
    Starting: ["Kochi"],
    Destination: ["Munnar", "Thekkady", "Alleppey"],
    image1:
      "https://www.ekeralatourism.net/wp-content/uploads/2018/08/Thekkady.jpg",
    image2:
      "https://www.keralaholidays.com/uploads/tourpackages-gallery/thumb/Munnar31.jpg",
    Itenerary: [
      {
        day: 1,
        loc: "Arrival in Kochi & Transfer to Munnar",
        dist: 128,
        time: 3.2,
        desc: "Upon arrival at Kochi Airport or Railway Station, embark on a scenic 4-5 hour drive to Munnar, passing through lush tea plantations. En route, stop by the picturesque Cheeyappara and Valara Waterfalls to soak in the natural beauty. Visit the Tea Museum to learn about Munnar’s rich tea heritage and explore the serene Blossom Park. Check in at a romantic resort or private villa, enjoy leisure time, and opt for a candlelight dinner for a special evening. Conclude the day with an overnight stay in Munnar.",
      },
      {
        day: 2,
        loc: "Munnar Sightseeing",
        dist: "-",
        time: "-",
        desc: "After breakfast at the hotel, visit Eravikulam National Park (Rajamalai) to spot the endangered Nilgiri Tahr amidst scenic hills. Explore Mattupetty Dam and Echo Point, known for their breathtaking landscapes and natural acoustics. Enjoy a romantic boat ride at the serene Kundala Lake before heading to Top Station Viewpoint for stunning valley views. Return to the resort for a relaxing evening, with an optional bonfire on request, and unwind with an overnight stay in Munnar.",
      },
      {
        day: 3,
        loc: "Munnar to Thekkady (Periyar Wildlife Sanctuary)",
        dist: 97,
        time: 2.75,
        desc: "After breakfast, check out from the hotel and embark on a scenic 3-4 hour drive to Thekkady, passing through lush spice plantations. Upon arrival, check in at a romantic jungle resort and relax before visiting Periyar Wildlife Sanctuary, where you can opt for a boat safari on Periyar Lake to spot wildlife like elephants and deer. Explore aromatic spice plantations and enjoy an optional elephant ride for a unique experience. In the evening, witness a mesmerizing Kathakali or Kalaripayattu cultural show before settling in for an overnight stay in Thekkady.",
      },
      {
        day: 4,
        loc: "Thekkady to Alleppey – Luxury Houseboat Stay",
        dist: 137.5,
        time: 3.3,
        desc: "After breakfast, check out and embark on a scenic 4-5 hour drive to Alleppey, famously known as the 'Venice of the East.' Upon arrival, check in to a luxurious private houseboat and set sail on a romantic backwater cruise through serene canals lined with lush coconut groves. Savor a traditional Kerala-style lunch on board while enjoying the breathtaking views. In the evening, indulge in a special candlelight dinner as you float under the starry sky. Experience the charm of a floating villa with an unforgettable overnight stay on the houseboat.",
      },
      {
        day: 5,
        loc: "Alleppey to Kochi & Departure",
        dist: "53",
        time: "1",
        desc: "After breakfast, check out from the houseboat and drive to Kochi, a scenic 1.5-hour journey. Explore the historic charm of Fort Kochi, witness the iconic Chinese Fishing Nets, and stroll through the vibrant streets of Jew Town. Visit the Mattancherry Palace, known for its stunning murals, and St. Francis Church, one of India’s oldest European churches. Conclude the trip with a drop-off at Kochi Airport or Railway Station for your departure, carrying beautiful memories of Kerala",
      },
    ],
  },

  //Auli
  {
    id: 7,
    name: "Auli Tour Package",
    Price: 1000,
    No_of_days: "2 Nights / 3 Days",
    Starting: ["Haridwar", "Rishikesh", "Dehradun"],
    Destination: ["Auli", "Joshimath"],
    image1:
      "https://t.eucdn.in/tourism/lg-jpg/auli-ski-snowboard-school-9027056.jpg",
    image2:
      "https://static2.tripoto.com/media/filter/tst/img/352821/TripDocument/1596691403_img_0984.jpg",
    Itenerary: [
      {
        day: 1,
        loc: "Arrival & Transfer to Auli",
        dist: 270,
        time: 8,
        desc: "Upon arrival at Haridwar, Rishikesh, or Dehradun Airport/Railway Station, embark on a scenic 9-10 hour drive to Auli via Joshimath, covering approximately 270 km. Upon reaching, check in at your hotel or resort and unwind while admiring the breathtaking snow-capped peaks. Spend the evening at leisure, with an optional bonfire if the weather permits, before settling in for an overnight stay in Auli.",
      },
      {
        day: 2,
        loc: "Auli Sightseeing & Adventure Activities",
        dist: "-",
        time: "-",
        desc: "Start your day with an exhilarating cable car ride on the Auli Ropeway from Joshimath, Asia’s longest ropeway, offering breathtaking views. Visit the serene Auli Artificial Lake, one of the highest man-made lakes, before indulging in skiing or snowboarding during winter, or trekking during summer. For adventure seekers, an optional trek to Gorson Bugyal (3 km one way) provides stunning alpine landscapes. Relax and soak in mesmerizing views of Nanda Devi and Trishul Peak before retiring for an overnight stay in Auli.",
      },
      {
        day: 3,
        loc: "Departure from Auli",
        dist: 270,
        time: 8,
        desc: "After breakfast, check out from the hotel and embark on a scenic drive back to Haridwar, Rishikesh, or Dehradun. Upon arrival, proceed for a drop-off at the airport or railway station for your onward journey, carrying unforgettable memories of Auli’s breathtaking landscapes and adventures.",
      },
    ],
  },

  //Chopta
  {
    id: 8,
    name: "Chopta Tour Package",
    Price: 1000,
    No_of_days: "2 Nights / 3 Days",
    Starting: ["Haridwar", "Rishikesh", "Dehradun"],
    Destination: ["Chopta", "Tungnath", "Chandrashila"],
    image1: "https://static.toiimg.com/photo/104328428.cms",
    image2:
      "https://choptatour.com/wp-content/uploads/2020/07/Chopta-in-winter-A-Magnificant-view-of-Himalayan-from-Tungnath-Temple.jpg",
    Itenerary: [
      {
        day: 1,
        loc: "Arrival & Transfer to Chopta",
        dist: 200,
        time: 7,
        desc: "Upon arrival at Haridwar, Rishikesh, or Dehradun Airport/Railway Station, embark on a scenic 7-8 hour drive to Chopta, covering approximately 200 km. Check in at a cozy camp or guesthouse and unwind amidst the serene natural surroundings. In the evening, relax by a bonfire and enjoy stargazing if the weather permits. Conclude the day with an overnight stay in Chopta, soaking in the tranquility of the Himalayas.",
      },
      {
        day: 2,
        loc: "Trek to Tungnath Temple & Chandrashila Peak",
        dist: "-",
        time: "-",
        desc: "Begin the day with an early morning trek to Tungnath, the highest Shiva temple in the world, covering a scenic 3.5 km trail. For those seeking adventure, continue the trek to Chandrashila Peak (4,000m) and witness breathtaking panoramic views of the Himalayas. After descending back to Chopta, enjoy some leisure time amidst the tranquil surroundings before settling in for an overnight stay in Chopta",
      },
      {
        day: 3,
        loc: "Departure from Chopta",
        dist: 200,
        time: 7,
        desc: "After breakfast, check out from the camp or guesthouse and embark on a scenic drive back to Haridwar, Rishikesh, or Dehradun. Upon arrival, proceed for a drop-off at the airport or railway station for your onward journey, carrying unforgettable memories of Chopta’s serene landscapes and thrilling trek.",
      },
    ],
  },

  //Jaipur
  {
    id: 9,
    name: "Jaipur - Jaisalmer Tour Package",
    Price: 1000,
    No_of_days: "4 Nights / 5 Days",
    Starting: ["Jaipur"],
    Destination: ["Jaipur", "Jaisalmer"],
    image1:
      "https://www.revv.co.in/blogs/wp-content/uploads/2020/04/road-trip-from-jaipur-to-jaisalmer-1280x720.jpg",
    image2:
      "https://jeetoursandtravels.com/wp-content/uploads/2024/04/People-Riding-Elephants-At-Amb-Fort.jpg",
    Itenerary: [
      {
        day: 1,
        loc: "Arrival in Jaipur & Sightseeing",
        dist: "-",
        time: "-",
        desc: "Upon arrival at Jaipur Airport or Railway Station, you will be picked up and transferred to your hotel for check-in and rest. Visit the City Palace, Jantar Mantar, and Hawa Mahal, followed by the Albert Hall Museum and Birla Temple. In the evening, explore Johari Bazaar or Bapu Bazaar for shopping before returning for an overnight stay in Jaipur.",
      },
      {
        day: 2,
        loc: "Jaipur Forts & Local Attractions",
        dist: "-",
        time: "-",
        desc: "Start your day with a visit to Amber Fort, where you can enjoy an elephant or jeep ride. Explore Jaigarh Fort, home to the largest cannon on wheels, and then head to Nahargarh Fort for stunning views of the city. Stop by Jal Mahal for some scenic photos before spending free time shopping or indulging in local Rajasthani cuisine. End the day with an overnight stay in Jaipur.",
      },
      {
        day: 3,
        loc: "Jaipur to Jaisalmer (By Road / Train / Flight)",
        dist: 598,
        time: 10,
        desc: "You can travel to Jaisalmer by road in a private AC vehicle (approximately 9 hours for 600 km), by an overnight or day train from Jaipur, or by a direct/connecting flight if available. Upon arrival, check in at your hotel and relax before an overnight stay in Jaisalmer.",
      },
      {
        day: 4,
        loc: "Jaisalmer Sightseeing & Desert Safari",
        dist: "-",
        time: "-",
        desc: "Begin your day by visiting Jaisalmer Fort (Sonar Quila), followed by the stunning Patwon Ki Haveli and Nathmal Ki Haveli. Explore Gadisar Lake and the ancient Jain Temples before heading to Sam Sand Dunes in the evening for a thrilling desert safari, including a camel ride, jeep safari, Rajasthani cultural show, and dinner. Conclude the day with an overnight stay at a desert camp or hotel in Jaisalmer.",
      },
      {
        day: 5,
        loc: "Jaisalmer Morning Tour & Return to Jaipur",
        dist: "598",
        time: "10",
        desc: "Start your day with a visit to the mysterious Kuldhara Haunted Village and the historic Bada Bagh. Later, begin your journey back to Jaipur by road, train, or flight. Upon arrival, you will be dropped off at Jaipur Airport or Railway Station, marking the end of your trip.",
      },
    ],
  },

  //Kashi-Ayodhya
  {
    id: 10,
    name: "Kashi - Ayodhya Tour Package",
    Price: 1000,
    No_of_days: "3 Nights / 4 Days",
    Starting: ["Varanasi"],
    Destination: ["Varanasi", "Ayodhya", "Sarnath"],
    image1:
      "https://media.istockphoto.com/id/1164329797/photo/hindu-sadhu-sitting-on-a-boat-overlooking-varanasi-city-architecture-at-sunset.jpg?s=612x612&w=0&k=20&c=LbpIHRo7kGT7dbUr6b6UuD1d6P0yCaKZ2lbqo3TY988=",
    image2:
      "https://media.cnn.com/api/v1/images/stellar/prod/240123131600-09-ayodhya-temple-india.jpg?c=original",
    Itenerary: [
      {
        day: 1,
        loc: "Arrival in Varanasi & Spiritual Tour",
        dist: "-",
        time: "-",
        desc: "Upon arrival at Varanasi Airport or Railway Station, you will be picked up and transferred to your hotel for check-in and rest. Begin your spiritual journey with a visit to Kashi Vishwanath Temple and Annapurna Temple, followed by Kal Bhairav Temple and Sankat Mochan Hanuman Temple. In the evening, witness the mesmerizing Ganga Aarti at Dashashwamedh Ghat and take a peaceful stroll along the Ganga Ghats. Conclude the day with an overnight stay in Varanasi.",
      },
      {
        day: 2,
        loc: "Varanasi Sightseeing & Sarnath Excursion",
        dist: 10,
        time: 0.5,
        desc: "Start your day with an early morning boat ride on the Ganges, followed by a visit to Assi Ghat and Manikarnika Ghat. Later, take a trip to Sarnath to explore Dhamek Stupa, Ashokan Pillar, and Buddhist Monasteries. Visit Banaras Hindu University (BHU) and the New Vishwanath Temple before indulging in shopping for Banarasi sarees and handicrafts. End the day with an overnight stay in Varanasi.",
      },
      {
        day: 3,
        loc: "Travel to Ayodhya & Pilgrimage Tour",
        dist: 219,
        time: 4.5,
        desc: "Begin your day with an early morning drive to Ayodhya (approximately 4-5 hours). Visit the sacred Ram Janmabhoomi (Ram Mandir) and explore Hanuman Garhi, Kanak Bhawan, Dashrath Mahal, and Sita Ki Rasoi. Continue to Nageshwarnath Temple before witnessing the serene evening Saryu Aarti at Ram Ki Paidi. Conclude the day with an overnight stay in Ayodhya.",
      },
      {
        day: 4,
        loc: "Ayodhya Morning Darshan & Departure",
        dist: "219",
        time: "4.5",
        desc: "If time permits, visit Choti Chawni and Treta Ke Thakur Temple before starting your drive back to Varanasi (approximately 4-5 hours). Upon arrival, you will be dropped off at Varanasi Airport or Railway Station, marking the end of your trip.",
      },
    ],
  },

  //Kashmir
  {
    id: 11,
    name: "Kashmir Tour Package",
    Price: 1000,
    No_of_days: "5 Nights / 6 Days",
    Starting: ["Srinagar", "Jammu"],
    Destination: ["Srinagar", "Gulmarg", "Pahalgam", "Sonmarg"],
    image1:
      "https://www.khyberhotels.com/blog/wp-content/uploads/2023/10/winter-kashmir-1024x562.jpg",
    image2:
      "https://lp-cms-production.imgix.net/2019-06/384e10f39ebc6fab9b991467541ce8ed-dal-lake.jpg?fit=crop&ar=1%3A1&w=1200&auto=format&q=75",
    Itenerary: [
      {
        day: 1,
        loc: "Arrival in Srinagar & Local Sightseeing",
        dist: "-",
        time: "-",
        desc: "Upon arrival at Srinagar Airport, you will be picked up and transferred to your houseboat or hotel for check-in and rest. Begin your exploration with a visit to Shankaracharya Temple, followed by the beautiful Mughal Gardens—Nishat Bagh, Shalimar Bagh, and Chashme Shahi. Enjoy a serene Shikara ride on Dal Lake before exploring Lal Chowk Market for shopping, including Pashmina shawls and Kashmiri dry fruits. Conclude the day with an overnight stay in a Srinagar houseboat or hotel.",
      },
      {
        day: 2,
        loc: "Srinagar to Gulmarg – Snow Adventure & Gondola Ride",
        dist: 51,
        time: 1.5,
        desc: "Embark on a scenic drive to Gulmarg (approximately 2 hours, 50 km). Enjoy a thrilling Gondola ride to Apharwat Peak, where you can experience snow activities in winter. Visit the historic Maharani Temple, St. Mary's Church, and the picturesque Gulmarg Golf Course. Depending on the season, try skiing and snowboarding in winter or horse riding and trekking in summer. Later, return to Srinagar for an overnight stay.",
      },
      {
        day: 3,
        loc: " Srinagar to Pahalgam – Scenic Beauty & Valleys",
        dist: 90,
        time: 3,
        desc: "Take a scenic drive to Pahalgam (approximately 3 hours, 90 km), stopping en route to visit the Saffron Fields, Awantipora Ruins, and Apple Orchards. Upon arrival, explore the breathtaking Aru Valley, Betaab Valley, and Chandanwari by local cab. For adventure seekers, optional activities like Lidder River rafting and pony rides are available. Conclude the day with an overnight stay in Pahalgam.",
      },
      {
        day: 4,
        loc: "Pahalgam to Srinagar & Leisure",
        dist: 90,
        time: 3,
        desc: "Enjoy a leisurely morning in Pahalgam, soaking in the serene beauty. Later, drive back to Srinagar and spend the evening at your own pace, shopping or relaxing. Conclude the day with an overnight stay in Srinagar.",
      },
      {
        day: 5,
        loc: "Srinagar to Sonmarg – The Meadow of Gold",
        dist: "80",
        time: "2",
        desc: "Take a scenic drive to Sonmarg (approximately 2.5 hours, 80 km). Visit the stunning Thajiwas Glacier, accessible by pony ride or trekking. For adventure enthusiasts, optional river rafting on the Sindh River is available. Later, return to Srinagar for an overnight stay.",
      },
      {
        day: 6,
        loc: "Departure from Srinagar",
        dist: "-",
        time: "-",
        desc: "After breakfast, check out from your hotel or houseboat. You will then be dropped off at Srinagar Airport for your onward journey, marking the end of your trip.",
      },
    ],
  },

  //Ooty
  {
    id: 12,
    name: "Ooty Tour Package",
    Price: 1000,
    No_of_days: "2 Nights / 3 Days",
    Starting: ["Coimbatore", "Bengaluru"],
    Destination: ["Ooty", "Coonoor"],
    image1:
      "https://s3.india.com/wp-content/uploads/2024/07/Historical-Places-To-Visit-In-Ooty.jpg",
    image2:
      "https://www.thehosteller.com/_next/image/?url=https%3A%2F%2Fstatic.thehosteller.com%2Fhostel%2Fimages%2FFeatured%20Image%20(1).jpg%2FFeatured%20Image%20(1)-1678277258513.jpg&w=2048&q=75",
    Itenerary: [
      {
        day: 1,
        loc: "Arrival & Ooty Sightseeing",
        dist: 90,
        time: 3,
        desc: "Upon arrival at Coimbatore or Bangalore Airport/Railway Station, embark on a scenic drive to Ooty (approximately 3-4 hours from Coimbatore or 7-8 hours from Bangalore). Check in at your hotel or resort and relax before exploring Ooty Lake & Boathouse, where you can enjoy a peaceful boat ride. Visit the vibrant Rose Garden and Botanical Garden, then head to Doddabetta Peak for breathtaking views of the Nilgiris. In the evening, enjoy leisure time and shopping at Ooty Market before an overnight stay in Ooty.",
      },
      {
        day: 2,
        loc: "Excursion to Coonoor",
        dist: 20,
        time: 0.5,
        desc: "Start your day with an optional scenic Toy Train ride on the Nilgiri Mountain Railway. Visit Sim’s Park, a beautiful botanical garden, before heading to Dolphin’s Nose Viewpoint and Lamb’s Rock for stunning valley views. Explore lush tea gardens and a tea factory to witness the tea-making process and enjoy a fresh cup. Return to Ooty for leisure time and an overnight stay.",
      },
      {
        day: 3,
        loc: "Departure from Ooty",
        dist: 90,
        time: 3,
        desc: "After breakfast and check-out, visit Pykara Waterfalls and Pykara Lake if time permits. Then, embark on a scenic drive back to Coimbatore or Bangalore. Upon arrival, you will be dropped off at the airport or railway station for your onward journey, marking the end of your trip.",
      },
    ],
  },

  //Ooty-Mysore
  {
    id: 13,
    name: "Ooty - Mysore - Coonoor - Coorg - Coimbatore Tour Package",
    Price: 1000,
    No_of_days: "4 Nights / 5 Days",
    Starting: ["Bengaluru"],
    Destination: ["Mysore", "Ooty", "Coonoor", "Coorg", "Coimbatore"],
    image1:
      "https://storage.justwravel.com/package/images/gallery/original/6-night-7-days-coorg-ooty-mysore-and-coonoor-tour-package-JustWravel-1597395212-2.jpg",
    image2:
      "https://www.trawell.in/images/itinerary/Ooty1.jpg;Ooty3.jpg;Ooty5.jpg;Ooty2.jpg;Doddabetta1.jpg;Ooty4.jpg;Ketti1.jpg;Coonoor1.jpg;Coonoor5.jpg;Coorg5.jpg;Bylakuppe1.jpg;Coorg3.jpg;Coorg.jpg;Coorg1.jpg;Coorg2.jpg;Coorg4.jpg",
    Itenerary: [
      {
        day: 1,
        loc: "Bangalore to Mysore Sightseeing",
        dist: "143",
        time: "2.45",
        desc: "Upon arrival at Bangalore Airport or Railway Station, embark on a scenic drive to Mysore (approximately 3-4 hours). Visit the magnificent Mysore Palace, a grand royal residence showcasing stunning architecture. Explore Chamundi Hills and seek blessings at Chamundeshwari Temple. In the evening, visit the famous Brindavan Gardens and enjoy its mesmerizing musical fountains. Conclude the day with an overnight stay in Mysore.",
      },
      {
        day: 2,
        loc: "Mysore to Ooty",
        dist: "125",
        time: "3.5",
        desc: "After breakfast, check out from your hotel and embark on a scenic drive to Ooty (approximately 5-6 hours). Upon arrival, check in at your hotel or resort and relax. Begin your sightseeing with a visit to Ooty Lake & Boathouse for a peaceful boat ride, followed by exploring the vibrant Rose Garden and Botanical Garden. In the evening, enjoy shopping at Ooty Market before an overnight stay in Ooty.",
      },
      {
        day: 3,
        loc: "Ooty & Coonoor Sightseeing",
        dist: "-",
        time: "-",
        desc: "After breakfast, take a scenic drive to Coonoor (approximately 1 hour). Optionally, enjoy a memorable Toy Train ride on the Nilgiri Mountain Railway. Visit Dolphin’s Nose Viewpoint and Lamb’s Rock for breathtaking valley views, then explore lush tea gardens and a tea factory to witness the tea-making process. Stroll through the beautiful Sim’s Park before returning to Ooty for leisure time and an overnight stay.",
      },
      {
        day: 4,
        loc: "Ooty to Coorg",
        dist: "227",
        time: "6.5",
        desc: "After breakfast, check out from your hotel and embark on a scenic drive to Coorg (approximately 5-6 hours). Upon arrival, check in at your hotel or resort and relax. Begin your sightseeing with a visit to the picturesque Abbey Falls, followed by exploring Raja’s Seat, a stunning viewpoint perfect for sunsets. Visit the lush coffee plantations and the historic Madikeri Fort before concluding the day with an overnight stay in Coorg.",
      },
      {
        day: 5,
        loc: "Coorg to Coimbatore & Departure",
        dist: "312",
        time: "9",
        desc: "After breakfast, check out from your hotel and embark on a scenic drive to Coimbatore (approximately 5-6 hours). If time permits, visit the famous Marudhamalai Temple. Finally, you will be dropped off at Coimbatore Airport or Railway Station for your onward journey, marking the end of your trip.",
      },
    ],
  },

  //Ujjain
  {
    id: 14,
    name: "Ujjain - Omkareshwar Pilgrimage Tour",
    Price: 1000,
    No_of_days: "3 Nights / 4 Days",
    Starting: ["Indore"],
    Destination: ["Ujjain", "Omkareshwar"],
    image1:
      "https://media.istockphoto.com/id/1161558377/photo/exterior-view-of-mahakaleshwar-temple-ujjain-madhya-pradesh-india.jpg?s=612x612&w=0&k=20&c=g_k_iKwynIAqmsckmCoGT704Oh6SsbJq-I0zaDQNNjQ=",
    image2:
      "https://i0.wp.com/oneday.travel/wp-content/uploads/one-day-omkareshwar-jyotirlinga-sightseeing-tour-package-private-cab-one-day-travel-small.jpg?fit=1920%2C1280&ssl=1",
    Itenerary: [
      {
        day: 1,
        loc: "Arrival in Indore & Transfer to Ujjain",
        dist: "55",
        time: "1.5",
        desc: "Upon arrival at Indore Airport or Railway Station, embark on a scenic drive to Ujjain (approximately 1.5 hours, 55 km). Check in at your hotel and relax before visiting the sacred Mahakaleshwar Jyotirlinga Temple, with an option to attend the Bhasma Aarti (early booking required). Explore other prominent temples, including Harsiddhi Temple, Kal Bhairav Temple, and Chintaman Ganesh Temple. In the evening, witness the serene Aarti at Ram Ghat on the banks of the Shipra River. Conclude the day with an overnight stay in Ujjain.",
      },
      {
        day: 2,
        loc: "Ujjain Sightseeing & Leisure Time",
        dist: "-",
        time: "-",
        desc: "Start the day with an early morning darshan at Mahakaleshwar Temple (if not done on Day 1). Visit the sacred Mangalnath Temple, explore the historic Sandipani Ashram, and discover the ancient Bhartrihari Caves. Enjoy some free time for shopping, picking up Ujjain’s famous handicrafts and religious souvenirs. Relish local delicacies like poha-jalebi and Ujjaini tea before unwinding for the night with an overnight stay in Ujjain.",
      },
      {
        day: 3,
        loc: "Ujjain to Omkareshwar & Darshan",
        dist: "140",
        time: "3.5",
        desc: "In the morning, embark on a scenic drive to Omkareshwar (approximately 3.5 hours, 140 km). Upon arrival, check in at your hotel and relax. Visit the revered Omkareshwar Jyotirlinga Temple, followed by exploring Mamleshwar Temple, Siddhanath Temple, and the sacred Omkar Parikrama Path. In the evening, witness the serene Aarti at Narmada Ghat before concluding the day with an overnight stay in Omkareshwar.",
      },
      {
        day: 4,
        loc: "Morning Darshan & Return to Indore",
        dist: "80",
        time: "2.5",
        desc: "Start the day with an optional visit to Kedareshwar Temple and Gauri Somnath Temple. Then, embark on a return drive to Indore (approximately 2.5 hours, 80 km). If time permits, explore Indore’s key attractions, including Rajwada Palace, Khajrana Ganesh Temple, and the vibrant Sarafa Bazaar for local delicacies. Finally, proceed for drop-off at Indore Airport or Railway Station, marking the end of your journey.",
      },
    ],
  },

  //Agra-Vrindavan
  {
    id: 15,
    name: "Agra - Mathura - Vrindavan Tour",
    Price: 1000,
    No_of_days: "3 Nights / 4 Days",
    Starting: ["Delhi"],
    Destination: ["Agra", "Mathura", "Vrindavan"],
    image1:
      "https://www.srmholidays.in/wp-content/uploads/2022/07/delhi-agra-mathura-vrindavan-tour.jpg",
    image2:
      "https://www.tripplannersindia.com/assets/images/page/Agra_(3).webp",
    Itenerary: [
      {
        day: 1,
        loc: "Delhi → Agra",
        dist: "243",
        time: "5",
        desc: "Upon arrival in Delhi, embark on a scenic drive to Agra via the Yamuna Expressway (approximately 4 hours). Begin your exploration with a visit to the iconic Taj Mahal, a UNESCO World Heritage Site and one of the Seven Wonders of the World. Next, explore the majestic Agra Fort, a stunning example of Mughal architecture. In the evening, enjoy a breathtaking sunset view of the Taj Mahal from Mehtab Bagh. Spend some time shopping at Agra’s famous handicraft markets before checking in at your hotel for an overnight stay in Agra.",
      },
      {
        day: 2,
        loc: "Agra → Mathura → Vrindavan",
        dist: "70",
        time: "2",
        desc: "After breakfast, check out from the hotel and drive to Mathura, the birthplace of Lord Krishna. Visit Shri Krishna Janmabhoomi Temple, Dwarkadhish Temple, Vishram Ghat, Gita Mandir, and Birla Temple. Later, proceed to Vrindavan, where you will explore the revered Banke Bihari Temple, the serene ISKCON Temple, and the magnificent Prem Mandir, known for its mesmerizing evening light show. After a spiritually enriching day, check in at your hotel for an overnight stay in Vrindavan.",
      },
      {
        day: 3,
        loc: "Vrindavan & Govardhan Excursion",
        dist: "-",
        time: "-",
        desc: "Begin your day with an early morning Nidhivan Darshan, a place of divine significance in Vrindavan. Then, visit Govardhan Hill and Radha Kund, both sacred sites deeply connected to Lord Krishna’s life. Continue to Barsana, the birthplace of Radha Rani, and explore the Radha Rani Temple along with the famous Lathmar Holi area. Return to Vrindavan in the evening to witness the serene Yamuna Aarti at Keshi Ghat. Conclude the day with an overnight stay in Vrindavan.",
      },
      {
        day: 4,
        loc: "Vrindavan → Delhi Return",
        dist: "160",
        time: "3",
        desc: "Enjoy some leisure time shopping for local sweets, religious items, and souvenirs in Vrindavan. Later, drive back to Delhi and get dropped off at your preferred location, marking the end of a spiritually enriching journey.",
      },
    ],
  },

  //Char-Dham
  {
    id: 16,
    name: "Char Dham Yatra Tour Package",
    Price: 1000,
    No_of_days: "11 Nights / 12 Days",
    Starting: ["Delhi"],
    Destination: [
      "Yamunotri",
      "Gangotri",
      "Kedarnath",
      "Badrinath",
      "Haridwar",
      "Rishikesh",
      "Barkot",
      "Uttarkashi",
      "Guptkashi",
      "Sonprayag",
      "Pipalkoti",
    ],
    image1:
      "https://www.epicyatra.com/wp-content/uploads/2024/05/Chardham-Yatra-1.webp",
    image2:
      "https://www.indiantempletour.com/wp-content/uploads/2019/10/Chardham-Tour-Package.jpg",
    Itenerary: [
      {
        day: 1,
        loc: "Delhi -> Haridwar",
        dist: "205",
        time: "6",
        desc: "Arrival To Delhi Pickup From Airport / Railway Station Proceeds To Haridwar. On Arrival Check In To Hotel, Freshen up & rest for a while. Then visit Mansa devi Temple, Har ki Pauri, Statue of Shiva, Ganga Aarti. Later come back to the Hotel, Dinner Overnight Stay At Haridwar.",
      },
      {
        day: 2,
        loc: "Haridwar – Barkot",
        dist: "210",
        time: "8",
        desc: "Morning after breakfast check out from Hotel & Drive To Barkot Via Mussoorie, Enroute Visit Kempty Fall (Suggestible To Have Your Lunch At Kempty Fall As Further No Good Restaurants Are Available Before Badkot). Later Drive Straight To Barkot, Transfer To Your Hotel. Rest Of The Day Is Free To Relax And Store Your Energy For The Pahad (Hiii) Yatra Of Yamunotri The Next Day. Overnight Stay at Barkot.",
      },
      {
        day: 3,
        loc: "Barkot – Yamunotri – Barkot",
        dist: "36",
        time: "1",
        desc: "Early Morning, Drive To Jankichatti/Phoolchatti, Trek Start From Here To Yamunotri (6kms). Either By Walk Or By Horse Or By Doli At Own Cost. The Trek Passes through Lush Green Valley, A Profusion Of Conifers, Rhododendrons, Cacti And Several Species Of Himalayan Shrubs. Dinner & Overnight Stay At Barkot .",
      },
      {
        day: 4,
        loc: "Barkot – Uttarkashi",
        dist: "100",
        time: "4",
        desc: "Early Morning Drive To Gangotri, Enroute At Gangnani Take A Holy Dip In Garam Kund, Further Drive To Gangotri Via Beautiful Harsil Valley. Harsil Is Famous For Its Nature Beauty And For The Majestic Views Of The Deodar Trees, And Mountains. On Arrival At Shree Gangotri, Take A Holy Dip In The Sacred River Ganges Which Is Also Called Bhagirathi At Its Origin. Perform Pooja And Darshan, After That Relax For Some Time In The Lovely Surroundings. Return Back To Uttarkashi. Overnight Stay At Uttarkashi.",
      },
      {
        day: 5,
        loc: "Uttarkashi – Guptkashi",
        dist: "220",
        time: "9",
        desc: "After breakfast Drive Straight To Guptkashi. Enroute You Can See The Beautiful River Mandakini At Tilwara. The Mandakini River Comes From Kedarnath, Drive Alongside The River To Reach Guptkashi/ Phata. On Arrival Check, In At The Hotel, Evening Visit ArdhNarishwar Temple. Overnight Stay At The Hotel.",
      },
      {
        day: 6,
        loc: "Guptkashi – Sonprayag – Kedarnath ",
        dist: "20",
        time: "1",
        desc: "Early morning after breakfast check out from the hotel and drive to Sonprayag. Take jeeps (at own cost) to reach Gaurikund From where, you will start your 20 km trek to Kedarnath. You can hire a Doli or a horse, for your trek (Cost Not Included). Mandakini, one of the main tributaries of the Ganges originates at Kedarnath and flows through Gaurikund. Trudging with you are pilgrims chanting 'Jai Bholenath.' Sometimes the mist would envelop the mountains and slowly lift away, revealing a shiny blinding-white peak that threatens to rupture the skies. On arrival check in at Hotel. Dinner & Overnight at Kedarnath Hotel.",
      },
      {
        day: 7,
        loc: "Kedarnath – Sonprayag – Guptkashi",
        dist: "20",
        time: "1",
        desc: "Early in the morning you get up before dawn and after taking a bath you are at the temple by 4:00 am for the 'Abhishek’ to Kedarnath Shiva. Chances to go inside Garbhagriha and touch the idol. You can also prostate with your head touching the deity etc. After darshan and puja you come out of the temple and return to the Govt. Camps / Lodges. Later you'll start the return trek of 20 km from Kedarnath to Sonprayag. The vehicles wait for you in Sonprayag Car Parking and you’ll drive to your hotel/Camps.  Overnight at Guptkashi.",
      },
      {
        day: 8,
        loc: "Guptkashi – Badrinath",
        dist: "190",
        time: "7",
        desc: "This Morning, You Check out Of the Hotel, proceed Drive to Badrinath. After Driving Through Some Wonderful Ghat Road You Arrive Badrinath. On Arrival Check Into the Hotel. Dinner And Overnight Stay. If time permits visit to Badrinath Darshan. ",
      },
      {
        day: 9,
        loc: "Badrinath Sightseeing – Pipalkoti",
        dist: "80",
        time: "3",
        desc: "This morning, start early for Badrinath ji, go for Badrinath Darshan. After Darshan proceeds for Badrinath local sightseeing visit Mana Village, Bheem Pul, Vyas Gufa, and Ganesh Gufa. After sightseeing, drive to Pipalkoti, check in the hotel, Dinner and Overnight stay at the hotel.",
      },
      {
        day: 10,
        loc: "Pipalkoti – Rishikesh",
        dist: "315",
        time: "9",
        desc: "Morning after breakfast at the hotel and drive to Haridwar Via Rudraprayag to Karnaprayag. Rudraprayag is a small pilgrim town on the holy confluence of river Alaknanda and Mandakini. Evening reach Rishikesh, on arrival check in at the hotel. Dinner and Overnight stay at Rishikesh hotel.",
      },
      {
        day: 11,
        loc: "Rishikesh Sightseeing- Delhi Railways Drop",
        dist: "230",
        time: "6",
        desc: "Morning after breakfast, check out from Hotel. Visit to Rishikesh Sightseeing like: - Ram Jhula, Laxman Jhula, Janki Setu, Parmarth Niketan, Triveni Ghat. Then Proceed to Delhi. Evening Get Drop at Delhi railway Station with your onward journey.",
      },
    ],
  },

  //Chopta-Dodham
  {
    id: 17,
    name: "Dodham + Chopta Tour Package",
    Price: 1000,
    No_of_days: "8 Nights / 9 Days",
    Starting: ["Delhi"],
    Destination: [
      "Haridwar",
      "Guptkashi",
      "Sonprayag",
      "kedarnath",
      "Chopta",
      "Tungnath",
      "Chandrashila",
      "Rishikesh",
      "Pipalkoti",
    ],
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTACLJ5vBJmEG9wNlBhqRAIfmF68HFacRz1UQ&s",
    image2:
      "https://www.tourtraveltourism.com/images/slider/kedarnath-tour.jpg",
    Itenerary: [
      {
        day: 1,
        loc: "Delhi -> Haridwar",
        dist: "210",
        time: "6",
        desc: "Pick up from Delhi   R/S/ Airport and proceed to Haridwar. At Evening Visit Har Ki Pauri , Statue Shiva Lord , Mansa Devi , Chandi Devi , and Join To Ganga Aarti Check into hotel and dinner and overnight stay at the Hotel Haridwar.",
      },
      {
        day: 2,
        loc: "Haridwar -> Guptkashi",
        dist: "220",
        time: "9",
        desc: "After breakfast check out from Hotel & Drive Straight To Guptkashi. You Can See The Beautiful River Mandakini At Tilwara. The Mandakini River Comes From Kedarnath, Drive Alongside The River To Reach Guptkashi. On Arrival Check In At The Hotel, Dinner and Overnight Stay At The Hotel.",
      },
      {
        day: 3,
        loc: "Guptkashi – Sonprayag – Kedarnath",
        dist: "-",
        time: "-",
        desc: "Early morning after breakfast check out from the hotel and drive to Sonprayag. From where, you will start your 20 km trek to Kedarnath. You can hire a Doli or a horse, for your trek (Cost Not Included). Mandakini, one of the main tributaries of the Ganges originates at Kedarnath and flows through Gaurikund. Trudging with you are pilgrims chanting 'Jai Bholenath.' Sometimes the mist would envelop the mountains and slowly lift away, revealing a shiny blinding-white peak that threatens to rupture the skies. On arrival check in at Govt. Camps/Lodges. Overnight at Govt. Camps/Lodges (only basic accommodation is available on a sharing basis with only room basis, you can take a meal directly).",
      },
      {
        day: 4,
        loc: "Kedarnath – Sonprayag – Chopta",
        dist: "102",
        time: "4",
        desc: "Early in the morning you get up before dawn and after taking a bath you are at the temple by 4:45 am for the & 39; Abhishek’ to Kedarnath Shiva. Everyone can go inside Garbha Griha and touch the idol. You can also prostate with your head touching the deity etc. After darshan and puja you come out of the temple andreturn to the Govt. Camps / Lodges. Later you'll start the return trek of 20 km from Kedarnath to Sonprayag. Proceed to Triyugi Narayan Temple, after Darshan proceed to chopta. Check in at the hotel, have dinner & overnight stay.",
      },
      {
        day: 5,
        loc: "Chopta  –Tungnath - Chandrashila -  Chopta",
        dist: "-",
        time: "-",
        desc: "After breakfast Visit To Tungnath Is Situated At The Height Of 3680 Mts From The Sea Level, The Highest In India. The Trek Is Three Kms Upward. Enroute You Will Find Lush Green Meadows And You Can See The Entire Range Of Snow Capped Himalayas. Upon Arrival At Tungnath Temple And Visit The Temple. After Relaxing One Further One Kms Trek To Chandrashila Peak. Later, I Trek Back To Chopta For Dinner And Overnight Stay.",
      },
      {
        day: 6,
        loc: "Chopta – Badrinath",
        dist: "200",
        time: "8",
        desc: "This Morning, You Check Out Of The Hotel And Drive To Badrinath Via Joshimath. After Driving Through Some Wonderful Ghat Road You Arrive At Badrinath. On Arrival Check Into The Hotel. (If time permits this Day) After Some Rest And Refreshments You Are All Set To Go To Badrinath Temple For Darshan In The Evening. But First You Have To Go To Tapt Kund (Hot Spring), Take Bath And Then Go To The Temple. Dedicated To Lord Vishnu, The Temple Of Shri Badrinath Ji Is 15 Meters In Height, Built In The Form Of A Cone With A Small Cupola Of A Gilt Bull And Spire. Later Back To Hotel. Dinner And Overnight Stay At Hotel.",
      },
      {
        day: 7,
        loc: "Badrinath Sightseeing – Pipalkoti",
        dist: "74",
        time: "2",
        desc: "This morning, start early for Badrinath ji, go for Badrinath Darshan. After Darshan proceeds for Badrinath local sightseeing visit Mana Village, Bheem Pul, Vyas Gufa, and Ganesh Gufa. After sightseeing, drive to Pipalkoti, check in the hotel, Dinner and Overnight stay at the hotel.",
      },
      {
        day: 8,
        loc: "Pipalkoti - Rishikesh",
        dist: "250",
        time: "7",
        desc: "Morning after breakfast at the hotel and drive to Rishikesh via Rudraprayag to Karnaprayag. Rudraprayag is a small pilgrim town on the holy confluence of river Alaknanda and Mandakini. Evening reach Rishikesh, on arrival check in at the hotel. Dinner and Overnight stay at Rishikesh hotel.",
      },
      {
        day: 9,
        loc: "Rishikesh - Delhi",
        dist: "235",
        time: "6",
        desc: "Morning after breakfast, check out from Hotel. Visit to Rishikesh Sightseeing like: - Ram Jhula, Laxman Jhula, Triveni Ghat, Parmarth Niketan, Janki Setu Then Proceed to Delhi. Evening Get Drop at Delhi railway Station with your onward journey...",
      },
    ],
  },

  //Dwarka-Somnath-Gir
  {
    id: 18,
    name: "Dwarka-Somnath Gir Tour Package",
    Price: 1000,
    No_of_days: "4 Nights / 5 Days",
    Starting: ["Ahemdabad"],
    Destination: ["Dwarka", "Somnath", "Gir"],
    image1:
      "https://www.flamingotravels.co.in/_next/image?url=https%3A%2F%2Fimgcdn.flamingotravels.co.in%2FImages%2FCity%2FSomnath.jpg&w=1920&q=90",
    image2:
      "https://upload.wikimedia.org/wikipedia/commons/9/90/Gir_lion-Gir_forest%2Cjunagadh%2Cgujarat%2Cindia.jpeg",
    Itenerary: [
      {
        day: 1,
        loc: "Ahmedabad to Dwarka",
        dist: "450",
        time: "8",
        desc: "Upon arrival at Ahmedabad Airport or Railway Station in the morning, begin your journey to Dwarka. En route, visit Lakhota Lake and Bala Hanuman Temple in Jamnagar, known for its continuous chanting of the Ram Dhun. Upon reaching Dwarka, check in at the hotel and take some time to freshen up. Later, visit the revered Dwarkadhish Temple, one of the Char Dham pilgrimage sites, and immerse yourself in its spiritual ambiance. In the evening, attend the serene Aarti at the temple, experiencing the divine atmosphere. Conclude the day with an overnight stay in Dwarka.",
      },
      {
        day: 2,
        loc: "Dwarka – Bet Dwarka – Nageshwar – Local Sightseeing",
        dist: "-",
        time: "-",
        desc: "Start the day with the optional Mangla Aarti at Dwarkadhish Temple, experiencing the divine morning rituals. After breakfast, embark on a spiritual journey to Bet Dwarka, believed to be the residence of Lord Krishna, accessible via a scenic boat ride. Continue to the sacred Nageshwar Jyotirlinga Temple, one of the twelve revered Jyotirlingas, followed by a visit to the Rukmini Devi Temple and the historic Gopi Talav, associated with Krishna's playful pastimes. In the evening, unwind at Gomti Ghat, soaking in the serene ambiance, or explore the vibrant local markets. Conclude the day with an overnight stay in Dwarka.",
      },
      {
        day: 3,
        loc: "Dwarka to Somnath via Porbandar",
        dist: "235",
        time: "6",
        desc: "After breakfast, check out from the hotel and proceed to Somnath via Porbandar. En route, visit Kirti Mandir, the revered birthplace of Mahatma Gandhi, and Sudama Temple, dedicated to Sudama, the childhood friend of Lord Krishna. Upon arrival in Somnath, check in at the hotel and relax. Later, visit the sacred Somnath Jyotirlinga Temple, one of the twelve Jyotirlingas, and attend the soul-stirring Evening Aarti. For an immersive experience, you may also opt to watch the captivating Sound & Light Show at the temple. Conclude the day with an overnight stay in Somnath.",
      },
      {
        day: 4,
        loc: "Somnath to Gir",
        dist: "80",
        time: "2.5",
        desc: "Begin the day with an early morning Abhishekam and Darshan at the sacred Somnath Temple, experiencing the divine aura of one of the twelve Jyotirlingas. After breakfast, check out and proceed to Gir National Park, home to the majestic Asiatic Lions. Upon arrival, check in at the wildlife resort and relax. In the afternoon, embark on an exciting Jungle Safari, exploring the rich biodiversity of Gir. If time permits, visit Devaliya Park, also known as the Gir Interpretation Zone, for a closer look at the region's wildlife. Conclude the adventurous day with an overnight stay in Gir.",
      },
      {
        day: 5,
        loc: "Gir to Ahmedabad",
        dist: "375",
        time: "7",
        desc: "Start the day with an optional early morning Jeep Safari in Gir National Park, offering a chance to witness the Asiatic Lions and other wildlife in their natural habitat. After breakfast, check out from the resort and begin the return journey to Ahmedabad. Upon arrival, proceed to the airport or railway station for departure, concluding a memorable trip filled with spiritual experiences and thrilling adventures.",
      },
    ],
  },

  //Dwarka-Somnath
  {
    id: 19,
    name: "Dwarka-Somnath Tour",
    Price: 1000,
    No_of_days: "3 Nights / 4 Days",
    Starting: ["Ahemdabad"],
    Destination: ["Dwarka", "Somnath"],
    image1: "https://www.shikhar.com/images/gallery/tours/590/1752235420.jpg",
    image2: "https://www.shikhar.com/images/gallery/tours/552/1793914489.jpg",
    Itenerary: [
      {
        day: 1,
        loc: "Ahmedabad to Dwarka",
        dist: "450",
        time: "8",
        desc: "Upon arrival at Ahmedabad Airport or Railway Station in the morning, drive to Dwarka, stopping en route to visit Lakhota Lake and Bala Hanuman Temple in Jamnagar, known for its continuous Ram Dhun chanting. Upon reaching Dwarka, check in at the hotel and freshen up before visiting the sacred Dwarkadhish Temple, one of the Char Dham pilgrimage sites. In the evening, attend the soulful Aarti at the temple and soak in the divine atmosphere. Conclude the day with an overnight stay in Dwarka.",
      },
      {
        day: 2,
        loc: "Dwarka – Bet Dwarka – Nageshwar – Local Sightseeing",
        dist: "-",
        time: "-",
        desc: "Begin the day with an optional Mangla Aarti at Dwarkadhish Temple, experiencing the peaceful morning rituals. After breakfast, visit Bet Dwarka, believed to be Lord Krishna’s residence, accessible via a scenic boat ride. Continue to Nageshwar Jyotirlinga Temple, one of the twelve sacred Jyotirlingas, followed by a visit to Rukmini Devi Temple and Gopi Talav, both rich in mythological significance. In the evening, relax at Gomti Ghat or explore the vibrant local markets. Conclude the day with an overnight stay in Dwarka.",
      },
      {
        day: 3,
        loc: "Dwarka to Somnath",
        dist: "235",
        time: "5",
        desc: "After breakfast, check out and proceed to Somnath via Porbandar. En route, visit Kirti Mandir, the birthplace of Mahatma Gandhi, and Sudama Temple, dedicated to Sudama, the childhood friend of Lord Krishna. Upon arrival in Somnath, check in at the hotel and relax. Later, visit the sacred Somnath Jyotirlinga Temple and attend the soulful Evening Aarti. For a mesmerizing experience, you may also opt to watch the Sound & Light Show at the temple. Conclude the day with an overnight stay in Somnath.",
      },
      {
        day: 4,
        loc: "Somnath – Ahmedabad",
        dist: "410",
        time: "8",
        desc: "Start the day with an early morning Abhishekam and Darshan at the sacred Somnath Temple. After breakfast, visit Triveni Sangam, the holy confluence of the Hiran, Kapila, and Saraswati rivers, followed by Bhalka Tirth, the revered site where Lord Krishna took his last journey. After exploring these spiritual landmarks, begin the return journey to Ahmedabad. Upon arrival, proceed to the airport or railway station for departure, concluding a memorable trip",
      },
    ],
  },

  //Goa
  {
    id: 20,
    name: "Goa Tour Package",
    Price: 1000,
    No_of_days: "3 Nights / 4 Days",
    Starting: ["Goa"],
    Destination: ["Goa"],
    image1: "https://assets.serenity.co.uk/47000-47999/47859/1296x864.jpg",
    image2:
      "https://cache.marriott.com/content/dam/marriott-renditions/GOIWH/goiwh-rockpool-twilight-3537-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1920px:*",
    Itenerary: [
      {
        day: 1,
        loc: "Arrival in Goa – Leisure & Beach Time",
        dist: "-",
        time: "-",
        desc: "Arrive at Goa Airport or Railway Station and transfer to the hotel or resort for check-in. After settling in, relax and explore the nearby beaches like Calangute, Baga, or Anjuna, soaking in the vibrant coastal vibes. Enjoy the lively atmosphere at beachside shacks while savoring delicious local Goan cuisine. Conclude the day with an overnight stay at the hotel.",
      },
      {
        day: 2,
        loc: "North Goa Sightseeing",
        dist: "-",
        time: "-",
        desc: "Start the day with a delicious breakfast at the hotel before heading out to explore Goa’s iconic spots. Visit Fort Aguada, a historic Portuguese fort with stunning sea views, followed by a trip to SinQ or Candolim Beach for a relaxing stroll. Continue to Baga and Anjuna Beach, known for their lively atmosphere and water sports options like Jet Skiing, Banana Rides, and Parasailing. Next, visit Chapora Fort, famously known as the 'Dil Chahta Hai Point,' and soak in the breathtaking views of Vagator Beach. In the evening, unwind at a beachside café while watching a mesmerizing sunset. Conclude the day with an overnight stay at the hotel.",
      },
      {
        day: 3,
        loc: "South Goa & Culture Tour",
        dist: "-",
        time: "-",
        desc: "After breakfast at the hotel, begin the day with a visit to Shri Mangeshi and Shantadurga Temples, two of Goa’s most revered Hindu shrines. Continue to the Basilica of Bom Jesus and Se Cathedral, both UNESCO World Heritage sites showcasing stunning Portuguese architecture. Next, head to Dona Paula Viewpoint for panoramic views of the Arabian Sea, followed by a visit to Miramar Beach for a relaxing stroll. Optionally, explore Colva Beach or the serene Palolem Beach in South Goa. In the evening, enjoy a scenic sunset river cruise on the Mandovi River (at an additional cost). Conclude the day with an overnight stay at the hotel.",
      },
      {
        day: 4,
        loc: "Departure",
        dist: "-",
        time: "-",
        desc: "After breakfast, check out from the hotel and enjoy some leisure time for shopping at Panjim Market or the vibrant flea markets, where you can pick up souvenirs, handicrafts, and local specialties. Later, proceed for drop-off at the airport or railway station, concluding a memorable trip to Goa.",
      },
    ],
  },

  //Golden-Triangle
  {
    id: 21,
    name: "Golden Triangle Tour Package",
    Price: 1000,
    No_of_days: "4 Nights / 5 Days",
    Starting: ["Delhi"],
    Destination: ["Delhi", "Agra", "Jaipur"],
    image1:
      "https://www.authenticindiatours.com/app/uploads/2019/08/Golden-Triangle-collage-1400x550-c-default.jpg",
    image2:
      "https://cdn.holidaytravel.co/uploaded_files/destination_img/2016_515804d5d30fc78golden-triangle-india-tourist-guide---insider--s-view-qpr.jpg",
    Itenerary: [
      {
        day: 1,
        loc: "Arrival in Delhi & Sightseeing",
        dist: "-",
        time: "-",
        desc: "Upon arrival at Delhi Airport or Railway Station, transfer to the hotel for check-in and relaxation. Begin exploring the city’s iconic attractions, starting with India Gate and Rashtrapati Bhavan, symbols of India’s rich history and governance. Visit Humayun’s Tomb, a UNESCO World Heritage Site, followed by the towering Qutub Minar, the world's tallest brick minaret. Experience the serene beauty of the Lotus Temple, a Bahá'í House of Worship known for its unique architecture. In the evening, enjoy leisure time or explore the bustling markets of Connaught Place or Chandni Chowk. Conclude the day with an overnight stay in Delhi.",
      },
      {
        day: 2,
        loc: "Old Delhi Sightseeing & Drive to Agra",
        dist: "230",
        time: "4",
        desc: "After breakfast, begin the day with a visit to Jama Masjid, one of India’s largest and most impressive mosques. Stop by the iconic Red Fort for an outer view of its grand Mughal architecture, followed by a visit to Raj Ghat, the serene memorial of Mahatma Gandhi. Later, embark on a scenic drive to Agra and check in at the hotel for some relaxation. In the evening, head to Mehtab Bagh for a breathtaking sunset view of the Taj Mahal across the Yamuna River. Conclude the day with an overnight stay in Agra.",
      },
      {
        day: 3,
        loc: "Agra Sightseeing & Drive to Jaipur",
        dist: "240",
        time: "5",
        desc: "Start the day with an early morning visit to the Taj Mahal, witnessing its mesmerizing beauty at sunrise. Return to the hotel for breakfast before exploring Agra Fort, a UNESCO World Heritage Site showcasing Mughal grandeur. Later, drive to Jaipur with a stop at Fatehpur Sikri, the abandoned Mughal capital known for its stunning architecture. Upon arrival in Jaipur, check in at the hotel and relax. Spend the evening exploring the vibrant local markets, soaking in the city's rich culture. Conclude the day with an overnight stay in Jaipur.",
      },
      {
        day: 4,
        loc: "Jaipur Sightseeing",
        dist: "-",
        time: "-",
        desc: "After breakfast, begin the day with a visit to the majestic Amber Fort, where you can enjoy an elephant or jeep ride up to the fort entrance. Explore the grand City Palace & Museum, a beautiful blend of Rajasthani and Mughal architecture. Next, visit Jantar Mantar, a UNESCO-listed astronomical observatory, followed by the iconic Hawa Mahal, known for its intricate lattice windows. Optionally, visit Albert Hall Museum to explore its rich collection of artifacts. Conclude the day with an overnight stay in Jaipur.",
      },
      {
        day: 5,
        loc: "Jaipur to Delhi",
        dist: "280",
        time: "6",
        desc: "After breakfast, check out and begin the drive back to Delhi. If time permits, visit the stunning Akshardham Temple, known for its intricate architecture and spiritual significance. Later, proceed for drop-off at Delhi Airport or Railway Station, marking the end of a memorable journey.",
      },
    ],
  },

  //Haridwar-Rishikesh
  {
    id: 22,
    name: "Haridwar-Rishikesh Tour Package",
    Price: 1000,
    No_of_days: "2 Nights / 3 Days",
    Starting: ["Haridwar"],
    Destination: ["Haridwar", "Rishikesh"],
    image1:
      "https://www.rentaltempotravellers.com/wp-content/uploads/2024/05/Parmarth-Niketan-Ashram.webp",
    image2:
      "https://haridwarrishikeshtourism.in/images/places-to-visit/header/haridwar-tourism-header-haridwarrishikesh-tourism.jpg.jpg",
    Itenerary: [
      {
        day: 1,
        loc: "Arrival in Haridwar & Sightseeing",
        dist: "-",
        time: "-",
        desc: "Upon arrival at Haridwar Railway Station or Bus Stand in the morning, transfer to the hotel for check-in and freshening up. Begin exploring the city's revered temples, starting with Mansa Devi Temple, accessible via cable car or a short trek, followed by Chandi Devi Temple, Daksh Mahadev Temple, and Bharat Mata Mandir. In the evening, experience the mesmerizing Ganga Aarti at Har Ki Pauri, a spiritual spectacle by the river. Later, stroll through the vibrant local markets before returning to the hotel for an overnight stay in Haridwar.",
      },
      {
        day: 2,
        loc: "Haridwar to Rishikesh",
        dist: "25",
        time: "0.75",
        desc: "After breakfast, check out and head to Rishikesh, a serene town known for its spiritual and adventure experiences. Visit the iconic Ram Jhula and Laxman Jhula, followed by a peaceful stop at Triveni Ghat. Explore Parmarth Niketan Ashram and seek blessings at Neelkanth Mahadev Temple. For adventure seekers, enjoy optional activities like river rafting, bungee jumping, or ziplining. In the evening, witness the soulful Ganga Aarti at Parmarth Niketan or Triveni Ghat. Conclude the day with an overnight stay in Rishikesh.",
      },
      {
        day: 3,
        loc: "Rishikesh to Haridwar – Departure",
        dist: "25",
        time: "0.75",
        desc: "Start the day with an optional early morning yoga and meditation session in the peaceful surroundings of Rishikesh. After breakfast, visit the famous Beatles Ashram (Maharishi Mahesh Yogi Ashram), known for its spiritual significance and graffiti-covered walls. Next, explore Vashishta Cave, a serene spot ideal for meditation. Later, drive back to Haridwar and proceed for drop-off at the Railway Station or Bus Stand, marking the end of a refreshing and spiritual journey.",
      },
    ],
  },

  //Harshil Valley
  {
    id: 23,
    name: "Harshil Valley Tour Package",
    Price: 1000,
    No_of_days: "3 Nights / 4 Days",
    Starting: ["Haridwar"],
    Destination: ["Haridwar", "Uttarkashi", "Gangotri", "Harshil"],
    image1:
      "https://i.pinimg.com/736x/c0/b0/06/c0b006f89754e722cf415641a6be10f8.jpg",
    image2:
      "https://i.pinimg.com/736x/c0/b0/06/c0b006f89754e722cf415641a6be10f8.jpg",
    Itenerary: [
      {
        day: 1,
        loc: "Haridwar – Uttarkashi – Harshil",
        dist: "290",
        time: "10",
        desc: "Early morning, depart from Haridwar for a scenic drive through Rishikesh, Chamba, and Uttarkashi. En route, visit Prakateshwar Cave, known for its natural limestone formations, and seek blessings at Vishwanath Temple in Uttarkashi. Continue the journey through picturesque landscapes and reach Harshil by evening. Check in at a hotel or homestay and soak in the breathtaking views of Harshil Valley. Enjoy a peaceful dinner and an overnight stay in Harshil.",
      },
      {
        day: 2,
        loc: "Harshil – Gangotri – Harshil",
        dist: "50",
        time: "1.5",
        desc: "Early in the morning, embark on a scenic drive to Gangotri, one of the revered Char Dham pilgrimage sites. Visit the sacred Gangotri Temple and take a holy dip in the Bhagirathi River. Explore nearby attractions like Surya Kund, Pandav Gufa, and Bhairav Ghati, each holding spiritual and historical significance. Later, drive back to Harshil and unwind in its serene surroundings. Spend the evening at leisure, exploring Mukhba Village, the winter abode of Goddess Ganga. Conclude the day with dinner and an overnight stay in Harshil.",
      },
      {
        day: 3,
        loc: "Harshil Local Sightseeing & Exploration",
        dist: "-",
        time: "-",
        desc: "After breakfast, immerse yourself in the scenic beauty of Harshil Valley. Visit Bagori Village, famous for its distinct wooden architecture and rich heritage. Take a short trek to Sattal, a mesmerizing cluster of seven pristine lakes surrounded by lush greenery. Spend the day enjoying riverside camping or simply relaxing amidst nature’s tranquility. End the day with an overnight stay in Harshil.",
      },
      {
        day: 4,
        loc: "Harshil – Uttarkashi – Haridwar",
        dist: "290",
        time: "10",
        desc: "After breakfast, check out and begin the return journey to Haridwar. En route, visit Maneri Dam, a scenic spot known for its serene reservoir and picturesque surroundings. Stop at Kashi Vishwanath Temple in Uttarkashi to seek blessings before continuing the drive. Arrive in Haridwar by evening for drop-off, marking the end of a memorable trip.",
      },
    ],
  },

  //Kedarnath-Badrinath
  {
    id: 24,
    name: "Kedarnath-Badrinath Tour Package",
    Price: 1000,
    No_of_days: "5 Nights / 6 Days",
    Starting: ["Haridwar", "Rishikesh"],
    Destination: [
      "Kedarnath",
      "Badrinath",
      "Guptkashi",
      "Sonprayag",
      "Pipalkoti",
    ],
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZGQOkWJwJPDzP3p95eQgo6esCNSbRY6UcSg&s",
    image2:
      "https://dhramshala.in/wp-content/uploads/2023/10/Kedarnath-temple-in-Uttarakhand.jpg",
    Itenerary: [
      {
        day: 1,
        loc: "Haridwar/ Rishikesh – Guptkashi",
        dist: "220",
        time: "9",
        desc: "Morning meet our representative & Drive Straight To Guptkashi. You Can See The Beautiful River Mandakini At Tilwara. The Mandakini River Comes From Kedarnath, Drive Alongside The River To Reach Guptkashi. On Arrival Check In At The Hotel, Dinner and Overnight Stay At The Hotel.",
      },
      {
        day: 2,
        loc: "Guptkashi/ Sitapur – Sonprayag – Kedarnath",
        dist: "20",
        time: "0.5",
        desc: "Early morning after breakfast check out from the hotel and drive to Sonprayag. From where, you will start your 20 km trek to Kedarnath. You can hire a Doli or a horse, for your trek (Cost Not Included). Mandakini, one of the main tributaries of the Ganges originates at Kedarnath and flows through Gaurikund. Trudging with you are pilgrims chanting 'Jai Bholenath.' Sometimes the mist would envelop the mountains and slowly lift away, revealing a shiny blinding-white peak that threatens to rupture the skies.On arrival check in at Govt. Camps/Lodges. Overnight at Govt. Camps/Lodges (only basic accommodation is available on a sharing basis with only room basis, you can take a meal directly).",
      },
      {
        day: 3,
        loc: "Kedarnath – Sonprayag – Sitapur/ Guptkashi",
        dist: "20",
        time: "0.5",
        desc: "Early in the morning you get up before dawn and after taking a bath you are at the temple by 4:45 am for the 'Abhishek’ to Kedarnath Shiva. Everyone can go inside Garbha Griha and touch the idol. You can also prostate with your head touching the deity etc. After darshan and puja you come out of the temple and return to the Govt. Camps / Lodges. Later you'll start the return trek of 19 km from Kedarnath to Sonprayag. The vehicles wait for you in Sonprayag Car Parking and you’ll drive to your hotel/Camps. Dinner and Overnight at Guptkashi.",
      },
      {
        day: 4,
        loc: "Guptkashi – Badrinath",
        dist: "200",
        time: "8",
        desc: "Early in the morning you get up before dawn and after taking a bath you are at the temple by 4:45 am for the 'Abhishek’ to Kedarnath Shiva. Everyone can go inside Garbha Griha and touch the idol. You can also prostate with your head touching the deity etc. After darshan and puja you come out of the temple and return to the Govt. Camps / Lodges. Later you'll start the return trek of 19 km from Kedarnath to Sonprayag. The vehicles wait for you in Sonprayag Car Parking and you’ll drive to your hotel/Camps. Dinner and Overnight at Guptkashi.",
      },
      {
        day: 5,
        loc: "Badrinath – Pipalkoti",
        dist: "198",
        time: "8",
        desc: "This morning, start early for Badrinath ji, go for Badrinath Darshan. After Darshan, Visit Badriath Local sightseeing visit Mana Village (Hindustan ki Aakhri Dukan), Bheem Pul, Vyas Gufa, and Ganesh Gufa. After sightseeing, drive back to Pipalkoti, Dinner and Overnight stay at hotel.",
      },
      {
        day: 6,
        loc: "Pipalkoti – Rishikesh/Haridwar",
        dist: "212",
        time: "8",
        desc: "After Breakfast, Checkout from the hotel, then proceed back to Rishikesh. Rudraprayg via Karanprayag. Rudraprayag is a small pilgrim town on the holy confluence of river Alaknanda and Mandakini. Evening reach Haridwar, Get Drop at Haridwar Railway Station with your onward journey...",
      },
    ],
  },

  //Kedarnath,Do dham
  {
    id: 25,
    name: "Kedarnath DoDham Tour Package",
    Price: 1000,
    No_of_days: "7 Nights / 8 Days",
    Starting: ["Delhi"],
    Destination: [
      "Haridwar",
      "Rishikesh",
      "Kedarnath",
      "Badrinath",
      "Guptkashi",
      "Sonprayag",
      "Pipalkoti",
    ],
    image1:
      "https://www.chardhamtours.in/gallery/cityImage/1462863909_vishwnath.jpg",
    image2:
      "https://devdhamyatra.com/wp-content/uploads/2022/11/kedar-guptkashi1.png",
    Itenerary: [
      {
        day: 1,
        loc: "Delhi to Haridwar Sightseeing",
        dist: "243",
        time: "6",
        desc: "On Arrival at Delhi Railway Station/Airport, Meet our representative, will pick up(Morning) drive to Haridwar. Check in hotels and sometimes rest and and get ready for visit Haridwar has a very rich, very old religious and cultural heritage. Sited in the foothills of the Himalayas, Haridwar is a tourist hot-spot. Haridwar you will see a great statue of Shiva at the fork of the River evening time visit to Ganga Arati, Har ki Puri. After sightseeing, back to the hotel. Dinner and overnight stay at a hotel in Haridwar.",
      },
      {
        day: 2,
        loc: "Haridwar – Guptkashi",
        dist: "220",
        time: "9",
        desc: "Morning meet our representative & Drive Straight To Guptkashi. You Can See The Beautiful River Mandakini At Tilwara. The Mandakini River Comes From Kedarnath, Drive Alongside The River To Reach Guptkashi. On Arrival Check In At The Hotel, Dinner and Overnight Stay At The Hotel.",
      },
      {
        day: 3,
        loc: "Guptkashi/ Sitapur – Sonprayag – Kedarnath",
        dist: "20",
        time: "0.5",
        desc: "Early morning after breakfast check out from the hotel and drive to Sonprayag. From where, you will start your 20 km trek to Kedarnath. You can hire a Doli or a horse, for your trek (Cost Not Included). Mandakini, one of the main tributaries of the Ganges originates at Kedarnath and flows through Gaurikund. Trudging with you are pilgrims chanting 'Jai Bholenath.' Sometimes the mist would envelop the mountains and slowly lift away, revealing a shiny blinding-white peak that threatens to rupture the skies.On arrival check in at Govt. Camps/Lodges. Overnight at Govt. Camps/Lodges (only basic accommodation is available on a sharing basis with only room basis, you can take a meal directly).",
      },
      {
        day: 4,
        loc: "Kedarnath – Sonprayag – Sitapur/ Guptkashi",
        dist: "20",
        time: "0.5",
        desc: "Early in the morning you get up before dawn and after taking a bath you are at the temple by 4:45 am for the 'Abhishek’ to Kedarnath Shiva. Everyone can go inside Garbha Griha and touch the idol. You can also prostate with your head touching the deity etc. After darshan and puja you come out of the temple and return to the Govt. Camps / Lodges. Later you'll start the return trek of 19 km from Kedarnath to Sonprayag. The vehicles wait for you in Sonprayag Car Parking and you’ll drive to your hotel/Camps. Dinner and Overnight at Guptkashi.",
      },
      {
        day: 5,
        loc: "Guptkashi – Badrinath",
        dist: "198",
        time: "8",
        desc: "This Morning, You Check out Of the Hotel, proceed to Badrinath Via Pipalkoti. After Driving Through Some Wonderful Ghat Road You Arrive at Govindghat. On Arrival Check Into the Hotel. (If time permits this Day) After Some Rest And Refreshments You Are All Set To Go To Badrinath Temple For Darshan In The Evening. But First You Have To Go To Tapt Kund (Hot Spring), Take Bath And Then Go To The Temple. Dedicated To Lord Vishnu, The Temple Of Shri Badrinath Ji Is 15 Meters In Height, Built In The Form Of A Cone With A Small Cupola Of A Gilt Bull And Spire. Later Back To Hotel. Dinner And Overnight Stay at Badrinath.",
      },
      {
        day: 6,
        loc: "Badrinath –Pipalkoti",
        dist: "160",
        time: "7",
        desc: "This morning, go for Badrinath Darshan. After Darshan proceeds for Badrinath local sightseeing visit Mana Village, Bheem Pul, Vyas Gufa, and Ganesh Gufa. Afternoon, drive back to Pipalkoti. On arrival check in at the hotel. Dinner and Overnight stay at Pipalkoti hotel.",
      },
      {
        day: 7,
        loc: "Pipalkoti – Rishikesh",
        dist: "198",
        time: "8",
        desc: "After Breakfast, Checkout from the hotel, then proceed back to Rishikesh. On Reach, Check in at the hotel, Dinner and overnight stay at the hotel.",
      },
      {
        day: 8,
        loc: "Rishikesh - Delhi Drop",
        dist: "260",
        time: "6",
        desc: "After Breakfast, Checkout from the hotel, visit Ram jhula, Laxman Jhula, Janki Setu, Parmarth Niketan then proceed for dropping, Drop at Delhi Railway Station/ Airport. Drop with sweet Memories.",
      },
    ],
  },

  //kerela
  {
    id: 26,
    name: "Kerela Tour Package",
    Price: 1000,
    No_of_days: "6 Nights / 7 Days",
    Starting: ["Cochin"],
    Destination: ["Munnar", "Thekkady", "Alleppey", "Kovalam", "Kanayakumari"],
    image1:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VyYWxhfGVufDB8fDB8fHww",
    image2:
      "https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.jpg?s=612x612&w=0&k=20&c=pYHem1q8SIdCC7t7pv3s6QM1ZrmU3nkCoSaEQMg8vqg=",
    Itenerary: [
      {
        day: 1,
        loc: "Arrival in Cochin – Transfer to Munnar",
        dist: "243",
        time: "6",
        desc: "Arrive at Cochin International Airport or Railway Station and begin your scenic drive to Munnar, a breathtaking hill station known for its lush tea plantations. En route, enjoy the mesmerizing views of Valara and Cheeyappara Waterfalls. Upon arrival, check in at the hotel and relax amidst the serene surroundings. Overnight stay in Munnar.",
      },
      {
        day: 2,
        loc: "Munnar Sightseeing",
        dist: "-",
        time: "-",
        desc: "After breakfast, visit Eravikulam National Park, home to the endangered Nilgiri Tahr and stunning landscapes. Explore Mattupetty Dam, Echo Point, and Kundala Lake, enjoying the picturesque views and serene atmosphere. Later, visit the Tea Museum to learn about the history and process of tea production. Return to the hotel for an overnight stay in Munnar.",
      },
      {
        day: 3,
        loc: "Munnar to Thekkady",
        dist: "86",
        time: "2.5",
        desc: "After breakfast, drive to Thekkady, enjoying the scenic route through lush greenery and spice plantations. Upon arrival, visit Periyar Wildlife Sanctuary, where you can opt for a boat ride on Periyar Lake to spot wildlife. Explore a spice plantation to learn about Kerala’s famous spices, and in the evening, enjoy cultural performances like Kathakali or Kalaripayattu. Overnight stay in Thekkady",
      },
      {
        day: 4,
        loc: "Thekkady to Alleppey (Houseboat Stay)",
        dist: "155",
        time: "3.5",
        desc: "After breakfast, drive to Alleppey, known for its serene backwaters. Check in to a luxury houseboat and embark on a scenic cruise through the tranquil backwaters, passing lush paddy fields and coconut groves. Enjoy traditional Kerala-style meals onboard while relaxing in the peaceful surroundings. Witness a stunning sunset over the backwaters before an overnight stay on the houseboat.",
      },
      {
        day: 5,
        loc: "Alleppey to Kovalam",
        dist: "155",
        time: "3.5",
        desc: "After breakfast, drive to Alleppey, known for its serene backwaters. Check in to a luxury houseboat and embark on a scenic cruise through the tranquil backwaters, passing lush paddy fields and coconut groves. Enjoy traditional Kerala-style meals onboard while relaxing in the peaceful surroundings. Witness a stunning sunset over the backwaters before an overnight stay on the houseboat.",
      },
      {
        day: 6,
        loc: "Kovalam – Kanyakumari Excursion (Optional)",
        dist: "77",
        time: "2",
        desc: "Optionally, take a day trip to Kanyakumari, the southernmost tip of India, where the Arabian Sea, Bay of Bengal, and Indian Ocean meet. Visit the iconic Vivekananda Rock Memorial and the towering Thiruvalluvar Statue. Enjoy the breathtaking ocean views before returning to Kovalam for a relaxing evening at the beach. Overnight stay in Kovalam.",
      },
      {
        day: 7,
        loc: "Departure from Trivandrum",
        dist: "-",
        time: "-",
        desc: "If time permits, visit the famous Padmanabhaswamy Temple, known for its stunning Dravidian architecture and rich history. Later, transfer to Trivandrum Airport/Railway Station for departure.",
      },
    ],
  },

  //Manali-Shimla
  {
    id: 27,
    name: "Shimla-Manali Tour Package",
    Price: 1000,
    No_of_days: "6 Nights / 7 Days",
    Starting: ["Delhi"],
    Destination: ["Manali", "Shimla", "Kullu"],
    image1: "https://seasontours.org/wp-content/uploads/2024/03/5-14.webp",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGmGQgKbyNlVJ0ecuJ0DInmIVfAFsViqKcQ&s",
    Itenerary: [
      {
        day: 1,
        loc: "Delhi - Manali",
        dist: "520",
        time: "12",
        desc: "After Reaching In Delhi Go To At 5:00 PM. At 5:30 PM Depart From Delhi To Manali. Travel By Overnight Volvo Bus From Delhi To Manali (12 - 14 Hours).(Manali Is Also Famous For Adventure Sports Like Skiing, Hiking, Mountaineering, Paragliding, Rafting, Trekking, Kayaking, And Mountain Biking. In Short, Manali-Is The 'Valley Of The Gods' And An Ideal Place For The Ones In Search Of Both Adventure And Comfort. Reach Manali Next Morning.",
      },
      {
        day: 2,
        loc: "Manali Arrival (Local sightseeing)",
        dist: "-",
        time: "-",
        desc: "On arrival at Manali, our representative assists to transfer you to the pre-booked hotel. Check in at the hotel, freshen up and enjoy leisure time at the comfort of your room. After Some time, enjoy the city tour visiting some of the prominent spots and attractions including Hadimba Devi Temple, Van Vihar, Mall Road, Tibetan Monastery. After enjoying an exciting tour of Manali city, return back by afternoon and enjoy your free will (reserved for leisure). Dinner and Overnight stay will be at the hotel in Manali.",
      },
      {
        day: 3,
        loc: "Manali - Full Day Trip To Solang Valley",
        dist: "-",
        time: "-",
        desc: "Enjoy The Morning Breakfast At The Hotel And Get Ready For An Excursion To Visit Solang Valley A Beautiful Picnic Spot. Nice Meadows Surrounded By Tree of Silver Oak and Spruce. Famous or International Skiing Slopes. Beautiful Panorama Of Snow, Enjoy Horse Riding And Paragliding.  Return Back to the Hotel on Time for Dinner and Overnight Stay.",
      },
      {
        day: 4,
        loc: "Manali (Full Day Trip to Kullu & Naggar Castle)",
        dist: "-",
        time: "-",
        desc: "Enjoy the morning breakfast at the hotel and later get ready for an excursion to Kullu town Rafting in the Beas River,Vaishno devi Temple &  famous Kullu Shawl Industry & Naggar Castle.  Drive back to Manali. Dinner & overnight stay at the Hotel in Manali.",
      },
      {
        day: 5,
        loc: "Manali – Shimla",
        dist: "280",
        time: "7",
        desc: "After breakfast Check out from Manali Hotel & Transfer by Deluxe Bus from Manali to Shimla by 8:00 A.M. Arrive in Shimla by Evening and check in at the hotel. Free for leisure. Dinner and overnight at Shimla.",
      },
      {
        day: 6,
        loc: "Shimla – Local &  Kufri Sightseeing - Volvo Drop",
        dist: "-",
        time: "-",
        desc: "After breakfast checkout from hotel & proceed for shimla sightseeing, visit to half day city tour visiting Sankat Mochan Temple, Jakhu Temple (by Own) and Mall road, Afternoon visit excursion tour of Kufri Sightseeing : Green Valley, Kufri, Mini Zoo, Fagu Valley. Evening Drop at Volvo point at 5/6:00 P.m. for overnight journey to Delhi.",
      },
      {
        day: 7,
        loc: "Delhi Drop",
        dist: "-",
        time: "-",
        desc: "Morning around 7-8 a.m. reach Delhi & proceed for onward destination.",
      },
    ],
  },

  //Manali
  {
    id: 28,
    name: "Manali Tour Package",
    Price: 1000,
    No_of_days: "4 Nights / 5 Days",
    Starting: ["Delhi"],
    Destination: ["Manali"],
    image1:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/b2/79/37/solang-valley-manali.jpg?w=1200&h=-1&s=1",
    image2:
      "https://oneday.travel/wp-content/uploads/one-day-manali-to-rohtang-pass-sightseeing-tour-package-private-cab-header-1568x1045.jpg",
    Itenerary: [
      {
        day: 1,
        loc: "Delhi to Manali",
        dist: "520",
        time: "12",
        desc: "Depart from Delhi in the evening by AC Volvo Bus (between 7:00-10:00 PM) for an overnight journey to Manali, covering approximately 12-14 hours.",
      },
      {
        day: 2,
        loc: "Arrival in Manali & Local Sightseeing",
        dist: "-",
        time: "-",
        desc: "Arrive in Manali in the morning and check in at the hotel. After freshening up, visit Hadimba Devi Temple, an ancient wooden temple, followed by Vashisht Hot Water Springs & Temple. Explore the Tibetan Monastery and Handicraft Market, then enjoy a peaceful evening stroll at Mall Road and Van Vihar. Dinner and overnight stay in Manali.",
      },
      {
        day: 3,
        loc: "Solang Valley / Rohtang Pass Excursion",
        dist: "15",
        time: "0.5",
        desc: "After breakfast, head to Solang Valley for an adventurous day. Enjoy snow activities like skiing, snowboarding, and tube sliding (seasonal). Experience paragliding, zorbing, and a ropeway ride (optional). Optionally, visit Rohtang Pass (permit required, extra charges apply). Return to Manali in the evening. Dinner and overnight stay in Manali.",
      },
      {
        day: 4,
        loc: "Kullu / Volvo stand",
        dist: "40",
        time: "1",
        desc: "After breakfast, head towards Kullu and Manikaran. Enjoy optional river rafting in the Beas River for an adrenaline rush. Visit Manikaran Sahib Gurudwara, known for its natural hot springs and spiritual significance. Explore Kasol, a picturesque village in Parvati Valley, popular among backpackers. In the evening, board the Volvo Bus for an overnight journey back to Delhi.",
      },
      {
        day: 5,
        loc: "Arrival in Delhi",
        dist: "-",
        time: "-",
        desc: "Early morning arrival in Delhi.Tour ends with beautiful memories.",
      },
    ],
  },

  // Mumbai
  {
    id: 29,
    name: "Mumbai Tour Package",
    Price: 1000,
    No_of_days: "3 Nights / 4 Days",
    Starting: ["Mumbai"],
    Destination: ["Mumbai", "Elephanta Caves", "Lonavala"],
    image1:
      "https://www.holidaymonk.com/wp-content/uploads/2022/04/Gateway-Of-India-MUMBAI.jpg",
    image2:
      "https://media.istockphoto.com/id/860528756/photo/the-bandraworli-sea-link-mumbai-india.jpg?s=612x612&w=0&k=20&c=xT9TK7oYkP6TP62lHqP0H-9mfz9cWva4OcYEnt06cjc=",
    Itenerary: [
      {
        day: 1,
        loc: "Arrival & Mumbai City Tour",
        dist: "-",
        time: "-",
        desc: "Pick-up from Mumbai Airport or Railway Station, followed by a visit to the iconic Gateway of India and the majestic Taj Mahal Palace. Explore Chhatrapati Shivaji Terminus (CST), a UNESCO World Heritage Site, before heading to Marine Drive and Chowpatty Beach for a scenic evening. Visit the famous Haji Ali Dargah, a stunning floating mosque, and indulge in shopping at Colaba Causeway. Overnight stay in Mumbai.",
      },
      {
        day: 2,
        loc: "Elephanta Caves & South Mumbai Sightseeing",
        dist: "-",
        time: "-",
        desc: "Start the day with a morning ferry ride to Elephanta Caves, a UNESCO World Heritage Site, and explore the ancient rock-cut temples and intricate Shiva sculptures. Return to Mumbai and visit the Prince of Wales Museum, followed by a spiritual stop at Siddhivinayak Temple and Mahalakshmi Temple. Witness a stunning sunset at Bandra-Worli Sea Link before spending a relaxing evening at Juhu Beach, indulging in Mumbai's famous street food like Vada Pav and Pav Bhaji. Overnight stay in Mumbai.",
      },
      {
        day: 3,
        loc: "Bollywood & Bandra Sightseeing",
        dist: "-",
        time: "-",
        desc: "Begin the day with an optional Bollywood Film City Tour for a behind-the-scenes look at the Indian film industry. Explore Bandra Bandstand and catch glimpses of Bollywood celebrities’ homes, including Mannat and Galaxy Apartments. Visit Dhobi Ghat, the world’s largest open-air laundry, before indulging in some retail therapy at Fashion Street or Linking Road. In the evening, unwind with Mumbai’s vibrant nightlife, either at Marine Drive or a famous rooftop restaurant. Overnight stay in Mumbai.",
      },
      {
        day: 4,
        loc: "Departure",
        dist: "-",
        time: "-",
        desc: "After breakfast, check out from the hotel. If time permits, visit the ISKCON Temple for a spiritual experience or explore the serene Hanging Gardens. Later, proceed for drop-off at Mumbai Airport or Railway Station for departure.",
      },
    ],
  },

  //Mussoorie Dehardun Nainital Jim Corbettt
  {
    id: 30,
    name: "Mussoorie Dehradun Nainital Jim Corbett Tour Package",
    Price: 1000,
    No_of_days: "6 Nights / 7 Days",
    Starting: ["Haridwar"],
    Destination: ["Dehradun", "Nainital", "Mussoorie", "Jim Corbett"],
    image1:
      "https://www.naturetravelagency.com/uploads/1711105196best%20time%20to%20visit%20Nainita.jpg",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdI3CGEgBn_lHVvmekR_JeGJniwD2Ahb6xsQ&s",
    Itenerary: [
      {
        day: 1,
        loc: "Haridwar to Mussoorie",
        dist: "180",
        time: "6",
        desc: "Upon arrival at Haridwar Railway Station or Bus Stand in the morning, embark on a scenic drive to Mussoorie, the 'Queen of Hills.' En route, visit Dehradun’s famous attractions, including Robber’s Cave (Guchhupani) and Tapkeshwar Temple. Upon reaching Mussoorie, check in at the hotel and relax. In the evening, take a leisurely walk along Mall Road and explore the local markets. Enjoy an overnight stay in Mussoorie.",
      },
      {
        day: 2,
        loc: "Mussoorie Sightseeing",
        dist: "-",
        time: "-",
        desc: "After breakfast, set out to explore Mussoorie’s top attractions. Visit Kempty Falls, a picturesque waterfall and popular picnic spot. Enjoy a ropeway ride to Gun Hill for breathtaking views of the surrounding hills. Head to Lal Tibba, the highest point in Mussoorie, offering stunning panoramas. Stroll through the beautifully landscaped Company Garden, where you can also enjoy boating. End the day with a peaceful walk along Camel’s Back Road, known for its serene ambiance. Return to the hotel for an overnight stay in Mussoorie.",
      },
      {
        day: 3,
        loc: "Mussoorie to Dehradun",
        dist: "35",
        time: "1",
        desc: "After breakfast, check out from the hotel and drive to Dehradun. Begin your exploration with a visit to the historic and grand Forest Research Institute (FRI), known for its impressive architecture and lush green surroundings. Next, visit the Mindrolling Monastery, a renowned Buddhist temple offering a peaceful ambiance. Continue to Sahastradhara, a picturesque sulfur water spring known for its therapeutic properties. Spend the evening at leisure, exploring the city at your own pace. Enjoy an overnight stay in Dehradun.",
      },
      {
        day: 4,
        loc: "Dehradun to Nainital",
        dist: "290",
        time: "7",
        desc: "After breakfast, check out from the hotel and drive to Nainital, the 'Lake District of India.' Upon arrival, check in at the hotel and relax. Later, enjoy a serene boat ride on Naini Lake and seek blessings at the Naina Devi Temple, a revered Hindu shrine. In the evening, take a leisurely walk along Mall Road and explore the vibrant Tibetan Market for local handicrafts and souvenirs. Return to the hotel for an overnight stay in Nainital.",
      },
      {
        day: 5,
        loc: "Nainital Sightseeing",
        dist: "-",
        time: "-",
        desc: "After breakfast, set out to explore Nainital’s top attractions. Take a ropeway ride to Snow View Point for breathtaking Himalayan views. Visit Tiffin Top, a scenic viewpoint offering panoramic vistas of the town and surrounding hills. Explore the picturesque lakes of Bhimtal, Sattal, and Naukuchiatal, each known for their tranquil beauty and boating options. Discover the Eco Cave Gardens, a fascinating network of natural caves and tunnels. Spend the evening at leisure, soaking in the charm of Nainital. Return to the hotel for an overnight stay in Nainital.",
      },
      {
        day: 6,
        loc: "Nainital to Jim Corbett",
        dist: "150",
        time: "3",
        desc: "After breakfast, check out and proceed to Jim Corbett National Park, known for its rich wildlife and scenic landscapes. Upon arrival, check in at a wildlife resort and relax. Later, visit the Garjia Devi Temple, a revered riverside temple, and explore the Corbett Museum, which showcases the legacy of Jim Corbett and the park’s history. In the evening, opt for an exciting jungle safari (advance booking required) to spot diverse wildlife. Return to the resort for an overnight stay in Jim Corbett.",
      },
      {
        day: 7,
        loc: "Jim Corbett Safari – Return to Haridwar",
        dist: "250",
        time: "6",
        desc: "Early in the morning, embark on an exhilarating Jeep Safari in Corbett National Park (advance booking required) to witness the diverse wildlife in their natural habitat. After breakfast, check out from the resort and drive back to Haridwar. Upon arrival, proceed to Haridwar Railway Station/Bus Stand for departure, concluding a memorable trip.",
      },
    ],
  },

  //Nainital-Jim Corbett
  {
    id: 31,
    name: "Nainital Jim Corbett Tour Package",
    Price: 1000,
    No_of_days: "3 Nights / 4 Days",
    Starting: ["Haridwar"],
    Destination: ["Nainital", "Jim Corbett"],
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdI3CGEgBn_lHVvmekR_JeGJniwD2Ahb6xsQ&s",
    image2:
      "https://www.naturetravelagency.com/uploads/1711105196best%20time%20to%20visit%20Nainita.jpg",
    Itenerary: [
      {
        day: 1,
        loc: "Haridwar to Jim Corbett",
        dist: "250",
        time: "6",
        desc: "Upon arrival at Haridwar Railway Station/Bus Stand in the morning, embark on a scenic drive to Jim Corbett National Park. Check in at a wildlife resort and relax. Later, visit the Garjia Devi Temple, a revered shrine situated on the Kosi River, followed by the Corbett Museum, which showcases the life and legacy of Jim Corbett. Spend the evening at leisure, enjoying a peaceful nature walk near the resort. Return for an overnight stay in Jim Corbett.",
      },
      {
        day: 2,
        loc: "Jim Corbett Safari – Transfer to Nainital",
        dist: "150",
        time: "2.5",
        desc: "Start the day with an early morning Jeep Safari in Corbett National Park (advance booking required) to experience the rich wildlife and natural beauty of the park. Return to the resort for breakfast, then check out and proceed to Nainital, the 'Lake District of India.' Upon arrival, check in at the hotel and relax. Later, enjoy a boat ride on Naini Lake and visit the sacred Naina Devi Temple. In the evening, take a leisurely walk along Mall Road and explore the Tibetan Market for local handicrafts and souvenirs. Return to the hotel for an overnight stay in Nainital.",
      },
      {
        day: 3,
        loc: "Nainital Local Sightseeing",
        dist: "-",
        time: "-",
        desc: "After breakfast, set out to explore the scenic beauty of Nainital. Take a ropeway ride to Snow View Point for breathtaking Himalayan views. Visit Tiffin Top, a famous viewpoint ideal for sunrise and sunset photography. Explore the picturesque lakes of Bhimtal, Sattal, and Naukuchiatal, each offering serene landscapes and boating opportunities. Discover the Eco Cave Gardens, a fascinating network of natural caves. In the evening, enjoy leisure time for shopping or take a peaceful walk along the lake. Return to the hotel for an overnight stay in Nainital.",
      },
      {
        day: 4,
        loc: "Nainital to Haridwar",
        dist: "290",
        time: "7",
        desc: "After breakfast, check out and drive back to Haridwar.Drop-off at Haridwar Railway Station/Bus Stand for departure.",
      },
    ],
  },

  //Rajasthan
  {
    id: 32,
    name: "Rajasthan Tour Package",
    Price: 1000,
    No_of_days: "6 Nights / 7 Days",
    Starting: ["Jaipur"],
    Destination: ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer"],
    image1:
      "https://s7ap1.scene7.com/is/image/incredibleindia/2-mehrangarh-fort-jodhpur-rajasthan-city-hero?qlt=82&ts=1726660925514",
    image2:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Thar_Khuri.jpg/1200px-Thar_Khuri.jpg",
    Itenerary: [
      {
        day: 1,
        loc: "Arrival in Jaipur – The Pink City",
        dist: "-",
        time: "-",
        desc: "Upon arrival at Jaipur Airport/Railway Station, get picked up and transferred to the hotel for check-in and freshening up. Begin your Jaipur sightseeing with a visit to the magnificent Amber Fort, where you can enjoy an elephant ride to the fort entrance. Stop by the picturesque Jal Mahal for a photo session before exploring the grand City Palace & Museum, showcasing Jaipur’s royal heritage. Visit Jantar Mantar, an astronomical observatory with impressive instruments, and take another photo stop at the iconic Hawa Mahal. Return to the hotel for an overnight stay in Jaipur.",
      },
      {
        day: 2,
        loc: "Jaipur – Jodhpur",
        dist: "330",
        time: "7",
        desc: "After enjoying breakfast at the hotel, embark on a scenic drive to Jodhpur, the 'Blue City.' Upon arrival, check in at the hotel and relax. Begin your Jodhpur sightseeing with a visit to the majestic Mehrangarh Fort, offering breathtaking views of the city. Explore the serene Jaswant Thada, a beautiful marble cenotaph built in memory of Maharaja Jaswant Singh II. Conclude the day with a visit to the opulent Umaid Bhawan Palace, a stunning heritage hotel and museum showcasing royal artifacts. Return to the hotel for an overnight stay in Jodhpur.",
      },
      {
        day: 3,
        loc: "Jodhpur – Jaisalmer",
        dist: "280",
        time: "6",
        desc: "After breakfast at the hotel, proceed on a scenic drive to Jaisalmer, the 'Golden City.' Upon arrival, check in at the hotel and relax. Begin exploring Jaisalmer with a visit to the magnificent Jaisalmer Fort, a UNESCO World Heritage Site known for its golden sandstone architecture. Discover the intricate carvings of Patwon Ki Haveli and Nathmal Ki Haveli, showcasing the city’s rich heritage. Conclude the day with a peaceful visit to Gadisar Lake, a historic reservoir surrounded by temples and ghats. Return to the hotel for an overnight stay in Jaisalmer.",
      },
      {
        day: 4,
        loc: "Jaisalmer – Desert Safari & Camping",
        dist: "-",
        time: "-",
        desc: "After breakfast at the hotel, visit the abandoned Kuldhara Village, known for its haunting legends, and explore Bada Bagh, famous for its royal cenotaphs. Later, head to the Sam Sand Dunes for an exciting desert experience, including a camel safari and jeep safari across the golden dunes. Witness a mesmerizing sunset over the Thar Desert, followed by an evening of Rajasthani cultural folk dance and music with a traditional dinner. Enjoy a unique overnight stay in a desert camp under the starlit sky.",
      },
      {
        day: 5,
        loc: "Jaisalmer – Udaipur",
        dist: "490",
        time: "9",
        desc: "After breakfast at the camp, embark on a scenic drive to Udaipur, stopping en route to visit the stunning Ranakpur Jain Temples, renowned for their intricate marble architecture. Upon arrival in Udaipur, check in at the hotel and relax. Enjoy the rest of the day at leisure, soaking in the city's serene ambiance. Return to the hotel for an overnight stay in Udaipur.",
      },
      {
        day: 6,
        loc: "Udaipur Sightseeing",
        dist: "-",
        time: "-",
        desc: "After breakfast at the hotel, explore the royal charm of Udaipur with a visit to the majestic City Palace & Museum, showcasing grand architecture and historical artifacts. Enjoy a serene boat ride on Lake Pichola, offering breathtaking views of the Lake Palace and Jag Mandir. Continue to the picturesque Fateh Sagar Lake, known for its tranquil waters and scenic surroundings. Visit Saheliyon Ki Bari, a beautiful garden adorned with fountains and lotus pools. Conclude the day with an overnight stay in Udaipur.",
      },
      {
        day: 7,
        loc: "Udaipur – Jaipur and departure",
        dist: "400",
        time: "8",
        desc: "After breakfast at the hotel, embark on a drive back to Jaipur. Upon arrival, get dropped off at Jaipur Airport/Railway Station for your onward journey. Tour ends with beautiful memories of Rajasthan’s rich heritage, stunning landscapes, and vibrant culture.",
      },
    ],
  },

  //Rameshwaram-Madurai
  {
    id: 33,
    name: "Rameshwaram-Madurai Tour Package",
    Price: 1000,
    No_of_days: "4 Nights / 5 Days",
    Starting: ["Madurai"],
    Destination: ["Madurai", "Rameshwaram", "Kanyakumari"],
    image1:
      "https://www.tamilnadutravels.in/images/place/Kanyakumari_%20Sightseeing%20&%20Departure.webp",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCi7t8hSC2bQZJEkGSGdxsjbDmxq7GoZnW-w&s",
    Itenerary: [
      {
        day: 1,
        loc: "Arrival in Madurai and Sightseeing",
        dist: "-",
        time: "-",
        desc: "Upon arrival at Madurai Airport/Railway Station, get picked up and transferred to the hotel for check-in and freshening up. Begin your Madurai sightseeing with a visit to the iconic Meenakshi Amman Temple, one of South India's most revered temples. Explore the grand Thirumalai Nayakkar Palace, known for its stunning architecture. Visit Alagar Kovil and Pazhamudircholai Murugan Temple, sacred sites nestled in the hills. Optionally, explore the Gandhi Memorial Museum to learn about India's freedom struggle. Spend the evening shopping at Madurai Markets before returning to the hotel for an overnight stay in Madurai.",
      },
      {
        day: 2,
        loc: "Madurai to Rameshwaram",
        dist: "170",
        time: "4",
        desc: "After breakfast, check out and proceed to Rameshwaram, enjoying a scenic drive across the iconic Pamban Bridge, India’s first sea bridge. Upon arrival, check in at the hotel and relax. Begin your sightseeing with a visit to the revered Ramanathaswamy Temple, one of the Char Dham pilgrimage sites, known for its long corridors and sacred significance. Take a holy dip at Agnitheertham, a sacred sea bath spot near the temple. Explore the Panch Mukhi Hanuman Temple and witness the mystical floating stones believed to be part of the Ram Setu. Return to the hotel for an overnight stay in Rameshwaram.",
      },
      {
        day: 3,
        loc: "Rameshwaram Sightseeing",
        dist: "-",
        time: "-",
        desc: "Start the day with an early morning Spatika Linga Darshan at the Ramanathaswamy Temple, a spiritually significant ritual. After breakfast, visit Dhanushkodi, the mysterious ghost town and Rama Setu viewpoint, offering breathtaking ocean views. Explore the Kothandaramaswamy Temple, believed to be connected to the Ramayana. Pay tribute at the APJ Abdul Kalam Memorial, dedicated to India's beloved former President. Visit Villoondi Theertham, a sacred freshwater spring associated with Lord Rama. Spend the evening at leisure, soaking in the serene ambiance before returning to the hotel for an overnight stay in Rameshwaram.",
      },
      {
        day: 4,
        loc: "Rameshwaram to Kanyakumari",
        dist: "310",
        time: "6",
        desc: "After breakfast, check out and proceed to Kanyakumari, the southernmost tip of India. Upon arrival, check in at the hotel and relax. Begin sightseeing with a visit to the Vivekananda Rock Memorial, a serene spiritual site offering panoramic ocean views. Admire the towering Thiruvalluvar Statue, dedicated to the great Tamil poet. Seek blessings at the Kanyakumari Temple, devoted to Goddess Kanyakumari. Explore the Gandhi Memorial, marking the spot where Mahatma Gandhi's ashes were kept before immersion. End the day at Sunset Point, witnessing a mesmerizing sunset over the confluence of three seas. Return to the hotel for an overnight stay in Kanyakumari.",
      },
      {
        day: 5,
        loc: "Kanyakumari to Madurai and departure",
        dist: "250",
        time: "5",
        desc: "Start the day with a breathtaking early morning sunrise at the Kanyakumari beach, where the Arabian Sea, Bay of Bengal, and Indian Ocean meet. After breakfast, visit the Suchindram Temple (if time permits), known for its towering gopuram and musical pillars. Later, embark on a drive back to Madurai for drop-off at the Airport/Railway Station, concluding the trip with wonderful memories.",
      },
    ],
  },

  //Rameshwram
  {
    id: 34,
    name: "Rameshwaram Tour Package (Ex-Madurai)",
    Price: 1000,
    No_of_days: "3 Nights / 4 Days",
    Starting: ["Madurai"],
    Destination: ["Madurai", "Rameshwaram"],
    image1:
      "https://img.traveltriangle.com/apac//attachments/pictures/893408/original/Ramanathaswamy-temple_-Rameswaram-Beach-Gate-view-from-arabian-sea.png",
    image2:
      "https://www.tourmyindia.com/states/tamilnadu/images/rameshwaram-temple1-1.jpg",
    Itenerary: [
      {
        day: 1,
        loc: "Arrival in Madurai & Sightseeing",
        dist: "-",
        time: "-",
        desc: "Upon arrival at Madurai Airport/Railway Station, get picked up and transferred to the hotel for check-in and freshening up. Begin your Madurai exploration with a visit to the iconic Meenakshi Amman Temple, known for its stunning Dravidian architecture. Explore the magnificent Thirumalai Nayakkar Palace, a historic marvel showcasing Indo-Saracenic style. Visit the sacred Alagar Kovil and Pazhamudircholai Murugan Temple, nestled amidst scenic hills. Optionally, explore the Gandhi Memorial Museum to learn about India's freedom struggle. Spend the evening shopping at Madurai Markets before returning to the hotel for an overnight stay in Madurai.",
      },
      {
        day: 2,
        loc: "Madurai to Rameshwaram",
        dist: "170",
        time: "4",
        desc: "After breakfast, check out and proceed to Rameshwaram, enjoying a scenic drive across the iconic Pamban Bridge, India’s first sea bridge. Upon arrival, check in at the hotel and relax. Begin sightseeing with a visit to the revered Ramanathaswamy Temple, one of the Char Dham pilgrimage sites, known for its grand corridors and sacred significance. Take a holy dip at Agnitheertham, a sacred sea bath spot near the temple. Explore the Panch Mukhi Hanuman Temple and witness the mystical floating stones believed to be part of the Ram Setu. Return to the hotel for an overnight stay in Rameshwaram.",
      },
      {
        day: 3,
        loc: "Rameshwaram Sightseeing",
        dist: "-",
        time: "-",
        desc: "Begin the day with an early morning Spatika Linga Darshan at Ramanathaswamy Temple, a spiritually significant ritual. After breakfast, visit Dhanushkodi, the mysterious ghost town and Rama Setu viewpoint, offering breathtaking ocean views. Explore the Kothandaramaswamy Temple, believed to be the place where Vibhishana surrendered to Lord Rama. Pay tribute at the APJ Abdul Kalam Memorial, honoring India’s former President. Visit Villoondi Theertham, a sacred freshwater spring associated with Lord Rama. Spend the evening at leisure, soaking in the peaceful ambiance before returning to the hotel for an overnight stay in Rameshwaram.",
      },
      {
        day: 4,
        loc: "Departure from Rameshwaram to Madurai",
        dist: "170",
        time: "4",
        desc: "After breakfast, check out and return to Madurai (or as per your departure schedule).Drop-off at Madurai Airport / Railway Station for onward journey.",
      },
    ],
  },
];

export default data;
