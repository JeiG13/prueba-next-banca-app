import { JSX } from "react";
import TableSkeletons from "./skeletons/TableSkeletons";

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  isLoading: boolean;
  areThereItems: boolean;
  noItemsLabel?: string | JSX.Element;
  LoadingComponent?: JSX.Element;
  loadingPadding?: string; // se puede usar como clase de Tailwind, ej: 'p-16'
};

function HandleLoadingState({
  children,
  areThereItems,
  isLoading,
  noItemsLabel = 'No se han encontrado registros',
  loadingPadding = 'p-16',
  LoadingComponent = <TableSkeletons />,
}: Props) {
  return (
    <div className="w-full">
      {isLoading && LoadingComponent}

      {!isLoading && !areThereItems && (
        <div
          className={`w-full flex justify-center items-center ${loadingPadding}`}
        >
          <div className="text-2xl font-bold text-gray-800">
            {noItemsLabel}
          </div>
        </div>
      )}

      {!isLoading && areThereItems && children}
    </div>
  );
}

export default HandleLoadingState;
