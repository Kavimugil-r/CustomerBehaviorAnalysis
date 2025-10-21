// Application Data Structure (replacing MySQL database)
const appData = {
  // Users data
  users: [
    {
      user_id: 1,
      username: "admin",
      email: "admin@customer.com",
      password_hash: "password", // In a real app, this would be a proper hash
      role: "admin",
      created_at: "2023-01-01 12:00:00"
    },
    {
      user_id: 2,
      username: "user1",
      email: "user1@customer.com",
      password_hash: "password",
      role: "customer",
      created_at: "2023-01-02 12:00:00"
    }
  ],
  
  // Product items data
  product_items: [
    {
      product_id: 1,
      name: "Wireless Bluetooth Headphones",
      description: "<ul><li>Premium wireless headphones with active noise cancellation technology</li><li>30-hour battery life for extended use</li><li>Comfortable over-ear design with foldable construction</li><li>Bluetooth 5.0 connectivity for stable connection</li><li>Built-in microphone for hands-free calling</li><li>Crystal-clear sound with deep bass and crisp highs</li></ul>",
      price: 5809.17,
      image_url: "assets/images/headphones1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.5
    },
    {
      product_id: 2,
      name: "Smart Fitness Tracker",
      description: "<ul><li>Advanced wearable fitness device tracking steps, heart rate, sleep patterns, and calories</li><li>Vibrant color touchscreen display with intuitive interface</li><li>Waterproof design for swimming and water activities</li><li>Smartphone notifications for calls, texts, and apps</li><li>24/7 heart rate monitoring and multiple sports modes</li><li>Personalized fitness coaching and 7-day battery life</li></ul>",
      price: 4149.17,
      image_url: "assets/images/fitnesstracker1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.3
    },
    {
      product_id: 3,
      name: "Portable Phone Charger",
      description: "<ul><li>High-capacity 10000mAh power bank with fast charging technology</li><li>Compatible with all major smartphone brands including iPhone and Samsung</li><li>Dual USB ports for charging two devices simultaneously</li><li>LED indicator lights to show remaining battery level</li><li>Built-in safety protection against overcharging and overheating</li><li>Compact and lightweight design with durable aluminum casing</li></ul>",
      price: 2489.17,
      image_url: "assets/images/powerbank1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.2
    },
    {
      product_id: 4,
      name: "Wireless Gaming Mouse",
      description: "<ul><li>Ergonomic wireless gaming mouse for precision and comfort</li><li>Customizable RGB lighting with 16.8 million color options</li><li>Ultra-responsive optical sensor with 16000 DPI sensitivity</li><li>7 programmable buttons for custom configurations</li><li>Adjustable weights for personalized feel and balance</li><li>Low latency wireless connectivity and 50-hour battery life</li></ul>",
      price: 3319.17,
      image_url: "assets/images/gamingmouse1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.7
    },
    {
      product_id: 5,
      name: "Bluetooth Speaker",
      description: "<ul><li>360-degree surround sound with waterproof IPX7 rating</li><li>Powerful, room-filling audio with deep bass and clear treble</li><li>12-hour playtime on a single charge</li><li>Built-in microphone for hands-free calls</li><li>Intuitive touch controls for easy operation</li><li>Compact and portable design with rugged construction</li></ul>",
      price: 4979.17,
      image_url: "assets/images/bluetoothspeaker1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.4
    },
    {
      product_id: 6,
      name: "Smart Home Security Camera",
      description: "<ul><li>1080p Full HD indoor security camera with night vision</li><li>Advanced motion detection with instant phone alerts</li><li>Two-way audio communication via built-in speaker and microphone</li><li>Smartphone app control for remote monitoring</li><li>Cloud storage options for recorded footage</li><li>Easy DIY installation with magnetic base</li></ul>",
      price: 6639.17,
      image_url: "assets/images/securitycamera1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.1
    },
    {
      product_id: 7,
      name: "Wireless Keyboard",
      description: "<ul><li>Slim and quiet wireless keyboard with scissor-switch keys</li><li>Up to 24 months battery life for long-term use</li><li>Reliable 2.4GHz wireless connectivity with USB receiver</li><li>Ergonomic design to reduce wrist strain during typing</li><li>Spill-resistant construction for accidental liquid protection</li><li>Compatible with Windows and Mac operating systems</li></ul>",
      price: 2904.17,
      image_url: "assets/images/wirelesskeyboard1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.0
    },
    {
      product_id: 8,
      name: "Tablet Stand",
      description: "<ul><li>Adjustable premium aluminum tablet stand with 360-degree rotation</li><li>Sturdy construction with non-slip silicone pads for device security</li><li>Adjustable height and tilt settings for optimal viewing angles</li><li>Compact and foldable design for easy storage and portability</li><li>Compatible with iPads, Android tablets, and devices up to 12 inches</li><li>Perfect for reading, watching, or video calling</li></ul>",
      price: 2074.17,
      image_url: "assets/images/tabletstand1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.3
    },
    {
      product_id: 9,
      name: "USB-C Hub Adapter",
      description: "<ul><li>Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader</li><li>4K HDMI output for high-resolution display support</li><li>3 high-speed USB 3.0 ports for multiple device connections</li><li>SD/TF card slots for memory card compatibility</li><li>USB-C power delivery for device charging</li><li>Compact aluminum design with efficient heat dissipation</li></ul>",
      price: 3319.17,
      image_url: "assets/images/usbhub1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.5
    },
    {
      product_id: 10,
      name: "Smart LED Bulbs",
      description: "<ul><li>Color-changing smart LED bulbs with app control</li><li>16 million colors with customizable lighting scenes</li><li>Adjustable brightness from 10% to 100% dimming</li><li>Compatibility with Alexa and Google Home voice assistants</li><li>Energy-efficient LED technology using 85% less energy</li><li>Easy screw-in installation with standard E26 base</li></ul>",
      price: 1659.17,
      image_url: "assets/images/smartbulb1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.2
    },
    {
      product_id: 11,
      name: "Laptop Cooling Pad",
      description: "<ul><li>Adjustable height laptop cooling pad with dual silent fans</li><li>Ergonomic design to prevent laptop overheating during intensive use</li><li>Three adjustable height settings for optimal typing comfort</li><li>Built-in fan speed control for customized cooling</li><li>USB powered operation for convenience</li><li>Compatible with laptops up to 17 inches</li></ul>",
      price: 2489.17,
      image_url: "assets/images/coolingpad1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.1
    },
    {
      product_id: 12,
      name: "Wireless Earbuds",
      description: "<ul><li>True wireless earbuds with compact charging case</li><li>Bluetooth 5.2 connectivity for stable connection</li><li>6-hour battery life per charge with 18-hour case backup</li><li>IPX5 water resistance for sweat and light rain</li><li>Intuitive touch controls for music and calls</li><li>Built-in microphone for clear calls and voice assistant access</li></ul>",
      price: 4564.17,
      image_url: "assets/images/wirelessearbuds1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.6
    },
    {
      product_id: 13,
      name: "External Hard Drive",
      description: "<ul><li>1TB portable external hard drive with USB 3.0 interface</li><li>Shock-resistant design for secure data storage and backup</li><li>Automatic backup software for effortless protection</li><li>Password protection and hardware encryption for security</li><li>Transfer speeds up to 5 Gbps for fast file transfers</li><li>Plug and play compatibility with Windows and Mac systems</li></ul>",
      price: 4979.17,
      image_url: "assets/images/externalharddrive1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.4
    },
    {
      product_id: 14,
      name: "Smartphone Gimbal",
      description: "<ul><li>Professional 3-axis smartphone stabilizer with smooth motor technology</li><li>360-degree rotation for versatile shooting angles</li><li>Intelligent tracking and multiple shooting modes</li><li>Compatible with smartphones up to 3.34 inches wide</li><li>Built-in rechargeable battery with USB-C charging</li><li>Includes smartphone holder and carrying pouch</li></ul>",
      price: 7469.17,
      image_url: "assets/images/smartphonegimbal1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.3
    },
    {
      product_id: 15,
      name: "Wireless Charging Pad",
      description: "<ul><li>Fast wireless charging pad compatible with all Qi-enabled devices</li><li>10W fast charging for compatible smartphones</li><li>Foreign object detection for safety protection</li><li>LED indicator lights for charging status</li><li>Non-slip silicone surface keeps device in place</li><li>Works with iPhone, Samsung Galaxy, and other Qi-enabled devices</li></ul>",
      price: 2074.17,
      image_url: "assets/images/wirelesscharger1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.0
    },
    {
      product_id: 16,
      name: "Bluetooth Car Kit",
      description: "<ul><li>Hands-free Bluetooth car kit with FM transmitter</li><li>Dual USB ports for safe driving and device charging</li><li>Bluetooth 5.0 connectivity with 33ft range</li><li>Built-in microphone for crystal-clear calls</li><li>Support for music streaming from your devices</li><li>OLED display showing song information and caller ID</li></ul>",
      price: 2904.17,
      image_url: "assets/images/bluetoothcarkit1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.1
    },
    {
      product_id: 17,
      name: "Smart Doorbell",
      description: "<ul><li>WiFi-enabled HD video doorbell with 1080p camera</li><li>Night vision capability for 24/7 monitoring</li><li>Motion detection with customizable zones</li><li>Two-way audio communication via smartphone app</li><li>Cloud storage options for recorded footage</li><li>Weather-resistant design for year-round reliability</li></ul>",
      price: 10799.17,
      image_url: "assets/images/smartdoorbell1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.2
    },
    {
      product_id: 18,
      name: "Noise Cancelling Earbuds",
      description: "<ul><li>Premium active noise cancelling earbuds technology</li><li>24-hour battery life for immersive listening experiences</li><li>Adaptive EQ for personalized sound profile</li><li>IPX4 water resistance for protection against splashes</li><li>Touch controls for music and calls management</li><li>Wireless charging case with Qi compatibility</li></ul>",
      price: 12449.17,
      image_url: "assets/images/noisecancelingearbuds1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.8
    },
    {
      product_id: 19,
      name: "Smart Watch",
      description: "<ul><li>Feature-rich smartwatch with comprehensive fitness tracking</li><li>24/7 heart rate monitoring and sleep pattern analysis</li><li>Customizable watch faces for Android and iOS devices</li><li>Tracks steps, distance, calories, and 15+ workout modes</li><li>GPS for accurate outdoor activity tracking</li><li>Water-resistant up to 50 meters with 7-day battery life</li></ul>",
      price: 16649.17,
      image_url: "assets/images/smartwatch1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.6
    },
    {
      product_id: 20,
      name: "Wireless Router",
      description: "<ul><li>High-speed WiFi 6 router with extended coverage</li><li>Dual-band connectivity with speeds up to 3000 Mbps</li><li>Four external antennas for optimal signal strength</li><li>MU-MIMO technology for multiple device support</li><li>Parental controls and guest network access</li><li>Easy setup with mobile app and web interface</li></ul>",
      price: 10799.17,
      image_url: "assets/images/wirelessrouter1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.3
    },
    {
      product_id: 21,
      name: "Gaming Keyboard",
      description: "<ul><li>Professional mechanical gaming keyboard with customizable RGB</li><li>Cherry MX Red switches for tactile feedback</li><li>Programmable macro keys and anti-ghosting technology</li><li>Dedicated media controls for convenience</li><li>N-key rollover for accurate key registration</li><li>Compatible with Windows and Mac systems</li></ul>",
      price: 6639.17,
      image_url: "assets/images/gamingkeyboard1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.7
    },
    {
      product_id: 22,
      name: "4K Action Camera",
      description: "<ul><li>Professional waterproof 4K action camera</li><li>12MP photos with 4K video at 60fps</li><li>Electronic image stabilization for smooth footage</li><li>Voice control for hands-free operation</li><li>Waterproof to 33ft without housing</li><li>Built-in GPS tracking speed, altitude, and location</li></ul>",
      price: 12449.17,
      image_url: "assets/images/actioncamera1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.5
    },
    {
      product_id: 23,
      name: "Wireless Charging Station",
      description: "<ul><li>Premium wireless charging station with fast charging</li><li>15W fast charging for compatible devices</li><li>Multiple charging coils for flexible placement</li><li>LED indicator lights for charging status</li><li>Built-in cooling fan to prevent overheating</li><li>Sleek design complements any desk or nightstand</li></ul>",
      price: 3319.17,
      image_url: "assets/images/wirelesschargingstation1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.2
    },
    {
      product_id: 24,
      name: "Bluetooth Earpiece",
      description: "<ul><li>Compact and lightweight Bluetooth earpiece</li><li>Crystal-clear audio quality with noise reduction</li><li>Up to 8 hours talk time and 200 hours standby</li><li>Comfortable ergonomic design with multiple ear tips</li><li>Bluetooth 5.0 connectivity with 33ft range</li><li>Built-in microphone with wind noise reduction</li></ul>",
      price: 2489.17,
      image_url: "assets/images/bluetoothearpiece1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.0
    },
    {
      product_id: 25,
      name: "Smartphone Car Mount",
      description: "<ul><li>Premium smartphone car mount with strong magnetic attachment</li><li>360-degree rotation for optimal viewing angles</li><li>Universal compatibility with all smartphones</li><li>Adjustable viewing angle and non-slip grip</li><li>Built-in wireless charging pad for compatible devices</li><li>Easy one-touch release mechanism</li></ul>",
      price: 2904.17,
      image_url: "assets/images/smartphonecarmount1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.4
    },
    {
      product_id: 26,
      name: "USB-C Docking Station",
      description: "<ul><li>Professional USB-C docking station with multiple ports</li><li>HDMI, USB 3.0, Ethernet, and SD card reader</li><li>4K HDMI output at 60Hz for high-resolution displays</li><li>100W Power Delivery for laptop charging</li><li>Gigabit Ethernet for fast internet connection</li><li>Plug and play setup with no drivers required</li></ul>",
      price: 7469.17,
      image_url: "assets/images/usbc dockingstation1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.5
    },
    {
      product_id: 27,
      name: "Gaming Headset",
      description: "<ul><li>Professional gaming headset with 7.1 surround sound</li><li>Noise-cancelling microphone for clear communication</li><li>Comfortable memory foam ear cushions</li><li>Adjustable headband for personalized fit</li><li>50mm neodymium drivers for immersive audio</li><li>Works with PC, PS4, PS5, Xbox One, and Nintendo Switch</li></ul>",
      price: 6639.17,
      image_url: "assets/images/gamingheadset1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.6
    },
    {
      product_id: 28,
      name: "Wireless Presenter",
      description: "<ul><li>Advanced wireless presenter with laser pointer</li><li>Page turning controls for professional presentations</li><li>2.4GHz wireless connectivity with 50ft range</li><li>Rechargeable battery with USB-C charging</li><li>Ergonomic design for comfortable handling</li><li>Compatible with PowerPoint, Keynote, and Google Slides</li></ul>",
      price: 2074.17,
      image_url: "assets/images/wirelesspresenter1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.1
    },
    {
      product_id: 29,
      name: "Smartphone Gimbal",
      description: "<ul><li>Professional 3-axis smartphone stabilizer</li><li>App control and smooth motor technology</li><li>360-degree rotation and intelligent tracking</li><li>Multiple shooting modes including panorama and time-lapse</li><li>Compatible with smartphones up to 3.34 inches wide</li><li>Built-in rechargeable battery with USB-C charging</li></ul>",
      price: 7469.17,
      image_url: "assets/images/smartphonegimbal2.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.3
    },
    {
      product_id: 30,
      name: "Bluetooth Keyboard",
      description: "<ul><li>Slim and quiet Bluetooth keyboard with scissor-switch keys</li><li>Up to 12 months battery life for long-term use</li><li>Reliable Bluetooth 5.0 connectivity</li><li>Ergonomic design to reduce wrist strain</li><li>Spill-resistant construction for protection</li><li>Compatible with iOS, Android, Windows, and Mac systems</li></ul>",
      price: 4149.17,
      image_url: "assets/images/bluetoothkeyboard1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.2
    },
    {
      product_id: 31,
      name: "Wireless Earbuds Pro",
      description: "<ul><li>Premium true wireless earbuds with active noise cancellation</li><li>Personalized spatial audio for immersive experience</li><li>Up to 6 hours listening time with 18-hour case backup</li><li>Sweat and water resistant with IPX4 rating</li><li>Customizable fit with multiple ear tip sizes</li><li>Built-in microphone for calls and voice assistant access</li></ul>",
      price: 10799.17,
      image_url: "assets/images/wirelessearbudspro1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.7
    },
    {
      product_id: 32,
      name: "Smartphone Tripod",
      description: "<ul><li>Professional adjustable smartphone tripod</li><li>Flexible legs and ball head for versatile positioning</li><li>Extendable height up to 59 inches</li><li>Universal smartphone mount with rubber padding</li><li>360-degree rotation for optimal angles</li><li>Built-in Bluetooth remote control for hands-free shooting</li></ul>",
      price: 3319.17,
      image_url: "assets/images/smartphonetripod1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.3
    },
    {
      product_id: 33,
      name: "USB-C Hub with Ethernet",
      description: "<ul><li>Comprehensive USB-C hub with gigabit Ethernet</li><li>HDMI, USB 3.0 ports, and SD card reader</li><li>4K HDMI output at 30Hz for display support</li><li>100W Power Delivery for laptop charging</li><li>Gigabit Ethernet for fast internet connection</li><li>Compact aluminum design with efficient heat dissipation</li></ul>",
      price: 5789.17,
      image_url: "assets/images/usbchubethernet1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.4
    },
    {
      product_id: 34,
      name: "Bluetooth Speaker System",
      description: "<ul><li>Premium portable Bluetooth speaker system</li><li>360-degree surround sound with waterproof IPX7 rating</li><li>20W output power for powerful audio</li><li>15-hour playtime on a single charge</li><li>Built-in microphone for hands-free calls</li><li>Intuitive touch controls and LED display</li></ul>",
      price: 6639.17,
      image_url: "assets/images/bluetoothspeakersystem1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.5
    },
    {
      product_id: 35,
      name: "Wireless Mouse Ergonomic",
      description: "<ul><li>Ergonomic wireless mouse for comfort during extended use</li><li>Ambidextrous design for left and right-handed users</li><li>Adjustable DPI sensitivity from 1600-3200</li><li>Up to 18 months of battery life</li><li>2.4GHz wireless connectivity with nano receiver</li><li>Scroll wheel with tactile feedback</li></ul>",
      price: 2489.17,
      image_url: "assets/images/wirelessmouseergonomic1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.1
    },
    {
      product_id: 36,
      name: "Smartphone Screen Protector",
      description: "<ul><li>Premium tempered glass screen protector</li><li>9H hardness and anti-scratch coating</li><li>Oleophobic coating to resist fingerprints and smudges</li><li>2.5D curved edges for smooth feel</li><li>0.33mm thin design maintains device sensitivity</li><li>Compatible with wireless charging and all smartphones</li></ul>",
      price: 1244.17,
      image_url: "assets/images/smartphonescreenprotector1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.0
    },
    {
      product_id: 37,
      name: "Laptop Backpack",
      description: "<ul><li>Professional laptop backpack with padded compartment</li><li>Fits 17-inch laptops and multiple organizational pockets</li><li>Water-resistant polyester material for protection</li><li>Ergonomic shoulder straps with chest and waist belts</li><li>Anti-theft design with hidden zippers and RFID blocking pocket</li><li>Comfortable airflow back panel for all-day wear</li></ul>",
      price: 4149.17,
      image_url: "assets/images/laptopbackpack1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.4
    },
    {
      product_id: 38,
      name: "Wireless Charging Pad",
      description: "<ul><li>Fast wireless charging pad compatible with all Qi-enabled devices</li><li>15W fast charging for compatible smartphones</li><li>Foreign object detection for safety</li><li>LED indicator lights for charging status</li><li>Non-slip silicone surface keeps device secure</li><li>Works with iPhone, Samsung Galaxy, and other Qi-enabled devices</li></ul>",
      price: 2074.17,
      image_url: "assets/images/wirelesschargingpad1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.2
    },
    {
      product_id: 39,
      name: "Bluetooth Gaming Controller",
      description: "<ul><li>Professional Bluetooth gaming controller with responsive buttons</li><li>Programmable buttons and adjustable trigger sensitivity</li><li>30-hour battery life for extended gaming sessions</li><li>Compatible with PC, Mac, Android, and iOS devices</li><li>Built-in motion sensors for immersive gameplay</li><li>Comfortable ergonomic design with textured grips</li></ul>",
      price: 4979.17,
      image_url: "assets/images/bluetoothgamingcontroller1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.6
    },
    {
      product_id: 40,
      name: "Smartphone Case",
      description: "<ul><li>Premium smartphone case with military-grade drop protection</li><li>Shock-absorbing materials for maximum device protection</li><li>Precise cutouts for all ports and buttons</li><li>Raised edges to protect screen and camera</li><li>Sleek design compatible with wireless charging</li><li>Available in multiple colors for personalization</li></ul>",
      price: 1659.17,
      image_url: "assets/images/smartphonecase1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.1
    },
    {
      product_id: 41,
      name: "USB-C Monitor Stand",
      description: "<ul><li>Adjustable aluminum monitor stand with built-in USB-C hub</li><li>Height adjustment, tilt, and swivel capabilities</li><li>Integrated USB-C hub with HDMI and USB 3.0 ports</li><li>Built-in cable management system to reduce clutter</li><li>Sturdy construction supports monitors up to 20 pounds</li><li>Perfect for home office, gaming setup, or professional workspace</li></ul>",
      price: 7469.17,
      image_url: "assets/images/usbcmontiorstand1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.5
    },
    {
      product_id: 42,
      name: "Wireless Charging Desk Pad",
      description: "<ul><li>Premium wireless charging desk pad with built-in mouse pad</li><li>15W fast wireless charging for compatible smartphones</li><li>Non-slip base and water-resistant surface</li><li>Integrated cable management with grommet hole</li><li>Durable PU leather material with stitched edges</li><li>Enhances productivity and organization on any desk</li></ul>",
      price: 3319.17,
      image_url: "assets/images/wirelesschargingdeskpad1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.3
    },
    {
      product_id: 43,
      name: "Bluetooth Keyboard and Mouse",
      description: "<ul><li>Professional wireless keyboard and mouse combo</li><li>Scissor-switch keys and optical sensor for comfortable computing</li><li>2.4GHz wireless connectivity with encrypted transmission</li><li>Up to 12 months battery life for both devices</li><li>Ergonomic design to reduce wrist strain</li><li>Compatible with Windows, Mac, and Linux systems</li></ul>",
      price: 4149.17,
      image_url: "assets/images/bluetoothkeyboardmouse1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.4
    },
    {
      product_id: 44,
      name: "Smartphone Lens Kit",
      description: "<ul><li>Professional smartphone lens kit with multiple lenses</li><li>Wide-angle, macro, and telephoto lenses for enhanced photography</li><li>Premium optical glass with multi-coated elements</li><li>Universal clip-on design compatible with all smartphones</li><li>Portable aluminum case for storage and protection</li><li>Unlock new creative possibilities with your smartphone camera</li></ul>",
      price: 2904.17,
      image_url: "assets/images/smartphonelenskit1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.2
    },
    {
      product_id: 45,
      name: "USB-C Docking Station Pro",
      description: "<ul><li>Professional USB-C docking station with dual 4K HDMI outputs</li><li>Multiple USB ports, Ethernet, and charging capabilities</li><li>96W Power Delivery for laptop charging</li><li>Dual 4K@60Hz display support for productivity</li><li>Gigabit Ethernet for fast internet connection</li><li>Compact aluminum design with efficient heat dissipation</li></ul>",
      price: 10799.17,
      image_url: "assets/images/usbc dockingstationpro1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.7
    },
    {
      product_id: 46,
      name: "Wireless Charging Mouse Pad",
      description: "<ul><li>Innovative wireless charging mouse pad with Qi charging pad</li><li>10W fast wireless charging for compatible smartphones</li><li>Smooth surface for precise mouse tracking</li><li>Non-slip rubber base for stability</li><li>LED indicator lights for charging status</li><li>Combines functionality with modern aesthetics</li></ul>",
      price: 2489.17,
      image_url: "assets/images/wirelesschargingmousepad1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.0
    },
    {
      product_id: 47,
      name: "Smartphone Car Charger",
      description: "<ul><li>Premium smartphone car charger with dual USB ports</li><li>24W fast charging for quick device charging on the go</li><li>Intelligent identification technology for optimal charging speed</li><li>Built-in safety protection against overcharging</li><li>Compact design fits any car's cigarette lighter socket</li><li>Perfect for daily commuting, road trips, or business travel</li></ul>",
      price: 1659.17,
      image_url: "assets/images/smartphonecarcharger1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.1
    },
    {
      product_id: 48,
      name: "USB-C External SSD",
      description: "<ul><li>High-performance USB-C external SSD with fast read speeds</li><li>1TB storage capacity for ample file storage</li><li>Read speeds up to 1050MB/s for fast file transfers</li><li>Durable aluminum casing for protection</li><li>Bus-powered design with no external power adapter needed</li><li>Compatible with Windows, Mac, and USB-C enabled devices</li></ul>",
      price: 10799.17,
      image_url: "assets/images/usbcssd1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.8
    },
    {
      product_id: 49,
      name: "Wireless Charging Lamp",
      description: "<ul><li>Modern wireless charging lamp with built-in Qi charging pad</li><li>10W fast wireless charging for compatible devices</li><li>3-color LED lighting with adjustable brightness</li><li>360-degree rotation for optimal positioning</li><li>Non-slip charging surface keeps devices secure</li><li>Creates a modern, clutter-free workspace</li></ul>",
      price: 3734.17,
      image_url: "assets/images/wirelesscharginglamp1.jpg",
      is_available: true,
      created_at: "2023-01-01 12:00:00",
      rating: 4.3
    }
  ],
  
  // Shopping cart data
  cart: [],
  
  // Orders data
  orders: []
};

// Export the data structure
if (typeof module !== 'undefined' && module.exports) {
  module.exports = appData;
}