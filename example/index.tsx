import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ProductCard, ProductButtons,ProductImage, ProductTitle } from 'jm-product-card-example';

const product = {
  id:'1',
  title:'Coffee Mug - Card!',
  //img:'./coffee-mug.png'
};

const App = () => {
  return (
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
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
