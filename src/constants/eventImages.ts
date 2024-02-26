import AdImage from '@/public/images/AdImage.png';
import AdImageCategory from '@/public/images/AdImageCategory.png';
import EventImage1 from '@/public/images/EventImage1.png';
import EventImage2 from '@/public/images/EventImage2.png';
import EventImage3 from '@/public/images/EventImage3.png';
import EventImage4 from '@/public/images/EventImage4.png';
import EventImageMobile1 from '@/public/images/EventImageMobile1.png';
import EventImageMobile2 from '@/public/images/EventImageMobile2.png';
import EventImageMobile3 from '@/public/images/EventImageMobile3.png';
import EventImageMobile4 from '@/public/images/EventImageMobile4.png';

const EVENT_IMAGES = {
  pc: [EventImage1, EventImage2, EventImage3, EventImage4],
  mobile: [
    EventImageMobile1,
    EventImageMobile2,
    EventImageMobile3,
    EventImageMobile4,
  ],
};

const AD_IMAGES = {
  main: AdImage,
  category: AdImageCategory,
};

export { AD_IMAGES, EVENT_IMAGES };
