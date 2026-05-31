import React from "react";
import { Package, Users, DollarSign, ShoppingBag } from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const productsCount = await prisma.product.count();
  const usersCount = await prisma.user.count();
  const ordersCount = await prisma.order.count();

  const stats = [
    { name: "Total Products", value: productsCount.toString(), icon: Package, color: "text-blue-600", bg: "bg-blue-100" },
    { name: "Total Customers", value: usersCount.toString(), icon: Users, color: "text-green-600", bg: "bg-green-100" },
    { name: "Total Orders", value: ordersCount.toString(), icon: ShoppingBag, color: "text-purple-600", bg: "bg-purple-100" },
    { name: "Revenue", value: "$0.00", icon: DollarSign, color: "text-amber-600", bg: "bg-amber-100" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${stat.bg}`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
        <div className="flex items-center justify-center h-48 text-gray-400 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          No recent activity to show yet.
        </div>
      </div>
    </div>
  );
}
