const fs = require('fs');
const axios = require('axios');
const { URL } = require('url');

if (process.argv.length !== 3) {
  console.error('Usage: node urls.js FILENAME');
  process.exit(1);
}

const inputFileName = process.argv[2];

// Function to extract the hostname from a URL
function getHostname(url) {
  const { hostname } = new URL(url);
  return hostname;
}

// Function to fetch a URL and save its HTML content
async function fetchAndSave(url) {
  try {
    const response = await axios.get(url);
    const { data } = response;
    const hostname = getHostname(url);
    const outputFileName = `${hostname}.txt`;

    fs.writeFileSync(outputFileName, data, 'utf-8');
    console.log(`Saved HTML content from ${url} to ${outputFileName}`);
  } catch (error) {
    console.error(`Error fetching or saving ${url}: ${error.message}`);
  }
}

// Read the list of URLs from the input file and handle errors
try {
  const urls = fs.readFileSync(inputFileName, 'utf-8').split('\n');
  // Loop through the list of URLs and fetch/save them
  async function main() {
    for (const url of urls) {
      if (url.trim() !== '') {
        await fetchAndSave(url.trim());
      }
    }
  }

  main();
} catch (error) {
  console.error(`Error reading the input file (${inputFileName}): ${error.message}`);
  process.exit(1);
}
