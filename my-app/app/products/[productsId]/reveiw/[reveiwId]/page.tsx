
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { reveiwId: string; productsId: string };
}) {
 
  const { reveiwId, productsId } = await params;

  if (parseInt(reveiwId) > 1000) {
    notFound();
  }

  return (
    <div>
      <h1>
        for Review Id {reveiwId} for Product Id {productsId}
      </h1>
    </div>
  );
}
