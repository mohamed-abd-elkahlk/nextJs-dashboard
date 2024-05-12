import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';

const page = async () => {
  const customers = await fetchFilteredCustomers('');
  return (
    <div>
      <CustomersTable customers={customers} />
    </div>
  );
};

export default page;
