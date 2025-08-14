import { subscription_tier } from './main.js';

function runTests() {
  // test cases
  // The function return value and type must match expected value
  const tests = [
    { name: 'basic tier', input: 'basic', expected: 1000 },
    { name: 'basic tier', input: 'basic', expected: 1500 }, // will fail
    { name: 'basic tier', input: 'basic', expected: '200' }, // fail also
    { name: 'standard tier', input: 'standard', expected: 2000 },
    { name: 'premium tier', input: 'premium', expected: 3000 },
    { name: 'unknown tier', input: 'unknown', expected: 0 },
    { name: 'null input', input: null, expected: 0 },
    { name: 'undefined input', input: undefined, expected: 0 },
    { name: 'empty string', input: '', expected: 0 },
    { name: 'case sensitivity', input: 'BASIC', expected: 0 },
    { name: 'numeric input', input: 123, expected: 0 },
    { name: 'boolean input', input: true, expected: 0 }
  ];

  let passed = 0;
  let failed = 0;

  console.log('Running subscription_tier tests...\n');

  tests.forEach(test => {
    const result = subscription_tier(test.input);
    if (result === test.expected) {
      console.log(`✅ ${test.name}: PASSED`);
      passed++;
    } else {
      console.log(`❌ ${test.name}: FAILED (expected ${test.expected}, got ${result})`);
      failed++;
    }
  });

  console.log(`\nTest Results: ${passed} passed, ${failed} failed`);
}

runTests();