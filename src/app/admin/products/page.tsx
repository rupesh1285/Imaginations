import React from "react";
import { prisma } from "@/lib/prisma";
import ProductForm from "./ProductForm";
import { Trash2 } from "lucide-react";
import { deleteProduct } from "@/app/actions/product";

export const dynamic = "force-dynamic";

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({
    include: {
      category: true,
      tags: true,
    },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Products Management</h1>
        <ProductForm />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tags</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 shrink-0 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                        {product.imageUrls && product.imageUrls.length > 0 ? (
                          <img className="h-10 w-10 object-cover" src={product.imageUrls[0]} alt="" />
                        ) : (
                          <div className="h-10 w-10 flex items-center justify-center text-gray-400">No Img</div>
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-500">{product.id.split('-')[0]}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {product.category?.name || "Uncategorized"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${Number(product.price).toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {product.tags.map(tag => (
                        <span key={tag.id} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <form action={async () => {
                      "use server";
                      await deleteProduct(product.id);
                    }}>
                      <button type="submit" className="text-red-600 hover:text-red-900 bg-red-50 p-2 rounded-lg hover:bg-red-100 transition">
                        <Trash2 size={16} />
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                    No products found. Add one to get started!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
