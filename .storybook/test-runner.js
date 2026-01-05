/** @type { import('@storybook/test-runner').TestRunnerConfig } */
const config = {
  // Run tests in parallel
  async: true,

  // Optional: configure browser launch options
  launchOptions: {
    headless: true,
  },

  // Optional: setup/teardown hooks
  async preVisit(page, context) {
    // Called before each story is visited
  },
  async postVisit(page, context) {
    // Called after each story is visited
    // Check for console errors
    const logs = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        logs.push(msg.text());
      }
    });
    
    // Capture any errors after the test
    if (logs.length > 0) {
      console.warn(`Console errors in ${context.id}:`, logs);
    }
  },
};

export default config;

