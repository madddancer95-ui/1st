// Artist Data Management System
// This file contains all artist information for DelhiTattooShop.com
// Follow this structure when adding new artists

export const artistsData = {
  // Template for adding new artists
  "artist-slug": {
    // Basic Information
    name: "Artist Full Name",
    slug: "artist-slug", // URL-friendly name
    title: "Professional Title", // e.g., "Master Tattoo Artist"
    experience: "X+ Years", // Years of experience
    
    // Photos (stored locally in /public/artists/photos/)
    profilePhoto: "/artists/photos/artist-slug-profile.jpg", // Main profile photo
    portfolioPhotos: [
      "/artists/photos/artist-slug-portfolio-1.jpg",
      "/artists/photos/artist-slug-portfolio-2.jpg", 
      "/artists/photos/artist-slug-portfolio-3.jpg",
      // Add more portfolio images
    ],
    
    // SEO Data
    metaTitle: "Artist Name - Professional Tattoo Artist | DelhiTattooShop.com",
    metaDescription: "Meet [Artist Name], expert tattoo artist specializing in [specialties]. Book consultation at Delhi's premier tattoo studio.",
    keywords: ["artist name tattoo artist", "specialty tattoo Delhi", "professional tattoo artist"],
    
    // Professional Details
    specialties: [
      "Specialty 1", // e.g., "Realism Tattoos"
      "Specialty 2", // e.g., "Portrait Work"
      "Specialty 3", // e.g., "Custom Designs"
      "Specialty 4"  // e.g., "Cover-ups"
    ],
    
    // Biography
    bio: {
      intro: "Brief introduction paragraph about the artist's journey and passion",
      professional: "Professional background, training, certifications, achievements",
      philosophy: "Artist's approach to tattooing and philosophy",
      personal: "Personal interests that influence their art style"
    },
    
    // Statistics
    stats: {
      yearsExperience: 0, // Number of years
      tattoosCompleted: 0, // Approximate number
      clientRating: 0.0, // Rating out of 5.0
      satisfactionRate: 100 // Percentage
    },
    
    // Social Media & Contact
    contact: {
      whatsapp: "919821632788", // WhatsApp number
      instagram: "@artisthandle", // Instagram handle
      email: "artist@delhitattooshop.com" // Professional email
    },
    
    // Availability
    availability: {
      schedule: "Monday - Sunday, 11 AM to 9 PM",
      consultations: "Free consultation available",
      bookingAdvance: "2-3 weeks", // How far in advance to book
    },
    
    // Pricing (if different from standard)
    pricing: {
      simple: 299, // Per inch for simple work
      detailed: 399, // Per inch for detailed work
      premium: 599, // Per inch for premium work
      consultation: 0, // Consultation fee (0 for free)
      customQuote: true // Whether custom quotes are available
    }
  },

  // REAL ARTIST PROFILES - ALL PHOTOS DOWNLOADED AND STORED LOCALLY
  "maddy": {
    name: "Maddy (Ravi)",
    slug: "maddy",
    title: "Studio Founder & Master Tattoo Artist",
    experience: "12+ Years",
    
    profilePhoto: "/artists/photos/maddy-profile.jpg",
    portfolioPhotos: [
      "/artists/photos/maddy-portfolio-1.png",
      "/artists/photos/maddy-portfolio-2.jpg",
      "/artists/photos/maddy-portfolio-3.jpg",
      "/artists/photos/maddy-portfolio-4.jpg",
    ],
    
    metaTitle: "Maddy (Ravi) - Founder & Best Tattoo Artist Delhi | DelhiTattooShop.com",
    metaDescription: "Meet Maddy, founder of Delhi's premier tattoo studio. 12+ years experience, 1000+ tattoos, specializing in black & grey realism and fine line work.",
    keywords: ["Maddy tattoo artist Delhi", "best tattoo artist Delhi", "founder tattoo studio Delhi", "black grey realism Delhi"],
    
    specialties: [
      "Black & Grey Realism",
      "Fine Line Work",
      "Portrait Tattoos",
      "Custom Designs"
    ],
    
    bio: {
      intro: "Maddy is the founder and creative heart of DelhiTattooShop.com. With 12+ years of experience and over 1000 tattoos completed, he's established himself as one of Delhi's most sought-after artists.",
      professional: "Trains other artists, gets invited internationally, and has built a reputation for obsessive attention to cleanliness and original designs. His black and grey portraits are absolutely incredible.",
      philosophy: "Every tattoo should be a masterpiece that tells a story. I'm obsessed with making original designs and maintaining the highest hygiene standards in the industry.",
      personal: "When not tattooing, Maddy focuses on training the next generation of artists and constantly pushing the boundaries of tattoo artistry."
    },
    
    stats: {
      yearsExperience: 12,
      tattoosCompleted: 1000,
      clientRating: 4.9,
      satisfactionRate: 100
    },
    
    contact: {
      whatsapp: "919821632788",
      instagram: "@maddytattooz",
      email: "maddy@delhitattooshop.com"
    },
    
    availability: {
      schedule: "Monday - Sunday, 11 AM to 9 PM",
      consultations: "Free consultation available",
      bookingAdvance: "3-4 weeks"
    },
    
    pricing: {
      simple: 399,
      detailed: 599,
      premium: 799,
      consultation: 0,
      customQuote: true
    }
  },

  "guru": {
    name: "Guru",
    slug: "guru",
    title: "Award-Winning Color & Cover-Up Specialist",
    experience: "8+ Years",
    
    profilePhoto: "/artists/photos/guru-profile.jpg",
    portfolioPhotos: [
      "/artists/photos/guru-portfolio-1.jpg",
      "/artists/photos/guru-portfolio-2.jpg",
      "/artists/photos/guru-portfolio-3.jpg",
      "/artists/photos/guru-portfolio-4.jpg",
    ],
    
    metaTitle: "Guru - Award Winning Color & Cover-Up Tattoo Artist Delhi",
    metaDescription: "Meet Guru, award-winning tattoo artist specializing in color realism, black & grey work, and cover-ups. International clientele and multiple awards.",
    keywords: ["Guru tattoo artist Delhi", "color tattoo Delhi", "cover up tattoo Delhi", "award winning tattoo artist"],
    
    specialties: [
      "Color Realism",
      "Black & Grey Work",
      "Cover-Up Specialist",
      "Spiritual & Cultural Art"
    ],
    
    bio: {
      intro: "Guru has been creating award-winning tattoos for 8+ years and has clients from all over the world. His work has earned him multiple awards for good reason.",
      professional: "Whether you want color realism that pops, classic black and grey, or need to cover up something bad, Guru is your answer. His work speaks for itself and has been recognized internationally.",
      philosophy: "Every tattoo is an opportunity to create something beautiful and meaningful. I believe in combining technical excellence with artistic vision.",
      personal: "Guru draws inspiration from spiritual and cultural themes, bringing deep meaning to every piece he creates."
    },
    
    stats: {
      yearsExperience: 8,
      tattoosCompleted: 2000,
      clientRating: 4.8,
      satisfactionRate: 100
    },
    
    contact: {
      whatsapp: "917217665762",
      instagram: "@gurutattooz",
      email: "guru@delhitattooshop.com"
    },
    
    availability: {
      schedule: "Monday - Sunday, 11 AM to 9 PM",
      consultations: "Free consultation available",
      bookingAdvance: "2-3 weeks"
    },
    
    pricing: {
      simple: 299,
      detailed: 399,
      premium: 599,
      consultation: 0,
      customQuote: true
    }
  },

  "ram": {
    name: "Ram Kesarwani",
    slug: "ram",
    title: "Blackwork & Fine Line Specialist",
    experience: "7+ Years",
    
    profilePhoto: "/artists/photos/ram-profile.jpg",
    portfolioPhotos: [
      "/artists/photos/ram-portfolio-1.jpg",
      "/artists/photos/ram-portfolio-2.jpg",
      "/artists/photos/ram-portfolio-3.jpg",
      "/artists/photos/ram-portfolio-4.jpg",
    ],
    
    metaTitle: "Ram Kesarwani - Blackwork & Fine Line Tattoo Artist Delhi",
    metaDescription: "Meet Ram Kesarwani, expert in blackwork, fine line work, and custom realism. Specializes in mythological themes and decorative designs.",
    keywords: ["Ram Kesarwani tattoo Delhi", "blackwork tattoo Delhi", "fine line tattoo artist", "mythological tattoo Delhi"],
    
    specialties: [
      "Blackwork Tattoos",
      "Fine Line Art",
      "Mythological Themes",
      "Custom Realism"
    ],
    
    bio: {
      intro: "Ram is seriously one of Delhi NCR's best tattoo artists. His blackwork is insane, fine line work is perfect, and custom realism will leave you speechless.",
      professional: "He creates everything from massive full-back goddess pieces to detailed mandalas and mind-blowing realism. His attention to detail is crazy good, and he can blend traditional Indian themes with modern tattoo techniques better than anyone.",
      philosophy: "I believe tattoos should honor both tradition and innovation. Every piece I create bridges ancient artistry with contemporary techniques.",
      personal: "Ram takes mythological and decorative themes and turns them into technical masterpieces that tell stories spanning generations."
    },
    
    stats: {
      yearsExperience: 7,
      tattoosCompleted: 1500,
      clientRating: 4.7,
      satisfactionRate: 100
    },
    
    contact: {
      whatsapp: "919821632788",
      instagram: "@ramtattooz",
      email: "ram@delhitattooshop.com"
    },
    
    availability: {
      schedule: "Monday - Sunday, 11 AM to 9 PM",
      consultations: "Free consultation available",
      bookingAdvance: "2-3 weeks"
    },
    
    pricing: {
      simple: 299,
      detailed: 399,
      premium: 559,
      consultation: 0,
      customQuote: true
    }
  },

  "sharan": {
    name: "Sharan",
    slug: "sharan",
    title: "Fine Line & Japanese Tattoo Master",
    experience: "6+ Years",
    
    profilePhoto: "/artists/photos/sharan-profile.jpg",
    portfolioPhotos: [
      "/artists/photos/sharan-portfolio-1.jpg",
      "/artists/photos/sharan-portfolio-2.jpg",
      "/artists/photos/sharan-portfolio-3.jpg",
      "/artists/photos/sharan-portfolio-4.jpg",
    ],
    
    metaTitle: "Sharan - Fine Line & Japanese Tattoo Artist Delhi | Samurai Specialist",
    metaDescription: "Meet Sharan, master of fine line and Japanese tattoo art. Famous for samurai sleeves, anime characters, and animal realism that looks alive.",
    keywords: ["Sharan tattoo artist Delhi", "Japanese tattoo Delhi", "samurai tattoo Delhi", "fine line tattoo artist"],
    
    specialties: [
      "Japanese Tattoo Art",
      "Fine Line & Realism",
      "Samurai Sleeves",
      "Anime Characters"
    ],
    
    bio: {
      intro: "Sharan does the most amazing fine line and realism work you'll ever see. His Japanese tattoos, samurai sleeves, and anime stuff are absolutely incredible.",
      professional: "Sharan is like a storyteller with a tattoo machine. He blends Japanese culture, animal realism, spiritual themes, and anime characters with perfect technique. Every tattoo he does tells a story that connects with people emotionally.",
      philosophy: "Art should tell stories that resonate with the soul. My work bridges cultures and brings characters to life on skin.",
      personal: "His samurai sleeves are legendary, and his animal work looks like it's breathing on your skin. Each piece connects emotionally with clients."
    },
    
    stats: {
      yearsExperience: 6,
      tattoosCompleted: 1200,
      clientRating: 4.8,
      satisfactionRate: 100
    },
    
    contact: {
      whatsapp: "919821632788",
      instagram: "@sharantattooz",
      email: "sharan@delhitattooshop.com"
    },
    
    availability: {
      schedule: "Monday - Sunday, 11 AM to 9 PM",
      consultations: "Free consultation available",
      bookingAdvance: "2-3 weeks"
    },
    
    pricing: {
      simple: 299,
      detailed: 399,
      premium: 559,
      consultation: 0,
      customQuote: true
    }
  },

  "goutam": {
    name: "Goutam",
    slug: "goutam",
    title: "Spiritual & Historical Realism Master",
    experience: "5+ Years",
    
    profilePhoto: "/artists/photos/goutam-profile.jpg",
    portfolioPhotos: [
      "/artists/photos/goutam-portfolio-1.jpg",
      "/artists/photos/goutam-portfolio-2.jpg",
      "/artists/photos/goutam-portfolio-3.jpg",
      "/artists/photos/goutam-portfolio-4.jpg",
    ],
    
    metaTitle: "Goutam - Spiritual & Historical Realism Tattoo Artist Delhi",
    metaDescription: "Meet Goutam, master of spiritual and historical tattoos. Famous for Shivaji Maharaj portraits and emotional pet memorial tattoos that give goosebumps.",
    keywords: ["Goutam tattoo artist Delhi", "spiritual tattoo Delhi", "Shivaji tattoo Delhi", "pet memorial tattoo Delhi"],
    
    specialties: [
      "Spiritual & Religious Art",
      "Historical Portraits",
      "Pet Memorial Tattoos",
      "Emotional Realism"
    ],
    
    bio: {
      intro: "Goutam creates the most powerful spiritual and historical tattoos you'll ever see. His realism and blackwork captures emotions that give you goosebumps.",
      professional: "Goutam doesn't just tattoo, he captures souls and emotions with incredible shading techniques. He's famous for his Chhatrapati Shivaji Maharaj portraits, Shiva and Buddha pieces that look like they have divine energy.",
      philosophy: "Every tattoo should have deep spiritual meaning and emotional connection. I don't just create art - I capture souls and divine energy.",
      personal: "His pet tattoos are so emotional that clients cry when they see them. Every piece he creates has deep meaning and perfect execution."
    },
    
    stats: {
      yearsExperience: 5,
      tattoosCompleted: 800,
      clientRating: 4.9,
      satisfactionRate: 100
    },
    
    contact: {
      whatsapp: "919821632788",
      instagram: "@goutamtattooz",
      email: "goutam@delhitattooshop.com"
    },
    
    availability: {
      schedule: "Monday - Sunday, 11 AM to 9 PM",
      consultations: "Free consultation available",
      bookingAdvance: "2-3 weeks"
    },
    
    pricing: {
      simple: 299,
      detailed: 399,
      premium: 559,
      consultation: 0,
      customQuote: true
    }
  },

  "vishal": {
    name: "Vishal Gour",
    slug: "vishal",
    title: "Mandala & Geometric Specialist",
    experience: "5+ Years",
    
    profilePhoto: "/artists/photos/vishal-profile.jpg",
    portfolioPhotos: [
      "/artists/photos/vishal-portfolio-1.jpg",
      "/artists/photos/vishal-portfolio-2.jpg",
      "/artists/photos/vishal-portfolio-3.jpg",
      "/artists/photos/vishal-portfolio-4.jpg",
    ],
    
    metaTitle: "Vishal Gour - Mandala & Spiritual Tattoo Artist Delhi",
    metaDescription: "Meet Vishal Gour, expert in mandala, geometric, and spiritual tattoos. Creates detailed deity work and touching pet memorial tattoos with divine energy.",
    keywords: ["Vishal Gour tattoo Delhi", "mandala tattoo Delhi", "geometric tattoo artist", "deity tattoo Delhi"],
    
    specialties: [
      "Mandala & Geometric",
      "Spiritual & Deity Art",
      "Animal Portraits",
      "Pet Memorial Tattoos"
    ],
    
    bio: {
      intro: "Vishal creates the most detailed spiritual and animal tattoos in Delhi. His deity work and portraits are so realistic they look like they're alive.",
      professional: "Vishal has this amazing ability to blend spiritual themes with portrait realism using technical shading that's just perfect. His deity tattoos have this divine energy, his animal portraits capture personalities.",
      philosophy: "Sacred geometry and spiritual themes should combine with technical perfection to create art that touches the soul.",
      personal: "His pet memorials are so touching they make people emotional. He creates a diverse portfolio but every piece shows the same incredible attention to detail."
    },
    
    stats: {
      yearsExperience: 5,
      tattoosCompleted: 900,
      clientRating: 4.7,
      satisfactionRate: 100
    },
    
    contact: {
      whatsapp: "919821632788",
      instagram: "@vishaltattooz",
      email: "vishal@delhitattooshop.com"
    },
    
    availability: {
      schedule: "Monday - Sunday, 11 AM to 9 PM",
      consultations: "Free consultation available",
      bookingAdvance: "2-3 weeks"
    },
    
    pricing: {
      simple: 299,
      detailed: 399,
      premium: 559,
      consultation: 0,
      customQuote: true
    }
  },

  "sohil": {
    name: "Sohil Khan",
    slug: "sohil",
    title: "Fine Line & Minimalist Rising Star",
    experience: "4+ Years",
    
    profilePhoto: "/artists/photos/sohil-profile.jpg",
    portfolioPhotos: [
      "/artists/photos/sohil-portfolio-1.jpg",
      "/artists/photos/sohil-portfolio-2.jpg",
      "/artists/photos/sohil-portfolio-3.jpg",
      "/artists/photos/sohil-portfolio-4.jpg",
    ],
    
    metaTitle: "Sohil Khan - Fine Line & Minimalist Tattoo Artist Delhi",
    metaDescription: "Meet Sohil Khan, our rising star specializing in fine line, minimalist work, and custom portraits. Graduate turned master with incredible storytelling ability.",
    keywords: ["Sohil Khan tattoo Delhi", "fine line tattoo Delhi", "minimalist tattoo artist", "rising star tattoo artist"],
    
    specialties: [
      "Fine Line Work",
      "Minimalist Designs",
      "Custom Portraits",
      "Color Realism"
    ],
    
    bio: {
      intro: "Sohil is our rising star and he's absolutely killing it with fine line and minimalist work. His custom portraits are so detailed you'll think they're photos.",
      professional: "Sohil is proof that our training program works - he's a graduate who became a master. His work ranges from movie-quality cinematic portraits to animal realism that captures personalities perfectly.",
      philosophy: "Less can be more when executed with precision. I focus on clean lines and storytelling that connects emotionally with clients.",
      personal: "Strong technical skills combined with natural storytelling ability make him one of our most promising artists. He also does amazing color pieces that pop off the skin."
    },
    
    stats: {
      yearsExperience: 4,
      tattoosCompleted: 600,
      clientRating: 4.6,
      satisfactionRate: 100
    },
    
    contact: {
      whatsapp: "919821632788",
      instagram: "@sohiltattooz",
      email: "sohil@delhitattooshop.com"
    },
    
    availability: {
      schedule: "Monday - Sunday, 11 AM to 9 PM",
      consultations: "Free consultation available",
      bookingAdvance: "1-2 weeks"
    },
    
    pricing: {
      simple: 299,
      detailed: 399,
      premium: 499,
      consultation: 0,
      customQuote: true
    }
  },

  "ajit": {
    name: "Ajit",
    slug: "ajit",
    title: "Realism & Portrait Specialist",
    experience: "4+ Years",
    
    profilePhoto: "/artists/photos/ajit-profile.jpg",
    portfolioPhotos: [
      "/artists/photos/ajit-portfolio-1.jpg",
      "/artists/photos/ajit-portfolio-2.jpg",
      "/artists/photos/ajit-portfolio-3.jpg",
      "/artists/photos/ajit-portfolio-4.jpg",
    ],
    
    metaTitle: "Ajit - Realism & Portrait Tattoo Artist Delhi | Ornamental Blackwork",
    metaDescription: "Meet Ajit, master of realism, portrait work, and ornamental blackwork. Creates emotional memorial pieces and elegant chest pieces that touch hearts.",
    keywords: ["Ajit tattoo artist Delhi", "portrait tattoo Delhi", "realism tattoo artist", "memorial tattoo Delhi"],
    
    specialties: [
      "Portrait Realism",
      "Memorial Pieces",
      "Ornamental Blackwork", 
      "Geometric Sleeves"
    ],
    
    bio: {
      intro: "Ajit creates the most beautiful realism and portrait work you'll ever see. His ornamental blackwork and elegant chest pieces are absolutely stunning.",
      professional: "Ajit has this incredible gift for creating lifelike realism and emotional portraits that touch your heart. His portfolio includes powerful memorial pieces, intricate geometric sleeves, and ornamental blackwork that flows like art on skin.",
      philosophy: "Every portrait should capture not just a likeness, but the essence and soul of the subject. Art should honor memory and celebrate life.",
      personal: "Whether it's a family portrait or a spiritual piece, Ajit puts so much emotion and detail into every tattoo that people get emotional when they see the final result."
    },
    
    stats: {
      yearsExperience: 4,
      tattoosCompleted: 500,
      clientRating: 4.7,
      satisfactionRate: 100
    },
    
    contact: {
      whatsapp: "919821632788",
      instagram: "@ajittattooz",
      email: "ajit@delhitattooshop.com"
    },
    
    availability: {
      schedule: "Monday - Sunday, 11 AM to 9 PM",
      consultations: "Free consultation available",
      bookingAdvance: "1-2 weeks"
    },
    
    pricing: {
      simple: 299,
      detailed: 399,
      premium: 499,
      consultation: 0,
      customQuote: true
    }
  }

  // ADD MORE ARTISTS HERE FOLLOWING THE SAME STRUCTURE
  // Copy the template above and fill in real data for each artist
};

// Helper Functions for Artist Management
export function getArtistBySlug(slug) {
  return artistsData[slug] || null;
}

export function getAllArtists() {
  return Object.values(artistsData);
}

export function getArtistsBySpecialty(specialty) {
  return Object.values(artistsData).filter(artist => 
    artist.specialties.some(spec => 
      spec.toLowerCase().includes(specialty.toLowerCase())
    )
  );
}

export function getTopArtists(count = 6) {
  return Object.values(artistsData)
    .sort((a, b) => b.stats.yearsExperience - a.stats.yearsExperience)
    .slice(0, count);
}