import zoid from 'zoid';

const ZoidComponent = zoid.create({

  // The html tag used to render my component

  tag: 'cra-zoid-test',

  // The url that will be loaded in the iframe or popup,
  // when someone includes my component on their page

  url: 'http://localhost:3000/',
  autoResize: {width: true, height: true},
  dimensions: {
    height: '100%',
    width: '100%',
  },
});
