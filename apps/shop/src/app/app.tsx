import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Title,
} from '@mf-poc/ui';
import { useCartStore } from '@mf-poc/store';
const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    description: 'A high-quality product that meets your needs.',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    description: 'An excellent choice for those who value performance.',
  },
];

export function App() {
  const { items, addItem } = useCartStore();
  return (
    <div>
      <Title>Shop</Title>
      <div className="flex flex-wrap gap-4">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="my-2">{product.description}</p>
              <Badge>{product.price}€</Badge>
              <div className="flex justify-between gap-x-4 mt-4">
                <Button
                  onClick={() => {
                    console.log('hola');
                  }}
                  variant="outline"
                >
                  View
                </Button>
                <Button
                  onClick={() => {
                    addItem({
                      id: product.id,
                      name: product.name,
                      quantity: 1,
                    });
                  }}
                >
                  Add to cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
