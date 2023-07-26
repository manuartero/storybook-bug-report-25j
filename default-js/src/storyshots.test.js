import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const getMatchOptions = () => {
  return {
    failureThreshold: 0.2,
    failureThresholdType: 'percent',
  };
};

const beforeScreenshot = () => new Promise((resolve) => setTimeout(resolve, 300));

const getGotoOptions = (_ctx) => ({
  waitUntil: 'domcontentloaded',
});

initStoryshots({
  framework: 'react',
  suite: 'Image storyshots',
  test: imageSnapshot({
    testTimeout: 30000,
    setupTimeout: 30000,
    storybookUrl: process.env.STORYBOOK_URL || 'http://localhost:6006',
    getMatchOptions,
    beforeScreenshot,
    // getGotoOptions,
  }),
});
