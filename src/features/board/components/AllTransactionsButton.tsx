"use client";
import { useRouter } from "next/navigation";

function AllTransactionsButton() {
    const router = useRouter();

    const handleNavigate = () => {
      router.push('/my-transactions');
    };
  return (
    <div>
      <button
        type="button"
        className="font-medium text-sm normal-case cursor-pointer"
        onClick={handleNavigate}
      >
        Ver todas
      </button>
    </div>
  )
}

export default AllTransactionsButton;
