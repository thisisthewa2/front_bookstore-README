const SKELETON_PREVIEW_BOOK_IMAGE_SIZE = {
  desktop: {
    container: 'w-full h-[633px]',
    'colored-background': 'w-full h-273',
    title: 'text-24 top-60',
    'card-section': 'top-93',
  },
  tablet: {
    container: 'tablet:h-[833px]',
    'card-section': 'tablet:top-133',
  },
  mobile: {
    container: 'mobile:h-[268px]',
    'colored-background': 'mobile:h-187',
    title: 'mobile:text-20 mobile:top-40',
    'card-section': 'mobile:top-87',
  },
};

const SKELETON_PREVIEW_BOOK_IMAGE_STYLE = {
  container: `${SKELETON_PREVIEW_BOOK_IMAGE_SIZE.desktop.container} ${SKELETON_PREVIEW_BOOK_IMAGE_SIZE.tablet.container} ${SKELETON_PREVIEW_BOOK_IMAGE_SIZE.mobile.container}`,
  'colored-background': `${SKELETON_PREVIEW_BOOK_IMAGE_SIZE.desktop['colored-background']} ${SKELETON_PREVIEW_BOOK_IMAGE_SIZE.mobile['colored-background']}`,
  title: `${SKELETON_PREVIEW_BOOK_IMAGE_SIZE.desktop.title} ${SKELETON_PREVIEW_BOOK_IMAGE_SIZE.mobile.title}`,
  'card-section': `${SKELETON_PREVIEW_BOOK_IMAGE_SIZE.desktop['card-section']} ${SKELETON_PREVIEW_BOOK_IMAGE_SIZE.tablet['card-section']} ${SKELETON_PREVIEW_BOOK_IMAGE_SIZE.mobile['card-section']}`,
};
