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

export default function TablesCards() {
  const accountNumber = faker.finance.accountNumber();
  const amount = faker.finance.amount();
  const ccNumber = faker.finance.creditCardNumber();
  const ccIssuer = faker.finance.creditCardIssuer();
  const ccCvv = faker.finance.creditCardCVV();
  const pin = faker.finance.creditCardCVV();

  return (
    <>
      <div className="flex items-center justify-center">
        <Card className="p-5">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Account Number</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>CC Number</TableHead>
                <TableHead>CC Issuer</TableHead>
                <TableHead>CVV</TableHead>
                <TableHead>Pin</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>{accountNumber}</TableCell>
                <TableCell>{amount}</TableCell>
                <TableCell>{ccNumber}</TableCell>
                <TableCell>{ccIssuer}</TableCell>
                <TableCell>{ccCvv}</TableCell>
                <TableCell>{pin}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </>
  );
}
