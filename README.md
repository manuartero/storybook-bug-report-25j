# storybook bug report #23603

## [#23603](https://github.com/storybookjs/storybook/issues/23603)

```
    Upgraded to Storybook 7.1.1.
    Storyshots tests (using @storybook/addon-storyshots-puppeteer) rendering all blank pages for every story.
    Storybook does work as expected (dev build and prod build)
```

```js
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
```

> Check `src/__image_snapshots__`
