const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;
  
  // Replace default phone numbers
  content = content.replace(/0000 000 00 00/g, '0535 310 61 39');
  content = content.replace(/905000000000/g, '905353106139');
  
  // Replace MessageCircle with WhatsAppIcon where applicable
  if (content.includes('<MessageCircle') && (content.includes('WhatsAppButton') || content.toLowerCase().includes('whatsapp'))) {
    // Replace the import
    content = content.replace(/import\s+\{([^}]*)MessageCircle([^}]*)\}\s+from\s+["']lucide-react["'];?/, (match, p1, p2) => {
      let rest = (p1 + p2).trim();
      rest = rest.replace(/,\s*,/g, ',').replace(/^,|,$/g, '').trim();
      if (rest.length === 0) {
          return 'import WhatsAppIcon from "@/components/WhatsAppIcon";';
      }
      return `import { ${rest} } from "lucide-react";\nimport WhatsAppIcon from "@/components/WhatsAppIcon";`;
    });
    
    // Replace the component usage
    content = content.replace(/<MessageCircle/g, '<WhatsAppIcon');
  }
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${filePath}`);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

walk(path.join(__dirname, 'src'));
processFile(path.join(__dirname, '.env.example'));
