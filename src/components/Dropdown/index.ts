'use client';

import Dropdown from './Dropdown';
import DropdownButton from './DropdownButton';
import DropdownToggle from './DropdownToggle';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import DropdownModal from './DropdownModal';
import DropdownBottomSheet from './DropdownBottomSheet';

const DropdownRoot = Object.assign(Dropdown || {}, {
  Button: DropdownButton,
  Toggle: DropdownToggle,
  Item: DropdownItem,
  Menu: DropdownMenu,
  Modal: DropdownModal,
  BottomSheet: DropdownBottomSheet,
});

export default DropdownRoot;
export { Dropdown, DropdownButton, DropdownToggle, DropdownItem, DropdownMenu };
