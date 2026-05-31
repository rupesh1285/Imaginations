"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { createProduct } from "@/app/actions/product";

export default function ProductForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const result = await createProduct(formData);

    if (result.success) {
      setIsOpen(false);
    } else {
      setError(result.error || "Something went wrong.");
    }
    setLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-[#D4AF37] text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-[#b0912d] transition"
      >
        <Plus size={18} />
        Add Product
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">Add New Product</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">{error}</div>}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                <input required name="name" type="text" className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#D4AF37] outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tagline</label>
                <input name="tagline" type="text" className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#D4AF37] outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea name="description" rows={3} className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#D4AF37] outline-none"></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                  <input required name="price" type="number" step="0.01" className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#D4AF37] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <input name="category" type="text" placeholder="e.g. Plushies" className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#D4AF37] outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                  <input name="rating" type="number" step="0.1" max="5" min="0" placeholder="e.g. 4.8" className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#D4AF37] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Reviews Count</label>
                  <input name="reviews" type="number" min="0" placeholder="e.g. 120" className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#D4AF37] outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Features (One per line)</label>
                <textarea name="features" rows={3} placeholder="Super soft fabric&#10;Hand-stitched&#10;Washable" className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#D4AF37] outline-none"></textarea>
              </div>

              <div className="flex items-center gap-2">
                <input name="inStock" type="checkbox" id="inStock" defaultChecked className="w-4 h-4 text-[#D4AF37] focus:ring-[#D4AF37] border-gray-300 rounded" />
                <label htmlFor="inStock" className="text-sm font-medium text-gray-700">In Stock</label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tags (Comma separated)</label>
                <input name="tags" type="text" placeholder="e.g. Cute, Blue, Best Seller" className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-[#D4AF37] outline-none" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image Upload (Multiple allowed)</label>
                <input required name="images" type="file" accept="image/*" multiple className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg transition">
                  Cancel
                </button>
                <button type="submit" disabled={loading} className="bg-[#4A232E] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#5C3A46] transition disabled:opacity-50">
                  {loading ? "Saving..." : "Save Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
