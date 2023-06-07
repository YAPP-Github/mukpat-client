import { ReactNode } from 'react';
import { item, itemText, itemHighlight, type Selected } from './SegmentedControl.css';
import { motion } from 'framer-motion';

interface Props {
	children: ReactNode;
	value: string;
	layoutId: string;
	isSelected?: Selected;
	onClick: (value: string) => void;
}

const SPRING_TRANSITION = {
	type: 'spring',
	stiffness: 500,
	damping: 30,
};

const SegmentedControlItem = ({ children, value, layoutId, isSelected = false, onClick }: Props) => {
	return (
		<li className={item} onClick={() => onClick(value)}>
			{isSelected && <motion.div layout className={itemHighlight} layoutId={layoutId} transition={SPRING_TRANSITION} />}
			<span className={itemText({ selected: isSelected })}>{children}</span>
		</li>
	);
};

export default SegmentedControlItem;
