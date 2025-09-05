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

  // Example Real Artist Entry (Template - Replace with actual data)
  "ravi-mehta": {
    name: "Ravi Mehta",
    slug: "ravi-mehta",
    title: "Master Tattoo Artist & Studio Founder",
    experience: "15+ Years",
    
    // IMPORTANT: Replace with actual photos when available
    profilePhoto: "/artists/photos/ravi-mehta-profile.jpg", // Add real photo here
    portfolioPhotos: [
      "/artists/photos/ravi-mehta-portfolio-1.jpg", // Add real portfolio photos
      "/artists/photos/ravi-mehta-portfolio-2.jpg",
      "/artists/photos/ravi-mehta-portfolio-3.jpg",
      "/artists/photos/ravi-mehta-portfolio-4.jpg",
      "/artists/photos/ravi-mehta-portfolio-5.jpg",
    ],
    
    metaTitle: "Ravi Mehta - Master Tattoo Artist | Delhi's Premier Tattoo Studio",
    metaDescription: "Meet Ravi Mehta, Delhi's most sought-after tattoo artist. 15+ years experience, specializing in realism, traditional designs. Book consultation today.",
    keywords: ["Ravi Mehta tattoo artist Delhi", "best tattoo artist Delhi", "professional tattoo artist", "realism tattoo artist Delhi NCR"],
    
    specialties: [
      "Realism & Portrait Tattoos",
      "Traditional Indian Designs", 
      "Custom Artwork Creation",
      "Cover-up Specialist"
    ],
    
    bio: {
      intro: "Ravi Mehta started his tattoo journey in 2009 and has since become one of Delhi's most sought-after tattoo artists with over 5,000+ successful tattoos.",
      professional: "Known for his meticulous attention to detail and ability to work across multiple styles. His work has been featured in various tattoo magazines and art exhibitions across Delhi NCR.",
      philosophy: "Every tattoo is a personal story waiting to be told. My job is to listen, understand, and translate that story into art that will last a lifetime.",
      personal: "Ravi believes in collaborative design, working closely with each client to ensure their tattoo perfectly represents their vision."
    },
    
    stats: {
      yearsExperience: 15,
      tattoosCompleted: 5000,
      clientRating: 4.9,
      satisfactionRate: 100
    },
    
    contact: {
      whatsapp: "919821632788",
      instagram: "@ravimehtatattoo",
      email: "ravi@delhitattooshop.com"
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