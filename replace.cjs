const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            if (f !== 'node_modules' && f !== '.git' && f !== 'dist') {
                walkDir(dirPath, callback);
            }
        } else {
            if (dirPath.endsWith('.jsx') || dirPath.endsWith('.html') || dirPath.endsWith('.js')) {
                callback(dirPath);
            }
        }
    });
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    content = content.replace(/RR Wedding Planner/gi, 'Boss Event Decorator');
    content = content.replace(/RR wedding/gi, 'Boss Event');
    content = content.replace(/Chennai/g, 'Virudhachalam');
    content = content.replace(/RR/g, 'Boss Event Decorator');
    
    // Fix any double replacements
    content = content.replace(/Boss Event Decorator Wedding Planner/gi, 'Boss Event Decorator');
    content = content.replace(/Boss Event Decorator Event Decorator/gi, 'Boss Event Decorator');
    content = content.replace(/Boss Event Decorator was born/g, 'Boss Event Decorator was born');

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated:', filePath);
    }
}

// Also process index.html
if (fs.existsSync('index.html')) {
    processFile('index.html');
}

walkDir('src', processFile);
