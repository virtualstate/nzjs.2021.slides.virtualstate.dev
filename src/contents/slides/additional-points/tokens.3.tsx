import { h } from "../../../h";
import { Slide } from '../slide';
import { _702_ExampleInformation } from '@virtualstate/examples';

export const AdditionalTokens3 = (
  <Slide index={2101.3} id="additional-tokens-3">
    <div class="row center">
        <pre class="code">
        {`
<OfferCatalog>
    <Product
      name="Large Order"
      sku="SKU 137"
    >
        <Brand name="Best Brand" />
    </Product>
    <Product
      name="Medium Order"
      sku="SKU 314"
    >
        <Brand name="Best Brand" />
    </Product>
    <Product
      name="Small Order"
      sku="SKU 628"
    >
        <Brand name="Only Smalls" />
    </Product>
</OfferCatalog>
        `.trim()
        }
      </pre>
        <pre>
          {`
<Order
  identifier="1"
  orderDate={new Date()}
>
    <Invoice identifier="314137">
        <PaymentMethod identifier="137590" />
    </Invoice>
    <Product
      sku="SKU 628"
    />
    <DeliveryMethod identifier="137314">
        <Country name="New Zealand" />
    </DeliveryMethod>
</Order>`.trim()}
        </pre>
    </div>
  </Slide>
)
