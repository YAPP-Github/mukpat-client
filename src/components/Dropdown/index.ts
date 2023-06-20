'use client';

import Dropdown from './Dropdown';
import DropdownButton from './DropdownButton';
import DropdownToggle from './DropdownToggle';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';

const DropdownRoot = Object.assign(Dropdown, {
	Button: DropdownButton,
	Toggle: DropdownToggle,
	Item: DropdownItem,
	Menu: DropdownMenu,
});

export default DropdownRoot;
export { Dropdown, DropdownButton, DropdownToggle, DropdownItem, DropdownMenu };
