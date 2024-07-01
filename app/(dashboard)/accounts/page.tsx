"use client";

import { Plus } from "lucide-react";

import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

import { Payment, columns } from "./columns";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 200,
    status: "success",
    email: "pt@example.com",
  },

  {
    id: "728ed52f",
    amount: 70,
    status: "pending",
    email: "mj@example.com",
  },

  {
    id: "728ed52f",
    amount: 100,
    status: "processing",
    email: "mt@example.com",
  },

  {
    id: "728ed52f",
    amount: 80,
    status: "pending",
    email: "jj@example.com",
  },
];

const AccountsPage = () => {
  const newAccount = useNewAccount();

  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">Accounts Page</CardTitle>
          <Button onClick={newAccount.onOpen}>
            <Plus className="size-4 mr-2" />
            Add New
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            filterKey="email"
            columns={columns}
            data={data}
            onDelete={() => {}}
            disabled={false}
          />
        </CardContent>
      </Card>
    </div>
  );
};
export default AccountsPage;
