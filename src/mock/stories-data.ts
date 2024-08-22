import PtichkaImage from '@/assets/images/stories/ptichie-moloko/story-card-ptichie.jpg';
import MuraveinikImage from '@/assets/images/stories/muraveinik/story-card-muraveinik.jpg';
import {
  META_MURAVEINIK_TITLE,
  META_PTICHKA_TITLE,
} from '@/shared/constants/pages';
import Routes from '@/shared/constants/routes';

export const storyPtichka = {
  image: PtichkaImage,
  title: META_PTICHKA_TITLE,
  text: 'Торт "Птичье Молоко" - один из самых популярных десертов с конца 1970-х годов в СССР. Тогда он был запредельным дефицитом и даже роскошью. Выстраивались огромные очереди в магазины, люди стояли по много часов, чтобы получить заветный торт. И сейчас расскажем с чего все началось.',
  route: Routes.STORY_PTICHKA,
};

export const storyMuraveinik = {
  image: MuraveinikImage,
  title: META_MURAVEINIK_TITLE,
  text: 'Торт состоял из кусочков обычного печенья, смешанного с кремом из сгущенного молока, сливочного масла, сахарной карамели или шоколада. Торт получался вязким, не рыхлым. Его формовали в виде пирамидки и ставили на некоторое время в холодильник. Затем украсив подавали к столу.',
  route: Routes.STORY_MURAVEINIK,
};

export const storiesData = [storyMuraveinik, storyPtichka];
