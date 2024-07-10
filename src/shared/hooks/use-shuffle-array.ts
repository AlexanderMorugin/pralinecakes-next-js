import { ProductProps } from '../types/types';
import useShuffle from './use-shuffle';

const useShuffleArray = (array: ProductProps[]) => {
  const shuffleArray = useShuffle(array);

  return {
    threeItemsData: shuffleArray.slice(0, 3),
    fourItemsData: shuffleArray.slice(0, 4),
    eightItemsData: shuffleArray.slice(0, 8),
  };
};

export default useShuffleArray;
