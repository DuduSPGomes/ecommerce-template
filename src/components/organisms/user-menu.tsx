import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

export default function UserMenu() {
  return (
    <Menu>
      <MenuButton as={IconButton} />
      <MenuList>
        <MenuItem>Minha Conta</MenuItem>
        <MenuItem>Histórico de Pedidos</MenuItem>
        <MenuItem>Endereços</MenuItem>
        <MenuItem>Log Out</MenuItem>
      </MenuList>
    </Menu>
  )
}
