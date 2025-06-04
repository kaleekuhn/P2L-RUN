#!/usr/bin/env node

// Simple routing test script for P2L RAN
import http from 'http';

const testUrls = [
  'http://localhost:4173/P2L-RUN/',
  'http://localhost:4173/P2L-RUN/events',
  'http://localhost:4173/P2L-RUN/jobs',
  'http://localhost:4173/P2L-RUN/learning',
  'http://localhost:4173/P2L-RUN/community',
  'http://localhost:4173/P2L-RUN/mentorship',
  'http://localhost:4173/P2L-RUN/ai-support'
];

console.log('🧪 Testing P2L RAN routing...\n');

async function testUrl(url) {
  return new Promise((resolve) => {
    const req = http.get(url, (res) => {
      const success = res.statusCode === 200;
      console.log(`${success ? '✅' : '❌'} ${url} - Status: ${res.statusCode}`);
      resolve(success);
    });
    
    req.on('error', (err) => {
      console.log(`❌ ${url} - Error: ${err.message}`);
      resolve(false);
    });
    
    req.setTimeout(5000, () => {
      console.log(`❌ ${url} - Timeout`);
      req.destroy();
      resolve(false);
    });
  });
}

async function runTests() {
  let passed = 0;
  let total = testUrls.length;
  
  for (const url of testUrls) {
    const success = await testUrl(url);
    if (success) passed++;
  }
  
  console.log(`\n📊 Results: ${passed}/${total} tests passed`);
  
  if (passed === total) {
    console.log('🎉 All routing tests passed! GitHub Pages should work correctly.');
  } else {
    console.log('⚠️  Some tests failed. Check the routing configuration.');
  }
}

runTests().catch(console.error);