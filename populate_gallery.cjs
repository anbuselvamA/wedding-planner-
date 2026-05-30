const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src', 'pages', 'GalleryPage.jsx');
let content = fs.readFileSync(file, 'utf-8');

const baseUrls = [
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=600&q=80'
];

const categories = ['Weddings', 'Decor', 'Reception', 'Engagement', 'Mehendi', 'Haldi'];
const sizes = ['small', 'medium', 'large'];

let galleryItemsStr = '  const galleryItems = [\n';
for (let i = 1; i <= 67; i++) {
  const url = baseUrls[i % baseUrls.length];
  const category = categories[i % categories.length];
  const size = sizes[i % sizes.length];
  galleryItemsStr += `    { id: ${i}, src: '${url}', category: '${category}', size: '${size}' },\n`;
}
galleryItemsStr += '  ];\n';

const newContent = content.replace(/const galleryItems = \[[^\]]*\];/s, galleryItemsStr);
fs.writeFileSync(file, newContent, 'utf-8');
console.log('Gallery page updated with 67 items!');
