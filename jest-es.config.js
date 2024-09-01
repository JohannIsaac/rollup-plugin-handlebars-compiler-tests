export default {
    testEnvironment: 'node',
    moduleFileExtensions: ['js'],
    testMatch: [
      '**/tests/es/?(*.)+(spec|test).[jt]s?(x)',
    ],
    testPathIgnorePatterns: [
      'tests/(browser|es|es)/utils/.*?',
    ]
};