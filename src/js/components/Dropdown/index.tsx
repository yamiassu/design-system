// Parts
import DropdownContainer from "./subcomponents/Container"
import DropdownItem from "./subcomponents/Item"

// Interfaces
import DropdownInterface from "./interfaces"

const Dropdown = DropdownContainer as DropdownInterface
Dropdown.Item = DropdownItem

export default Dropdown