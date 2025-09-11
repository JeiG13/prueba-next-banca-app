import { IconType } from "react-icons";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { FaPiggyBank } from "react-icons/fa6";
import { LiaMoneyCheckSolid } from "react-icons/lia";
import { MdCompareArrows, MdOutlinePriceCheck, MdOutlineRotateRight, MdSettings, MdViewQuilt } from "react-icons/md";
import { PiMoneyFill } from "react-icons/pi";

export type Route = {
  title: string;
  route: string;
  Icon: IconType;
}

export const sidebarRoutes: Route[] = [
  {
    title: 'Tablero',
    route: '/board',
    Icon: MdViewQuilt,
  },
  {
    title: 'Transferir',
    route: '/transfer',
    Icon: MdCompareArrows,
  },
  {
    title: 'Pagar',
    route: '/',
    Icon: PiMoneyFill,
  },
  {
    title: 'Mis transacciones',
    route: '/my-transactions',
    Icon: AiOutlineUserSwitch,
  },
  {
    title: 'Gestionar',
    route: '/',
    Icon: MdOutlineRotateRight,
  },
  {
    title: 'Cheques',
    route: '/',
    Icon: LiaMoneyCheckSolid,
  },
  {
    title: 'Paganet',
    route: '/',
    Icon: MdOutlinePriceCheck,
  },
  {
    title: 'Administrar',
    route: '/',
    Icon: AiOutlineUserSwitch,
  },
  {
    title: 'Ahorro automático',
    route: '/',
    Icon: FaPiggyBank,
  },
  {
    title: 'Configuración',
    route: '/',
    Icon: MdSettings,
  },
]