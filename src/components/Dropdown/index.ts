'use client';

import Dropdown from './Dropdown';
import DropdownButton from './DropdownButton';
import DropdownToggle from './DropdownToggle';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import DropdownModal from './DropdownModal';

const DropdownRoot = Object.assign(Dropdown, {
  Button: DropdownButton,
  Toggle: DropdownToggle,
  Item: DropdownItem,
  Menu: DropdownMenu,
  Modal: DropdownModal,
});

export default DropdownRoot;
export { Dropdown, DropdownButton, DropdownToggle, DropdownItem, DropdownMenu };
