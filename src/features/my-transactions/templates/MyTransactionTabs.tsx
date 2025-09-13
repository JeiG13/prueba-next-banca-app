import { ITabItem } from '@/shared/templates/TabsContent';
import TabsContent from '../../../shared/templates/TabsContent';
import MyTransactionsTable from './MyTransactionsTable';

function MyTransactionTabs() {
  const tabs: ITabItem[] = [
    {
      label: 'Movimientos',
      content: (<MyTransactionsTable />)
    },
    {
      label: 'Estado',
      content: (<></>)
    },
    {
      label: 'Detalle',
      content: (<></>)
    },
    {
      label: 'Fondo no disponible',
      content: (<></>)
    },
  ] 
  return (
    <div className="w-full mt-6">
      <TabsContent
        tabs={tabs}
      />
    </div>
  )
}

export default MyTransactionTabs;
