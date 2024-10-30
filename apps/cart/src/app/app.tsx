import { Button, Card, CardHeader, CardFooter, Title, Badge } from '@mf-poc/ui';
import { useCartStore } from '@mf-poc/store';
import { TrashIcon } from 'lucide-react';

type CartItem = {
  id: number;
  name: string;
  quantity: number;
};

const CartItem = ({
  item,
  onRemove,
}: {
  item: CartItem;
  onRemove: () => void;
}) => {
  return (
    <Card className="flex justify-between items-center px-4 py-2 my-2">
      <div className="flex items-baseline gap-x-2">
        <span>{item.name}:</span>
        <Badge className="self-start">{item.quantity} items</Badge>
      </div>
      <Button className="self-center" variant="destructive" onClick={onRemove}>
        <TrashIcon />
      </Button>
    </Card>
  );
};

export function App() {
  const { items, removeItem } = useCartStore();

  const groupItemsByProduct = (items: CartItem[]) => {
    return items.reduce((acc, item) => {
      acc[item.id] = (acc[item.id] || 0) + item.quantity;
      return acc;
    }, {} as Record<number, number>);
  };

  return (
    <div>
      <Title>Cart</Title>
      {Object.entries(groupItemsByProduct(items)).map(([id, quantity]) => (
        <CartItem
          onRemove={() => removeItem(Number(id))}
          key={id}
          item={{
            id: Number(id),
            name: items.find((item) => item.id === Number(id))?.name || '',
            quantity,
          }}
        />
      ))}
    </div>
  );
}

export default App;
