# je-product-card

Este es un paquete de prueba de despliegue en npm

### Jesus Marenco

## Ejemplo

```
import ProductCard, { ProductButtons,ProductImage, ProductTitle } from 'je-product-card';

```



```
<ProductCard
    product={product}
    key={product.id}
    initialValues={{
        count: 4,
        maxCount: 10,
    }}
    >
    {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
        <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
        </>
    )}
</ProductCard>
```      