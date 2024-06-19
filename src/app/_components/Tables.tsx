"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { faker } from "@faker-js/faker";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TablesCards from "./TablesCards";

export function TableClients() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const personEmail = faker.internet.email();
  const personIp = faker.internet.ip();
  const personFile = faker.system.fileName();

  return (
    <>
      <Tabs>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="accounts">Accounts</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
        </TabsList>
        <TabsContent value="accounts">
          <div className="flex items-center justify-center">
            <Card className="p-5">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>First Name</TableHead>
                    <TableHead>Last Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>IP</TableHead>
                    <TableHead>File</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>{firstName}</TableCell>
                    <TableCell>{lastName}</TableCell>
                    <TableCell>{personEmail}</TableCell>
                    <TableCell>{personIp}</TableCell>
                    <TableCell>{personFile}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="cards">
          <TablesCards />
        </TabsContent>
      </Tabs>
    </>
  );
}
