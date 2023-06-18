import { BoardListItem } from '@/app/home/types';
import { cardWrapper } from './BoardCardList.css';

interface Props {
  boardListItem: BoardListItem;
}

const BoardCard = ({ boardListItem }: Props) => {
  console.log(boardListItem);
  return <li className={cardWrapper}>BoardCard</li>;
};

export default BoardCard;
