import NicFlag from '@/shared/assets/flags/FlagNicaragua.png';
import USAFlag from '@/shared/assets/flags/FlagUSA.png';

export function getFlagByCountry(countryCode: string) {
  switch (countryCode) {
    case 'NIC':
      return NicFlag;

    case 'USA':
      return USAFlag;
  
    default:
      return NicFlag;
  }
}