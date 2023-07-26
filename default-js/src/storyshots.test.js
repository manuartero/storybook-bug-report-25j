/* eslint-disable no-undef */

import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const getMatchOptions = ({ context: { kind, story }, url }) => {
  return {
    failureThreshold: 0.2,
    failureThresholdType: 'percent',
  };
};

initStoryshots({
  framework: 'react',
  suite: 'Image storyshots',
  test: imageSnapshot({
    storybookUrl: process.env.STORYBOOK_URL || 'http://localhost:6006',
    getMatchOptions,
  }),
});
