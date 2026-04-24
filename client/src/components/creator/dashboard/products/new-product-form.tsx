"use client";

import { Input } from "@/components/ui/input";
import { apiClient } from "@/lib/api/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function NewProductForm({ formId }: { formId: string }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(100);
  const [loading, setLoading] = useState(false);

  async function onNewProductFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await apiClient.post("/api/creator/products", {
        title,
        price,
      });

      if (res?.data?.ok) {
        router.push("/dashboard/products");
        router.refresh();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form id={formId} onSubmit={onNewProductFormSubmit} className="w-full">
      <section className="p-4 md:p-8">
        <div className="space-y-6">
          <fieldset className="space-y-3">
            <legend>Name</legend>
            <Input
              placeholder="Name of yout digital product"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={loading}
              className="h-10 rounded-none bg-card shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </fieldset>
          <fieldset className="space-y-3">
            <legend>Price</legend>
            <Input
              placeholder="Price of yout digital product"
              value={price}
              type="number"
              min={1}
              onChange={(e) => setPrice(Number(e.target.value))}
              disabled={loading}
              className="h-10 rounded-none bg-card shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </fieldset>
        </div>
      </section>
    </form>
  );
}

export default NewProductForm;
