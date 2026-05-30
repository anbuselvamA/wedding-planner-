const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src', 'pages', 'GalleryPage.jsx');
let content = fs.readFileSync(file, 'utf-8');

const galleryItemsStr = `  // Your exact photos will appear here! 
  // Please crop the screenshot, enhance them slightly, and save them in the 'public/images/' folder as 'boss_gallery_1.jpg', 'boss_gallery_2.jpg', etc.
  const galleryItems = [
    { id: 1, src: '/images/boss_gallery_1.jpg', category: 'Weddings', size: 'large' },
    { id: 2, src: '/images/boss_gallery_2.jpg', category: 'Decor', size: 'medium' },
    { id: 3, src: '/images/boss_gallery_3.jpg', category: 'Weddings', size: 'medium' },
    { id: 4, src: '/images/boss_gallery_4.jpg', category: 'Decor', size: 'medium' },
    { id: 5, src: '/images/boss_gallery_5.jpg', category: 'Reception', size: 'small' },
    { id: 6, src: '/images/boss_gallery_6.jpg', category: 'Reception', size: 'small' },
    { id: 7, src: '/images/boss_gallery_7.jpg', category: 'Weddings', size: 'medium' },
    { id: 8, src: '/images/boss_gallery_8.jpg', category: 'Decor', size: 'medium' },
    { id: 9, src: '/images/boss_gallery_9.jpg', category: 'Weddings', size: 'medium' },
  ];
`;

const newContent = content.replace(/const galleryItems = \[.*?\];/s, galleryItemsStr.trim());
fs.writeFileSync(file, newContent, 'utf-8');
console.log('Gallery page reset!');
