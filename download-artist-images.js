import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Artist data extracted from HTML file (excluding guest artists Jamie Luna and Soumen Dutta)
const artists = [
  {
    id: "guru",
    name: "Guru",
    specialty: "Color, Black & Grey, and Cover-Up Tattoo",
    experience: "8+ years, Award-winning international artist",
    main_image: "https://apextattooz.com/wp-content/uploads/2025/07/guru.jpg",
    portfolio: [
      "https://apextattooz.com/wp-content/uploads/2025/07/best-tattoo-shop-in-delhi2-7-Recovered-Recovered-Recovered.jpg",
      "https://apextattooz.com/wp-content/uploads/2025/07/best-tattoo-shop-in-delhi2kali-Recovered-Recovered-Recovered.jpg",
      "https://apextattooz.com/wp-content/uploads/2025/07/best-tattoo-shop-in-delhi2-Recovered-Recovered-Recovered-1.jpg",
      "https://apextattooz.com/wp-content/uploads/2025/07/2-6.jpg"
    ]
  },
  {
    id: "maddy",
    name: "Maddy (Ravi)",
    specialty: "Black & Grey Realism, Fine Line, Studio Founder",
    experience: "12+ years, 1000+ tattoos, International artist",
    main_image: "https://apextattooz.com/wp-content/uploads/2025/07/maddy.jpg",
    portfolio: [
      "https://apextattooz.com/wp-content/uploads/2024/09/kkkkk.png",
      "https://apextattooz.com/wp-content/uploads/2024/05/337181410_623033322987854_1586424692402019317_n.jpg",
      "https://apextattooz.com/wp-content/uploads/2024/08/photshop.jpg",
      "https://apextattooz.com/wp-content/uploads/2025/05/work.jpg"
    ]
  },
  {
    id: "ram",
    name: "Ram Kesarwani",
    specialty: "Blackwork & Fine Line Tattoo",
    experience: "Expert in mythological and decorative themes",
    main_image: "https://apextattooz.com/wp-content/uploads/2025/07/ram.jpg",
    portfolio: [
      "https://apextattooz.com/wp-content/uploads/2025/07/1-1.jpg",
      "https://apextattooz.com/wp-content/uploads/2025/07/2-1.jpg",
      "https://apextattooz.com/wp-content/uploads/2025/07/3-1.jpg",
      "https://apextattooz.com/wp-content/uploads/2025/07/4-1.jpg"
    ]
  },
  {
    id: "sharan",
    name: "Sharan",
    specialty: "Fine Line & Realism, Japanese Tattoos",
    experience: "Expert in samurai, anime, and animal realism",
    main_image: "https://apextattooz.com/wp-content/uploads/2025/07/sharan.jpg",
    portfolio: [
      "https://apextattooz.com/wp-content/uploads/2025/07/1-2.jpg",
      "https://apextattooz.com/wp-content/uploads/2025/07/2-2.jpg",
      "https://apextattooz.com/wp-content/uploads/2025/07/3-2.jpg",
      "https://apextattooz.com/wp-content/uploads/2025/07/8-2.jpg"
    ]
  },
  {
    id: "goutam",
    name: "Goutam",
    specialty: "Realism, Blackwork & Spiritual Tattoo",
    experience: "Famous for emotional portraits and spiritual pieces",
    main_image: "https://apextattooz.com/wp-content/uploads/2025/08/1-1.jpg",
    portfolio: [
      "https://apextattooz.com/wp-content/uploads/2025/08/1.jpg",
      "https://apextattooz.com/wp-content/uploads/2025/08/2.jpg",
      "https://apextattooz.com/wp-content/uploads/2025/08/3.jpg",
      "https://apextattooz.com/wp-content/uploads/2025/08/4.jpg"
    ]
  },
  {
    id: "vishal",
    name: "Vishal Gour",
    specialty: "Mandala & Geometric, Spiritual Tattoos",
    experience: "Expert in deity work and portrait realism",
    main_image: "https://apextattooz.com/wp-content/uploads/2025/08/1-vishal-.jpg",
    portfolio: [
      "https://apextattooz.com/wp-content/uploads/2025/08/1-2.jpg",
      "https://apextattooz.com/wp-content/uploads/2025/08/2-1.jpg",
      "https://apextattooz.com/wp-content/uploads/2025/08/3-1.jpg",
      "https://apextattooz.com/wp-content/uploads/2025/08/4-1.jpg"
    ]
  },
  {
    id: "sohil",
    name: "Sohil Khan",
    specialty: "Fine Line, Minimalist & Realism",
    experience: "Rising star, graduate turned master",
    main_image: "https://apextattooz.com/wp-content/uploads/2025/08/Untitled-2-Recovered-Recovered-Recovered-Recovered.jpg",
    portfolio: [
      "https://apextattooz.com/wp-content/uploads/2024/08/Untitled-5.jpg",
      "https://apextattooz.com/wp-content/uploads/2024/08/the-finel-one_-scaled.jpg",
      "https://apextattooz.com/wp-content/uploads/2025/08/1-3.jpg",
      "https://apextattooz.com/wp-content/uploads/2025/08/2-2.jpg"
    ]
  },
  {
    id: "ajit",
    name: "Ajit",
    specialty: "Realism, Portrait & Ornamental",
    experience: "Expert in memorial pieces and geometric work",
    main_image: "https://apextattooz.com/wp-content/uploads/2025/08/ajeet-.jpg",
    portfolio: [
      "https://apextattooz.com/wp-content/uploads/2025/08/1-4.jpg",
      "https://apextattooz.com/wp-content/uploads/2025/08/2-3.jpg",
      "https://apextattooz.com/wp-content/uploads/2025/08/3-3.jpg",
      "https://apextattooz.com/wp-content/uploads/2025/08/4-2.jpg"
    ]
  }
];

// Helper function to download images
function downloadImage(url, filepath, callback) {
  const file = fs.createWriteStream(filepath);
  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close(callback);
    });
  }).on('error', (err) => {
    fs.unlink(filepath, () => {}); // Delete the file async
    callback(err);
  });
}

// Helper function to get file extension from URL
function getFileExtension(url) {
  const urlParts = url.split('.');
  const extension = urlParts[urlParts.length - 1].split('?')[0];
  return extension.toLowerCase();
}

// Create artist data with descriptions
function createArtistNotes(artist) {
  return {
    artistName: artist.name,
    specialty: artist.specialty,
    experience: artist.experience,
    images: {
      profile: {
        filename: `${artist.id}-profile.${getFileExtension(artist.main_image)}`,
        description: `Professional profile photo of ${artist.name}, ${artist.specialty} artist at DelhiTattooShop.com`,
        category: "profile",
        usage: "Main artist profile image for website and marketing"
      },
      portfolio: artist.portfolio.map((url, index) => ({
        filename: `${artist.id}-portfolio-${index + 1}.${getFileExtension(url)}`,
        description: `Portfolio tattoo work by ${artist.name} showcasing ${artist.specialty} expertise`,
        category: "portfolio",
        usage: "Artist portfolio gallery, social media, and client examples"
      }))
    }
  };
}

// Main download function
async function downloadArtistImages() {
  console.log('🎨 ARTIST IMAGE DOWNLOAD SYSTEM STARTING...');
  console.log(`📋 Processing ${artists.length} artists (Excluding guest artists Jamie Luna & Soumen Dutta)`);
  console.log('');

  const downloadResults = [];

  for (const artist of artists) {
    console.log(`👨‍🎨 Processing ${artist.name}...`);
    
    // Create artist notes
    const artistNotes = createArtistNotes(artist);
    downloadResults.push(artistNotes);

    try {
      // Download profile image
      const profileExt = getFileExtension(artist.main_image);
      const profilePath = path.join('/Users/maddy/my-astro-site/public/artists/photos', `${artist.id}-profile.${profileExt}`);
      
      await new Promise((resolve, reject) => {
        downloadImage(artist.main_image, profilePath, (err) => {
          if (err) {
            console.log(`  ❌ Profile image failed: ${err.message}`);
            reject(err);
          } else {
            console.log(`  ✅ Profile image downloaded: ${artist.id}-profile.${profileExt}`);
            resolve();
          }
        });
      });

      // Download portfolio images
      for (let i = 0; i < artist.portfolio.length; i++) {
        const portfolioUrl = artist.portfolio[i];
        const portfolioExt = getFileExtension(portfolioUrl);
        const portfolioPath = path.join('/Users/maddy/my-astro-site/public/artists/photos', `${artist.id}-portfolio-${i + 1}.${portfolioExt}`);
        
        await new Promise((resolve, reject) => {
          downloadImage(portfolioUrl, portfolioPath, (err) => {
            if (err) {
              console.log(`  ❌ Portfolio ${i + 1} failed: ${err.message}`);
              reject(err);
            } else {
              console.log(`  ✅ Portfolio image ${i + 1} downloaded: ${artist.id}-portfolio-${i + 1}.${portfolioExt}`);
              resolve();
            }
          });
        });
      }

      console.log(`  🎯 ${artist.name} completed: 1 profile + ${artist.portfolio.length} portfolio images`);
      console.log('');

    } catch (error) {
      console.log(`  💥 Error processing ${artist.name}:`, error.message);
      console.log('');
    }
  }

  // Create detailed notes file
  const notesContent = `# 🎨 ARTIST IMAGE LIBRARY - DETAILED NOTES & DESCRIPTIONS

## 📋 DOWNLOAD SUMMARY
- **Download Date:** ${new Date().toLocaleString()}
- **Total Artists:** ${artists.length} professional artists
- **Excluded:** Jamie Luna & Soumen Dutta (guest artists)
- **Total Images:** ${downloadResults.reduce((total, artist) => total + 1 + artist.images.portfolio.length, 0)}

---

## 🖼️ ARTIST PORTFOLIO DATABASE

${downloadResults.map(artist => `
### ${artist.artistName}
**Specialty:** ${artist.specialty}
**Experience:** ${artist.experience}

#### Profile Image:
- **File:** ${artist.images.profile.filename}
- **Description:** ${artist.images.profile.description}
- **Usage:** ${artist.images.profile.usage}

#### Portfolio Images:
${artist.images.portfolio.map((img, index) => `
${index + 1}. **File:** ${img.filename}
   - **Description:** ${img.description}
   - **Usage:** ${img.usage}
`).join('')}

---
`).join('')}

## 🎯 USAGE GUIDELINES

### For Website Integration:
- Use profile images for artist directory and individual pages
- Portfolio images for galleries and client examples
- All images optimized for web performance

### For Marketing:
- Professional profile photos for social media
- Portfolio work for advertising campaigns
- High-quality images for print materials

### SEO Benefits:
- All images stored locally (better loading speeds)
- Descriptive filenames for search optimization
- Professional quality for better user engagement

---

**📁 Storage Location:** /public/artists/photos/
**🔗 Web Path:** /artists/photos/
**🎨 Ready for Production Use:** ✅

*Generated by DelhiTattooShop.com Artist Management System*
`;

  // Save notes file
  fs.writeFileSync('/Users/maddy/my-astro-site/ARTIST-IMAGES-NOTES.md', notesContent);
  
  console.log('📝 DOWNLOAD COMPLETE!');
  console.log('✅ All artist images downloaded successfully');
  console.log('📋 Detailed notes saved to: ARTIST-IMAGES-NOTES.md');
  console.log('🎯 Ready for website integration!');
}

// Run the download
downloadArtistImages().catch(console.error);